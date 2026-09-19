"use client";

import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 bg-white px-6 md:px-16 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Quote Icon */}
        <div className="text-[#ff2e5f] text-6xl font-serif leading-none">“</div>

        {/* Quote Body */}
        <blockquote className="text-xl md:text-3xl font-light text-gray-800 leading-relaxed font-montserrat italic">
          {t("quote")}
        </blockquote>

        {/* Author Details */}
        <div className="space-y-1">
          <div className="font-bold text-gray-900 font-montserrat uppercase text-sm tracking-wider">
            {t("author")}
          </div>
          <div className="text-xs text-gray-500 font-mono">
            {t("position")}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center space-x-2 pt-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff2e5f]" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
