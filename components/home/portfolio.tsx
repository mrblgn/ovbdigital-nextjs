"use client";

import { useTranslations } from "next-intl";

export default function PortfolioGrid() {
  const t = useTranslations("portfolio");

  const projects = [
    {
      title: t("project1"),
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project2"),
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project3"),
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project4"),
      img: "https://images.unsplash.com/photo-1648134859196-3aa762e9440d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project5"),
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project6"),
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project7"),
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t("project8"),
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Badge */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-[#141414] text-white text-[10px] uppercase tracking-widest px-4 py-1.5 font-bold rounded-full">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-[#141414]">
            {t("title")}
          </h2>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 aspect-square"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-montserrat font-bold text-sm tracking-wide">
                  {proj.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Highlight Badges Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#ff2e5f]/10 flex items-center justify-center text-[#ff2e5f] font-bold">
              ✓
            </div>
            <span className="font-montserrat font-bold text-sm text-gray-800">
              {t("highlight1")}
            </span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#ff2e5f]/10 flex items-center justify-center text-[#ff2e5f] font-bold">
              ⚡
            </div>
            <span className="font-montserrat font-bold text-sm text-gray-800">
              {t("highlight2")}
            </span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#ff2e5f]/10 flex items-center justify-center text-[#ff2e5f] font-bold">
              🛡️
            </div>
            <span className="font-montserrat font-bold text-sm text-gray-800">
              {t("highlight3")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
