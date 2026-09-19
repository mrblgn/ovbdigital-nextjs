"use client";

import { useTranslations } from "next-intl";

export default function ServicesOverview() {
  const t = useTranslations("servicesOverview");

  const services = [
    {
      title: t("item1"),
      icon: (
        <svg className="w-8 h-8 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: t("item2"),
      icon: (
        <svg className="w-8 h-8 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: t("item3"),
      icon: (
        <svg className="w-8 h-8 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: t("item4"),
      icon: (
        <svg className="w-8 h-8 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-100 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <h3 className="text-[#141414] font-montserrat font-bold text-xl md:text-2xl text-center max-w-2xl mx-auto leading-snug">
          {t("heading")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#ff2e5f]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-bold text-gray-900 font-montserrat text-base">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
