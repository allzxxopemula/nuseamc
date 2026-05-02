import React, { useState, useEffect, useMemo } from 'react';
import '../css/LiveStats.css';

const LiveStats = () => {
  const [serverData, setServerData] = useState({
    online: false,
    players: 0,
    maxPlayers: 0,
    version: "1.20.x",
    playerList: []
  });
  const [displayIndex, setDisplayIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const IP_SERVER = "nusea.raznar.net:25048"; 

  // List Nama Akun Resmi Mojang untuk Kepala Mob (MHF Series)
  const mobHeads = [
    "MHF_Creeper", "MHF_Zombie", "MHF_Enderman", 
    "MHF_Skeleton", "MHF_Slime", "MHF_Blaze", 
    "MHF_Pig", "MHF_Cow", "MHF_Chicken", 
    "MHF_Ocelot", "MHF_Villager", "MHF_Spider"
  ];

  // Fungsi Hashing: Mastiin 1 player non-prem dapet 1 jenis Mob yang permanen (gak ganti-ganti)
  const getPersistentMobHead = (playerName) => {
    let hash = 0;
    for (let i = 0; i < playerName.length; i++) {
      hash = playerName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % mobHeads.length;
    return `https://mc-heads.net/avatar/${mobHeads[index]}/64`;
  };

  useEffect(() => {
    const fetchStatus = () => {
      fetch(`https://api.mcstatus.io/v2/status/java/${IP_SERVER}`)
        .then(res => res.json())
        .then(data => {
          setServerData({
            online: data.online,
            players: data.players?.online || 0,
            maxPlayers: data.players?.max || 100,
            version: data.version?.name_clean || "1.20.1",
            playerList: data.players?.list || []
          });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Timer Shuffle Kepala Player
  useEffect(() => {
    if (serverData.playerList.length > 5) {
      const rotateInterval = setInterval(() => {
        setDisplayIndex((prev) => (prev + 1) % serverData.playerList.length);
      }, 2000);
      return () => clearInterval(rotateInterval);
    }
  }, [serverData.playerList]);

  // Ambil 5 player yang akan ditampilkan
  const visiblePlayers = useMemo(() => {
    const list = serverData.playerList;
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
          {/* Card 1: Online Players */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="stat-info">
              <h4 className="stat-label">Online Players</h4>
              <div className="stat-value">{loading ? "..." : serverData.players}</div>
            </div>
          </div>

          {/* Card 2: Slots */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fa-solid fa-server"></i>
            </div>
            <div className="stat-info">
              <h4 className="stat-label">Total Slots</h4>
              <div className="stat-value">{serverData.maxPlayers}</div>
            </div>
          </div>

          {/* Card 3: Version */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fa-solid fa-code-branch"></i>
            </div>
            <div className="stat-info">
              <h4 className="stat-label">Version</h4>
              <div className="stat-value">
                {serverData.version ? serverData.version.split(' ') : "1.20"}
              </div>
            </div>
          </div>

          {/* Card 4: Active Players (With Force Mob Logic) */}
          <div className="stat-card explorers-card">
            <div className="stat-icon-wrapper">
              <i className="fa-solid fa-gamepad"></i>
            </div>
            <div className="stat-info">
              <h4 className="stat-label">Active Players</h4>
              <div className="heads-mini-grid">
                {visiblePlayers.map((player, index) => {
                  const isBedrock = player.name_clean.startsWith('.');
                  // Anggap cracked jika UUID tidak ada atau format default 'offline'
                  const isCracked = !player.uuid || player.uuid.startsWith('00000000') || player.uuid === "null";

                  let finalSkinUrl;
                  if (isBedrock) {
                    finalSkinUrl = `https://api.geysermc.org/v2/skin/${player.uuid || player.name_clean.replace('.', '')}`;
                  } else if (isCracked) {
                    // FORCE: Jadi Mob jika terdeteksi Cracked
                    finalSkinUrl = getPersistentMobHead(player.name_clean);
                  } else {
                    // Premium Java
                    finalSkinUrl = `https://mc-heads.net/avatar/${player.name_clean}/64`;
                  }

                  return (
                    <div key={player.uuid || player.name_clean + index} className="head-mini shuffle-animation">
                      <img 
                        src={finalSkinUrl} 
                        alt={player.name_clean}
                        loading="lazy"
                        className="skin-img"
                        onError={(e) => {
                          // Fallback terakhir jika API mati
                          e.target.onerror = null;
                          e.target.src = getPersistentMobHead(player.name_clean);
                        }}
                      />
                    </div>
                  );
                })}
                {serverData.players === 0 && !loading && (
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