export type ProjectLanguage = "en" | "pt";

type LocalizedText = {
  en: string;
  pt: string;
};

type LocalizedProject = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tech: string[];
  image: string;
  href: string;
};

export type ProjectCardData = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  href: string;
};

// Single source of truth for project cards used across homepage and technology pages.
const localizedProjects: LocalizedProject[] = [
  {
    id: "lingochat",
    title: {
      en: "LingoChat (Real-time Translation Chat App)",
      pt: "LingoChat (Aplicacao de Chat com Traducao em Tempo Real)",
    },
    description: {
      en: "A chat app concept focused on real-time translation and language detection to support multilingual conversations.",
      pt: "Um conceito de aplicacao de chat focado em traducao em tempo real e detecao de idioma para apoiar conversas multilingues.",
    },
    tech: ["Next.js", "TypeScript", "APIs", "UI/UX"],
    image: "/projects/lingochat.jpg",
    href: "https://www.youtube.com/watch?v=g4qtV2MkSrs&t=248s",
  },
  {
    id: "international-payment",
    title: {
      en: "International Payment system (Banking app)",
      pt: "Sistema de Pagamentos Internacional (Aplicacao Bancaria)",
    },
    description: {
      en: "Secure registration and authentication, local and international payments, and multi-currency support in a user-focused mobile experience.",
      pt: "Registo e autenticacao seguros, pagamentos locais e internacionais, e suporte a multiplas moedas numa experiencia focada no utilizador.",
    },
    tech: ["Kotlin", "Android", "SQLite", "Firebase"],
    image: "/projects/internationalPayment.jpg",
    href: "https://www.youtube.com/watch?v=VVqGxbS9MRM",
  },
  {
    id: "timetap",
    title: {
      en: "TimeTap (Scheduling App)",
      pt: "TimeTap (Aplicacao de Agendamento)",
    },
    description: {
      en: "A scheduling solution for task planning, reminders, and structured appointment workflows.",
      pt: "Uma solucao de agendamento para planeamento de tarefas, lembretes e fluxos de marcacao estruturados.",
    },
    tech: ["React", "TypeScript", "SQL"],
    image: "/projects/TimetapPic.jpg",
    href: "https://www.youtube.com/watch?v=LbB8C7H4UAc",
  },
  {
    id: "kipido",
    title: {
      en: "Kipido (Glass Repair Service Website)",
      pt: "Kipido (Website de Reparacao de Vidros)",
    },
    description: {
      en: "Business website for service visibility, quote requests, and customer communication with MVC architecture.",
      pt: "Website de negocio para visibilidade de servicos, pedidos de orcamento e comunicacao com clientes com arquitetura MVC.",
    },
    tech: ["C# / MVC", "HTML", "CSS"],
    image: "/projects/KipidoPic.png",
    href: "https://kipidowebapp20250811114617-grepejakgchaceh5.australiacentral-01.azurewebsites.net/",
  },
  {
    id: "dykana",
    title: {
      en: "Dykana Website",
      pt: "Website Dykana",
    },
    description: {
      en: "DK is a strategic partner that supports mining projects from concession acquisition to mine closure, delivering expertise throughout every stage of the mining value chain.",
      pt: "A DK e uma parceira estrategica que apoia projetos mineiros desde a aquisicao de concessoes ate ao encerramento da mina, com experiencia em toda a cadeia de valor mineira.",
    },
    tech: ["C#", "ASP.NET Core", "Azure", "SQL"],
    image: "/projects/Dyakana.PNG",
    href: "https://dykanawebapp20250808122525-gqenasejgmhqfgga.canadacentral-01.azurewebsites.net/",
  },
  {
    id: "materfamilia",
    title: {
      en: "Materfamilia Website",
      pt: "Website da Materfamilia",
    },
    description: {
      en: "Materfamilia is a social enterprise focused on empowering female-headed households (FHH16) through legal, financial, and coaching interventions to restore financial stability, expand access to justice, and reduce vulnerability to gender-based violence.",
      pt: "A Materfamilia e uma empresa social dedicada ao empoderamento de agregados familiares chefiados por mulheres (FHH16), por meio de intervencoes juridicas, financeiras e de coaching. O objetivo e restaurar a estabilidade financeira, ampliar o acesso a justica e reduzir a vulnerabilidade a violencia baseada no genero.",
    },
    tech: ["C#", "ASP.NET Core", "CSS"],
    image: "/projects/mater.png",
    href: "https://materfamilia-hpdvhschf6frb5cy.canadacentral-01.azurewebsites.net/",
  },
];

export function getLocalizedProjects(
  language: ProjectLanguage,
): ProjectCardData[] {
  return localizedProjects.map((project) => ({
    id: project.id,
    title: project.title[language],
    description: project.description[language],
    tech: [...project.tech],
    image: project.image,
    href: project.href,
  }));
}
