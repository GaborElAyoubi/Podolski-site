import { FormEvent, useMemo, useState } from 'react';
import { MailtoContactService } from '../services/contactService';
import type { ContactPayload } from '../../../types/site';

interface ContactFormProps {
  targetEmail: string;
}

const initialFormState: ContactPayload = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm({ targetEmail }: ContactFormProps) {
  const [formState, setFormState] = useState<ContactPayload>(initialFormState);
  const [error, setError] = useState<string>('');

  const contactService = useMemo(() => new MailtoContactService(targetEmail), [targetEmail]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Bitte fülle alle Felder aus.');
      return;
    }

    try {
      await contactService.submit(formState);
    } catch {
      setError('Die Anfrage konnte nicht geöffnet werden. Bitte versuche es erneut.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label className="field">
        <span>Name</span>
        <input
          type="text"
          value={formState.name}
          onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
          placeholder="Max Mustermann"
        />
      </label>

      <label className="field">
        <span>E-Mail</span>
        <input
          type="email"
          value={formState.email}
          onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
          placeholder="max@example.com"
        />
      </label>

      <label className="field">
        <span>Nachricht</span>
        <textarea
          rows={6}
          value={formState.message}
          onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
          placeholder="Worum geht es?"
        />
      </label>

      {error ? <p className="form-error">{error}</p> : null}

      <button className="button button-primary" type="submit">
        Anfrage per Mail vorbereiten
      </button>
    </form>
  );
}
