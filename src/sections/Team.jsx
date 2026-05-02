import React from 'react';
import '../css/Team.css';
import TeamBanner from '../assets/team.png';

const Team = () => {
  const teamMembers = [
    { name: "Fariz", role: "CO-Owner", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/MHF_Steve/64" },
    { name: "Azdaiz", role: "Owner", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/MHF_Alex/64" },
    { name: "Evin", role: "Admin", color: "#ffb800", skin: "https://mc-heads.net/avatar/MHF_Villager/64" },
    { name: "Galng", role: "Admin", color: "#ffb800", skin: "https://mc-heads.net/avatar/MHF_OakLog/64" },
    { name: "Alfian", role: "Mod", color: "#00569c", skin: "https://mc-heads.net/avatar/MHF_Enderman/64" },
    { name: "Sanderlay", role: "Helper", color: "#4ade80", skin: "https://mc-heads.net/avatar/MHF_Creeper/64" },
  ];

  // PAKAI TRIPLE LIST biar sambungannya gak putus di tengah jalan
  const fullList = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <div className="team-header">
          <span className="team-badge">TEAM</span>
          <div className="team-banner-wrapper">
            <img src={TeamBanner} alt="Team Banner" className="team-banner-img" />
          </div>
          <h2 className="team-title">NUSEA <span>TEAM</span></h2>
          <p className="team-subtitle">
            Behind every great adventure on our server is a dedicated group of individuals working tirelessly to ensure the best possible experience. <b>NUSEA TEAM</b> consists of passionate creators, moderators, and developers.
          </p>
        </div>

        <div className="team-marquee-wrapper">
          <div className="team-marquee-content">
            {fullList.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="member-head">
                  <img src={member.skin} alt={member.name} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <span 
                  className="member-role-badge" 
                  style={{ 
                    backgroundColor: `${member.color}15`, 
                    color: member.color, 
                    border: `1px solid ${member.color}40` 
                  }}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;