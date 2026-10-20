
/**
 * Technology: TypeScript
 * File: projects.ts
 *
 * Purpose:
 * Centralized project data for the portfolio website.
 *
 * This file stores project information in English and Portuguese,
 * defines the data structures used by project cards, and provides
 * a function that returns project information in the selected language.
 *
 * Keeping project data in one location makes it easier to maintain
 * consistent information across the homepage and technology pages.
 */

// ============================================================
// 1. SUPPORTED LANGUAGES
// ============================================================

/**
 * Defines the languages supported by the project catalogue.
 *
 * A union type restricts the value to either "en" or "pt",
 * preventing unsupported language codes from being passed.
 */
export type ProjectLanguage = "en" | "pt";

/**
 * Represents text available in both supported languages.
 *
 * Used for project titles and descriptions so that every
 * project provides both English and Portuguese translations.
 */
type LocalizedText = {
  en: string;
  pt: string;
};

// ============================================================
// 2. PROJECT DATA TYPES
// ============================================================

/**
 * Represents a project before language translation.
 *
 * This is the structure used when defining projects inside
 * the localizedProjects array.
 *
 * Titles and descriptions are stored as LocalizedText objects.
 */
type LocalizedProject = {
  // Unique identifier for the project.
  id: string;

  // Project name in English and Portuguese.
  title: LocalizedText;

  // Project description in English and Portuguese.
  description: LocalizedText;

  // Technologies, frameworks, and services used.
  tech: string[];

  // Screenshot path relative to the public directory.
  image: string;

  // Public website, application, or project link.
  href: string;

  /**
   * Optional video demonstration URL.
   *
   * Useful for showcasing functionality that should not
   * be publicly accessible, such as an admin dashboard.
   *
   * The question mark (?) makes this property optional.
   * Projects without a demonstration video can omit it.
   */
  demoUrl?: string;
};

/**
 * Represents project information after localization.
 *
 * Unlike LocalizedProject, the title and description
 * are plain strings because the language has already
 * been selected.
 *
 * This type is used by components displaying projects.
 */
export type ProjectCardData = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  href: string;

  // Optional video demonstration link.
  demoUrl?: string;
};

// ============================================================
// 3. CENTRALIZED PROJECT CATALOGUE
// ============================================================

/**
 * Single source of truth for portfolio projects.
 *
 * Each project is defined once and can be displayed
 * in multiple parts of the website.
 *
 * To add a new project:
 * 1. Create a unique project ID.
 * 2. Provide English and Portuguese content.
 * 3. Specify the technologies used.
 * 4. Add a screenshot to public/projects.
 * 5. Provide the project URL.
 * 6. Optionally provide a demonstration video URL.
 */
const localizedProjects: LocalizedProject[] = [

  // ----------------------------------------------------------
  // PROJECT 1: OASIS INFOBYTE
  // ----------------------------------------------------------

  /**
   * Full-stack pizza delivery application developed
   * during the Oasis Infobyte internship.
   *
   * The public application demonstrates customer-facing
   * functionality, while the optional demoUrl can showcase
   * restricted administrative features through YouTube.
   */
  {
    id: "oasis-infobyte",

    title: {
      en: "Pizza Delivery & Inventory Management System",
      pt: "Sistema de Entrega de Pizzas e Gestão de Inventário",
    },

    description: {
      en: "Full-stack MERN application developed during my Oasis Infobyte internship, featuring customer ordering, authentication, checkout, and an administrative dashboard for order and inventory management.",
      pt: "Aplicação full-stack MERN desenvolvida durante o meu estágio na Oasis Infobyte, com encomendas online, autenticação, checkout e painel administrativo para gestão de pedidos e inventário.",
    },

    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Vercel",
      "Render",
    ],

    image: "/projects/OasisInfobytePic.PNG",

    // Public customer-facing application.
    href: "https://oibsip-psi-orcin.vercel.app/",

    /**
     * Admin dashboard demonstration.
     *
     * Uncomment and replace the placeholder with the real
     * YouTube URL after publishing your demonstration.
     *
     * Never expose admin credentials, customer information,
     * authentication tokens, or API secrets in the video.
     */

     demoUrl: "https://www.youtube.com/watch?v=p9v9j786Hgw&t=209s",
  },

  // ----------------------------------------------------------
  // PROJECT 2: PERFUMA ANGOLA
  // ----------------------------------------------------------

  /**
   * Bilingual perfume catalogue and AI-powered sales platform.
   *
   * Demonstrates frontend development, TypeScript serverless
   * APIs, multi-provider AI integration, and cloud deployment.
   */
  {
    id: "perfuma-angola",

    title: {
      en: "Perfuma Angola (AI-Powered Perfume Platform)",
      pt: "Perfuma Angola (Plataforma de Perfumes com IA)",
    },

    description: {
      en: "Bilingual perfume catalogue and AI-powered sales platform featuring intelligent product recommendations, a serverless TypeScript backend, multi-provider AI integration with automatic fallback, and WhatsApp ordering. Deployed on Vercel with SEO optimization.",
      pt: "Catálogo bilingue de perfumes e plataforma de vendas com IA, incluindo recomendações inteligentes, backend serverless em TypeScript, integração com múltiplos provedores de IA com fallback automático e encomendas via WhatsApp. Implementada na Vercel com otimização SEO.",
    },

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Vercel",
      "Serverless APIs",
      "Groq AI",
      "Cloudflare Workers AI",
      "SEO",
    ],

    image: "/projects/PerfumaAngolaPic.png",

    href: "https://perfuma-angola.com/",
  },

  // ----------------------------------------------------------
  // PROJECT 3: MATERFAMILIA
  // ----------------------------------------------------------

  /**
   * Website developed for Materfamilia, a social enterprise.
   *
   * The project demonstrates web application development
   * using C# and ASP.NET Core.
   */
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

  // ----------------------------------------------------------
  // PROJECT 4: KIPIDO
  // ----------------------------------------------------------

  /**
   * Business website for a glass repair service.
   *
   * Demonstrates MVC-based web development and customer
   * communication features such as quote requests.
   */
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

  // ----------------------------------------------------------
  // PROJECT 5: DYKANA
  // ----------------------------------------------------------

  /**
   * Corporate website for Dykana.
   *
   * Showcases ASP.NET Core development, SQL integration,
   * and deployment using Microsoft Azure.
   */
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

  // ==========================================================
  // OPTIONAL PROJECTS - CURRENTLY DISABLED
  // ==========================================================

  /**
   * These projects are temporarily excluded from the
   * portfolio by using a block comment.
   *
   * To display them again, remove the opening and closing
   * block comment markers surrounding these entries.
   */

  /*
  // ----------------------------------------------------------
  // PROJECT: LINGOCHAT
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // PROJECT: TIMETAP
  // ----------------------------------------------------------

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
  */

  // ----------------------------------------------------------
  // PROJECT 6: INTERNATIONAL PAYMENT SYSTEM
  // ----------------------------------------------------------

  /**
   * Android banking application project.
   *
   * Demonstrates mobile application development using
   * Kotlin, SQLite, and Firebase.
   *
   * The project URL links to a demonstration video.
   */
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

];

// ============================================================
// 4. PROJECT LOCALIZATION FUNCTION
// ============================================================

/**
 * Returns all enabled projects in the requested language.
 *
 * @param language - Selected language ("en" or "pt").
 * @returns Array of ProjectCardData objects ready for rendering.
 *
 * How it works:
 *
 * 1. map() loops through every project in localizedProjects.
 *
 * 2. project.title[language] selects the appropriate title.
 *    For example, "en" returns the English title.
 *
 * 3. project.description[language] selects the matching
 *    description.
 *
 * 4. [...project.tech] creates a shallow copy of the
 *    technology array instead of reusing its reference.
 *
 * 5. demoUrl is forwarded to the card when available.
 *    If a project has no demoUrl, the value is undefined.
 *
 * This separation allows the UI components to receive
 * already-translated text without needing to understand
 * the underlying bilingual data structure.
 */
export function getLocalizedProjects(
  language: ProjectLanguage,
): ProjectCardData[] {
  return localizedProjects.map((project) => ({
    id: project.id,

    // Select the project title in the requested language.
    title: project.title[language],

    // Select the translated project description.
    description: project.description[language],

    // Copy the technologies array.
    tech: [...project.tech],

    // Preserve the project screenshot path.
    image: project.image,

    // Preserve the public application URL.
    href: project.href,

    // Forward the optional demonstration video URL.
    demoUrl: project.demoUrl,
  }));
}
