export const colors = {
  navbarBg: "bg-white/90",
  navbarBorder: "border-gray-300",
  textGradient: "from-teal-400 via-cyan-500 to-blue-500",
  logoGradient: "from-blue-600 via-sky-500 to-blue-400",
  logoText: "text-transparent bg-clip-text",
  navbarText: "text-gray-800",
  navbarTextHover: "hover:text-teal-500",
  aboutTagBg: "bg-teal-50",
  aboutGradientH1: "bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-500",
  aboutGradientH3: "bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-600",
  buttonPrimary: "bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-400",
  buttonPrimaryText: "text-white",
  buttonPrimaryHover: "hover:opacity-90",
  buttonSecondary: "bg-cyan-100",
  buttonSecondaryText: "text-cyan-700",
  buttonSecondaryHover: "hover:bg-cyan-200",
  menuBg: "bg-white/95",
  menuBorder: "border-gray-300",
  menuItemText: "text-gray-800",
  menuItemHover: "hover:text-teal-500",
  radialBg:
    "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,180,180,0.2),rgba(0,60,80,0))]",
  pageBg: "bg-gray-50",
  textPrimary: "text-gray-800",
  textSecondary: "text-gray-600",
  footerBg: "bg-gray-900",
  footerText: "text-gray-200",
  footerLinkHover: "hover:text-teal-400",
};

export const getWhatsappContactUrl = (message: string) => {
  return `https://wa.me/+5599982687036${message ? `?text=${encodeURIComponent(message)}` : ""}`;
};

// sources paths
export const IMG_LOGO_SRC = "/logo_01.png";
export const IMG_EXAM_ULTRASSOM_ABDOMINAL_SRC = "./bg_01.png";
export const IMG_EXAM_ULTRASSOM_OBSTETRICO_SRC = "./bg_01.png";
export const IMG_EXAM_ULTRASSOM_TIREOIDE_SRC = "./bg_01.png";
export const IMG_ABOUT_IMAGE_VALUES_SRC = "/bg_01.png";
export const IMG_ABOUT_IMAGE_MISSION_SRC = "/bg_01.png";
export const IMG_ABOUT_IMAGE_STRUCTURE_SRC = "/bg_01.png";
export const IMG_ABOUT_IMAGE_TEAM_SRC = "/bg_01.png";
export const IMG_ABOUT_IMAGE_COMMUNITY_SRC = "/bg_01.png";

// Labels de navegação
export const NAV_ITEM_SOBRE = "Sobre nós";
export const NAV_ITEM_EXAMES = "Exames";

// Logo
export const LOGO_TEXT = "VidaBild";
export const LOGO_ALT = "logo";

// WhatsAppButton
export const WHATSAPP_MESSAGE = "Olá";
export const WHATSAPP_LABEL = "Contato";

// Classes e efeitos podem permanecer inline, mas se quiser, podem virar constantes
export const LINK_CLASSES =
  "opacity-70 hover:opacity-100 transition-opacity duration-300";

// Se quiser mapear navItems com as consts:
export const NAV_ITEMS = [
  { label: NAV_ITEM_SOBRE, href: "/about" },
  { label: NAV_ITEM_EXAMES, href: "/exams" },
];

export const ABOUT_TAG = "Exames de imagem";
export const PRESENTATION_H1 = "VidaBild";
export const PRESENTATION_H3 = "Especializados em lhe atender.";

export const BUTTON_EXAMS = "Nossos exames";
export const BUTTON_WHATSAPP = "Agende seu Exame";

export const WHATSAPP_MESSAGE_BOOKING = "quero agendaaaarrrr";

// Logo e descrição
export const FOOTER_LOGO_TEXT = "VidaBild";
export const FOOTER_DESCRIPTION =
  "Clínica em diagnósticos precisos e atendimento humanizado.";

export const FOOTER_SECTION_LINKS = "Links";
export const FOOTER_SECTION_CONTACT = "Contato";

export const FOOTER_LINK_ABOUT = "Sobre nós";
export const FOOTER_LINK_EXAMS = "Exames";

export const FOOTER_PHONE = "Telefone: (00) 0000-0000";
export const FOOTER_EMAIL = "Email: contato@exemplo.com";
export const FOOTER_WHATSAPP_MESSAGE = "Olá!";

export const FOOTER_COPYRIGHT_PREFIX = "Todos os direitos reservados.";
export const FOOTER_RESPONSIBLE_TECH =
  "Responsável técnico: Dr. Jales Abraão Neto - CRM-SC XXXXX |";
export const FOOTER_DEVELOPER = "Francisco Lucas";

export const ABOUT_SECTION_MISSION = "Nossa Missão";
export const ABOUT_SECTION_VALUES = "Nossos Valores";
export const ABOUT_SECTION_STRUCTURE = "Nossa Estrutura";
export const ABOUT_SECTION_TEAM = "Equipe Médica";
export const ABOUT_SECTION_COMMUNITY = "Compromisso com a Comunidade";

export const ABOUT_MISSION_P1 =
  "A clínica surge com o propósito de oferecer atendimento de qualidade e humanizado aos pacientes da região. Nosso compromisso é compreender as necessidades individuais de cada paciente e proporcionar conforto e segurança durante todos os procedimentos de imagem.";
export const ABOUT_MISSION_P2 =
  "Buscamos constantemente atualizar nossas práticas e tecnologias para garantir precisão nos exames e resultados confiáveis, sempre priorizando o bem-estar de quem nos procura.";

export const ABOUT_VALUES_P1 =
  "Transparência, ética e responsabilidade são os pilares que guiam nosso trabalho. Cada exame realizado é tratado com atenção aos detalhes, garantindo que os resultados reflitam a realidade clínica de forma clara e precisa.";
export const ABOUT_VALUES_P2 =
  "Valorizamos a relação de confiança com nossos pacientes, oferecendo informações detalhadas e acompanhamento personalizado, promovendo saúde e segurança em cada atendimento.";

export const ABOUT_STRUCTURE_P1 =
  "A clínica possui instalações modernas e equipadas com tecnologia de ponta em exames de imagem, garantindo conforto e segurança aos pacientes. Cada sala é planejada para proporcionar um ambiente acolhedor e eficiente.";
export const ABOUT_STRUCTURE_P2 =
  "O ambiente foi cuidadosamente projetado para otimizar o fluxo de atendimento, reduzir o tempo de espera e manter a privacidade e conforto em todos os momentos.";

export const ABOUT_TEAM_P1 =
  "Contamos com uma equipe altamente qualificada, liderada pelo médico responsável técnico, especialista em exames de imagem. Cada profissional é selecionado por sua experiência, ética e dedicação ao paciente.";
export const ABOUT_TEAM_P2 =
  "A clínica investe em treinamento contínuo, garantindo que cada membro da equipe esteja alinhado às melhores práticas médicas e protocolares, promovendo precisão e segurança em todos os procedimentos.";

export const ABOUT_COMMUNITY_P1 =
  "A clínica entende seu papel social e busca contribuir com a saúde da comunidade, oferecendo acesso a exames de qualidade e promovendo campanhas de conscientização sobre cuidados preventivos.";
export const ABOUT_COMMUNITY_P2 =
  "Nosso objetivo é fortalecer a relação entre a clínica e os pacientes locais, garantindo que todos recebam atenção, respeito e serviços de alta qualidade, refletindo nosso compromisso com a saúde regional.";

export const ABOUT_IMAGE_MISSION_ALT = "Missão da clínica";
export const ABOUT_IMAGE_VALUES_ALT = "Valores da clínica";
export const ABOUT_IMAGE_STRUCTURE_ALT = "Estrutura da clínica";
export const ABOUT_IMAGE_TEAM_ALT = "Equipe médica";
export const ABOUT_IMAGE_COMMUNITY_ALT = "Compromisso com a comunidade";

export const EXAMS_SECTION_TITLE = "Nossos Exames";
export const EXAMS_SECTION_DESC1 =
  "Buscamos trazer os principais exames para atender às necessidades da região. Apesar de estarmos estebelecidos, também estamos sempre nos modernizando, a fim de melhorar cada vez mais nosso atendimento para com nossos pacientes.";
export const EXAMS_SECTION_DESC2 =
  "Confira a seguir nossos principais procedimentos:";

export const EXAMS_LIST = [
  {
    title: "Ultrassom Abdominal",
    principle:
      "O ultrassom usa ondas sonoras de alta frequência para gerar imagens dos órgãos internos.",
    procedure:
      "O paciente fica deitado, o técnico aplica gel e move o transdutor sobre a região abdominal.",
    preparation: "Jejum de 6-8 horas é recomendado para melhor visualização.",
    imgSrc: IMG_EXAM_ULTRASSOM_ABDOMINAL_SRC,
  },
  {
    title: "Ultrassom Obstétrico",
    principle:
      "Avalia o desenvolvimento fetal e a saúde do bebê usando ondas sonoras.",
    procedure:
      "Aplicação de gel sobre o abdômen e movimentação do transdutor para captar imagens do feto.",
    preparation:
      "Bebês ou gestantes devem ingerir líquidos para a bexiga cheia melhorar a visualização.",
    imgSrc: IMG_EXAM_ULTRASSOM_OBSTETRICO_SRC,
  },
  {
    title: "Ultrassom de Tireoide",
    principle:
      "Avalia tamanho, forma e nódulos da glândula tireoide por ondas sonoras.",
    procedure:
      "Paciente deitado, pescoço exposto, transdutor movido sobre a região da tireoide.",
    preparation: "Sem preparo especial necessário.",
    imgSrc: IMG_EXAM_ULTRASSOM_TIREOIDE_SRC,
  },
];

export const EXAM_LABEL_PRINCIPLE = "Princípio:";
export const EXAM_LABEL_PROCEDURE = "Como é feito:";
export const EXAM_LABEL_PREPARATION = "Preparo:";
