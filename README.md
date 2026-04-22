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

### Formular später anpassen
Aktuell ist die Empfängeradresse in `src/content/siteContent.ts` zentral konfiguriert. Solange sie leer ist, bleibt der Submit-Button deaktiviert.

Später kannst du die Anmeldung leicht umstellen auf:
- Formspree
- Render Web Service API
- Supabase Edge Function
- eigenes Backend

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

## Build

```bash
npm run build
```

## Render Deploy

- Repo auf GitHub pushen
- In Render: New + > Static Site
- Repo verbinden
- Build Command: `npm run build`
- Publish Directory: `dist`
