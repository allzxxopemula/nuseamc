import React from 'react';
import '../css/Socials.css';
import { FaDiscord, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Socials = () => {
const socialLinks = [
    {
      name: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.gg/yourlink",
      color: "#5865F2",
      desc: "Join our community hub"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://chat.whatsapp.com/JDRlDYx8HXoKAXnZFlbdPW",
      color: "#25D366",
      desc: "Get instant updates"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/nusea.serverminecraft.id?igsh=MWsxZjdleHlsazhxMA==",
      color: "#E1306C",
      desc: "Check our stories"
    },
    {
      name: "TikTok", // SUDAH DIGANTI
      icon: <FaTiktok />, // JANGAN LUPA IMPORT INI BANG
      link: "https://www.tiktok.com/@aethernusantra.id", // Ganti sama link tiktok lu bang
      color: "#000000",
      desc: "Watch epic short clips"
    }
  ];

  return (
    <section className="socials-section" id="socials">
      <div className="socials-container">
        <div className="socials-header">
          <span className="socials-badge">COMMUNITY</span>
          <h2 className="socials-title">Follow <span>Our Socials</span></h2>
          <p className="socials-subtitle">Be part of our growing community and never miss an update!</p>
        </div>

        <div className="socials-grid">
          {socialLinks.map((social, index) => (
            <a 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card" 
              key={index}
              style={{ "--social-theme": social.color }}
            >
              <div className="social-icon">
                {social.icon}
              </div>
              <div className="social-text">
                <h4>{social.name}</h4>
                <p>{social.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;