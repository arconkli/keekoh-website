// MusicLinksPage.jsx

import React from 'react';
import { Music, Video, Download } from 'lucide-react';
import coverImage from './assets/It_All_Falls_Cover_Web.jpeg';

const MusicLinksPage = () => {
  const platforms = [
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/track/5Zs5e9QcngOP7rFHOF23iY?si=5e8cce8fc48d4e10', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-green-500/20'
    },
    { 
      name: 'Apple Music', 
      url: 'https://music.apple.com/us/album/it-all-falls/1779658675?i=1779658676', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-red-500/20'
    },
    { 
      name: 'Amazon Music', 
      url: 'https://music.amazon.com/albums/B0DMY4NYSL?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_ojs5hP0lnuv6uFlZB2nmS9RFs&trackAsin=B0DMXLKBJZ', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-blue-500/20'
    },
    { 
      name: 'YouTube Music', 
      url: 'https://music.youtube.com/watch?v=cQfTs2n0zJA&feature=shared', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-red-600/20'
    },
    { 
      name: 'YouTube', 
      url: '#', 
      action: 'Official Vizualizer',
      icon: '/api/placeholder/24/24',
      color: 'from-red-500/20'
    },
    { 
      name: 'TIDAL', 
      url: 'https://tidal.com/browse/track/399382160?u', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-blue-400/20'
    },
    { 
      name: 'SoundCloud', 
      url: 'https://soundcloud.com/itskeekoh/it-all-falls?si=d797e6d2af324edc8db38813bc899e1e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', 
      action: 'Play',
      icon: '/api/placeholder/24/24',
      color: 'from-orange-500/20'
    },
    { 
      name: 'Audiomack', 
      url: 'https://audiomack.com/keekoh-2/song/it-all-falls', 
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
          src={coverImage}
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
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-8 pb-12 max-w-2xl mx-auto">
        {/* Enhanced Song Title with new styling */}
        <div className="relative mb-4">
          <h1 
            className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-center perspective-[1000px]" 
            style={{
              ...titleStyle,
              textShadow: `
                0 0 1px rgba(255,255,255,0.7),
                0 0 2px rgba(255,140,50,0.5),
                0 0 4px rgba(255,140,50,0.3),
                0 0 8px rgba(255,140,50,0.2)
              `,
              background: 'linear-gradient(180deg, #fff, #ffa352)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'titlePulse 3s ease-in-out infinite'
            }}
          >
            <style>
              {`
                @keyframes titlePulse {
                  0%, 100% { transform: translateY(0px) rotateX(0deg); }
                  50% { transform: translateY(-2px) rotateX(2deg); }
                }
              `}
            </style>
            <span className="relative inline-block">
              IT ALL FALLS
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-50 mix-blend-overlay" />
            </span>
          </h1>
          {/* Enhanced divider */}
          <div className="mt-3 mx-auto w-32 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70" 
               style={{
                 boxShadow: '0 0 10px rgba(255,140,50,0.5)',
               }}
          />
        </div>

        {/* Artist Name */}
        <h2 className="relative text-5xl md:text-7xl mb-8" style={keekohStyle}>
          <span className="relative block">
            <span className="relative z-10">KEEKOH</span>
            <span className="absolute inset-0 blur-[2px] opacity-80">KEEKOH</span>
            <span className="absolute inset-0 blur-[4px] opacity-60">KEEKOH</span>
            <span className="absolute inset-0 blur-[8px] opacity-40">KEEKOH</span>
          </span>
        </h2>

        {/* Cover Art */}
        <div className="w-64 h-64 mb-8 relative group">
          <img
            src={coverImage}
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
              target="_blank"
              rel="noopener noreferrer"
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
