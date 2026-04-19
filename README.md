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
  app/                    # App-Komposition
  components/ui/          # Wiederverwendbare UI-Bausteine
  content/                # Inhalt / Content-Daten
  features/contact/       # Feature-spezifische Logik
  styles/                 # Globale Styles
  types/                  # Zentrale Typen
```

## Erweiterungsideen

### Formular später anpassen
Aktuell wird `mailto:` über ein Service-Interface verwendet.

Später kannst du in `src/features/contact/services/contactService.ts` leicht umstellen auf:
- Formspree
- Render Web Service API
- Supabase Edge Function
- eigenes Backend

### Inhalte pflegen
Aktuell kommen die Inhalte aus `src/content/siteContent.ts`.

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

