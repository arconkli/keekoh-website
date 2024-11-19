import React from 'react';
import { Music, Video, Download } from 'lucide-react';

const MusicLinksPage = () => {
  const platforms = [
    { 
      name: 'Spotify', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-green-500/20'
    },
    { 
      name: 'Apple Music', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-red-500/20'
    },
    { 
      name: 'Amazon Music', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-blue-500/20'
    },
    { 
      name: 'YouTube Music', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-red-600/20'
    },
    { 
      name: 'YouTube', 
      url: '#', 
      action: 'Official Music Video',
      icon: '/api/placeholder/24/24',
      color: 'from-red-500/20'
    },
    { 
      name: 'iTunes Store', 
      url: '#', 
      action: 'Download',
      icon: '/api/placeholder/24/24',
      color: 'from-purple-500/20'
    },
    { 
      name: 'TIDAL', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-blue-400/20'
    },
    { 
      name: 'SoundCloud', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-orange-500/20'
    },
    { 
      name: 'Audiomack', 
      url: '#', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-yellow-500/20'
    }
  ];

  const keekohStyle = {
    fontFamily: "neulis-cursive, sans-serif",
    fontWeight: 500,
    fontStyle: "normal",
  };

  const titleStyle = {
    fontFamily: "aktiv-grotesk, sans-serif",
    fontWeight: 700,
    fontStyle: "normal",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/It_All_Falls_Cover_Web.JPEG" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-full h-full blur-[100px] opacity-20"
            style={{
              background: "radial-gradient(circle at center, rgba(255,140,50,0.3) 0%, rgba(255,140,50,0.1) 50%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-12 max-w-2xl mx-auto">
        {/* Enhanced Song Title */}
        <div className="relative mb-8">
          <h1 
            className="text-2xl md:text-3xl font-light tracking-[0.3em] text-center" 
            style={titleStyle}
          >
            <span className="relative">
              <span className="relative z-10">IT ALL FALLS</span>
              <span className="absolute inset-0 blur-[1px] opacity-70 text-orange-500/50">IT ALL FALLS</span>
            </span>
          </h1>
          <div className="mt-2 w-16 h-[1px] mx-auto bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        {/* Artist Name */}
        <h2 className="relative text-5xl md:text-7xl mb-12" style={keekohStyle}>
          <span className="relative block">
            <span className="relative z-10">KEEKOH</span>
            <span className="absolute inset-0 blur-[2px] opacity-80">KEEKOH</span>
            <span className="absolute inset-0 blur-[4px] opacity-60">KEEKOH</span>
            <span className="absolute inset-0 blur-[8px] opacity-40">KEEKOH</span>
          </span>
        </h2>

        {/* Cover Art */}
        <div className="w-64 h-64 mb-12 relative group">
          <img
            src="/assets/It_All_Falls_Cover_Web.JPEG"
            alt="Album Cover"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 rounded-lg shadow-lg shadow-orange-500/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>

        {/* Platform Links */}
        <div className="w-full space-y-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="relative block w-full group"
            >
              <div className="relative overflow-hidden rounded bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 relative flex items-center justify-center">
                      <img 
                        src={platform.icon} 
                        alt={`${platform.name} icon`} 
                        className="w-6 h-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <span className="font-medium" style={titleStyle}>{platform.name}</span>
                  </div>
                  <span className="text-sm text-white/70 px-3 py-1 rounded border border-white/20 group-hover:border-white/40 transition-colors duration-300">
                    {platform.action}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-white/50" style={titleStyle}>
          © 2024 KEEKOH
        </footer>
      </div>
    </div>
  );
};

export default MusicLinksPage;
