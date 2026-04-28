import { useState, type FormEvent } from 'react';
import { Button } from '@/components/Button/Button';
import { FormField } from '@/components/FormField/FormField';
import { siteContent } from '@/content/siteContent';
import './Signup.css';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Signup() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const { signup } = siteContent;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('submitting');
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(signup.endpoint, {
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
      setPreferredDate('');
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
    <section className="signup section-shell" id="anmelden">
      <div className="signup-card section-stack">
        <h2 className="signup-title section-title">{signup.title}</h2>
        <p className="signup-text">{signup.text}</p>

        <dl className="signup-details">
          <div>
            <dt>{signup.details.timeLabel}</dt>
            <dd>{signup.details.timeValue}</dd>
          </div>
          <div>
            <dt>{signup.details.locationLabel}</dt>
            <dd>{signup.details.locationValue}</dd>
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
            label={signup.fields.nameLabel}
            name="name"
            autoComplete="name"
            required
          />
          <FormField
            kind="input"
            label={signup.fields.emailLabel}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <label className="form-field">
            <span>{signup.fields.preferredDateLabel}</span>
            <select
              className="signup-date-select"
              name="preferredDate"
              value={preferredDate}
              onChange={(event) => setPreferredDate(event.target.value)}
              required
            >
              <option value="">{signup.details.datesPlaceholder}</option>
              {signup.details.options.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </select>
          </label>
          <FormField
            kind="textarea"
            label={signup.fields.noteLabel}
            name="note"
            rows={3}
            required
          />

          <Button type="submit" disabled={submitStatus === 'submitting'}>
            {submitStatus === 'submitting' ? signup.fields.submittingLabel : signup.fields.submitLabel}
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
