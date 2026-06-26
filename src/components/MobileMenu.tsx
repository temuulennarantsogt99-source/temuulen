import { X, ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenProfile }: MobileMenuProps) {
  const menuItems = ["Projects", "Studio", "Offerings", "Inquire"];

  return (
    <div
      id="mobile-menu-overlay"
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
        isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Header Row (matches Navbar) */}
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-podium font-bold uppercase text-2xl tracking-wider text-white">
          VANGUARD
        </span>
        <button
          id="close-menu-btn"
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Centered Vertically Nav Links */}
      <div className="flex flex-col items-center justify-center flex-grow gap-8">
        {menuItems.map((item, i) => (
          <button
            key={item}
            onClick={() => {
              onClose();
              onOpenProfile();
            }}
            style={{
              transitionDelay: `${i * 80 + 100}ms`,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
            }}
            className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-wider hover:text-amber-400 transition-all duration-500"
          >
            {item}
          </button>
        ))}

        {/* GET IN TOUCH button with same staggered animation */}
        <button
          onClick={() => {
            onClose();
            onOpenProfile();
          }}
          style={{
            transitionDelay: `${menuItems.length * 80 + 100}ms`,
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            opacity: isOpen ? 1 : 0,
          }}
          className="group flex items-center gap-1.5 border border-white/30 hover:border-white/60 px-6 py-3.5 text-xs tracking-widest uppercase font-inter text-white hover:bg-white/10 transition-all duration-500 rounded-sm mt-4"
        >
          Get In Touch
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>

      {/* Bottom watermark or branding */}
      <div className="text-center py-6">
        <span className="text-[10px] tracking-[0.25em] text-white/30 uppercase font-inter">
          VANGUARD COLLECTIVE • 2026
        </span>
      </div>
    </div>
  );
}
