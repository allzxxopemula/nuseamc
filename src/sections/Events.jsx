import React from 'react';
import '../css/Events.css';

const Events = () => {
const eventData = [
    {
      title: "PVP Tournament",
      status: "Ended",
      date: "May 8, 2026",
      desc: "PVP Battle: Winner Takes All! Win the Sword, Walk Away with the Cash.",
      icon: "https://minecraft.wiki/images/Diamond_Sword_JE3_BE3.png",
      color: "#ff4d4d"
    },
    {
      title: "Parkour Race",
      status: "Upcoming", 
      date: "May ??, 2026",
      desc: "Reach the top of Sky Tower. Special crate keys for winners!",
      icon: "https://minecraft.wiki/images/Golden_Boots_JE2_BE2.png",
      color: "#4ade80"
    },
    {
      title: "Vote Party",
      status: "Upcoming",
      date: "May ??, 2026",
      desc: "Reach 500 votes together to trigger a massive drop party!",
      icon: "https://minecraft.wiki/images/Cake_JE4.png",
      color: "#3b82f6"
    },
    {
      title: "Build Contest",
      status: "Upcoming",
      date: "May ??, 2026",
      desc: "Medieval Kingdom theme. Winners at /warp gallery.",
      icon: "https://minecraft.wiki/images/Oak_Planks_JE6_BE3.png",
      color: "#6b7280"
    }
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-container">
        
        <div className="events-header">
          <span className="events-badge">SERVER TIMELINE</span>
          <h2 className="events-title">Server <span>Events</span></h2>
          <p className="events-subtitle">
            Don't miss the action! Join our community activities.
          </p>
        </div>

        <div className="events-grid">
          {eventData.map((event, index) => (
            <div 
              className={`event-card ${event.status.toLowerCase()}`} 
              key={index}
              style={{"--event-theme": event.color}}
            >
              <div className="event-status-wrapper">
                <div className="status-indicator">
                  <span className="dot"></span>
                  <span className="status-text">{event.status}</span>
                </div>
              </div>
              
              <div className="event-icon-box">
                <img src={event.icon} alt={event.title} />
              </div>

              <div className="event-info">
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;