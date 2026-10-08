import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  return (
    <>
      <footer>
        <div className="foot-word" aria-hidden="true">VISIT 2K27</div>
        <div className="container foot-row">
          <ul className="foot-links">
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <p>© 2027 Department of AIML, Vignan's Foundation for Science, Technology & Research</p>
          <p>Crafted by [Your Team]</p>
        </div>
      </footer>

      <button
        className={`icon-btn to-top${showTop ? ' show' : ''}`}
        id="toTop"
        aria-label="Back to top"
        onClick={toTop}
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}
