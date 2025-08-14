import React from "react";
import { colors } from "../constants/colors";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section
      className={`relative ${colors.gradientStart} ${colors.gradientEnd} bg-gradient-to-r text-white`}
    >
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Simplesmente testando <br /> o Pipeline de desenvolvimento !!!
          </h1>
          <p className="text-lg">
            Dá pra colocar alguns textos, mudar design, layout, etc. Site estático é muito bom pra começar. A gente tem flexibilidade pra montar essas coisas sem precisar se preocupar com &quot;backend&quot; e tal. Então como rascunho e como experimento do pipeline de desenvolvimento também é bom pra ir testando
          </p>
          <div className="flex space-x-4 items-center">
            <button className={`${colors.buttonPrimary} px-6 py-3 rounded-lg`}>
              Get Started
            </button>
            <button
              className={`${colors.buttonSecondary} px-4 py-3 rounded-full`}
            >
              ▶
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <Image
            src={"https://picsum.photos/300/400"}
            width={300}
            height={400}
            alt="Doctors"
            className="rounded-lg shadow-lg"
          ></Image>
        </div>
      </div>
      {/* Wave shape */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C50,100 150,0 300,50 L300,0 L0,0 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};
