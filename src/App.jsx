import { useState, useEffect } from 'react';
import { useReveal } from './hooks';

import Preloader from './components/Preloader';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Events    from './components/Events';
import Schedule  from './components/Schedule';
import Prizes    from './components/Prizes';
import Partners  from './components/Partners';
import Team      from './components/Team';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

function IntroSequence({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 5000); // Intro duration (adjust if video is longer/shorter)
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="intro-seq">
      <div className="intro-video-wrapper">
        <video
          autoPlay
          muted
          playsInline
        >
          <source src="/hero-bg-2.mp4?v=2" type="video/mp4" />
        </video>
        
        {/* Animated scanning lines over the video for tech effect */}
        <div className="intro-scanlines"></div>
      </div>

      <button className="skip-intro-btn" onClick={onComplete} style={{ zIndex: 10, bottom: '6vh', right: '6vw' }}>Skip Intro</button>
    </div>
  );
}

export default function App() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Theme ── */
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('visit-theme') || 'dark'; } catch { return 'dark'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('visit-theme', theme); } catch { /* */ }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  /* ── Preloader ── */
  const [loaded, setLoaded] = useState(false);
  const [introFinished, setIntroFinished] = useState(false); // Track if intro video is done

  useEffect(() => {
    const delay = reduce ? 0 : 2200;
    const t = setTimeout(() => {
      const pl = document.querySelector('.preloader');
      if (pl) pl.classList.add('done');
      if (reduce) setIntroFinished(true); // Skip intro video if reduced motion
      setLoaded(true);
    }, delay);
    return () => clearTimeout(t);
  }, [reduce]);

  // Remove loading class from body only when intro is also finished
  useEffect(() => {
    if (loaded && introFinished) {
      document.body.classList.remove('loading');
    }
  }, [loaded, introFinished]);

  /* ── Global hooks ── */
  useReveal();

  return (
    <>
      {/* Decorative overlays */}
      <a className="skip" href="#main">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />

      <Preloader />

      {/* Intro Sequence */}
      {loaded && !introFinished && (
        <IntroSequence onComplete={() => setIntroFinished(true)} />
      )}

      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main id="main" style={{ opacity: introFinished ? 1 : 0, transition: 'opacity 1s ease' }}>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Prizes />
        <Partners />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
