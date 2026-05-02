import React from 'react';
import '../css/Ranks.css';

const Ranks = () => {
const rankData = [
  {
    name: "Zenith",
    price: "10.000",
    stars: "⭐", // Bintang 1
    icon: "https://minecraft.wiki/images/Lapis_Lazuli_JE2_BE2.png", // Lapis Lazuli (Biru)
    color: "#2980b9", // Biru
    perks: ["Custom Prefix", "3x Homes", "Access to /feed", "Weekly Kits"]
  },
  {
    name: "Zephyr",
    price: "20.000",
    stars: "⭐⭐", // Bintang 2
    icon: "data:image/jpeg;base64,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", // Amethyst (Ungu Pink)
    color: "#d442f5", // Ungu Pink
    perks: ["Bronze Prefix", "5x Homes", "Access to /condense", "Special Kit"]
  },
  {
    name: "Nythera",
    price: "30.000",
    stars: "⭐⭐⭐", // Bintang 3
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItGyD9ebGIR7MCJM7CmoCVaKczHlzCtrY0A&s", // Raw Gold (Oren Kuning)
    color: "#f39c12", // Oren Kuning
    perks: ["Silver Prefix", "10x Homes", "Access to /fly", "Epic Crates"]
  },
  {
    name: "Eclipse",
    price: "40.000",
    stars: "⭐⭐⭐⭐", // Bintang 4
    icon: "https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png", // Redstone (Merah Maroon)
    color: "#800000", // Merah Maroon
    perks: ["Golden Prefix", "Unlimited Homes", "Priority Queue", "Particles"]
  },
  {
    name: "Obscyra",
    price: "50.000",
    stars: "⭐⭐⭐⭐⭐", // Bintang 5
    icon: "data:image/jpeg;base64,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", // Heart of the Sea (Biru Kuning/Cyan)
    color: "#00ced1", // Biru Kuning (Turquoise)
    perks: ["GOD Prefix", "All Perks Above", "Custom Title", "Staff Support"]
  }
];

  const handleBuy = (rankName) => {
    const message = encodeURIComponent(`Halo Admin, Aku mau beli rank ${rankName} di server Nusea MC`);
    window.open(`https://wa.me/6285731238127?text=${message}`, '_blank');
  };

  return (
    <section className="ranks-section" id="ranks">
      <div className="ranks-container">
        <div className="ranks-header">
          <span className="rank-badge">RANKS</span>
          <h2 className="ranks-title">Server <span>Elite Ranks</span></h2>
          <p className="ranks-subtitle">
            Upgrade your status and unlock exclusive power-ups. Choose your tier and dominate the server!
          </p>
        </div>

        <div className="ranks-grid">
          {rankData.map((rank, index) => (
            <div className="rank-card" key={index} style={{"--rank-clr": rank.color}}>
              <div className="rank-icon-box">
                <img src={rank.icon} alt={rank.name} />
              </div>
              <div className="rank-name-box">
                <span className="rank-stars">{rank.stars}</span>
                <h3 className="rank-name">{rank.name}</h3>
                <p className="rank-price">Rp {rank.price}/month</p>
              </div>
              <ul className="rank-list">
                {rank.perks.map((perk, i) => (
                  <li key={i}>{perk}</li>
                ))}
              </ul>
              <button className="rank-btn" onClick={() => handleBuy(rank.name)}>
                Buy {rank.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ranks;