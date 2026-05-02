import React, { useState, useRef, useEffect } from 'react';
import './css/index.css'; 

// Import Sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Owners from './sections/Owners';
import Team from './sections/Team';
import Ranks from './sections/Ranks';
import Faq from './sections/Faq';
import LiveStats from './sections/LiveStats';
import Excellence from './sections/Excellence';
import Events from './sections/Events';
import Socials from './sections/Socials';
import CrateKeys from './sections/CrateKeys';
import Footer from './sections/Footer';

// Import GSAP & Assets
import MainLogo from './assets/nusealogo.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// --- IMPORT AOS ---
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  // 1. INISIALISASI AOS
  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: false, // INI KUNCINYA: Biar scroll up/down animasi tetep jalan
      mirror: true, // Biar pas scroll ke atas elemennya bisa animasi balik
      offset: 120,
    });
  }, []);

  // 2. REFRESH AOS SAAT INTRO SELESAI
  useEffect(() => {
    if (showContent) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [showContent]);

  // 3. LOGIKA INTRO GSAP
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(logoRef.current, { opacity: 0, scale: 0 });

    tl.to(logoRef.current, { 
      opacity: 1, 
      scale: 1, 
      duration: 0.8, 
      ease: "back.out(1.7)" 
    });

    tl.to({}, { duration: 0.5 }); 

    tl.to(preloaderRef.current, { 
      opacity: 0, 
      duration: 0.5, 
      ease: "power2.out",
      onStart: () => setShowContent(true) 
    });

    tl.to(logoRef.current, { 
      opacity: 0, 
      scale: 1, 
      y: -100,
      duration: 0.5, 
      ease: "power1.in" 
    }, "+=0.3");

    tl.to(containerRef.current, { display: "none" });

  }, []);

  return (
    <>
      {/* --- WRAPPER INTRO --- */}
      <div ref={containerRef} style={containerStyle}>
        <div ref={preloaderRef} style={preloaderBgStyle}></div>
        <img 
          src={MainLogo} 
          alt="Nusea Logo" 
          ref={logoRef} 
          style={logoStyle} 
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div style={{ 
        opacity: showContent ? 1 : 0, 
        transition: 'opacity 1s ease',
        visibility: showContent ? 'visible' : 'hidden'
      }}>
        <Navbar />
        <Hero />
        <About />
        <LiveStats />
        <Owners />
        <Features />
        <Team />
        <Ranks />
        <CrateKeys />
        <Excellence />
        <Events />
        <Faq />
        <Socials />
        <Footer />
      </div>
    </>
  );
}

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99999,
  pointerEvents: 'none',
};

const preloaderBgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  zIndex: 1,
};

const logoStyle = {
  position: 'relative',
  width: '200px',
  height: 'auto',
  zIndex: 2,
};

export default App;