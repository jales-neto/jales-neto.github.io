import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { colors, getWhatsappContactUrl } from "../constants/constants";

const Presentation: React.FC = () => (
  <div
    id="about"
    className="relative mx-auto w-full max-h-screen p-4 md:p-2 lg:p-4 bg-cover bg-center shadow-lg"
  >
    <Image
      src="/bg_02.png"
      alt="bg"
      fill
      priority
      className="object-cover -z-10 rounded-b-2xl shadow-lg"
    />

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center md:items-start justify-center gap-3 w-full max-w-3xl bg-blue-50/55 rounded-xl p-8 md:p-12"
      >
        <span
          className={`px-2 py-1 rounded-full text-xs md:text-sm ${colors.aboutTagBg} ${colors.textPrimary}`}
        >
          Exames de imagem
        </span>

        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-semibold ${colors.aboutGradientH1} text-transparent bg-clip-text`}
        >
          VidaBild
        </h1>

        <div className="rounded-full bg-blue-50/75 p-2">
          <h3
            className={`text-xl md:text-2xl lg:text-3xl font-light bg-gradient-to-r ${colors.aboutGradientH3} text-transparent bg-clip-text`}
          >
            Especializados em lhe atender.
          </h3>
        </div>

        <div className="mt-6 flex gap-4">
          <Link href="/exams">
            <button
              className={`px-6 py-3 rounded-lg font-semibold ${colors.buttonSecondaryText} ${colors.buttonSecondary} ${colors.buttonSecondaryHover} transition hover:scale-110`}
            >
              Nossos exames
            </button>
          </Link>

          <Link href={getWhatsappContactUrl("quero agendaaaarrrr")}>
            <button
              className={`px-6 py-3 rounded-lg font-semibold ${colors.buttonPrimaryText} ${colors.buttonPrimary} ${colors.buttonPrimaryHover} transition hover:scale-110`}
            >
              <div className="flex items-center gap-1">
                <FaWhatsapp size={25} />
                Agende seu Exame
              </div>
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default Presentation;
