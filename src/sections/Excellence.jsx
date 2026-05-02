import React, { useRef } from 'react';
import '../css/Excellence.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Excellence = () => {
  const mainRef = useRef(null);

  const excellenceData = [
    { icon: "fa-solid fa-up-down-left-right", title: "Universal Access", desc: "Connect seamlessly whether you're on Java (PC) or Bedrock (PE/Console)." },
    { icon: "fa-solid fa-shield-halved", title: "Grief Protection", desc: "Claim your territory and build without fear. Your hard work is safe with us." },
    { icon: "fa-solid fa-chart-line", title: "Player Economy", desc: "Dynamic market system. Trade, set up shops, and become the richest player." },
    { icon: "fa-solid fa-gem", title: "Premium Ranks", desc: "Support the server and get cool prefixes, kits, and exclusive abilities." },
    { icon: "fa-solid fa-microchip", title: "Top-Tier Hardware", desc: "Running on high-end NVMe SSDs and fast CPUs for a zero-lag experience." },
    { icon: "fa-solid fa-users-gear", title: "Professional Care", desc: "Experienced staff members ensuring a fair and toxic-free environment." }
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "bottom bottom",
          end: "+=1500", 
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Pake fromTo biar PASTI muncul dari opacity 0 ke 1
      tl.fromTo(".excel-card", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
      );
    });

  }, { scope: mainRef });

  return (
    <section className="excel-section" ref={mainRef} id="excellence">
      <div className="excel-container">
        <div className="excel-header">
          <span className="excel-badge">OUR SUPERIORITY</span>
          <h2 className="excel-title">Why <span>NUSEA</span> is Your Best Choice</h2>
          <p className="excel-desc">
            We don't just host a server; we build a home for the community.
          </p>
        </div>

        <div className="excel-grid">
          {excellenceData.map((item, index) => (
            <div className="excel-card" key={index}>
              <div className="excel-icon">
                <i className={item.icon}></i>
              </div>
              <div className="excel-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;