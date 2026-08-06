"use client";

import { useEffect, useState } from "react";
import Logo from "@/assets/svgs/logo-svg";
import {Link} from "@/i18n/routing";
import { useTranslations } from "next-intl";

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
const Header = () => {
  const [headerClass, setHeaderClass] = useState("absolute");
    const t = useTranslations("header");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderClass(window.scrollY > 82 ? "sticky bg-black/40" : "absolute");
    });
  }, []);
  return (
    <header className={`${headerClass} font-montserrat top-0 w-full z-50 px-12 py-4`}>
      <nav className="flex items-center justify-between">
        <Link href="/">
        <Logo className="h-12" fill="white" />
        </Link>
        <ul className="flex text-white uppercase text-sm font-semibold space-x-4 hover:cursor-pointer">
          {LINKS.map(({text, link}) => (

          <li key={text}><Link href={link}>{t(text)}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
