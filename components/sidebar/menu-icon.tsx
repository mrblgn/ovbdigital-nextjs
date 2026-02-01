import React from "react";
import styles from "@/styles/menu-icon.module.css";

const MenuIcon: React.FC<IMenuButton> = ({ onClick, isOpen }) => (
  <div
    className="w-[5.625rem] h-[5.625rem] justify-center content-center select-none hover:cursor-pointer"
    onClick={onClick}
  >
    <input
      type="checkbox"
      role="button"
      aria-label="Display the menu"
      className={styles.menu}
      checked={isOpen}
    />
  </div>
);

export default MenuIcon;
