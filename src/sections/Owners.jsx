import React from 'react';
import '../css/Owners.css';

const Owners = () => {
  const ownerData = [
    {
      name: "Fariz",
      role: "FOUNDER & SERVER OWNER",
      img: "https://mc-heads.net/avatar/.LAxRizz/180", 
      desc: "Fariz is the heart and vision behind Nusantara Aether. What started as a simple hobby quickly grew into a thriving community. His goal was never to build the biggest server, but the most genuine — a place where fairness, fun, and friendship come first."
    },
    {
      name: "Azdaiz",
      role: "CO-OWNER & COMMUNITY MANAGER",
      img: "https://mc-heads.net/avatar/Azdaiz/180",
      desc: "Every strong community needs a caring guide, and that's where Azdaiz shines. As Co-Owner, he helps new players feel at home, keeps the staff team organized, and ensures the server is always a safe, welcoming space for everyone."
    }
  ];

  return (
    <section className="owners-section" id="owners">
      <div className="owners-container">
        
        {/* HEADER DENGAN BADGE */}
        <div className="owners-header">
          <span className="owners-badge">THE VISIONARIES</span>
          <h2 className="owners-title-main">Meet Our <span>Owners</span></h2>
        </div>

        <div className="owners-content">
          {ownerData.map((owner, index) => (
            <div className="owner-card" key={index}>
              <div className="owner-image">
                <img src={owner.img} alt={owner.name} />
              </div>
              <div className="owner-info">
                <h2 className="owner-name">
                  <span>{owner.name}</span>
                </h2>
                <span className="owner-role">{owner.role}</span>
                <div className="owner-desc">
                  <p>{owner.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Owners;