import { EVENTS } from '../data';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">01 — About</span>
        </div>
        <div className="grid12">
          <blockquote className="about-quote rv">
            Three days where curiosity becomes <em>craft</em>, and ideas are tested against the <em>clock</em>.
          </blockquote>
          <div className="about-copy rv">
            <p>
              VISIT is the annual technical fest of the Department of Artificial Intelligence &amp; Machine
              Learning at Vignan's Foundation for Science, Technology & Research — a gathering of builders, researchers and competitors
              from across the region.
            </p>
            <p>
              An incredible array of {EVENTS.length} events spanning literary, cultural, technical, and sports competitions.
              Every round is designed to reward clear thinking, talent, and innovation over noise.
            </p>
          </div>
        </div>

        <div className="stats rv" role="list">
          <div className="stat" role="listitem">
            <span className="stat-num gold-text">
              <span data-count="500">0</span>+
            </span>
            <span className="label">Participants</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat-num gold-text">
              <span data-count={EVENTS.length}>0</span>
            </span>
            <span className="label">Events</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat-num gold-text">
              ₹<span data-count="50000" data-fmt="in">0</span>
            </span>
            <span className="label">Prize Pool</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat-num gold-text">
              <span data-count="1250">0</span>+
            </span>
            <span className="label">Total Registrations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
