import React from 'react';
import '../css/Crates.css';

const Crates = () => {
const crateData = [
  {
    name: "Vote Crate",
    stars: "Common",
    // Icon: Green Shulker Box
    icon: "https://minecraft.wiki/images/Invicon_Lime_Shulker_Box.png",
    color: "#7ed6df", // Ijo Mint/Light
    items: ["Common Tools", "Iron Ingots", "Golden Apples", "Vote Keys"]
  },
  {
    name: "Crimson Crate",
    stars: "Legendary",
    // Icon: Red Shulker Box
    icon: "https://minecraft.wiki/images/Invicon_Red_Shulker_Box.png",
    color: "#cf1212", // Merah
    items: ["Netherite Scraps", "Power IV Bow", "Crimson Armor", "Spawner Fragments"]
  },
    {
    name: "Nusea Crate",
    stars: "Special",
    // Icon: Orange Shulker Box
    icon: "https://minecraft.wiki/images/Invicon_Orange_Shulker_Box.png",
    color: "#e67e22", // Oren
    items: ["Diamond Gear", "Enchanted Books", "XP Bottles", "Exclusive Tags"]
  },
  {
    name: "Nebula Crate",
    stars: "Rare",
    // Icon: Light Blue Shulker Box
    icon: "https://minecraft.wiki/images/Invicon_Light_Blue_Shulker_Box.png",
    color: "#3498db", // Biru Light
    items: ["Elytra", "Nebula Wings", "Sharpness V Book", "Ultimate Key"]
  },
  {
    name: "Poker Crate",
    stars: "Epic",
    // Icon: Purple Shulker Box
    icon: "https://minecraft.wiki/images/Invicon_Purple_Shulker_Box.png",
    color: "#9b59b6", // Ungu
    items: ["Jackpot Coins", "Casino Access", "Dice Particles", "Gambler Title"]
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