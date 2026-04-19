"use client";

import { useEffect, useState } from "react";
import "./Header.css";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "visible" : ""}`}>
        <div className="site-header-inner">
          <span>Berührung</span>
          <nav>
            <a href="#about">About</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={`hero ${scrolled ? "hero-small" : ""}`}>
          <div className="hero-center">
            <h1>Berührung</h1>
            <p>Text hier</p>
          </div>
        </section>

        <section className="content">
          <h2 id="about">About</h2>
          <p>Mehr Inhalt ...</p>
          <div style={{ height: "150vh" }} />
        </section>
      </main>
    </>
  );
}