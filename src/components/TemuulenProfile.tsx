import { X, Award, Film, Tv, Flame, GraduationCap, Trophy } from "lucide-react";

interface TemuulenProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TemuulenProfile({ isOpen, onClose }: TemuulenProfileProps) {
  if (!isOpen) return null;

  return (
    <div
      id="temuulen-profile-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div
        id="temuulen-profile-card"
        className="relative w-full max-w-lg overflow-hidden glass-panel-heavy rounded-2xl p-6 sm:p-8 animate-scale-in text-white"
      >
        {/* Close Button */}
        <button
          id="close-profile-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
          aria-label="Close Profile"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Badge */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center font-podium text-2xl font-bold tracking-wider text-black shadow-lg shadow-amber-500/20">
            T
          </div>
          <div>
            <span className="text-[10px] tracking-[0.25em] text-amber-400 font-inter font-semibold uppercase">
              Creative Director / Founder
            </span>
            <h2 className="text-2xl font-bold tracking-wider font-podium uppercase mt-0.5">
              ТЭМҮҮЛЭН
            </h2>
          </div>
        </div>

        {/* Brief Intro */}
        <p className="text-white/80 text-sm sm:text-base font-inter leading-relaxed mb-6 border-l-2 border-amber-400 pl-4">
          Дижитал ертөнцийг шинэ өнцгөөс харж, VANGUARD-ийн ирээдүйн чиг хандлагыг тодорхойлогч, 15 настай бүтээлч залуу авьяастан.
        </p>

        {/* Grid Stats / Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Volleyball Passion */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase font-inter tracking-wider">
                Сонирхол
              </span>
            </div>
            <h3 className="font-bold text-sm tracking-wide">Волейбол / Volleyball</h3>
            <p className="text-xs text-white/60 mt-1">
              Эрч хүчтэй багийн тоглолт, хурд хүч болон цуцашгүй тэмүүлэл.
            </p>
          </div>

          {/* Academic Base */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase font-inter tracking-wider">
                Боловсрол
              </span>
            </div>
            <h3 className="font-bold text-sm tracking-wide">50-р сургууль / School 50</h3>
            <p className="text-xs text-white/60 mt-1">
              Эрдэм мэдлэгийн суурь бөгөөд бүтээлч сэтгэлгээний ундарга.
            </p>
          </div>

          {/* Cinematic Fav: Bloodhounds */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Film className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase font-inter tracking-wider">
                Дуртай Кино
              </span>
            </div>
            <h3 className="font-bold text-sm tracking-wide">Bloodhounds</h3>
            <p className="text-xs text-white/60 mt-1">
              Тэсвэр хатуужил, үнэнч нөхөрлөл, тулаант хэсгүүдийн төгс хослол.
            </p>
          </div>

          {/* Anime Fav: Haikyuu */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Tv className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase font-inter tracking-wider">
                Дуртай Анимэ
              </span>
            </div>
            <h3 className="font-bold text-sm tracking-wide">Haikyuu!!</h3>
            <p className="text-xs text-white/60 mt-1">
              Шаргуу хөдөлмөр, багийн зорилго, хэзээ ч бууж өгөхгүй тэмцэл.
            </p>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="bg-amber-400/10 rounded-xl p-4 border border-amber-400/20 text-center">
          <p className="font-inter text-xs tracking-wider text-amber-400 uppercase font-semibold flex items-center justify-center gap-1.5">
            <Flame className="w-3.5 h-3.5" /> "Хэрэв чи дээшээ харахаа болихгүй бол, хэзээ ч унахгүй!"
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-5 text-center">
          <button
            id="start-project-btn"
            onClick={onClose}
            className="text-[10px] tracking-[0.2em] font-inter font-semibold uppercase text-white/40 hover:text-white transition-colors duration-200"
          >
            VANGUARD COLLECTIVE • 2026
          </button>
        </div>
      </div>
    </div>
  );
}
