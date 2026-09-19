"use client";

import { useTranslations } from "next-intl";

export default function StudioExperience() {
  const t = useTranslations("studioExperience");

  return (
    <section className="py-24 bg-[#1b1b1b] text-white px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Headline & Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat leading-tight text-white">
            {t("title")}
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-gray-200 text-[#141414] text-xs uppercase tracking-widest font-bold px-8 py-4 rounded transition-colors duration-300 shadow-md"
            >
              {t("cta")}
            </a>
          </div>
        </div>

        {/* Right Side: Infographics Display */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Infographic Metric Card 1 */}
          <div className="bg-[#242424] p-6 rounded-xl border border-white/10 space-y-4 hover:border-[#ff2e5f]/50 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-mono text-gray-400">STATUS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="text-3xl font-extrabold text-[#ff2e5f] font-montserrat">
              {t("stat1Title")}
            </div>
            <p className="text-xs text-gray-400">{t("stat1Desc")}</p>
            {/* Progress bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#ff2e5f] h-full w-[99.9%]" />
            </div>
          </div>

          {/* Infographic Metric Card 2 */}
          <div className="bg-[#242424] p-6 rounded-xl border border-white/10 space-y-4 hover:border-[#ff2e5f]/50 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-mono text-gray-400">VELOCITY</span>
              <span className="text-xs text-[#ff2e5f] font-mono">CI/CD</span>
            </div>
            <div className="text-3xl font-extrabold text-white font-montserrat">
              {t("stat2Title")}
            </div>
            <p className="text-xs text-gray-400">{t("stat2Desc")}</p>
            {/* Progress bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-[#ff2e5f] h-full w-[85%]" />
            </div>
          </div>

          {/* Infographic Metric Card 3 */}
          <div className="md:col-span-2 bg-[#242424] p-6 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#ff2e5f]/50 transition-colors">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono text-gray-400">RELIABILITY</span>
              <div className="text-2xl font-bold font-montserrat text-white">
                {t("stat3Title")}
              </div>
              <p className="text-xs text-gray-400">{t("stat3Desc")}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-gray-300">
                Unit Tests
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-gray-300">
                E2E Tests
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
