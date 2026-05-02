import React from 'react';
import '../css/CrateKeys.css';

const CrateKeys = () => {

  const phoneNumber = "6285731238127"; 

  const keysData = [
    {
      name: "Common Key",
      priceInfo: "Rp 2.000 / Get 5 Keys",
      desc: "Starter rewards for every player."
    },
    {
      name: "Rare Key",
      priceInfo: "Rp 4.000 / Get 5 Keys",
      desc: "Goodies and basic equipment."
    },
    {
      name: "Epic Key",
      priceInfo: "Rp 8.000 / Get 5 Keys",
      desc: "Powerful enchantments & items."
    },
    {
      name: "Legendary Key",
      priceInfo: "Rp 16.000 / Get 5 Keys",
      desc: "The ultimate mythical rewards!"
    }
  ];

  const handleBuyClick = (keyName) => {
    const message = `Halo Admin, Aku mau beli ${keyName} di server Nusea MC`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka tab baru ke WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="keys-section" id="keys">
      <div className="keys-container">
        <div className="keys-header">
          <span className="keys-badge">STORE</span>
          <h2 className="keys-title">Crate <span>Keys</span></h2>
          <p className="keys-subtitle">Unlock amazing rewards and boost your survival journey!</p>
        </div>

        <div className="keys-grid">
          {keysData.map((key, index) => (
            <div className="key-card" key={index}>
              <div className="key-content">
                <h4>{key.name}</h4>
                <p className="key-price-info">{key.priceInfo}</p>
                <p className="key-desc">{key.desc}</p>
              </div>
              {/* Button diubah panggil fungsi handleBuyClick */}
              <button 
                onClick={() => handleBuyClick(key.name)} 
                className="btn-buy-key"
              >
                Buy {key.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrateKeys;