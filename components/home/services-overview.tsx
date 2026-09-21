"use client";

import { useTranslations } from "next-intl";

export default function ServicesOverview() {
  const t = useTranslations("servicesOverview");

  const services = [
    {
      title: t("item1"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1m-4-8l2-2 2 2m-2-2v6" />
        </svg>
      ),
    },
    {
      title: t("item2"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t("item3"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: t("item4"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: t("item5"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: t("item6"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2h-3a2 2 0 01-2-2V4a2 2 0 012-2h1zM4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: t("item7"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t("item8"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
        </svg>
      ),
    },
    {
      title: t("item9"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: t("item10"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: t("item11"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t("item12"),
      icon: (
        <svg className="w-6 h-6 text-[#ff2e5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-100 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <h3 className="text-[#141414] font-montserrat font-bold text-xl md:text-3xl text-center max-w-3xl mx-auto leading-snug">
          {t("heading")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#ff2e5f]/40 hover:cursor-pointer hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 p-3 rounded-full bg-[#ff2e5f]/10 group-hover:bg-[#ff2e5f]/20 transition-colors">
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-900 font-montserrat text-sm leading-snug">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
