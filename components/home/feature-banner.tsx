"use client";

import { useTranslations } from "next-intl";

export default function FeatureBanner() {
  const t = useTranslations("featureBanner");

  return (
    <section className="relative bg-[#141414] py-24 px-6 md:px-16 text-white overflow-hidden">
      {/* Background Image Container with Overlay */}
      <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden min-h-[480px] grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Software Development Team"
            className="w-full h-full object-cover opacity-40 filter brightness-75"
          />
        </div>

        {/* Floating Dark Card overlay on the left */}
        <div className="relative z-10 lg:col-span-6 bg-[#141414]/90 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/10 m-6 shadow-2xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold font-montserrat leading-tight text-white">
            {t("title")}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            {t("subtitle")}
          </p>
          <div>
            <a
              href="#contact"
              className="inline-block bg-[#ff2e5f] hover:bg-[#e6204e] text-white text-xs uppercase tracking-widest font-bold px-7 py-3.5 rounded transition-all duration-300 shadow-lg shadow-[#ff2e5f]/25"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
