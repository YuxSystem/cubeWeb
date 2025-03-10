"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

export default function Header() {
  const { t } = useTranslation("common")
  const router = useRouter()

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const languages = [
    { code: "pt", name: "PT", flag: "🇧🇷" },
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "es", name: "ES", flag: "🇪🇸" },
  ]

  const [currentLanguage, setCurrentLanguage] = useState(router.locale || "pt")

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

  useEffect(() => {
    // Update currentLanguage when router.locale changes
    if (router.locale) {
      setCurrentLanguage(router.locale)
    }
  }, [router.locale])

  const navItems = [
    {
      name: t("header.products"),
      href: "#products",
      dropdown: [
        { name: t("header.dropdown.crmSuite"), href: "#crm-suite" },
        { name: t("header.dropdown.salesAnalytics"), href: "#sales-analytics" },
        { name: t("header.dropdown.customerInsights"), href: "#customer-insights" },
      ],
    },
    {
      name: t("header.solutions"),
      href: "#solutions",
      dropdown: [
        { name: t("header.dropdown.forStartups"), href: "#for-startups" },
        { name: t("header.dropdown.forEnterprise"), href: "#for-enterprise" },
        { name: t("header.dropdown.forAgencies"), href: "#for-agencies" },
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

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode)
    router.push(router.pathname, router.asPath, { locale: langCode })
  }

  return (
    <motion.header
      ref={headerRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass backdrop-blur-md" : "bg-transparent",
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
            <div className="flex items-center space-x-1 ml-8">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 rounded-full text-sm flex items-center ${
                    currentLanguage === lang.code ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </motion.button>
              ))}
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
                <Button className="w-full mt-2 bg-gradient-blue hover:opacity-90 shadow-neon-blue">
                  {t("header.getStarted")}
                </Button>
                <div className="flex items-center space-x-1 mt-4">
                  <p className="text-sm text-gray-500 mr-2">{t("header.language")}:</p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setMobileMenuOpen(false)
                      }}
                      className={`px-2 py-1 rounded-full text-sm flex items-center ${
                        currentLanguage === lang.code ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
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

