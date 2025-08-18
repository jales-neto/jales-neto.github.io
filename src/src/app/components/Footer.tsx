"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  colors,
  FOOTER_LOGO_TEXT,
  FOOTER_DESCRIPTION,
  FOOTER_SECTION_LINKS,
  FOOTER_SECTION_CONTACT,
  FOOTER_LINK_ABOUT,
  FOOTER_LINK_EXAMS,
  FOOTER_PHONE,
  FOOTER_EMAIL,
  FOOTER_WHATSAPP_MESSAGE,
  FOOTER_COPYRIGHT_PREFIX,
  FOOTER_RESPONSIBLE_TECH,
  FOOTER_DEVELOPER,
  getWhatsappContactUrl,
} from "../constants/constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full ${colors.footerBg} py-10`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo e descrição */}
        <div className="flex flex-col gap-4">
          <h1
            className={`text-2xl font-bold bg-blue-50 ${colors.logoText} bg-clip-text`}
          >
            {FOOTER_LOGO_TEXT}
          </h1>
          <p className={`${colors.footerText} max-w-xs`}>
            {FOOTER_DESCRIPTION}
          </p>
        </div>

        {/* Links úteis */}
        <div className="flex flex-col gap-2">
          <h2 className={`font-semibold ${colors.footerText}`}>
            {FOOTER_SECTION_LINKS}
          </h2>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="/about"
                className={`${colors.footerText} ${colors.footerLinkHover}`}
              >
                {FOOTER_LINK_ABOUT}
              </a>
            </li>
            <li>
              <a
                href="/exams"
                className={`${colors.footerText} ${colors.footerLinkHover}`}
              >
                {FOOTER_LINK_EXAMS}
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-2">
          <h2 className={`font-semibold ${colors.footerText}`}>
            {FOOTER_SECTION_CONTACT}
          </h2>
          <p className={`${colors.footerText}`}>{FOOTER_PHONE}</p>
          <p className={`${colors.footerText}`}>{FOOTER_EMAIL}</p>
          <div className="flex gap-4 mt-2 text-gray-200">
            <a href="#" className={`${colors.footerLinkHover}`}>
              <FaFacebookF />
            </a>
            <a href="#" className={`${colors.footerLinkHover}`}>
              <FaInstagram />
            </a>
            <a
              href={getWhatsappContactUrl(FOOTER_WHATSAPP_MESSAGE)}
              className={`${colors.footerLinkHover}`}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`mt-10 border-t border-gray-700 pt-4 text-center ${colors.footerText} text-sm`}
      >
        &copy; {currentYear} {FOOTER_LOGO_TEXT}. {FOOTER_COPYRIGHT_PREFIX}
        <div className={`mt-2 text-xs`}>
          {FOOTER_RESPONSIBLE_TECH} Desenvolvido por{" "}
          <a
            href="https://github.com/LucasAlfare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            {FOOTER_DEVELOPER}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
