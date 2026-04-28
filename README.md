# Clean Service Website

Eine kleine, sauber strukturierte React + TypeScript Website für Render.

## Stack

- Vite
- React
- TypeScript
- Normales CSS

## Warum dieser Stack?

- Schnell und einfach für eine erste Version
- Sehr gut für statische Deployments auf Render
- Saubere Erweiterbarkeit für späteres CMS oder Backend
- TypeScript gibt Struktur, ohne direkt schwer zu werden

## Architektur

```text
src/
  components/             # Wiederverwendbare UI-Bausteine
  content/                # Inhalt / Content-Daten
  hooks/                  # Wiederverwendbare React-Hooks
  pages/                  # Seiten
  routing/                # Hash-Routing
  sections/               # Startseiten-Abschnitte
  styles/                 # Globale Styles
```

## Erweiterungsideen

### Signup-Formular konfigurieren
Das Formular sendet an `/api/contact`. Der Node-Server in `server/index.mjs` validiert `name`, `email`, `preferredDate` und `note` und verschickt die Anmeldung ueber Resend.

Für Render als Web Service brauchst du diese Environment Variables:

```text
RESEND_API_KEY=...
MAIL_FROM=Beruehrung <onboarding@resend.dev>
MAIL_TO=deine-adresse@example.com
```

Siehe auch `.env.example`.

Sobald du eine eigene Absenderdomain bei Resend verifiziert hast, ersetzt du `MAIL_FROM` durch eine Adresse deiner Domain.

Ablauf:

- Nutzer:in fuellt das Formular im Frontend aus
- React sendet die Daten per `fetch` an `/api/contact`
- Der Node-Server prueft Eingaben, Honeypot und Rate-Limit
- Resend verschickt die Anmeldung an `MAIL_TO`

### Inhalte pflegen
Geteilte Inhalte wie Brand, Navigation und Formular-Konfiguration kommen aus `src/content/siteContent.ts`.

Später kannst du diese Datenquelle ersetzen durch:
- JSON-Dateien
- Headless CMS
- kleine Admin-API
- Datenbank

## Lokal starten

```bash
npm install
npm run dev
```

Der Produktionsserver wird nach einem Build gestartet:

```bash
npm run build
npm run start
```

## Build

```bash
npm run build
```

## Render Deploy

- Repo auf GitHub pushen
- In Render: New + > Web Service
- Repo verbinden
- Build Command: `npm run build`
- Start Command: `npm run start`
- Environment Variables in Render setzen: `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_TO`
