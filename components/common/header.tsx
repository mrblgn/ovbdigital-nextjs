"use client";

import { useEffect, useState } from "react";
import Logo from "@/assets/svgs/logo-svg";
import {Link} from "@/i18n/routing";

const LINKS = [
  { text: "Home", link: "/" },
  { text: "About Us", link: "/about" },
  { text: "Services", link: "/services" },
  // { text: "Portfolio", link: "/protfolio" },
  // { text: "Technologies", link: "/technologies" },
  // { text: "Process", link: "/process" },
  // { text: "Blog", link: "/blog" },
  // { text: "Careers", link: "/careers" },
  { text: "FAQ", link: "/faq" },
  { text: "Contact", link: "/contact" },
];
const Header = () => {
  const [headerClass, setHeaderClass] = useState("absolute");
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

          <li key={text}><Link href={link}>{text}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
