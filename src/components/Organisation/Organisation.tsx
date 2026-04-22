import './Organisation.css';

export function Organisation() {
  return (
    <section className="organisation" id="anmelden">
      <div className="organisation-card">
        <h2 className="organisation-title">Ich freue mich auf deine Nachricht.</h2>
        <p className="organisation-text">
          Da die Anzahl Teilnehmer:innen beschränkt ist, bitte ich dich um eine
          kurze verbindliche Anmeldung.
        </p>

        <form className="organisation-form" action="mailto:" method="post">
          <label className="organisation-field">
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>

          <label className="organisation-field">
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label className="organisation-field">
            <span>Kurznachricht</span>
            <textarea name="note" rows={5} required />
          </label>

          <button className="organisation-button" type="submit">
            Anmelden
          </button>
        </form>
      </div>
    </section>
  );
}
