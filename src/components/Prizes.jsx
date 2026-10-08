export default function Prizes() {
  return (
    <section id="prizes">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">04 — Prizes</span>
          <h2>Rewarding <em>excellence</em></h2>
        </div>

        <div className="prizes">
          <article className="prize rv">
            <span className="label">Second</span>
            <h3>Runner-up</h3>
            <span className="prize-amt gold-text">[₹XX,000]</span>
            <p className="muted">Per event · trophy &amp; certificate</p>
          </article>

          <article className="prize win rv">
            <span className="label">First</span>
            <h3>Winner</h3>
            <span className="prize-amt gold-text">[₹XX,000]</span>
            <p className="muted">Per event · trophy, certificate &amp; goodies</p>
          </article>

          <article className="prize rv">
            <span className="label">Honours</span>
            <h3>Special Mentions</h3>
            <span className="prize-amt gold-text">[₹X,000]</span>
            <p className="muted">Jury picks · certificate of merit</p>
          </article>
        </div>

        <p className="prize-note rv">
          <em>Certificates of participation for every registered participant.</em>
        </p>
      </div>
    </section>
  );
}
