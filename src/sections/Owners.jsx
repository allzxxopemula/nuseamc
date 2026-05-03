import React from 'react';
import '../css/Owners.css';

const Owners = () => {
const ownerData = [
    {
      name: "Azdaiz",
      role: "SERVER OWNER",
      img: "https://mc-heads.net/avatar/AZDAIZz/64",
      desc: "As the Owner of Nusantara Aether, Azdaiz is the primary force behind the server's growth. He ensures everything runs smoothly, manages the big picture, and makes sure every player has the best experience possible in the world of Aether."
    },
    {
      name: "Fariz",
      role: "FOUNDER & CO-OWNER",
      img: "https://mc-heads.net/avatar/.LAxRizz/180", 
      desc: "Fariz is the original visionary and Founder of the community. Now serving as Co-Owner, he continues to guide the server's heart and soul, ensuring that the initial vision of fairness and friendship remains at the core of Nusantara Aether."
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