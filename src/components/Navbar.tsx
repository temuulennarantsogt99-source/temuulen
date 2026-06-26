import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenProfile: () => void;
}

export default function Navbar({ onOpenMenu, onOpenProfile }: NavbarProps) {
  return (
    <nav
      id="navbar"
      className="absolute top-0 left-0 w-full z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7 text-white select-none"
    >
      {/* Left: brand name */}
      <div id="nav-brand" className="cursor-pointer" onClick={() => onOpenProfile()}>
        <span className="font-podium font-bold uppercase text-2xl sm:text-3xl tracking-wider hover:text-amber-400 transition-colors duration-300">
          VANGUARD
        </span>
      </div>

      {/* Center: nav links (hidden below md) */}
      <div id="nav-links" className="hidden md:flex items-center gap-8 lg:gap-12">
        <button
          onClick={() => onOpenProfile()}
          className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-200"
        >
          Projects
        </button>
        <button
          onClick={() => onOpenProfile()}
          className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-200"
        >
          Studio
        </button>
        <button
          onClick={() => onOpenProfile()}
          className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-200"
        >
          Offerings
        </button>
        <button
          onClick={() => onOpenProfile()}
          className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-200"
        >
          Inquire
        </button>
      </div>

      {/* Right: GET IN TOUCH button (hidden below md) */}
      <div id="nav-cta" className="hidden md:block">
        <button
          onClick={onOpenProfile}
          className="group flex items-center gap-1.5 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase font-inter hover:bg-white/10 transition-all duration-300 rounded-sm"
        >
          Get In Touch
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>

      {/* Right: hamburger menu trigger (visible below md) */}
      <button
        id="hamburger-btn"
        onClick={onOpenMenu}
        className="md:hidden flex flex-col justify-center items-end space-y-1.5 p-2 rounded-md hover:bg-white/5 transition-colors duration-200"
        aria-label="Open Menu"
      >
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-4 h-0.5 bg-white rounded-full"></div>
      </button>
    </nav>
  );
}
