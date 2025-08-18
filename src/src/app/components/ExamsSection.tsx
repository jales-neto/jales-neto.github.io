"use client";

import {
  colors,
  EXAMS_LIST,
  EXAMS_SECTION_TITLE,
  EXAMS_SECTION_DESC1,
  EXAMS_SECTION_DESC2,
  EXAM_LABEL_PRINCIPLE,
  EXAM_LABEL_PROCEDURE,
  EXAM_LABEL_PREPARATION,
} from "../constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const ExamsSection: React.FC = () => {
  return (
    <div className="flex flex-col shadow-lg rounded-2xl p-16">
      <h1
        className={`
          text-3xl md:text-5xl lg:text-5xl font-semibold
          ${colors.aboutGradientH1}
          text-transparent bg-clip-text
          pb-2
        `}
      >
        {EXAMS_SECTION_TITLE}
      </h1>

      <p>{EXAMS_SECTION_DESC1}</p>
      <p>{EXAMS_SECTION_DESC2}</p>

      <section className="py-16 px-6">
        <motion.div className="max-w-6xl mx-auto space-y-20">
          {EXAMS_LIST.map((exam, index) => (
            <motion.div
              key={exam.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  className={`text-2xl font-bold bg-clip-text ${colors.aboutGradientH3}`}
                >
                  {exam.title}
                </h3>
                <p>
                  <strong>{EXAM_LABEL_PRINCIPLE}</strong> {exam.principle}
                </p>
                <p>
                  <strong>{EXAM_LABEL_PROCEDURE}</strong> {exam.procedure}
                </p>
                <p>
                  <strong>{EXAM_LABEL_PREPARATION}</strong> {exam.preparation}
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
