"use client";

import { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Logo from "@/assets/svgs/logo-svg";

const LOCALES = [
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { text: t("home"), href: "/" },
    { text: t("about"), href: "#about" },
    { text: t("services"), href: "#services" },
    { text: t("portfolio"), href: "#portfolio" },
    { text: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141414]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-linear-to-b from-[#141414]/90 via-[#141414]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="h-9 w-auto text-white transition-transform duration-300 group-hover:scale-105" fill="white" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-gray-300 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs">
          {LOCALES.map((item) => (
            <button
              key={item.code}
              onClick={() => handleLanguageChange(item.code)}
              className={`px-2 py-0.5 rounded-full font-bold uppercase transition-all duration-200 ${
                locale === item.code
                  ? "bg-[#ff2e5f] text-white shadow-sm scale-105"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
