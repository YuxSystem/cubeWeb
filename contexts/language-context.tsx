"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt" | "en" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    "header.products": "Produtos",
    "header.solutions": "Soluções",
    "header.resources": "Recursos",
    "header.pricing": "Preços",
    "header.login": "Entrar",
    "header.getStarted": "Começar",
    "header.language": "Idioma",
    "header.languageNames.pt": "Português",
    "header.languageNames.en": "Inglês",
    "header.languageNames.es": "Espanhol",

    // Dropdown items
    "dropdown.crmSuite": "Suite CRM",
    "dropdown.salesAnalytics": "Análise de Vendas",
    "dropdown.customerInsights": "Insights de Clientes",
    "dropdown.forStartups": "Para Startups",
    "dropdown.forEnterprise": "Para Empresas",
    "dropdown.forAgencies": "Para Agências",

    // Hero
    "hero.tagline": "Transformando ideias em tecnologia • 2025",
    "hero.title": "Soluções tecnológicas",
    "hero.titleHighlight": "avançadas",
    "hero.subtitle": "para o seu negócio.",
    "hero.description":
      "Desenvolvemos sites, CRMs, aplicativos e automações que transformam a maneira como sua empresa opera e se conecta com seus clientes.",
    "hero.cta.primary": "Solicitar Orçamento",
    "hero.cta.secondary": "Nossos Projetos",
    "hero.stats": "+200 Projetos Entregues",

    // Services
    "services.webDev": "Desenvolvimento Web",
    "services.crm": "CRM Personalizado",
    "services.mobile": "Aplicativos Mobile",
    "services.automation": "Automação de Processos",
  },
  en: {
    // Header
    "header.products": "Products",
    "header.solutions": "Solutions",
    "header.resources": "Resources",
    "header.pricing": "Pricing",
    "header.login": "Login",
    "header.getStarted": "Get Started",
    "header.language": "Language",
    "header.languageNames.pt": "Portuguese",
    "header.languageNames.en": "English",
    "header.languageNames.es": "Spanish",

    // Dropdown items
    "dropdown.crmSuite": "CRM Suite",
    "dropdown.salesAnalytics": "Sales Analytics",
    "dropdown.customerInsights": "Customer Insights",
    "dropdown.forStartups": "For Startups",
    "dropdown.forEnterprise": "For Enterprise",
    "dropdown.forAgencies": "For Agencies",

    // Hero
    "hero.tagline": "Transforming ideas into technology • 2025",
    "hero.title": "Advanced technology",
    "hero.titleHighlight": "solutions",
    "hero.subtitle": "for your business.",
    "hero.description":
      "We develop websites, CRMs, applications, and automations that transform how your company operates and connects with customers.",
    "hero.cta.primary": "Request a Quote",
    "hero.cta.secondary": "Our Projects",
    "hero.stats": "+200 Delivered Projects",

    // Services
    "services.webDev": "Web Development",
    "services.crm": "Custom CRM",
    "services.mobile": "Mobile Apps",
    "services.automation": "Process Automation",
  },
  es: {
    // Header
    "header.products": "Productos",
    "header.solutions": "Soluciones",
    "header.resources": "Recursos",
    "header.pricing": "Precios",
    "header.login": "Iniciar Sesión",
    "header.getStarted": "Comenzar",
    "header.language": "Idioma",
    "header.languageNames.pt": "Portugués",
    "header.languageNames.en": "Inglés",
    "header.languageNames.es": "Español",

    // Dropdown items
    "dropdown.crmSuite": "Suite CRM",
    "dropdown.salesAnalytics": "Análisis de Ventas",
    "dropdown.customerInsights": "Insights de Clientes",
    "dropdown.forStartups": "Para Startups",
    "dropdown.forEnterprise": "Para Empresas",
    "dropdown.forAgencies": "Para Agencias",

    // Hero
    "hero.tagline": "Transformando ideas en tecnología • 2025",
    "hero.title": "Soluciones tecnológicas",
    "hero.titleHighlight": "avanzadas",
    "hero.subtitle": "para tu negocio.",
    "hero.description":
      "Desarrollamos sitios web, CRMs, aplicaciones y automatizaciones que transforman la forma en que tu empresa opera y se conecta con los clientes.",
    "hero.cta.primary": "Solicitar Presupuesto",
    "hero.cta.secondary": "Nuestros Proyectos",
    "hero.stats": "+200 Proyectos Entregados",

    // Services
    "services.webDev": "Desarrollo Web",
    "services.crm": "CRM Personalizado",
    "services.mobile": "Aplicaciones Móviles",
    "services.automation": "Automatización de Procesos",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

