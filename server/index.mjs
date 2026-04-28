import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const port = Number(process.env.PORT ?? 3000);
const distDir = resolve('dist');
const maxRequestBodyBytes = 20_000;
const rateLimitWindowMs = 60_000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map();

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(payload));
}

function getClientIp(request) {
  const forwardedFor = request.headers['x-forwarded-for'];

  if (typeof forwardedFor === 'string') {
    return forwardedFor.split(',')[0]?.trim() ?? 'unknown';
  }

  return request.socket.remoteAddress ?? 'unknown';
}

function isRateLimited(clientIp) {
  const now = Date.now();
  const entry = rateLimitStore.get(clientIp);

  if (!entry || now - entry.startedAt > rateLimitWindowMs) {
    rateLimitStore.set(clientIp, { count: 1, startedAt: now });
    return false;
  }

  entry.count += 1;
  return entry.count > rateLimitMaxRequests;
}

function readRequestBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = '';

    request.setEncoding('utf8');

    request.on('data', (chunk) => {
      body += chunk;

      if (Buffer.byteLength(body, 'utf8') > maxRequestBodyBytes) {
        rejectBody(new Error('request_body_too_large'));
        request.destroy();
      }
    });

    request.on('end', () => resolveBody(body));
    request.on('error', rejectBody);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactPayload(payload) {
  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const preferredDate = String(payload.preferredDate ?? '').trim();
  const note = String(payload.note ?? '').trim();
  const website = String(payload.website ?? '').trim();

  if (website) {
    return { ok: true, spam: true };
  }

  if (!name || !email || !preferredDate || !note) {
    return { ok: false, error: 'Bitte fülle alle Felder aus.' };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: 'Bitte gib eine gültige E-Mail-Adresse ein.' };
  }

  return {
    ok: true,
    data: { name, email, preferredDate, note },
  };
}

async function sendContactEmail({ name, email, preferredDate, note }) {
  const apiKey = process.env.RESEND_API_KEY;
  const mailTo = process.env.MAIL_TO;
  const mailFrom = process.env.MAIL_FROM;

  if (!apiKey || !mailTo || !mailFrom) {
    throw new Error('missing_mail_configuration');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: mailFrom,
      to: [mailTo],
      reply_to: email,
      subject: 'Neue Anmeldung ueber die Website',
      text: [
        'Neue Anmeldung ueber die Website',
        '',
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Wunschdatum: ${preferredDate}`,
        '',
        'Kurznachricht:',
        note,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`mail_provider_error:${response.status}:${errorText}`);
  }
}

async function handleContactRequest(request, response) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { message: 'Method not allowed' });
    return;
  }

  if (isRateLimited(getClientIp(request))) {
    sendJson(response, 429, {
      message: 'Bitte versuche es in einer Minute nochmals.',
    });
    return;
  }

  try {
    const rawBody = await readRequestBody(request);
    const payload = JSON.parse(rawBody);
    const validation = validateContactPayload(payload);

    if (!validation.ok) {
      sendJson(response, 400, { message: validation.error });
      return;
    }

    if (validation.spam) {
      sendJson(response, 200, { message: 'Danke für deine Nachricht.' });
      return;
    }

    await sendContactEmail(validation.data);
    sendJson(response, 200, {
      message: 'Danke für deine Anmeldung. Ich melde mich bald bei dir.',
    });
  } catch (error) {
    console.error(error);
    sendJson(response, 500, {
      message: 'Die Anmeldung konnte nicht gesendet werden.',
    });
  }
}

async function serveStaticFile(request, response) {
  const requestUrl = new URL(request.url ?? '/', `http://${request.headers.host}`);
  const requestedPath = decodeURIComponent(requestUrl.pathname);
  const normalizedPath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = join(distDir, normalizedPath === '/' ? 'index.html' : normalizedPath);

  if (!filePath.startsWith(distDir)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const fileStat = await stat(filePath);

    if (!fileStat.isFile()) {
      throw new Error('not_a_file');
    }

    response.writeHead(200, {
      'content-type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    createReadStream(filePath).pipe(response);
  } catch {
    const indexHtml = await readFile(join(distDir, 'index.html'), 'utf8');
    response.writeHead(200, { 'content-type': mimeTypes['.html'] });
    response.end(indexHtml);
  }
}

const server = createServer(async (request, response) => {
  if (request.url?.startsWith('/api/contact')) {
    await handleContactRequest(request, response);
    return;
  }

  await serveStaticFile(request, response);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
