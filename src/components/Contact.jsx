export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">07 — Contact</span>
          <h2>Get in <em>touch</em></h2>
        </div>

        <div className="contact-grid">
          <div className="rv">
            <div className="people">
              <div className="person">
                <span className="label">Faculty Coordinator</span>
                <h4>[Dr. Name]</h4>
                <a href="tel:+910000000000">[+91 00000 00000]</a>
              </div>
              <div className="person">
                <span className="label">Faculty Coordinator</span>
                <h4>[Prof. Name]</h4>
                <a href="tel:+910000000000">[+91 00000 00000]</a>
              </div>
              <div className="person">
                <span className="label">Student Coordinator</span>
                <h4>[Student Name]</h4>
                <a href="tel:+910000000000">[+91 00000 00000]</a>
              </div>
              <div className="person">
                <span className="label">Student Coordinator</span>
                <h4>[Student Name]</h4>
                <a href="tel:+910000000000">[+91 00000 00000]</a>
              </div>
            </div>

            <div className="socials">
              <a className="icon-btn" href="[instagram-url]" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".6" />
                </svg>
              </a>
              <a className="icon-btn" href="[linkedin-url]" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                </svg>
              </a>
              <a className="icon-btn" href="[whatsapp-url]" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24">
                  <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" />
                </svg>
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
