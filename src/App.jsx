import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Youtube } from 'lucide-react';

const KeeKohWebsite = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tickerRef = useRef(null);
  
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1
    });
  };

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone the ticker content as needed
    const tickerContent = ticker.querySelector('.ticker-content');
    const contentWidth = tickerContent.offsetWidth;
    const parent = ticker.querySelector('.ticker-wrapper');
    
    // Calculate how many duplicates we need to fill the screen twice
    const duplicatesNeeded = Math.ceil((parent.offsetWidth * 2) / contentWidth);
    
    // Remove any existing clones
    const existingClones = ticker.querySelectorAll('.ticker-clone');
    existingClones.forEach(clone => clone.remove());
    
    // Add new clones
    for (let i = 0; i < duplicatesNeeded; i++) {
      const clone = tickerContent.cloneNode(true);
      clone.classList.add('ticker-clone');
      parent.appendChild(clone);
    }
    
    // Update animation duration based on content width
    const style = document.createElement('style');
    const duration = contentWidth / 50; // Adjust speed here
    style.textContent = `
      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${contentWidth}px); }
      }
      .ticker-wrapper {
        animation: ticker ${duration}s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

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

  // Create enough items for one complete set
  const tickerItems = Array(10).fill(releases).flat();

  return (
    <div 
      className="fixed inset-0 bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-black to-black" />
        
        {/* Glow orbs - static position */}
        <div 
          className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full blur-[100px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.5) 0%, rgba(255,140,50,0.15) 70%, transparent 100%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <div 
          className="absolute w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full blur-[80px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.4) 0%, rgba(255,140,50,0.1) 70%, transparent 100%)',
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
        <div className="w-full overflow-hidden border-t border-b border-white/10 py-3 z-10 backdrop-blur-sm bg-black/30" ref={tickerRef}>
          <div className="ticker-wrapper inline-flex">
            <div className="ticker-content inline-flex whitespace-nowrap">
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
        </div>

        {/* Footer */}
        <footer className="w-full p-4 flex justify-between items-center z-20 bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-xs text-white/50" style={titleStyle}>© 2024</p>
          <div className="flex gap-4 items-center">
            <Instagram className="w-5 h-5 hover:text-orange-400 transition-colors cursor-pointer" />
            <Youtube className="w-7 h-7 hover:text-orange-400 transition-colors cursor-pointer" strokeWidth={1.5} />
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
        .ticker-wrapper {
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
