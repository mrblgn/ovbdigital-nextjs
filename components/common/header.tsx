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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        scrolled || mobileMenuOpen
          ? "bg-[#141414]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-linear-to-b from-[#141414]/90 via-[#141414]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <Logo className="h-9 w-auto text-white transition-transform duration-300 group-hover:scale-105" fill="white" />
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Right Section: Desktop Language Selector & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Language Selector */}
          <div className="hidden md:flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs">
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-200"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              // Close (X) Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100 py-4 border-t border-white/10 mt-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-6 px-6">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white text-sm uppercase tracking-widest font-semibold transition-colors duration-200 py-1"
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Mobile Language Selector */}
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs">
              {LOCALES.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    handleLanguageChange(item.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1 rounded-full font-bold uppercase transition-all duration-200 ${
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
        </div>
      </div>
    </header>
  );
}
