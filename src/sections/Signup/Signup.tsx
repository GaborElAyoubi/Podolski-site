import { Button } from '@/components/Button/Button';
import { FormField } from '@/components/FormField/FormField';
import { getSignupMailtoHref } from '@/content/siteContent';
import './Signup.css';

export function Signup() {
  const signupMailtoHref = getSignupMailtoHref();

  return (
    <section className="signup" id="anmelden">
      <div className="signup-card">
        <h2 className="signup-title">Ich freue mich auf deine Nachricht.</h2>
        <p className="signup-text">
          Da die Anzahl Teilnehmer:innen beschränkt ist, bitte ich dich um eine
          kurze verbindliche Anmeldung.
        </p>

        <form
          className="signup-form"
          action={signupMailtoHref}
          method="post"
          onSubmit={(event) => {
            if (!signupMailtoHref) {
              event.preventDefault();
            }
          }}
        >
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
            kind="textarea"
            label="Kurznachricht"
            name="note"
            rows={5}
            required
          />

          <Button type="submit" disabled={!signupMailtoHref}>
            Anmelden
          </Button>
        </form>
      </div>
    </section>
  );
}
