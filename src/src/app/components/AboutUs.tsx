"use client";

import Image from "next/image";
import { colors } from "../constants/constants";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Missão da clínica */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-bold mb-4 ${colors.aboutGradientH1} text-transparent bg-clip-text`}
            >
              Nossa Missão
            </h2>
            <p className={`${colors.textPrimary} mb-2`}>
              A clínica surge com o propósito de oferecer atendimento de
              qualidade e humanizado aos pacientes da região. Nosso compromisso
              é compreender as necessidades individuais de cada paciente e
              proporcionar conforto e segurança durante todos os procedimentos
              de imagem.
            </p>
            <p className={colors.textPrimary}>
              Buscamos constantemente atualizar nossas práticas e tecnologias
              para garantir precisão nos exames e resultados confiáveis, sempre
              priorizando o bem-estar de quem nos procura.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/bg_01.png"
              alt="Missão da clínica"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Valores da clínica */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-bold mb-4 ${colors.aboutGradientH3} text-transparent bg-clip-text`}
            >
              Nossos Valores
            </h2>
            <p className={`${colors.textPrimary} mb-2`}>
              Transparência, ética e responsabilidade são os pilares que guiam
              nosso trabalho. Cada exame realizado é tratado com atenção aos
              detalhes, garantindo que os resultados reflitam a realidade
              clínica de forma clara e precisa.
            </p>
            <p className={colors.textPrimary}>
              Valorizamos a relação de confiança com nossos pacientes,
              oferecendo informações detalhadas e acompanhamento personalizado,
              promovendo saúde e segurança em cada atendimento.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/bg_01.png"
              alt="Valores da clínica"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Estrutura da clínica */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-bold mb-4 ${colors.aboutGradientH1} text-transparent bg-clip-text`}
            >
              Nossa Estrutura
            </h2>
            <p className={`${colors.textPrimary} mb-2`}>
              A clínica possui instalações modernas e equipadas com tecnologia
              de ponta em exames de imagem, garantindo conforto e segurança aos
              pacientes. Cada sala é planejada para proporcionar um ambiente
              acolhedor e eficiente.
            </p>
            <p className={colors.textPrimary}>
              O ambiente foi cuidadosamente projetado para otimizar o fluxo de
              atendimento, reduzir o tempo de espera e manter a privacidade e
              conforto em todos os momentos.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/bg_01.png"
              alt="Estrutura da clínica"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Equipe médica */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-bold mb-4 ${colors.aboutGradientH3} text-transparent bg-clip-text`}
            >
              Equipe Médica
            </h2>
            <p className={`${colors.textPrimary} mb-2`}>
              Contamos com uma equipe altamente qualificada, liderada pelo
              médico responsável técnico, especialista em exames de imagem. Cada
              profissional é selecionado por sua experiência, ética e dedicação
              ao paciente.
            </p>
            <p className={colors.textPrimary}>
              A clínica investe em treinamento contínuo, garantindo que cada
              membro da equipe esteja alinhado às melhores práticas médicas e
              protocolares, promovendo precisão e segurança em todos os
              procedimentos.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/bg_01.png"
              alt="Equipe médica"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Compromisso com a comunidade */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2
              className={`text-3xl font-bold mb-4 ${colors.aboutGradientH1} text-transparent bg-clip-text`}
            >
              Compromisso com a Comunidade
            </h2>
            <p className={`${colors.textPrimary} mb-2`}>
              A clínica entende seu papel social e busca contribuir com a saúde
              da comunidade, oferecendo acesso a exames de qualidade e
              promovendo campanhas de conscientização sobre cuidados
              preventivos.
            </p>
            <p className={colors.textPrimary}>
              Nosso objetivo é fortalecer a relação entre a clínica e os
              pacientes locais, garantindo que todos recebam atenção, respeito e
              serviços de alta qualidade, refletindo nosso compromisso com a
              saúde regional.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/bg_01.png"
              alt="Compromisso com a comunidade"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
