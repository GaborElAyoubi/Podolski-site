import { useState, type FormEvent } from 'react';
import { Button } from '@/components/Button/Button';
import { FormField } from '@/components/FormField/FormField';
import { siteContent } from '@/content/siteContent';
import './Signup.css';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const provisionalDates = [
  {
    label: '1. Juli',
    value: '2026-07-01',
  },
  {
    label: '19. August',
    value: '2026-08-19',
  },
  {
    label: '16. September',
    value: '2026-09-16',
  },
  {
    label: '7. Oktober',
    value: '2026-10-07',
  },
  {
    label: '4. November',
    value: '2026-11-04',
  },
  {
    label: '2. Dezember',
    value: '2026-12-02',
  },
];

export function Signup() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const [preferredDate, setPreferredDate] = useState(today);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('submitting');
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(siteContent.signup.endpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          preferredDate: formData.get('preferredDate'),
          note: formData.get('note'),
          website: formData.get('website'),
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'Die Nachricht konnte nicht gesendet werden.');
      }

      form.reset();
      setPreferredDate(today);
      setSubmitStatus('success');
      setStatusMessage(payload.message ?? 'Danke für deine Nachricht.');
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Die Nachricht konnte nicht gesendet werden.',
      );
    }
  };

  return (
    <section className="signup" id="anmelden">
      <div className="signup-card">
        <h2 className="signup-title">Ich freue mich auf deine Nachricht.</h2>
        <p className="signup-text">
          Da die Anzahl Teilnehmer:innen beschränkt ist, bitte ich dich um eine
          kurze verbindliche Anmeldung.
        </p>

        <dl className="signup-details">
          <div>
            <dt>Zeit</dt>
            <dd>19 - 21 Uhr</dd>
          </div>
          <div>
            <dt>Ort</dt>
            <dd>Schloss Arbon, erste Tür rechts nach Haupteingang</dd>
          </div>
          <div>
            <dt>Prov. Daten</dt>
            <dd>
              <label className="signup-date-select-label">
                <span>Provisorisches Datum wählen</span>
                <select
                  className="signup-date-select"
                  value={preferredDate}
                  onChange={(event) => setPreferredDate(event.target.value)}
                >
                  <option value={today}>Bitte wählen</option>
                  {provisionalDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </label>
            </dd>
          </div>
        </dl>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >
          <input
            className="signup-honeypot"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
          <FormField
            kind="input"
            label="Name"
            name="name"
            autoComplete="name"
            required
          />
          <FormField
            kind="input"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <FormField
            kind="input"
            label="Wunschdatum"
            name="preferredDate"
            type="date"
            lang="de-CH"
            min={today}
            value={preferredDate}
            onChange={(event) => setPreferredDate(event.target.value)}
          />
          <FormField
            kind="textarea"
            label="Kurznachricht"
            name="note"
            rows={3}
            required
          />

          <Button type="submit" disabled={submitStatus === 'submitting'}>
            {submitStatus === 'submitting' ? 'Wird gesendet...' : 'Anmelden'}
          </Button>

          {statusMessage && (
            <p
              className={`signup-status signup-status-${submitStatus}`}
              role={submitStatus === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
