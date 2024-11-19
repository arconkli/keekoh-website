import React, { useState } from 'react';
import { Music, Video, Download } from 'lucide-react';
import coverImage from './assets/It_All_Falls_Cover_Web.jpeg';

// Import all platform logos
import spotifyLogo from './assets/spotify.png';
import appleMusicLogo from './assets/apple-music.png';
import amazonMusicLogo from './assets/amazon-music.png';
import youtubeMusicLogo from './assets/youtube-music.png';
import youtubeLogo from './assets/youtube.png';
import tidalLogo from './assets/tidal.png';
import soundcloudLogo from './assets/soundcloud.png';
import audiomackLogo from './assets/audiomack.png';

const ICON_SIZE = 24;

// Platform link component with preloading
const PlatformLink = ({ platform }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // Create a link prefetch element
    const linkPrefetch = document.createElement('link');
    linkPrefetch.rel = 'prefetch';
    linkPrefetch.href = platform.url;
    document.head.appendChild(linkPrefetch);
    
    // Create a DNS prefetch element
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = new URL(platform.url).origin;
    document.head.appendChild(dnsPrefetch);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <a
      href={platform.url}
      className="relative block w-full group"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
        <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        <div className="relative flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div 
              className="relative flex items-center justify-center w-6 h-6"
              style={{ minWidth: ICON_SIZE, minHeight: ICON_SIZE }}
            >
              <img 
                src={platform.icon} 
                alt={`${platform.name} icon`}
                width={ICON_SIZE}
                height={ICON_SIZE}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <span className="font-medium" style={titleStyle}>{platform.name}</span>
          </div>
          <span className="text-sm text-white/70 px-3 py-1 rounded border border-white/20 group-hover:border-white/40 transition-colors duration-300">
            {platform.action}
            {isHovering && (
              <div className="absolute inset-0 pointer-events-none opacity-0">
                <iframe 
                  src={platform.url} 
                  style={{ width: '1px', height: '1px' }} 
                  tabIndex="-1"
                  aria-hidden="true"
                />
              </div>
            )}
          </span>
        </div>
      </div>
    </a>
  );
};

const titleStyle = {
  fontFamily: "aktiv-grotesk, sans-serif",
  fontWeight: 700,
  fontStyle: "normal",
};

const keekohStyle = {
  fontFamily: "neulis-cursive, sans-serif",
  fontWeight: 500,
  fontStyle: "normal",
};

const MusicLinksPage = () => {
  const platforms = [
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/track/5Zs5e9QcngOP7rFHOF23iY?si=5e8cce8fc48d4e10', 
      action: 'Play',
      icon: spotifyLogo,
      color: 'from-green-500/20'
    },
    { 
      name: 'Apple Music', 
      url: 'https://music.apple.com/us/album/it-all-falls/1779658675?i=1779658676', 
      action: 'Play',
      icon: appleMusicLogo,
      color: 'from-red-500/20'
    },
    { 
      name: 'Amazon Music', 
      url: 'https://music.amazon.com/albums/B0DMY4NYSL?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_ojs5hP0lnuv6uFlZB2nmS9RFs&trackAsin=B0DMXLKBJZ', 
      action: 'Play',
      icon: amazonMusicLogo,
      color: 'from-blue-500/20'
    },
    { 
      name: 'YouTube Music', 
      url: 'https://music.youtube.com/watch?v=cQfTs2n0zJA&feature=shared', 
      action: 'Play',
      icon: youtubeMusicLogo,
      color: 'from-red-600/20'
    },
    { 
      name: 'YouTube', 
      url: '#', 
      action: 'Official Vizualizer',
      icon: youtubeLogo,
      color: 'from-red-500/20'
    },
    { 
      name: 'TIDAL', 
      url: 'https://tidal.com/browse/track/399382160?u', 
      action: 'Play',
      icon: tidalLogo,
      color: 'from-blue-400/20'
    },
    { 
      name: 'SoundCloud', 
      url: 'https://soundcloud.com/itskeekoh/it-all-falls?si=d797e6d2af324edc8db38813bc899e1e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', 
      action: 'Play',
      icon: soundcloudLogo,
      color: 'from-orange-500/20'
    },
    { 
      name: 'Audiomack', 
      url: 'https://audiomack.com/keekoh-2/song/it-all-falls', 
      action: 'Play',
      icon: audiomackLogo,
      color: 'from-yellow-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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

      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-8 pb-12 max-w-2xl mx-auto">
        {/* Song Title */}
        <div className="relative mb-4 text-center">
          <h1 className="relative text-2xl md:text-4xl tracking-[0.2em]" style={titleStyle}>
            <span className="relative block">
              <span className="relative z-10 text-white">IT ALL FALLS</span>
              <span className="absolute inset-0 blur-[1px] opacity-70 text-white">IT ALL FALLS</span>
              <span className="absolute inset-0 blur-[2px] opacity-50 text-white">IT ALL FALLS</span>
              <span className="absolute inset-0 blur-[3px] opacity-30 text-white">IT ALL FALLS</span>
            </span>
          </h1>
          <div 
            className="mt-3 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
            style={{
              boxShadow: '0 0 8px rgba(255, 163, 82, 0.3)'
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
            <PlatformLink key={platform.name} platform={platform} />
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
