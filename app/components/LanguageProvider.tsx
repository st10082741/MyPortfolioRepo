"use client";

// This file manages the site's language switching.
// It stores translations for English and Portuguese and provides them to the rest of the app.
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "pt";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-language";

// This file holds all the English and Portuguese text used across the site.
// The app reads from this object depending on the selected language.
export const translations = {
  en: {
    navbar: {
      home: "Home",
      projectsSkills: "Projects & Skills",
      focus: "Focus",
      contact: "Contact",
    },
    hero: {
      tagline: "Technology Professional",
      title: "Victor Sumbo",
      description:
        "Full-stack .NET developer focused on building dependable systems from concept to delivery.",
      ctaPrimary: "Explore Technology",
      ctaSecondary: "View Focus",
      ctaCv: "Download CV",
      metrics: [
        { value: "1+", label: "Years across multiple sectors" },
        { value: "End-to-End", label: "Delivery from requirements to support" },
        {
          value: "Full Stack",
          label: "Frontend, backend, data, and integration",
        },
      ],
    },
    about: {
      eyebrow: "About",
      heading: "Engineering with business context",
      paragraphs: [
        "I am a technology professional and entrepreneur who builds and operates systems that support real-world business and organisational needs. My work sits at the intersection of software engineering, business operations, and multi-sector problem solving.",
        "I focus on practical outcomes, translating technical solutions into clear, actionable value for stakeholders and guiding initiatives from concept through execution.",
      ],
    },
    skills: {
      eyebrow: "Core Skills",
      heading:
        "Technologies and engineering capabilities used to deliver reliable solutions.",
      chips: [
        ".NET / C#",
        "React / Next.js",
        "TypeScript",
        "SQL",
        "HTML / CSS",
        "API Integration",
        "Entity Framework",
        "System Design",
      ],
    },
    education: {
      eyebrow: "Education",
      heading:
        "Academic foundation supporting software engineering and delivery work.",
      items: [
        {
          qualification: "Bachelor of Computer and Information Sciences",
          institution: "Varsity College",
          period: "Apr 2025",
          status: "Completed",
        },
        {
          qualification: "Higher National Certificate",
          institution: "Varsity College",
          period: "Jan 2021",
          status: "Completed",
        },
        {
          qualification: "Electrical Engineering Light",
          institution: "Northlink College",
          period: "Jan 2020",
          status: "Completed",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let’s build something meaningful",
      description:
        "Open to opportunities, collaborations, and conversations around product thinking, reliable systems, and thoughtful digital delivery.",
      directContact: "Direct contact",
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      quickReply: "Prefer a quick reply?",
      quickReplyText:
        "I’m happy to chat over email or WhatsApp. If you’re reaching out, a few details help a lot: your name, project context, and timeline.",
      emailButton: "Email Me",
      whatsappButton: "WhatsApp Me",
    },
    technology: {
      eyebrow: "Projects & Skills",
      heading: "Building reliable products from idea to delivery",
      description:
        "I design and build full-stack solutions with a focus on clean architecture, maintainability, and measurable business outcomes.",
      cta: "See My Focus",
      stats: [
        { value: "5+", label: "Core languages and platforms" },
        { value: "8+", label: "Engineering tools in daily use" },
        { value: "End-to-End", label: "Delivery from requirements to support" },
      ],
      projectsHeading: "Featured Projects",
      projectsCopy:
        "Practical work that demonstrates architecture, execution, and product thinking.",
      skillsHeading: "Technical Skills",
      skillsCopy: "Organized by capability areas from my CV.",
      toolsHeading: "Tools I Use",
      skillSections: [
        {
          title: "Programming Languages",
          items: ["C#", "JavaScript", "HTML", "CSS", "Java", "TypeScript"],
        },
        {
          title: "Databases",
          items: ["SQL", "MySQL", "Oracle"],
        },
        {
          title: "Framework & Libraries",
          items: [
            "ASP.NET MVC",
            "ASP.NET Core",
            "Entity Framework",
            "WPF",
            "Windows Forms",
            "React",
            "Next.js",
            "Tailwind CSS",
          ],
        },
        {
          title: "Product and Delivery",
          items: [
            "Full stack development",
            "Requirements gathering and solutions design",
            "End-to-end project lifecycle delivery",
            "Deployment, hosting and maintenance",
            "Client-focused solution building",
          ],
        },
      ],
      tools: [
        "VS Code",
        "Visual Studio",
        "GitHub",
        "Vercel",
        "Postman",
        "SSMS",
        "Oracle Tools",
        "MySQL Workbench",
      ],
    },
    focus: {
      eyebrow: "Focus",
      heading:
        "Where strategy, design, and technology meet to create real impact",
      description:
        "This is where ideas turn into thoughtful products, reliable systems, and practical solutions built with purpose.",
      ctaPrimary: "View Technology Profile",
      ctaSecondary: "Email Me",
      currentFocus: "Current Focus",
      outcomesHeading: "Aligned with outcomes",
      outcomesDescription:
        "Every venture is structured around clear delivery goals, measurable impact, and maintainable technical foundations.",
      cards: [
        {
          name: "Web Design & Product Direction",
          focus: "Crafting clear, user-centered digital experiences",
          summary:
            "Bringing ideas to life through thoughtful interface design, strong product thinking, and polished digital experiences that feel modern and intuitive.",
          stage: "Active",
        },
        {
          name: "Frontend Development",
          focus: "Turning concepts into responsive, high-quality interfaces",
          summary:
            "Building modern frontend experiences with React, Next.js, and TypeScript to create fast, reliable, and engaging user journeys.",
          stage: "Active",
        },
        {
          name: "Backend Development",
          focus: "Building dependable systems behind the scenes",
          summary:
            "Designing robust backend solutions with strong architecture, secure logic, and scalable services that support real business needs.",
          stage: "Active",
        },
      ],
    },
  },
  pt: {
    navbar: {
      home: "Início",
      projectsSkills: "Projetos & Habilidades",
      focus: "Foco",
      contact: "Contacto",
    },
    hero: {
      tagline: "Profissional de Tecnologia",
      title: "Victor Sumbo",
      description:
        "Desenvolvedor full-stack .NET focado em criar sistemas confiáveis, desde a ideia até à entrega.",
      ctaPrimary: "Explorar Projetos",
      ctaSecondary: "Ver Foco",
      ctaCv: "Descarregar CV",
      metrics: [
        { value: "1+", label: "Anos em vários setores" },
        {
          value: "Do Início ao Fim",
          label: "Entrega desde a recolha de requisitos até ao apoio",
        },
        { value: "Full Stack", label: "Frontend, backend, dados e integração" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      heading: "Engenharia com contexto de negócio",
      paragraphs: [
        "Sou um profissional de tecnologia e empreendedor que cria e opera sistemas que apoiam necessidades reais de negócio e organização. O meu trabalho situa-se na intersecção entre engenharia de software, operações de negócio e resolução de problemas em múltiplos setores.",
        "Foco-me em resultados práticos, traduzindo soluções técnicas em valor claro e acionável para stakeholders e guiando iniciativas desde a concepção até à execução.",
      ],
    },
    skills: {
      eyebrow: "Competências principais",
      heading:
        "Tecnologias e capacidades de engenharia usadas para entregar soluções fiáveis.",
      chips: [
        ".NET / C#",
        "React / Next.js",
        "TypeScript",
        "SQL",
        "HTML / CSS",
        "Integração de APIs",
        "Entity Framework",
        "Design de Sistemas",
      ],
    },
    education: {
      eyebrow: "Educação",
      heading:
        "Base académica que sustenta a engenharia de software e a entrega de projetos.",
      items: [
        {
          qualification: "Bachelor of Computer and Information Sciences",
          institution: "Varsity College",
          period: "Abr 2025",
          status: "Concluído",
        },
        {
          qualification: "Higher National Certificate",
          institution: "Varsity College",
          period: "Jan 2021",
          status: "Concluído",
        },
        {
          qualification: "Electrical Engineering Light",
          institution: "Northlink College",
          period: "Jan 2020",
          status: "Concluído",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Vamos construir algo com significado",
      description:
        "Aberto a oportunidades, colaborações e conversas sobre pensamento de produto, sistemas fiáveis e entrega digital pensada.",
      directContact: "Contacto direto",
      nameLabel: "Nome",
      phoneLabel: "Telefone",
      emailLabel: "Email",
      quickReply: "Prefere uma resposta rápida?",
      quickReplyText:
        "Estou disponível para conversar por email ou WhatsApp. Se estiver a entrar em contacto, alguns detalhes ajudam bastante: o seu nome, o contexto do projeto e o prazo.",
      emailButton: "Enviar Email",
      whatsappButton: "Enviar WhatsApp",
    },
    technology: {
      eyebrow: "Projetos & Habilidades",
      heading: "Construir produtos fiáveis da ideia à entrega",
      description:
        "Desenho e construo soluções full-stack com foco em arquitetura limpa, manutenibilidade e resultados concretos para o negócio.",
      cta: "Ver o meu Foco",
      stats: [
        { value: "5+", label: "Linguagens e plataformas principais" },
        { value: "8+", label: "Ferramentas de engenharia usadas diariamente" },
        {
          value: "Do Início ao Fim",
          label: "Entrega desde a recolha de requisitos até ao apoio",
        },
      ],
      projectsHeading: "Projetos em Destaque",
      projectsCopy:
        "Trabalho prático que demonstra arquitetura, execução e pensamento de produto.",
      skillsHeading: "Competências Técnicas",
      skillsCopy: "Organizadas por áreas de capacidade do meu CV.",
      toolsHeading: "Ferramentas que uso",
      skillSections: [
        {
          title: "Linguagens de Programação",
          items: ["C#", "JavaScript", "HTML", "CSS", "Java", "TypeScript"],
        },
        {
          title: "Bases de Dados",
          items: ["SQL", "MySQL", "Oracle"],
        },
        {
          title: "Frameworks & Bibliotecas",
          items: [
            "ASP.NET MVC",
            "ASP.NET Core",
            "Entity Framework",
            "WPF",
            "Windows Forms",
            "React",
            "Next.js",
            "Tailwind CSS",
          ],
        },
        {
          title: "Produto e Entrega",
          items: [
            "Desenvolvimento full stack",
            "Recolha de requisitos e desenho de soluções",
            "Entrega do ciclo de vida de projetos do início ao fim",
            "Implementação, hosting e manutenção",
            "Construção de soluções centradas no cliente",
          ],
        },
      ],
      tools: [
        "VS Code",
        "Visual Studio",
        "GitHub",
        "Vercel",
        "Postman",
        "SSMS",
        "Ferramentas Oracle",
        "MySQL Workbench",
      ],
    },
    focus: {
      eyebrow: "Foco",
      heading:
        "Onde a estratégia, o design e a tecnologia se encontram para criar impacto real",
      description:
        "É aqui que as ideias se transformam em produtos pensados, sistemas fiáveis e soluções práticas construídas com propósito.",
      ctaPrimary: "Ver Perfil Técnico",
      ctaSecondary: "Enviar Email",
      currentFocus: "Foco Atual",
      outcomesHeading: "Alinhado com resultados",
      outcomesDescription:
        "Cada iniciativa é estruturada em torno de metas de entrega claras, impacto mensurável e fundamentos técnicos sustentáveis.",
      cards: [
        {
          name: "Direção de Design Web & Produto",
          focus: "Criar experiências digitais claras e centradas no utilizador",
          summary:
            "Dar vida às ideias através de um design de interface cuidadoso, pensamento de produto sólido e experiências digitais polidas que parecem modernas e intuitivas.",
          stage: "Ativo",
        },
        {
          name: "Desenvolvimento Frontend",
          focus:
            "Transformar conceitos em interfaces responsivas e de alta qualidade",
          summary:
            "Construir experiências frontend modernas com React, Next.js e TypeScript para criar jornadas de utilizador rápidas, fiáveis e envolventes.",
          stage: "Ativo",
        },
        {
          name: "Desenvolvimento Backend",
          focus: "Construir sistemas fiáveis por trás das cenas",
          summary:
            "Desenhar soluções backend robustas com arquitetura forte, lógica segura e serviços escaláveis que apoiam necessidades reais de negócio.",
          stage: "Ativo",
        },
      ],
    },
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language is English until the user changes it.
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === "en" || storedLanguage === "pt") {
      setLanguageState(storedLanguage);
      document.documentElement.lang = storedLanguage;
      return;
    }

    document.documentElement.lang = "en";
  }, []);

  // This function updates the active language and saves it for future visits.
  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      document.documentElement.lang = nextLanguage;
    }
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
