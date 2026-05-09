import React from 'react';
import '../css/Crates.css';

const Crates = () => {
const crateData = [
  {
    name: "Vote Crate",
    stars: "Common",
    icon: "https://minecraft.wiki/images/Invicon_Lime_Shulker_Box.png",
    color: "#59ff4f",
    items: [
      "Vote Armor",
      "Tools",
      "Golden Apples",
      "Vote Keys"
    ]
  },

  {
    name: "Crimson Crate",
    stars: "Legendary",
    icon: "https://minecraft.wiki/images/Invicon_Red_Shulker_Box.png",
    color: "#ff2e2e",
    items: [
      "Crimson Armor",
      "Tools",
      "Netherite Scraps",
      "Custom Enchant Book",
      "Spawner Fragment"
    ]
  },

  {
    name: "Nusea Crate",
    stars: "Special",
    icon: "https://minecraft.wiki/images/Invicon_Orange_Shulker_Box.png",
    color: "#ffb347",
    items: [
      "Nusea Armor",
      "Tools",
      "XP Bottles",
      "Exclusive Tags",
      "Custom Enchant Book"
    ]
  },

  {
    name: "Nebula Crate",
    stars: "Rare",
    icon: "https://minecraft.wiki/images/Invicon_Light_Blue_Shulker_Box.png",
    color: "#5bc0ff",
    items: [
      "Nebula Armor",
      "Tools",
      "Elytra",
      "Nebula Wings",
      "Custom Enchant Book"
    ]
  },

  {
    name: "Poker Crate",
    stars: "Epic",
    icon: "https://minecraft.wiki/images/Invicon_Purple_Shulker_Box.png",
    color: "#b84dff",
    items: [
      "Poker Armor",
      "Tools",
      "Jackpot Coins",
      "Dice Particles",
      "Custom Enchant Book"
    ]
  }
];

  return (
    <section className="crates-section" id="crates">
      <div className="crates-container">
        <div className="crates-header">
          <span className="crate-badge">LOOT BOXES</span>
          <h2 className="crates-title">Server <span>Mystery Crates</span></h2>
          <p className="crates-subtitle">
            Test your luck and win amazing rewards! Open these mystery boxes to get exclusive items and power-ups.
          </p>
        </div>

        <div className="crates-grid">
          {crateData.map((crate, index) => (
            <div className="crate-card" key={index} style={{"--crate-clr": crate.color}}>
              <div className="crate-icon-box">
                <img src={crate.icon} alt={crate.name} />
              </div>
              <div className="crate-info-box">
                <span className="crate-rarity">{crate.stars}</span>
                <h3 className="crate-name">{crate.name}</h3>
              </div>
              <ul className="crate-list">
                {crate.items.map((item, i) => (
                  <li key={i}><i className="fa-solid fa-check"></i> {item}</li>
                ))}
              </ul>
              <div className="crate-footer">
                Potential Rewards
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crates;