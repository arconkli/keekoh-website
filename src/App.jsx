import React, { useState } from 'react';
import { Music, Instagram, Youtube } from 'lucide-react';

const KeeKohWebsite = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1
    });
  };

  const releases = [
    "NEON DREAMS // 2024",
    "MIDNIGHT WALK // 2024",
    "CITY LIGHTS // 2023",
    "AFTER HOURS // 2023"
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

  return (
    <div 
      className="h-screen bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced ambient background effects */}
      <div className="fixed inset-0">
        {/* Primary gradient - with reduced movement */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-black to-black" 
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
        
        {/* Interactive glow orbs with reduced movement */}
        <div 
          className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[100px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.4) 0%, rgba(255,140,50,0.1) 70%, transparent 100%)',
            left: `${50 + mousePosition.x * 10}%`,
            top: `${50 + mousePosition.y * 10}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
        
        {/* Secondary glow orb with reduced movement */}
        <div 
          className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full blur-[80px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.3) 0%, rgba(255,140,50,0.05) 70%, transparent 100%)',
            left: `${50 - mousePosition.x * 8}%`,
            top: `${50 - mousePosition.y * 8}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </div>
      
      <div className="relative h-screen">
        <nav className="absolute top-0 w-full p-4 md:p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/50 to-transparent">
          <h1 className="text-lg md:text-xl font-light tracking-widest" style={titleStyle}>KEEKOH</h1>
          <Music className="w-5 h-5 hover:text-orange-400 transition-colors cursor-pointer" />
        </nav>

        <div className="h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-8">
            {/* Enhanced neon text effect */}
            <h2 className="relative text-6xl md:text-8xl" style={titleStyle}>
              <span className="relative block">
                {/* Base text */}
                <span className="relative z-10 text-white">
                  KEEKOH
                </span>
                
                {/* Enhanced neon glow layers */}
                <span className="absolute inset-0 blur-[1px] text-white opacity-90">
                  KEEKOH
                </span>
                <span className="absolute inset-0 blur-[2px] text-white opacity-80">
                  KEEKOH
                </span>
                <span className="absolute inset-0 blur-[4px] text-white opacity-60">
                  KEEKOH
                </span>
                <span className="absolute inset-0 blur-[8px] text-white opacity-40">
                  KEEKOH
                </span>
                <span className="absolute inset-0 blur-[16px] text-white opacity-20">
                  KEEKOH
                </span>
              </span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm font-light tracking-wider">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="text-white/80 hover:text-orange-400 transition-colors duration-300"
                  style={titleStyle}
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="absolute bottom-0 w-full p-4 md:p-6 flex justify-between items-center z-20 bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-xs text-white/50" style={titleStyle}>© 2024</p>
          <div className="flex gap-4">
            <Instagram className="w-4 h-4 hover:text-orange-400 transition-colors cursor-pointer" />
            <Youtube className="w-4 h-4 hover:text-orange-400 transition-colors cursor-pointer" />
          </div>
        </footer>
      </div>

      <div className="fixed bottom-16 w-full overflow-hidden border-t border-b border-white/10 py-4 z-10 backdrop-blur-sm bg-black/30">
        <div className="inline-flex whitespace-nowrap animate-ticker">
          {[...releases, ...releases, ...releases].map((release, index) => (
            <span
              key={index}
              className="inline-block mx-8 text-xs md:text-sm font-light tracking-widest text-white/70 hover:text-orange-400 transition-colors duration-300"
              style={titleStyle}
            >
              {release}
            </span>
          ))}
        </div>
      </div>

      <div 
        className="fixed inset-0 w-full h-full mix-blend-soft-light pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.08
        }}
      />

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        .animate-ticker {
          animation: ticker 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default KeeKohWebsite;
