"use client";

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { colors } from "../constants/colors";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-md ${colors.navbarBg} border-b ${colors.navbarBorder} z-50`}
    >
      <nav
        className={`max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between ${colors.textPrimary}`}
      >
        <a
          href="#about"
          className={`text-xl md:text-2xl font-semibold bg-gradient-to-r ${colors.logoGradient} ${colors.logoText} hover:scale-110 transition duration-300`}
        >
          VidaBild 🧬
        </a>

        <ul className="hidden md:flex gap-10">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">Sobre</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contents">Conteúdos</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contacts">Contatos</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          <BiMenu className="text-3xl" />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute top-16 left-0 right-0 ${colors.menuBg} border-b ${colors.menuBorder} space-y-5 py-16 text-center shadow-lg`}
            >
              {["sobre", "conteúdos", "contatos"].map((item) => (
                <li
                  key={item}
                  className="group px-10 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                    <span className={`text-lg ${colors.menuItemText} ${colors.menuItemHover} transition-colors`}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
