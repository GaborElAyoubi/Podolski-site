import type { ContactPayload } from '../../../types/site';

export interface ContactService {
  submit(payload: ContactPayload): Promise<void>;
}

export class MailtoContactService implements ContactService {
  public constructor(private readonly targetEmail: string) {}

  public async submit(payload: ContactPayload): Promise<void> {
    const subject = encodeURIComponent(`Neue Anfrage von ${payload.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `E-Mail: ${payload.email}`,
        '',
        'Nachricht:',
        payload.message,
      ].join('\n'),
    );

    window.location.href = `mailto:${this.targetEmail}?subject=${subject}&body=${body}`;
  }
}
