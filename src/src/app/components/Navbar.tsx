"use client";

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { colors } from "../constants/constants";
import { WhatsAppButton } from "./WhatsAppButton";
import {
  NAV_ITEMS,
  LINK_CLASSES,
  LOGO_TEXT,
  LOGO_ALT,
  WHATSAPP_MESSAGE,
  WHATSAPP_LABEL,
  IMG_LOGO_SRC,
} from "../constants/constants";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-md ${colors.navbarBg} border-b ${colors.navbarBorder} z-50`}
    >
      <nav
        className={`max-w-7xl mx-auto py-6 px-6 lg:px-32 flex flex-row items-center justify-between ${colors.textPrimary}`}
      >
        <Link
          href="/"
          className={`text-xl md:text-2xl font-semibold bg-gradient-to-r ${colors.logoGradient} ${colors.logoText} hover:scale-110 transition duration-300`}
        >
          <div className="flex items-center gap-2">
            {LOGO_TEXT}
            <Image
              src={`${IMG_LOGO_SRC}`}
              width={45}
              height={45}
              alt={LOGO_ALT}
            />
          </div>
        </Link>

        {/* Menu para telas médias e grandes */}
        <ul className="hidden md:flex items-center gap-10">
          <li className={LINK_CLASSES}>
            <WhatsAppButton message={WHATSAPP_MESSAGE} label={WHATSAPP_LABEL} />
          </li>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className={LINK_CLASSES}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Botão do menu para telas pequenas */}
        <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          <BiMenu className="text-3xl" />
        </button>

        {/* Menu expandido para telas pequenas */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden absolute top-16 left-0 right-0 ${colors.menuBg} border-b ${colors.menuBorder} py-16 space-y-5 text-center shadow-lg`}
            >
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className={`group px-10 opacity-90 hover:opacity-100 transition-opacity`}
                >
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    <span
                      className={`text-lg ${colors.menuItemText} ${colors.menuItemHover} transition-colors`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
              <li className="px-10">
                <WhatsAppButton
                  message={WHATSAPP_MESSAGE}
                  label={WHATSAPP_LABEL}
                />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
