import React, { useState, useEffect } from 'react';
import '../css/Team.css';

// Import 3 gambar screenshot baru dari assets
import TeamImg1 from '../assets/team1.png'; 
import TeamImg2 from '../assets/team2.png';
import TeamImg3 from '../assets/team3.png';

const Team = () => {
  const teamMembers = [
    { name: "Fariz", role: "CO-Owner", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/MHF_Steve/64" },
    { name: "Azdaiz", role: "Owner", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/AZDAIZz/64" },
    { name: "Evin", role: "Admin", color: "#00569c", skin: "https://mc-heads.net/avatar/MHF_Villager/64" },
    { name: "Galng", role: "Builder", color: "#ff9900", skin: "https://mc-heads.net/avatar/MHF_OakLog/64" },
    { name: "Allzxxo", role: "Admin", color: "#00569c", skin: "https://mc-heads.net/avatar/MHF_Enderman/64" },
    { name: "Sanderlay", role: "Helper", color: "#4ade80", skin: "https://mc-heads.net/avatar/Sanderlay12/64" },
    { name: "Senno14", role: "Admin", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/Senno14/64" },
    { name: "SkyHoupDaff", role: "Admin", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/SkyHoupDaff/64" },
    { name: "depon", role: "Admin", color: "#ff4d4d", skin: "https://mc-heads.net/avatar/depon319/64" },
    { name: "Mell", role: "Donatur", color: "#f43f5e", skin: "https://mc-heads.net/avatar/Mell/64" },
  ];

  // Array kumpulan gambar untuk slideshow banner
  const bannerImages = [TeamImg1, TeamImg2, TeamImg3];
  const [currentImg, setCurrentImg] = useState(0);

  // Efek interval ganti gambar tiap 3 detik (biar transisi opacity 1 detik kerasa pas)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // 3000ms = 3 detik berganti
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // PAKAI TRIPLE LIST biar sambungannya gak putus di tengah jalan
  const fullList = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <div className="team-header">
          <span className="team-badge">TEAM</span>
          
          {/* Wrapper banner diubah posisinya ke absolute bertumpuk */}
          <div className="team-banner-wrapper">
            {bannerImages.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Team Banner ${index + 1}`} 
                className={`team-banner-img ${index === currentImg ? 'active' : ''}`} 
              />
            ))}
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