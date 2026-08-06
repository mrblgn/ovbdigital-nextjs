"use client";

import { useEffect, useState } from "react";
import Logo from "@/assets/svgs/logo-svg";
import { Link, locales, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import EnSvg from "@/assets/svgs/en-svg";
import NlSvg from "@/assets/svgs/nl-svg";
import TrSvg from "@/assets/svgs/tr-svg";

const LINKS = [
  { text: "home", link: "/" },
  { text: "about", link: "/about" },
  { text: "services", link: "/services" },
  // { text: "portfolio", link: "/protfolio" },
  // { text: "technologies", link: "/technologies" },
  // { text: "process", link: "/process" },
  // { text: "blog", link: "/blog" },
  // { text: "careers", link: "/careers" },
  { text: "faq", link: "/faq" },
  { text: "contact", link: "/contact" },
];

const LOCALE_ICON = {
  en: <EnSvg />,
  nl: <NlSvg />,
  tr: <TrSvg />,
};

const LangComponent: React.FC<{ locale: keyof typeof LOCALE_ICON }> = ({
  locale,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const handleLangSelect = (_locale: string) => {
    router.push(pathname, { locale: _locale });
    toggle();
  };

  return (
    <li className="relative">
      <button
        className="flex space-x-2 items-center uppercase hover:cursor-pointer"
        type="button"
        onClick={toggle}
      >
        <span>{locale}</span>
        {LOCALE_ICON[locale]}
      </button>
      <div className={`absolute top-6 ${open ? "visible" : "hidden"}`}>
        {locales.map((_locale) =>
          _locale !== locale ? (
            <button
              key={_locale}
              type="button"
              onClick={() => handleLangSelect(_locale)}
              className="flex items-center space-x-2 py-1 uppercase hover:cursor-pointer"
            >
              <span>{_locale}</span>
              {LOCALE_ICON[_locale]}
            </button>
          ) : undefined,
        )}
      </div>
    </li>
  );
};
const Header: React.FC<{ locale: string }> = ({ locale }) => {
  const [headerClass, setHeaderClass] = useState("absolute");
  const t = useTranslations("header");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderClass(window.scrollY > 82 ? "sticky bg-black/40" : "absolute");
    });
  }, []);
  return (
    <header
      className={`${headerClass} font-montserrat top-0 w-full z-50 px-12 py-4`}
    >
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Logo className="h-12" fill="white" />
        </Link>
        <ul className="flex text-white uppercase text-sm font-semibold space-x-4 hover:cursor-pointer">
          {LINKS.map(({ text, link }) => (
            <li key={text}>
              <Link href={link}>{t(text)}</Link>
            </li>
          ))}
          <LangComponent locale={locale as keyof typeof LOCALE_ICON} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
