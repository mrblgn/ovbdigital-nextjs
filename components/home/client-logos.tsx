"use client";

import { useTranslations } from "next-intl";

export default function ClientLogos() {
  const t = useTranslations("clientLogos");

  const logos = ["MICROSTUDIO", "MAJANO", "SEEKER", "KINGDOM", "NEXUS"];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold font-mono">
          {t("title")}
        </span>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((name, idx) => (
            <span
              key={idx}
              className="text-xl md:text-2xl font-extrabold tracking-wider font-montserrat text-gray-700 hover:text-[#141414] transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
