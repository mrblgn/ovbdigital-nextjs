"use client";

import { useTranslations } from "next-intl";
import AboutImages from "./about-images";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-white text-[#141414] px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Dual Photography Cards */}
        <AboutImages />
 
        {/* Right Side: Narrative Text Block */}
        <div className="lg:col-span-6 space-y-6 lg:pl-8">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat tracking-tight leading-tight text-[#141414]">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
            {t("subtitle")}
          </p>
          <div className="pt-4">
            <a
              href="#portfolio"
              className="inline-block bg-[#141414] hover:bg-[#ff2e5f] text-white text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-md transition-colors duration-300 shadow-md"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
