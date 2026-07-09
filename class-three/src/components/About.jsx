import React from 'react';

export default function About() {
  const team = [
    {
      name: "Elena Rostova",
      role: "Lead Architect",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Marcus Chen",
      role: "Interior Designer",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sophia Rossi",
      role: "Art Curator",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div>
      <div className="page-container">
        <div className="split-screen">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" 
            alt="Studio interior" 
          />
          <div>
            <h2>Our Philosophy</h2>
            <p>
              At Aura, we believe that true luxury lies in simplicity. We craft 
              environments that are not just visually stunning, but profoundly serene.
            </p>
            <br />
            <p>
              We use natural textures, soft light, and beautiful furniture to build
              the perfect modern home. Our process is highly collaborative, ensuring 
              your space reflects your unique lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="page-container" style={{ paddingTop: '0' }}>
        <h2 className="section-title">Meet The Team</h2>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card text-center" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p style={{ color: '#5a5a5a' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}