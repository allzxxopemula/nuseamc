import React, { useState, useRef } from 'react';
import '../css/Hero.css';
import MainLogo from '../assets/nusealogo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  const javaIP = "nusea.raznar.net";
  const bedrockIP = "nusea.raznar.net";
  const bedrockPort = "25048";

  // --- ANIMASI KEDATANGAN DENGAN DELAY ---
  useGSAP(() => {
    const tl = gsap.timeline({ 
      delay: 2.7, 
      defaults: { ease: "power4.out" } 
    });

    // 1. Logo jatuh dari atas dengan efek membal (bounce)
    tl.fromTo(logoRef.current, 
      { y: -10, opacity: 0, scale: 0.5 }, 
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "bounce.out" }
    );

    // 2. Judul muncul (teks naik dikit)
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.8"
    );

    // 3. Deskripsi muncul halus
    tl.fromTo(descRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.6"
    );

    // 4. Tombol muncul barengan (stagger)
    tl.fromTo(".hero-buttons button", 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)" }, 
      "-=0.5"
    );

    // 5. Efek floating halus buat logo
    gsap.to(logoRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3.5 
    });
  }, { scope: heroRef });

  const copyToClipboard = (text, type) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopyStatus(type);
        setTimeout(() => setCopyStatus(""), 2000);
      });
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopyStatus(type);
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" ref={heroRef}>
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <img 
          src={MainLogo} 
          alt="Logo" 
          className="hero-main-logo" 
          ref={logoRef} 
        />
        
        <h1 className="hero-title" ref={titleRef}>
          Welcome to <span>Nusantara Aether</span>
        </h1>
        
        <p className="hero-description" ref={descRef}>
          Unleash your ultimate potential in a world without limits. Build your legacy at <b>nusea.raznar.net</b>
        </p>

        <div className="hero-buttons" ref={buttonRef}>
          <button className="btn-play-now" onClick={() => setIsModalOpen(true)}>Play Now</button>
          <button className="btn-outline" onClick={scrollToFeatures}>Features</button>
          <button className="btn-outline" onClick={() => setIsRulesOpen(true)}>Rules</button>
        </div>
      </div>

      {/* MODAL JOIN */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content animate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2 className="modal-title">Join Our Server</h2>
            <p className="modal-subtitle">Choose your edition and start playing!</p>
            <div className="ip-card-container">
              <div className="ip-card">
                <span className="edition-label">Java Edition</span>
                <div className="ip-box">
                  <code>{javaIP}</code>
                  <button onClick={() => copyToClipboard(javaIP, 'java')}>
                    {copyStatus === 'java' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="ip-card">
                <span className="edition-label">Bedrock Edition</span>
                <div className="ip-box">
                  <code>{bedrockIP}:{bedrockPort}</code>
                  <button onClick={() => copyToClipboard(`${bedrockIP}:${bedrockPort}`, 'bedrock')}>
                    {copyStatus === 'bedrock' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL RULES */}
      {isRulesOpen && (
        <div className="modal-overlay" onClick={() => setIsRulesOpen(false)}>
          <div className="modal-content rules-modal animate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal dark" onClick={() => setIsRulesOpen(false)}>&times;</button>
            <h2 className="rules-title">Server Rules</h2>
            <div className="rules-list">
              <div className="rule-item"><span>1.</span> No Griefing or Stealing.</div>
              <div className="rule-item"><span>2.</span> No Cheating, X-Ray, or Hacking.</div>
              <div className="rule-item"><span>3.</span> Respect all players & staff.</div>
              <div className="rule-item"><span>4.</span> No Chat Spamming or Toxicity.</div>
              <div className="rule-item"><span>5.</span> Do not exploit server bugs.</div>
            </div>
            <button className="btn-understand" onClick={() => setIsRulesOpen(false)}>I Understand</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;