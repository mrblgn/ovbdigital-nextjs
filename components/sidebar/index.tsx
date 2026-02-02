"use client";

import { useState } from "react";
import { Logo } from "./logo";
import MenuIcon from "./menu-icon";
import Brand from "./brand";
import SideMenu from "./side-menu";

export function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const menuToggle = () => setOpen(!isOpen);
  return (
    <header
      id="sidebar"
      className="fixed top-0 left-0 bottom-0 z-50 flex flex-row"
    >
      <nav className="w-[5.625rem] flex flex-col items-center text-center bg-white">
        <Logo />
        <Brand />
        <MenuIcon onClick={menuToggle} {...{isOpen}} />
      </nav>
      <SideMenu onClick={menuToggle} {...{ isOpen }} />
    </header>
  );
}
