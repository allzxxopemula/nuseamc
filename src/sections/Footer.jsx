import React from 'react';
import '../css/Footer.css';
import FooterLogo from '../assets/nusealogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-grid">
          
          {/* Kolom 1: Brand Info */}
          <div className="footer-column brand-info">
            <img src={FooterLogo} alt="Nusantara Eather" className="footer-logo" />
            <p className="footer-about">
              Nusantara Eather is a premium Minecraft server providing a limitless survival experience for both Java and Bedrock players.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#keys">Store</a></li>
              <li><a href="#home">Server Rules</a></li>
            </ul>
          </div>

          {/* Kolom 3: Social Media */}
          <div className="footer-column">
            <h4 className="footer-title">Community</h4>
            <ul className="footer-links">
              <li><a href="https://discord.gg/-" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a href="https://www.tiktok.com/@aethernusantra.id" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href="https://www.instagram.com/nusea.serverminecraft.id?igsh=MWsxZjdleHlsazhxMA==" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/JDRlDYx8HXoKAXnZFlbdPW" target="_blank" rel="noreferrer">Whatsapp Group</a></li>
            </ul>
          </div>

          {/* Kolom 4: Server Status Short */}
          <div className="footer-column">
            <h4 className="footer-title">Play Now</h4>
            <div className="footer-status">
              <span className="status-dot"></span>
              <p>IP: play.nusea.my.id</p>
            </div>
            <p className="footer-support">Need help? Contact our staff on Discord.</p>
          </div>

        </div>

        <div className="footer-bottom">
          <hr className="footer-divider" />
          <div className="footer-copyright">
            <p>&copy; {currentYear} <span>Nusantara Eather</span>. All rights reserved | By <a href="allzxxosite.vercel.app" target="_blank" rel="noreferrer">Allzxxo Dev</a></p>
            <p className="dev-credit">Designed for Nusantara Community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;