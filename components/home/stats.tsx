"use client";

import { useTranslations } from "next-intl";

export default function StatsBar() {
  const t = useTranslations("stats");

  const statItems = [
    { value: t("projects"), label: t("projectsLabel") },
    { value: t("clients"), label: t("clientsLabel") },
    { value: t("experience"), label: t("experienceLabel") },
    { value: t("rating"), label: t("ratingLabel") },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statItems.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-[#141414] font-montserrat tracking-tight">
              {item.value}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              {item.label}
            </div>
            <div className="w-6 h-0.5 bg-[#ff2e5f] mx-auto mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
