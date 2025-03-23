"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Check } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const languages = [
    { code: "pt", name: "PT", flag: "🇧🇷" },
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "es", name: "ES", flag: "🇪🇸" },
  ]

  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98])
  const headerY = useTransform(scrollY, [0, 100], [0, -8])
  const headerBackdropBlur = useTransform(scrollY, [0, 100], [0, 8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  const navItems = [
    {
      name: t("header.products"),
      href: "#products",
      dropdown: [
        { name: t("dropdown.crmSuite"), href: "#crm-suite" },
        { name: t("dropdown.salesAnalytics"), href: "#sales-analytics" },
        { name: t("dropdown.customerInsights"), href: "#customer-insights" },
      ],
    },
    {
      name: t("header.solutions"),
      href: "#solutions",
      dropdown: [
        { name: t("dropdown.forStartups"), href: "#for-startups" },
        { name: t("dropdown.forEnterprise"), href: "#for-enterprise" },
        { name: t("dropdown.forAgencies"), href: "#for-agencies" },
      ],
    },
    { name: t("header.resources"), href: "#resources" },
    { name: t("header.pricing"), href: "#pricing" },
  ]

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const changeLanguage = (langCode: "pt" | "en" | "es") => {
    setLanguage(langCode)
  }

  return (
    <motion.header
      ref={headerRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
      style={{
        opacity: headerOpacity,
        y: headerY,
        backdropFilter: `blur(${headerBackdropBlur.get()}px)`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <span className="text-2xl font-bold text-gradient-blue">Cube Software</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 glass rounded-xl shadow-neon-blue overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="relative ml-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveDropdown(activeDropdown === "language" ? null : "language")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-blue-50 transition-colors"
              >
                <span className="text-lg">{languages.find((l) => l.code === language)?.flag}</span>
                <span className="font-medium text-gray-700">{language.toUpperCase()}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${activeDropdown === "language" ? "rotate-180" : ""}`}
                />
              </Button>

              {activeDropdown === "language" && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-40 glass rounded-xl shadow-neon-blue overflow-hidden z-50"
                  >
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code as "pt" | "en" | "es")
                            setActiveDropdown(null)
                          }}
                          className={`flex items-center w-full px-4 py-2.5 text-left ${
                            language === lang.code
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          } transition-colors`}
                        >
                          <span className="text-lg mr-2">{lang.flag}</span>
                          <span className="font-medium">
                            {lang.name === "PT" ? "Português" : lang.name === "EN" ? "English" : "Español"}
                          </span>
                          {language === lang.code && <Check className="ml-auto h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t("header.login")}
            </Link>
            <Button
              className="bg-gradient-blue hover:opacity-90 shadow-neon-blue"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {t("header.getStarted")}
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="hover:bg-blue-50"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="#"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("header.login")}
                </Link>
                <Button
                  className="w-full mt-2 bg-gradient-blue hover:opacity-90 shadow-neon-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("header.getStarted")}
                </Button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">{t("header.language")}:</p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code as "pt" | "en" | "es")
                        setMobileMenuOpen(false)
                      }}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                        language === lang.code
                          ? "bg-blue-100 text-blue-600 shadow-sm"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-2xl mb-1">{lang.flag}</span>
                      <span className="font-medium text-sm">
                        {lang.name === "PT" ? "Português" : lang.name === "EN" ? "English" : "Español"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

