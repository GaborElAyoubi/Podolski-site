import { Button } from '../../components/Button/Button';
import { FormField } from '../../components/FormField/FormField';
import './Signup.css';

export function Signup() {
  return (
    <section className="signup" id="anmelden">
      <div className="signup-card">
        <h2 className="signup-title">Ich freue mich auf deine Nachricht.</h2>
        <p className="signup-text">
          Da die Anzahl Teilnehmer:innen beschränkt ist, bitte ich dich um eine
          kurze verbindliche Anmeldung.
        </p>

        <form className="signup-form" action="mailto:" method="post">
          <FormField label="Name" name="name" autoComplete="name" required />
          <FormField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <FormField label="Kurznachricht" name="note" rows={5} required />

          <Button type="submit">Anmelden</Button>
        </form>
      </div>
    </section>
  );
}
