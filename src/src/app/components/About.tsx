import * as React from "react";
import { motion } from "framer-motion";
import { colors } from "../constants/colors";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-1 md:p-2 lg:p-4 bg-cover bg-center"
      id="about"
      style={{ backgroundImage: "url('/bg_01.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-3
                       bg-blue-50/75 backdrop-blur-md rounded-xl p-8 md:p-12 w-full max-w-3xl"
        >
          <span
            className={`px-2 py-1 ${colors.aboutTagBg} rounded-full text-xs md:text-sm ${colors.textPrimary}`}
          >
            Exames de imagem
          </span>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r ${colors.aboutGradientH1} text-transparent bg-clip-text`}
          >
            Clínica Vida Bild
          </h1>

          <h3
            className={`text-xl md:text-2xl lg:text-3xl font-light bg-gradient-to-r ${colors.aboutGradientH3} text-transparent bg-clip-text`}
          >
            Especializados em lhe atender.
          </h3>

          <div className="mt-6 flex gap-4">
            <Link href={"/booking"}>
              <button
                className={`px-6 py-3 rounded-lg font-semibold ${colors.buttonPrimaryText} ${colors.buttonPrimary} ${colors.buttonPrimaryHover} transition hover:scale-110`}
              >
                Agende seu Exame
              </button>
            </Link>
            <button
              className={`px-6 py-3 rounded-lg font-semibold ${colors.buttonSecondaryText} ${colors.buttonSecondary} ${colors.buttonSecondaryHover} transition hover:scale-110`}
            >
              Nossos exames
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
