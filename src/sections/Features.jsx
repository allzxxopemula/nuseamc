import React from 'react';
import '../css/Features.css';

const Features = () => {
  const featureList = [
    {
      title: "Ocean Bounty",
      desc: "Go beyond standard fishing. Hunt for mythical aquatic creatures, climb the ranking tiers, and trade your rare catches for high-value loot.",
      icon: "https://minecraft.wiki/images/Raw_Cod_JE4_BE2.png"
    },
    {
      title: "Agrarian Empire",
      desc: "Revolutionize your fields with advanced growth mechanics. Cultivate exotic crops that require precision but offer massive economic rewards.",
      icon: "https://minecraft.wiki/images/Sugar_Cane_JE2_BE2.png"
    },
    {
      title: "Elite Infusions",
      desc: "Augment your gear with forbidden magic. Discover powerful enchantment combinations that break the limits of traditional survival gear.",
      icon: "https://minecraft.wiki/images/Enchanted_Book_JE2_BE2.png"
    },
    {
      title: "Warrior's Path",
      desc: "Put your combat prowess to the ultimate test. Enter dedicated arenas for fair, high-stakes duels where only the most skilled survive.",
      icon: "https://minecraft.wiki/images/Netherite_Sword_JE2_BE2.png"
    },
    {
      title: "Automated Industry",
      desc: "Dominate the server economy. Utilize custom spawner systems to build massive resource farms and secure your financial legacy.",
      icon: "data:image/jpeg;base64,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"
    },
    {
      title: "Identity & Style",
      desc: "Make your mark on the world. Unlock exclusive visual effects and unique accessories that set you apart from every other traveler.",
      icon: "https://minecraft.wiki/images/Totem_of_Undying_JE2_BE2.png"
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="features-badge">FEATURES</span>
          <h2 className="features-main-title">
            Explore <span>Nusantara Eather</span>
          </h2>
          <p className="features-subtitle">
            We’ve integrated a suite of custom-engineered mechanics to ensure your journey is <b>dynamic, rewarding, and full of surprises</b>. Discover a new standard of gameplay.
          </p>
          <span className="features-explore-tag">WHAT AWAITS YOU INSIDE?</span>
        </div>

        <div className="features-grid">
          {featureList.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;