import React, { useState } from 'react';
import { Instagram, Youtube } from 'lucide-react';


const KeeKohWebsite = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1
    });
  };

  const releases = [
    "IT ALL FALLS // 2024"
  ];

  const platforms = [
    { name: "SPOTIFY", url: "#" },
    { name: "APPLE MUSIC", url: "#" },
    { name: "TIDAL", url: "#" }
  ];

  const titleStyle = {
    fontFamily: "aktiv-grotesk, sans-serif",
    fontWeight: 700,
    fontStyle: "normal"
  };

  const keekohStyle = { 
    fontFamily: "neulis-cursive, sans-serif",
    fontWeight: 500,
    fontStyle: "normal"
  };

  const tickerItems = Array(20).fill(releases).flat();

  return (
    <div 
      className="fixed inset-0 bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-black to-black" />
        
        {/* Glow orbs - static position */}
        <div 
          className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full blur-[100px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.4) 0%, rgba(255,140,50,0.1) 70%, transparent 100%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <div 
          className="absolute w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full blur-[80px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.3) 0%, rgba(255,140,50,0.05) 70%, transparent 100%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <nav className="w-full p-4 flex justify-start items-center z-20 bg-gradient-to-b from-black/50 to-transparent">
          <h1 className="text-lg md:text-xl font-light tracking-widest" style={titleStyle}></h1>
        </nav>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center space-y-6">
            {/* Main title */}
            <h2 className="relative text-5xl md:text-7xl" style={keekohStyle}>
              <span className="relative block">
                <span className="relative z-10 text-white">KEEKOH</span>
                <span className="absolute inset-0 blur-[2px] text-white opacity-80">KEEKOH</span>
                <span className="absolute inset-0 blur-[4px] text-white opacity-60">KEEKOH</span>
                <span className="absolute inset-0 blur-[8px] text-white opacity-40">KEEKOH</span>
              </span>
            </h2>
            
            {/* Platforms with enhanced warm orange neon effect */}
            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-light tracking-wider">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="relative group"
                  style={titleStyle}
                >
                  <span className="relative z-10 text-white/80 group-hover:text-orange-300 transition-colors duration-300">
                    {platform.name}
                  </span>
                  <span className="absolute inset-0 blur-[2px] text-orange-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {platform.name}
                  </span>
                  <span className="absolute inset-0 blur-[4px] text-orange-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {platform.name}
                  </span>
                  <span className="absolute inset-0 blur-[8px] text-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {platform.name}
                  </span>
                  <span className="absolute inset-0 blur-[16px] text-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Infinite ticker */}
        <div className="w-full overflow-hidden border-t border-b border-white/10 py-3 z-10 backdrop-blur-sm bg-black/30">
          <div className="inline-flex whitespace-nowrap animate-ticker">
            {tickerItems.map((release, index) => (
              <span
                key={index}
                className="inline-block mx-6 text-xs md:text-sm font-light tracking-widest text-white/70"
                style={titleStyle}
              >
                {release}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full p-4 flex justify-between items-center z-20 bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-xs text-white/50" style={titleStyle}>© 2024</p>
          <div className="flex gap-4">
            <Instagram className="w-4 h-4 hover:text-orange-400 transition-colors cursor-pointer" />
            <Youtube className="w-6 h-4 hover:text-orange-400 transition-colors cursor-pointer" />
          </div>
        </footer>
      </div>

      {/* Noise overlay */}
      <div 
        className="absolute inset-0 w-full h-full mix-blend-soft-light pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.08
        }}
      />

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-ticker {
          animation: ticker 30s linear infinite;
          will-change: transform;
        }

        html, body {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default KeeKohWebsite;
