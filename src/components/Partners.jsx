export default function Partners() {
  return (
    <section className="partners" aria-label="Partners">
      <div className="container">
        <span className="label rv">Partners &amp; Sponsors</span>
        <div className="logos rv" id="logos">
          {[1, 2, 3, 4, 5, 6].map(p => (
            <div key={p} className="logo" role="img" aria-label={`[Partner ${p} logo]`}>
              <svg viewBox="0 0 110 36" fill="none" stroke="currentColor">
                <rect x=".5" y="8.5" width="19" height="19" rx="2" />
                <text
                  x="28" y="23"
                  fill="currentColor"
                  stroke="none"
                  fontFamily="Manrope"
                  fontSize="11"
                  letterSpacing="2"
                >
                  PARTNER {p}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
