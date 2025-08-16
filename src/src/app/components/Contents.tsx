"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { colors } from "../constants/colors";

const Contents: React.FC = () => {
  return (
    <motion.div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      id="contents"
    >
      <h2 className={`text-4xl md:text-5xl font-semibold bg-gradient-to-r ${colors.textGradient} text-transparent bg-clip-text mb-6`}>
        Nossos Serviços
      </h2>
      <p className={colors.textSecondary}>
        Aqui você pode colocar os exames de imagem, consultas e outros serviços oferecidos pela clínica. Pode detalhar cada serviço com pequenas descrições.
      </p>
    </motion.div>
  );
};

export default Contents;