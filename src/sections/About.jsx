import React, { useState, useEffect } from 'react';
import '../css/About.css';

// Import semua gambar lu di sini Bang
import Img1 from '../assets/bgnusea.png';
import Img2 from '../assets/bgnusea1 (1).png';
import Img3 from '../assets/bgnusea1 (2).png';
import Img4 from '../assets/bgnusea1 (3).png';
import Img5 from '../assets/bgnusea1 (4).png';
import Img6 from '../assets/bgnusea1 (5).png';

const About = () => {
  // Masukin gambar ke dalam Array
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  
  // State untuk ngelacak gambar mana yang lagi aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efek ganti gambar otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Sisi Kiri: Gambar dengan Efek Fade / Slideshow */}
        <div className="about-left">
          <div className="about-img-wrapper">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Nusantara Eather ${index + 1}`} 
                // Tambahin class 'active' kalau indexnya sama dengan gambar yang lagi jalan
                className={`about-img ${index === currentIndex ? 'active' : ''}`} 
              />
            ))}
          </div>
        </div>

        {/* Sisi Kanan: Teks Penjelasan*/}
        <div className="about-right">
          <span className="about-subtitle">ABOUT OUR SERVER</span>
          <h2 className="about-title">
            Welcome to <span>Nusantara Eather</span>
          </h2>
          
          <div className="about-content">
            <p>
              Nusantara Eather is a premium Minecraft Survival Multiplayer (SMP) server 
              created with the goal of connecting players in a fun, supportive, and healthy community. 
              Built on high-performance hardware to ensure a smooth, lag-free experience for everyone.
            </p>
            
            <p>
              Whether you're a casual adventurer, a competitive builder, or someone who just wants to 
              hang out and meet new friends, Nusantara Eather offers a welcoming space to play Minecraft 
              your way. We focus on fair play and a friendly atmosphere.
            </p>
            
            <p>
              Our server features regular community events, exciting survival gameplay, and opportunities 
              to showcase your creativity. Every player is part of the family here, and we're excited to 
              have you join our growing community.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;