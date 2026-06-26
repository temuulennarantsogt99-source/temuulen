import { Crown, ArrowUpRight, Award, Flame } from "lucide-react";

interface HeroContentProps {
  onOpenProfile: () => void;
}

export default function HeroContent({ onOpenProfile }: HeroContentProps) {
  return (
    <div
      id="hero-content-container"
      className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-20 pb-10 text-white z-10 max-w-5xl select-none"
    >
      {/* 1. Tagline */}
      <div
        id="hero-tagline"
        className="flex flex-wrap items-center gap-2 gap-y-1 mb-6 lg:mb-8 animate-fade-up text-white/70 text-xs sm:text-sm font-inter tracking-[0.2em] uppercase"
      >
        <Crown className="w-4 h-4 text-amber-400 animate-pulse" />
        <span>Vanguard Founder:</span>
        <span className="text-amber-400 font-bold tracking-widest bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs">
          Тэмүүлэн (15 настай)
        </span>
        <span className="hidden sm:inline text-white/30">•</span>
        <span className="hidden sm:inline">50-р сургууль</span>
      </div>

      {/* 2. Main Heading */}
      <div
        id="hero-heading"
        className="font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.6rem,8vw,6.5rem)] sm:text-[clamp(3.5rem,8vw,7rem)] flex flex-col gap-1 sm:gap-2 animate-fade-up-delay-1"
      >
        <span className="block hover:text-amber-400 transition-colors duration-300 cursor-default">
          Design.
        </span>
        <span className="block hover:text-amber-400 transition-colors duration-300 cursor-default">
          Disrupt.
        </span>
        <span className="block hover:text-amber-400 transition-colors duration-300 cursor-default">
          Conquer.
        </span>
      </div>

      {/* 3. Subtext */}
      <p
        id="hero-subtext"
        className="text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md mt-6 lg:mt-8 animate-fade-up-delay-2"
      >
        We build fierce brand identities <br className="hidden sm:block" />
        that don't just turn heads — <span className="font-bold text-white">they lead.</span>
      </p>

      {/* 4. CTA Row */}
      <div
        id="hero-cta-row"
        className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3"
      >
        {/* SEE OUR WORK Button */}
        <button
          onClick={onOpenProfile}
          className="group flex items-center gap-2 bg-black hover:bg-neutral-900 border border-white/10 hover:border-amber-400/30 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-inter rounded-md shadow-lg shadow-black/40 hover:shadow-amber-500/5 transition-all duration-300 cursor-pointer"
        >
          See Our Work
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>

        {/* Award (hidden on mobile) */}
        <div
          id="hero-award"
          onClick={onOpenProfile}
          className="hidden sm:flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
        >
          <Award className="w-8 h-8 text-white/50 group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest uppercase font-inter font-semibold">
              Top-Rated
            </span>
            <span className="text-[10px] tracking-widest uppercase font-inter text-white/40">
              Brand Studio
            </span>
          </div>
        </div>

        {/* Interactive "TEMUULEN" Director trigger pill */}
        <button
          onClick={onOpenProfile}
          className="flex items-center gap-2 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/20 hover:border-amber-400/40 px-4 py-2.5 sm:py-3.5 rounded-full text-[10px] sm:text-[11px] font-inter tracking-widest uppercase text-amber-400 transition-all duration-300 group"
        >
          <Flame className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
          Тэмүүлэн • 15 настай
        </button>
      </div>

      {/* 5. Stats Row */}
      <div
        id="hero-stats-row"
        className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16 animate-fade-up-delay-4"
      >
        <div className="flex flex-col min-w-[120px]">
          <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight hover:text-amber-400 transition-colors duration-300">
            250+
          </span>
          <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase font-inter mt-1.5">
            Brands Transformed
          </span>
        </div>

        <div className="flex flex-col min-w-[120px]">
          <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight hover:text-amber-400 transition-colors duration-300">
            95%
          </span>
          <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase font-inter mt-1.5">
            Client Retention
          </span>
        </div>

        <div className="flex flex-col min-w-[120px]">
          <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight hover:text-amber-400 transition-colors duration-300">
            10+
          </span>
          <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase font-inter mt-1.5">
            Years in the Game
          </span>
        </div>
      </div>
    </div>
  );
}
