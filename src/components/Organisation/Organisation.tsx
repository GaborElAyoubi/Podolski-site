import './Organisation.css';

export function Organisation() {
  const bringItems = [
    'Matte (brauchen wir zum Liegen)',
    'Sitzkissen (einige vorhanden)',
    'Eine Decke',
    'Bequeme Kleidung nach Schichtprinzip',
    'Trinkflasche',
  ];

  const infoItems = [
    'Bitte komm frisch geduscht und unparfümiert',
    'Es gibt vor Ort die Möglichkeit zu duschen',
    'Wir bleiben immer gekleidet',
    'Bitte erscheine pünktlich, da wir die Aussentür nach Beginn schliessen werden',
    'Türöffnung 30min vor Beginn',
  ];

  return (
    <section className="organisation" id="organisation">
      <div className="organisation-card">
        <h2 className="organisation-title">Organisatorisches</h2>

        <h3 className="organisation-subtitle">Mitnehmen</h3>
        <ul className="organisation-list">
          {bringItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="organisation-subtitle">Weitere Infos</h3>
        <ul className="organisation-list">
          {infoItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="organisation-subtitle">Anmeldung</h3>
        <p className="organisation-text">
          Da die Anzahl Teilnehmer:innen beschränkt ist, bitte ich dich um eine
          verbindliche Anmeldung.
        </p>
      </div>
    </section>
  );
}
