import React, { useState } from 'react';
import '../css/Faq.css';

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

const faqData = [
    {
      id: 1,
      question: "Is the server optimized for low-end PCs?",
      answer: "Absolutely. We use high-performance engines like 'Pufferfish' and 'Starlight' to ensure a lag-free experience. For the best results, we recommend using the Sodium or Fabulously Optimized modpack.",
    },
    {
      id: 2,
      question: "How does the Land Claim system work?",
      answer: "We use RedProtect for land security. To claim your area, simply surround your building with any type of Fence (pagar) and place a Sign (papan tanda) on one of the fence posts. The system will automatically protect everything inside the perimeter.",
    },
    {
      id: 3,
      question: "What happens if I lose my items to a bug?",
      answer: "While we strive for stability, accidents happen. You can file a compensation claim in our Discord 'Support-Ticket' channel with valid proof such as screenshots or recordings.",
    },
    {
      id: 4,
      question: "Does Nusea MC have a custom economy?",
      answer: "Yes, we feature a player-driven economy. You can set up your own shops at /warp market, trade with others using /trade, or use the global Auction House via /ah.",
    },
    {
      id: 5,
      question: "Are there any prohibited client-side mods?",
      answer: "We strictly forbid X-ray, Auto-clickers, and Fly hacks. Quality-of-life mods like Minimaps (without entity radar) and Armor Status are perfectly fine.",
    },
    {
      id: 6,
      question: "How can I support the server development?",
      answer: "You can support us by purchasing Ranks or Crate Keys from our official store. All proceeds go directly to server maintenance and custom plugin development.",
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title">
            General <span>Technical FAQ</span>
          </h2>
          <p className="faq-subtitle">
            Find quick answers to technical questions, server mechanics, and community guidelines.
          </p>
        </div>

        <div className="faq-grid">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-card ${openId === faq.id ? 'active' : ''}`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;