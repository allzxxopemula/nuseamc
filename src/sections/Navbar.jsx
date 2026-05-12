import React, { useState, useRef, useEffect } from 'react';
import '../css/Navbar.css';
import NuseaFont from '../assets/nuseafont.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const isAnimating = useRef(false); // Kunci biar gak rewel

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // --- 1. ANIMASI KEDATANGAN ---
  useGSAP(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 2.2, ease: "power4.out" }
    );
  }, []);

  // --- 2. LOGIKA SCROLL ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = navRef.current;

      if (!navbar || isAnimating.current) return;

      // A. AUTO-CLOSE: Langsung tutup menu pas scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // B. HIDE/SHOW LOGIC
      // Tambahin threshold (10px) biar gak terlalu sensitif
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 10) {
        // Balikin ke posisi 0 kalau di paling atas banget
        gsap.to(navbar, { yPercent: 0, duration: 0.3, ease: "power2.out", overwrite: true });
      } else if (diff > 5 && currentScrollY > 100) {
        // Scroll Bawah: Naik lebih jauh (-150)
        gsap.to(navbar, { 
          yPercent: -150, 
          duration: 0.4, 
          ease: "power2.inOut", 
          overwrite: true 
        });
      } else if (diff < -5) {
        // Scroll Atas: Munculin lagi
        gsap.to(navbar, { 
          yPercent: 0, 
          duration: 0.4, 
          ease: "power2.out", 
          overwrite: true 
        });
      }

      // C. EFEK GLASSMORPHISM
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]); 

  return (
    <section className="navbar-section" ref={navRef}>
      <div className="container nav-container">
        <div className="nav-brand">
          <img src={NuseaFont} alt="Nusantara Eather" className="nav-logo-font" />
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#owners" onClick={closeMenu}>Owners</a></li>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
          <li><a href="#team" onClick={closeMenu}>Team</a></li>
          <li><a href="#ranks" onClick={closeMenu}>Ranks</a></li>
        </ul>

        <div className="nav-action">
          <a href="https://chat.whatsapp.com/EcWdA8dgXZP2cUQgjiDzQX" className="btn-play-with-us">
            Play with us
          </a>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;