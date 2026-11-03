import { DATA } from "$lib/data/resume";

export type Locale = "en" | "it";

export function getLocale(headers: Headers): Locale {
  const country = headers.get("x-vercel-ip-country");

  if (country) {
    return country.toUpperCase() === "IT" ? "it" : "en";
  }

  const preferredLanguage = headers
    .get("accept-language")
    ?.split(",")
    .map((language) => {
      const [tag, ...parameters] = language.trim().split(";");
      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith("q="));

      return {
        tag: tag?.toLowerCase(),
        quality: quality ? Number(quality.slice(2)) : 1,
      };
    })
    .filter((language) => language.tag && language.quality > 0)
    .sort((first, second) => second.quality - first.quality)[0]?.tag;

  return preferredLanguage === "it" || preferredLanguage?.startsWith("it-")
    ? "it"
    : "en";
}

export const messages = {
  en: {
    home: "Home",
    blog: "Blog",
    back: "Back",
    greeting: "Hi, Giacomo here",
    age: (age: number) => `${age} year old something guy.`,
    about: "About",
    workExperience: "Work Experience",
    projects: "My Projects",
    sayHello: "Say hello:",
    relatedProject: "Related project:",
    writtenWithAi: "Written with AI help",
    aiAssistedTitle:
      "This post was drafted and edited with the help of AI tools",
    source: "Source",
    website: "Website",
    post: "Post",
  },
  it: {
    home: "Home",
    blog: "Blog",
    back: "Indietro",
    greeting: "Ciao, sono Giacomo",
    age: (age: number) => `Ho ${age} anni e mi occupo di software.`,
    about: "Chi sono",
    workExperience: "Esperienza lavorativa",
    projects: "I miei progetti",
    sayHello: "Scrivimi:",
    relatedProject: "Progetto correlato:",
    writtenWithAi: "Scritto con l’aiuto dell’IA",
    aiAssistedTitle:
      "Questo articolo è stato scritto e revisionato con l’aiuto di strumenti di IA",
    source: "Codice sorgente",
    website: "Sito web",
    post: "Articolo",
  },
} satisfies Record<Locale, Record<string, string | ((age: number) => string)>>;

export function getPortfolio(locale: Locale) {
  if (locale === "en") return DATA;

  return {
    ...DATA,
    description:
      "Sviluppatore software full-stack, studente di ingegneria e manutentore di sistemi operativi. Mi piacciono i computer e tutto ciò che ci gira intorno.",
    summary:
      "Sviluppatore full-stack con esperienza in produzione con Svelte, Node.js, AdonisJS, PostgreSQL e MongoDB. Oltre al lavoro con i clienti, porto avanti progetti open source personali, dalla programmazione di sistema in Rust e Go alle integrazioni con l’IA.\n\nMi piace circondarmi di musica, elettronica e amici.",
    work: DATA.work.map((job, index) =>
      index === 0
        ? {
            ...job,
            company: "Libero professionista",
            title: "Sviluppatore software freelance",
            badges: ["Freelance"],
            location: "Da remoto, IT",
            end: "In corso",
            description:
              "Progettazione e sviluppo di siti vetrina responsive e applicazioni web per diversi clienti, seguendo l’intero ciclo di vita del progetto, dai requisiti alla pubblicazione. Realizzazione di interfacce performanti con Svelte e TypeScript, con attenzione all’accessibilità e alla velocità di caricamento. Gestione diretta dei rapporti con i clienti, garantendo consegne puntuali e standard qualitativi elevati.",
          }
        : {
            ...job,
            title: "Sviluppatore di applicazioni web",
            location: "Piacenza, IT",
            description:
              "Sviluppo e manutenzione di piattaforme web full-stack con Svelte, Node.js e AdonisJS, integrando PostgreSQL e MongoDB. Ottimizzazione delle pipeline CI/CD basate su Docker, migliorando affidabilità e velocità dei rilasci. Implementazione di processi asincroni con BullMQ, sistemi di autenticazione sicuri e internazionalizzazione (i18n). Collaborazione in un team Agile e contributi a progetti open source interni (Likable Tools).",
          },
    ),
    projects: DATA.projects.map((project) => {
      const localized: Record<string, { description: string; dates?: string }> =
        {
          asmlings: {
            description:
              "Un emulatore Intel 8086 Assembly scritto da zero in Rust, con esercizi da scrivere, assemblare e verificare subito, ispirato a Rustlings.",
          },
          "Strava-Declutter": {
            description:
              "Una piccola estensione per Firefox che rende più pulita l’interfaccia web di Strava nascondendo o semplificando alcuni elementi.",
          },
          "strava-ai": {
            description:
              "Un allenatore di corsa basato sull’IA e integrato con le API di Strava, che analizza gli allenamenti e offre consigli personalizzati.",
          },
          reflectiv: {
            description:
              "Applicazione web che genera con l’IA diari mensili di riflessione personalizzati in PDF. Archiviata.",
            dates: "2024 — archiviato",
          },
          "Wine-Shop": {
            description:
              "Un sistema gestionale in Java per un negozio di vini online, realizzato come progetto universitario.",
          },
        };
      const translation = localized[project.title];

      return {
        ...project,
        ...translation,
        links: project.links.map((link) => ({
          ...link,
          type:
            link.type === "Source"
              ? messages.it.source
              : link.type === "Website"
                ? messages.it.website
                : link.type,
        })),
      };
    }),
  };
}
