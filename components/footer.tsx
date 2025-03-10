"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

export default function Footer() {
  const { t } = useTranslation("common")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dark opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Cube Software
              </span>
            </Link>
            <p className="mb-6 text-gray-400 max-w-md">{t("footer.company")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.servicesList.webDev")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.servicesList.crm")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.servicesList.mobile")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.servicesList.automation")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.servicesList.consulting")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.aboutList.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.aboutList.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.aboutList.cases")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.aboutList.blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("footer.aboutList.contact")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t("footer.address") }}></span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>{t("footer.phone")}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span>{t("footer.email")}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p>
            &copy; {currentYear} Cube Software. {t("footer.copyright")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.legal.terms")}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.legal.privacy")}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.legal.cookies")}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

