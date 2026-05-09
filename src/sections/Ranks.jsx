import React, { useState } from 'react';
import '../css/Ranks.css';
import QrisImage from '../assets/qr.png';

const Ranks = () => {
  // State untuk mengontrol Modal
  const [selectedRank, setSelectedRank] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

const rankData = [
  {
    name: "Zenith",
    price: "10.000",
    stars: "⭐",
    icon: "https://minecraft.wiki/images/Lapis_Lazuli_JE2_BE2.png",
    color: "#2980b9",
    perks: [
      "Custom Prefix",
      "Redprotect BlockLimit 0/10000",
      "Redprotect ClaimLimit 0/10",
      "Sethome Limit 0/10",
      "Vault 0/1",
      "Unlock /vault, /craft, /grindstone"
    ]
  },
  {
    name: "Zephyr",
    price: "20.000",
    stars: "⭐⭐",
    icon: "https://minecraft.wiki/images/Invicon_Nether_Quartz.png?897dd",
    color: "#7f8c8d",
    perks: [
      "Custom Prefix",
      "Redprotect BlockLimit 0/20000",
      "Redprotect ClaimLimit 0/20",
      "Sethome Limit 0/20",
      "Vault 0/2",
      "Unlock previous rank features",
      "Unlock /anvil, /feed"
    ]
  },
  {
    name: "Nythera",
    price: "30.000",
    stars: "⭐⭐⭐",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItGyD9ebGIR7MCJM7CmoCVaKczHlzCtrY0A&s",
    color: "#f39c12",
    perks: [
      "Custom Prefix & Names",
      "Redprotect BlockLimit 0/30000",
      "Redprotect ClaimLimit 0/30",
      "Sethome Limit 0/30",
      "Vault 0/3",
      "Shop discount 2%",
      "Unlock previous rank features",
      "Unlock /repair, /heal, /enderchest, /fly"
    ]
  },
  {
    name: "Eclipse",
    price: "40.000",
    stars: "⭐⭐⭐⭐",
    icon: "https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png",
    color: "#800000",
    perks: [
      "Custom Prefix & Names",
      "Custom Chat color By default",
      "Redprotect BlockLimit 0/40000",
      "Redprotect ClaimLimit 0/40",
      "Vault 0/4",
      "Shop discount 5%",
      "Unlock previous rank features",
      "Unlock /repair (Enchanted Item)",
      "Unlock /nick, /pweather, /ptime, /fly"
    ]
  },
  {
    name: "Obscyra",
    price: "50.000",
    stars: "⭐⭐⭐⭐⭐",
    icon: "https://minecraft.wiki/images/Invicon_Heart_of_the_Sea.png?2df63",
    color: "#00ced1",
    perks: [
      "Custom Prefix & Names",
      "Custom Chat color By Default",
      "Redprotect BlockLimit 0/50000",
      "Redprotect ClaimLimit 0/50",
      "Vault 0/5",
      "Shop discount 10%",
      "Unlock previous rank features",
      "Unlock /hat, /skull, /fly"
    ]
  }
];

  // Fungsi untuk buka modal
  const handleOpenModal = (rank) => {
    setSelectedRank(rank);
    setIsModalOpen(true);
  };

  // Fungsi untuk tutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRank(null), 300); // Nunggu animasi selesai baru hapus data
  };

  // Fungsi Lanjutkan (Buka WA setelah dapet info)
  const handleProceed = () => {
    if (!selectedRank) return;
    const message = encodeURIComponent(`Halo Admin, Aku sudah melakukan pembayaran melalui QR dan mau konfirmasi pembayaran untuk rank ${selectedRank.name} di server Nusea MC. Mohon verifikasinya. [sertakan foto bukti pembayaran]`);
    window.open(`https://wa.me/6285731238127?text=${message}`, '_blank');
    handleCloseModal();
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
            <div className="rank-card" key={index} style={{ "--rank-clr": rank.color }}>
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
              <button className="rank-btn" onClick={() => handleOpenModal(rank)}>
                Buy {rank.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
{isModalOpen && (
  <div className="modal-overlay-rank" onClick={handleCloseModal}>
    <div className="modal-overlay-rank-container" onClick={(e) => e.stopPropagation()}>
      <div className="modal-overlay-rank-grid">
        
        {/* Left Side: QR Code */}
        <div className="modal-overlay-rank-qr-section">
          <div className="qr-wrapper">
            <img src={QrisImage} alt="QRIS Payment" className="qr-image" />
          </div>
          <p className="qr-text">Scan the QRIS code to pay</p>
        </div>

        {/* Right Side: Purchase Info */}
        <div className="modal-overlay-rank-info-section">
          <h3 className="modal-overlay-rank-title">Purchase Confirmation</h3>
          
          <div className="modal-overlay-rank-summary">
            <p>You are purchasing the rank:</p>
            <h2 style={{ color: selectedRank?.color }}>{selectedRank?.name}</h2>
            <p className="modal-overlay-rank-price">
              Total Payment: <span>Rp {selectedRank?.price}</span>
            </p>
          </div>

          <p className="modal-overlay-rank-instruction">
            Please complete the payment using the QR code on the left (or above), then send the payment proof photo through WhatsApp by clicking the Continue Confirmation button.
          </p>

          <div className="modal-overlay-rank-security-note">
            <i>🔒</i>
            <p>
              After the payment is completed, your transaction will be reviewed by the admin before your order is processed.
            </p>
          </div>

          <div className="modal-overlay-rank-actions">
            <button className="btn-cancel" onClick={handleCloseModal}>
              Cancel
            </button>

            <button
              className="btn-proceed"
              onClick={handleProceed}
              style={{ backgroundColor: selectedRank?.color || '#111' }}
            >
              Continue Confirmation
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Ranks;