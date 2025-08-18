"use client";

import { colors } from "../constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";

type Exam = {
  title: string;
  principle: string;
  procedure: string;
  preparation: string;
  imgSrc: string;
};

const exams: Exam[] = [
  {
    title: "Ultrassom Abdominal",
    principle:
      "O ultrassom usa ondas sonoras de alta frequência para gerar imagens dos órgãos internos.",
    procedure:
      "O paciente fica deitado, o técnico aplica gel e move o transdutor sobre a região abdominal.",
    preparation: "Jejum de 6-8 horas é recomendado para melhor visualização.",
    imgSrc: "./bg_01.png",
  },
  {
    title: "Ultrassom Obstétrico",
    principle:
      "Avalia o desenvolvimento fetal e a saúde do bebê usando ondas sonoras.",
    procedure:
      "Aplicação de gel sobre o abdômen e movimentação do transdutor para captar imagens do feto.",
    preparation:
      "Bebês ou gestantes devem ingerir líquidos para a bexiga cheia melhorar a visualização.",
    imgSrc: "./bg_01.png",
  },
  {
    title: "Ultrassom de Tireoide",
    principle:
      "Avalia tamanho, forma e nódulos da glândula tireoide por ondas sonoras.",
    procedure:
      "Paciente deitado, pescoço exposto, transdutor movido sobre a região da tireoide.",
    preparation: "Sem preparo especial necessário.",
    imgSrc: "./bg_01.png",
  },
];

const ExamsSection: React.FC = () => {
  return (
    <div
      className="
      flex flex-col
      shadow-lg
      rounded-2xl
      p-16
      "
    >
      <h1
        className={`
          text-3xl md:text-5xl lg:text-5xl font-semibold
          ${colors.aboutGradientH1}
          text-transparent bg-clip-text
          pb-2
          `}
      >
        Nossos Exames
      </h1>

      <p>
        Buscamos trazer os principais exames para atender às necessidades da
        região. Apesar de estarmos estebelecidos, também estamos sempre nos
        modernizando, a fim de melhorar cada vez mais nosso atendimento para com
        nossos pacientes.
      </p>

      <p>Confira a seguir nossos principais procedimentos:</p>

      <section
        className={`
        py-16 px-6
        `}
      >
        <motion.div className="max-w-6xl mx-auto space-y-20">
          {exams.map((exam, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              key={exam.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <Image
                  src={exam.imgSrc}
                  alt={exam.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3
                  className={`text-2xl font-bold bg-clip-text ${colors.aboutGradientH3} `}
                >
                  {exam.title}
                </h3>
                <p>
                  <strong>Princípio:</strong> {exam.principle}
                </p>
                <p>
                  <strong>Como é feito:</strong> {exam.procedure}
                </p>
                <p>
                  <strong>Preparo:</strong> {exam.preparation}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ExamsSection;
