import { useTranslations } from "next-intl";
import { BUSINESS_NAME } from "@/constants";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] bg-[url(https://images.unsplash.com/photo-1643267514395-b36b3f7e8281?auto=format&fit=crop&w=2160&q=80)] bg-cover bg-center text-white flex flex-col justify-between px-6 md:px-16 pt-32 pb-16 overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-100 h-100 bg-[#ff2e5f]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-b from-[#141414]/90 via-[#141414]/50 to-[#141414]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
        {/* Main Title & Subtitle */}
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none text-white font-montserrat">
            {BUSINESS_NAME}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="pt-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-[#ff2e5f] hover:bg-[#e6204e] text-white text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#ff2e5f]/25 hover:shadow-[#ff2e5f]/40 hover:scale-105"
            >
              {t("cta")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side numbered tags matching the design */}
        <div className="lg:col-span-4 flex lg:flex-col justify-end gap-6 text-gray-200 font-mono text-xs uppercase tracking-wider">
          <div className="border-l border-white/10 pl-4 py-1 hover:cursor-default hover:scale-105 hover:font-bold hover:text-[#ff2e5f] transition-colors">
            <span className="text-[#ff2e5f] font-bold mr-2">01</span> {t("tag1")}
          </div>
          <div className="border-l border-white/10 pl-4 py-1 hover:cursor-default hover:scale-105 hover:font-bold hover:text-[#ff2e5f] transition-colors">
            <span className="text-[#ff2e5f] font-bold mr-2">02</span> {t("tag2")}
          </div>
          <div className="border-l border-white/10 pl-4 py-1 hover:cursor-default hover:scale-105 hover:font-bold hover:text-[#ff2e5f] transition-colors">
            <span className="text-[#ff2e5f] font-bold mr-2">03</span> {t("tag3")}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
        <span>SCROLL DOWN</span>
        <div className="w-12 h-[1px] bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
