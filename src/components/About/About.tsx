import "./About.css";

export function About() {
  const aboutItems = [
    'Öffnung des Herzraums',
    'Berührt sein auf mehreren Ebenen',
    'Gefühl von Verbundenheit',
    'Eigene Grenzen erkennen und achten',
    'Achtsames Miteinander',
    'Begegnungen auf Herzebene',
  ];

  return (
    <section className="about" id="about">
      <div className="about-card">
        <p className="about-eyebrow">About</p>
        <h2 className="about-title">Worum es geht:</h2>
        <ul className="about-list">
          {aboutItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
