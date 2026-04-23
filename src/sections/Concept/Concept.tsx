import './Concept.css';

export function Concept() {
  const conceptItems = [
    'Öffnung des Herzraums',
    'Berührt sein auf mehreren Ebenen',
    'Gefühl von Verbundenheit',
    'Eigene Grenzen erkennen und achten',
    'Achtsames Miteinander',
    'Begegnungen auf Herzebene',
  ];

  return (
    <section className="concept" id="concept">
      <div className="concept-card">
        <h2 className="concept-title">Worum es geht</h2>
        <ul className="concept-list">
          {conceptItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
