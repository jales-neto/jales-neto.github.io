"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { colors, getWhatsappContactUrl } from "../constants/constants";

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
            VidaBild
          </h1>
          <p className={`${colors.footerText} max-w-xs`}>
            Clínica em diagnósticos precisos e atendimento humanizado.
          </p>
        </div>

        {/* Links úteis */}
        <div className="flex flex-col gap-2">
          <h2 className={`font-semibold ${colors.footerText}`}>Links</h2>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="/about"
                className={`${colors.footerText} ${colors.footerLinkHover}`}
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="/exams"
                className={`${colors.footerText} ${colors.footerLinkHover}`}
              >
                Exames
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-2">
          <h2 className={`font-semibold ${colors.footerText}`}>Contato</h2>
          <p className={`${colors.footerText}`}>Telefone: (00) 0000-0000</p>
          <p className={`${colors.footerText}`}>Email: contato@exemplo.com</p>
          <div className="flex gap-4 mt-2 text-gray-200">
            <a href="#" className={`${colors.footerLinkHover}`}>
              <FaFacebookF />
            </a>
            <a href="#" className={`${colors.footerLinkHover}`}>
              <FaInstagram />
            </a>
            <a
              href={getWhatsappContactUrl("Olá!")}
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
        &copy; {currentYear} VidaBild. Todos os direitos reservados.
        <div className={`mt-2 text-xs`}>
          Responsável técnico: Dr. Jales Abraão Neto - CRM-SC XXXXX |
          Desenvolvido por{" "}
          <a
            href="https://github.com/LucasAlfare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Francisco Lucas
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
