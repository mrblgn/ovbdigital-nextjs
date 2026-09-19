"use client";

import { useTranslations } from "next-intl";
import Logo from "@/assets/svgs/logo-svg";
import { BUSINESS_NAME } from "@/constants";

export default function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0e0e0e] text-gray-500 py-12 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-auto text-white" fill="white" />
        </div>

        <p className="text-xs font-mono text-center md:text-left">
          {`© ${new Date().getFullYear()} ${BUSINESS_NAME}. ${t("copyright")}`}
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          <span>BACK TO TOP</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
