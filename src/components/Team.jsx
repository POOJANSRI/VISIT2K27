export default function Team() {
  const teamMembers = [
    { name: 'Faculty Name', role: 'Faculty Coordinator', img: 'https://api.dicebear.com/7.x/initials/svg?seed=FN' },
    { name: 'Student Name', role: 'Lead Organizer', img: 'https://api.dicebear.com/7.x/initials/svg?seed=SN' },
    { name: 'Your Name', role: 'Lead Developer', img: 'https://api.dicebear.com/7.x/initials/svg?seed=YN' },
    { name: 'Core Member', role: 'Technical Head', img: 'https://api.dicebear.com/7.x/initials/svg?seed=CM' },
  ];

  return (
    <section id="team">
      <div className="container">
        <div className="sec-head rv">
          <span className="label">06 — Team</span>
          <h2>Crafted by <em>visionaries</em></h2>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card rv" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <h4 className="gold-text">{member.name}</h4>
              <p className="muted" style={{ fontSize: '14px', marginTop: '4px' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
