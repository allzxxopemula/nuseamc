import React, { useState, useEffect, useMemo } from 'react';
import '../css/LiveStats.css';

const LiveStats = () => {
  const [serverData, setServerData] = useState({
    online: false,
    players: 0,
    maxPlayers: 0,
    version: "1.21.x",
    playerList: []
  });
  const [displayIndex, setDisplayIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const IP_SERVER = "play.nusea.my.id:25048"; 

  const mobHeads = [
    "MHF_Creeper", "MHF_Zombie", "MHF_Enderman", 
    "MHF_Skeleton", "MHF_Slime", "MHF_Blaze", 
    "MHF_Pig", "MHF_Cow", "MHF_Chicken", 
    "MHF_Ocelot", "MHF_Villager", "MHF_Spider"
  ];

  const getPersistentMobHead = (playerName) => {
    let hash = 0;
    for (let i = 0; i < playerName.length; i++) {
      hash = playerName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % mobHeads.length;
    return `https://crafthead.net/helm/${mobHeads[index]}/64`;
  };

  useEffect(() => {
    const fetchStatus = () => {
      fetch(`https://api.mcstatus.io/v2/status/java/${IP_SERVER}?t=${Date.now()}`)
        .then(res => res.json())
        .then(data => {
          setServerData({
            online: data.online,
            players: data.players?.online || 0,
            maxPlayers: data.players?.max || 20,
            version: data.version?.name_clean || "1.21.1",
            playerList: data.players?.list || []
          });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 20000);
    return () => clearInterval(interval);
  }, []);

  // Timer Shuffle: Mengubah displayIndex tiap 1 detik
  useEffect(() => {
    if (serverData.playerList.length > 6) {
      const rotateInterval = setInterval(() => {
        setDisplayIndex((prev) => (prev + 1) % serverData.playerList.length);
      }, 1000);
      return () => clearInterval(rotateInterval);
    }
  }, [serverData.playerList]);

  const visiblePlayers = useMemo(() => {
    const list = serverData.playerList || [];
    if (list.length === 0) return [];
    if (list.length <= 6) return list;
    
    let visible = [];
    for (let i = 0; i < 6; i++) {
      visible.push(list[(displayIndex + i) % list.length]);
    }
    return visible;
  }, [serverData.playerList, displayIndex]);

  return (
    <section className="stats-section">
      <div className="container stats-container">
        
        <div className="stats-header">
          <div className={`status-badge ${serverData.online ? 'online' : 'offline'}`}>
            <span className="pulse-dot"></span>
            {loading ? "FETCHING..." : serverData.online ? "SERVER ONLINE" : "SERVER OFFLINE"}
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper"><i className="fa-solid fa-users"></i></div>
            <div className="stat-info">
              <h4 className="stat-label">Online Players</h4>
              <div className="stat-value">{loading ? "..." : serverData.players}</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper"><i className="fa-solid fa-server"></i></div>
            <div className="stat-info">
              <h4 className="stat-label">Total Slots</h4>
              <div className="stat-value">{serverData.maxPlayers}</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper"><i className="fa-solid fa-code-branch"></i></div>
            <div className="stat-info">
              <h4 className="stat-label">Version</h4>
              <div className="stat-value">{serverData.version?.split(' ')}</div>
            </div>
          </div>

          <div className="stat-card explorers-card">
            <div className="stat-icon-wrapper"><i className="fa-solid fa-gamepad"></i></div>
            <div className="stat-info">
              <h4 className="stat-label">Active Players</h4>
              <div className="heads-mini-grid">
                {visiblePlayers.length > 0 ? (
                  visiblePlayers.map((player, index) => {
                    const name = player.name_clean || player.name;
                    const isBedrock = name.startsWith('.');
                    
                    let finalSkinUrl = `https://crafthead.net/helm/${name}/64`;
                    if (isBedrock) {
                        finalSkinUrl = `https://api.geysermc.org/v2/skin/${player.uuid || name.replace('.', '')}`;
                    }

                    return (
                      /* KUNCI: Pake key={name + displayIndex} supaya pas shuffle, elemen di-render ulang & animasi jalan setiap kali */
                      <div key={name + displayIndex} className="head-mini shuffle-animation">
                        <img 
                          src={finalSkinUrl} 
                          alt={name}
                          className="skin-img"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = getPersistentMobHead(name);
                          }}
                        />
                      </div>
                    );
                  })
                ) : serverData.players > 0 ? (
                  [...Array(Math.min(serverData.players, 6))].map((_, i) => (
                    /* Supaya Mob juga punya animasi pas pertama muncul */
                    <div key={`mob-${i}-${displayIndex}`} className="head-mini shuffle-animation">
                      <img src={getPersistentMobHead(`mob-${i}-${new Date().getSeconds()}`)} className="skin-img" alt="mob" />
                    </div>
                  ))
                ) : (
                  <div className="no-play">Empty</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;