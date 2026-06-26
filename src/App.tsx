import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import HeroContent from "./components/HeroContent";
import TemuulenProfile from "./components/TemuulenProfile";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div
      id="vanguard-app-root"
      className="relative w-full h-screen overflow-hidden bg-black font-inter select-none"
    >
      {/* Background looping video */}
      <video
        id="bg-video"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for optimal text contrast */}
      <div
        id="bg-dark-overlay"
        className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent z-0 pointer-events-none"
      />

      {/* Top Navigation */}
      <Navbar
        onOpenMenu={() => setMenuOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* Hero Content */}
      <HeroContent onOpenProfile={() => setProfileOpen(true)} />

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* Founder/Creative Director Temuulen Profile Modal */}
      <TemuulenProfile
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
      />

      {/* Bottom subtle bar for extra high-end look */}
      <div
        id="footer-status-bar"
        className="absolute bottom-4 right-6 sm:right-10 lg:right-16 z-10 hidden sm:flex items-center gap-4 text-[9px] tracking-[0.3em] font-inter text-white/30 uppercase"
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          Live In Tokyo / Ulaanbaatar
        </span>
        <span>•</span>
        <span>© 2026 VANGUARD</span>
      </div>
    </div>
  );
}
