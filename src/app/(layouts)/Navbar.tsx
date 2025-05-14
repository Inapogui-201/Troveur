"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-5"> {/* Réduction de py-3 à py-2 */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logoo.png"
              alt="Troveur Logo"
              width={80} // Réduction de la largeur (était 120)
              height={30} // Réduction de la hauteur (était 40)
              className="w-auto h-8 md:h-9 object-contain mt-2" // Hauteur réduite : 32px sur mobile, 36px sur desktop
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-poppins text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
            >
              Accueil
            </Link>
            <Link
              href="/produits"
              className="font-poppins text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
            >
              Produits & Commandes
            </Link>
            <Link
              href="/services"
              className="font-poppins text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="font-poppins text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
            >
              Contactez-nous
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Call to Action Buttons (Desktop) */}
            <div className="hidden md:flex space-x-3">
              <Link
                href="/login"
                className="px-4 py-2 border border-[var(--custom-color)] text-[var(--custom-color)] rounded-lg font-poppins font-medium text-sm hover:bg-gray-50 transition-colors duration-300"
              >
                Connexion
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-[var(--custom-color)] text-white rounded-lg font-poppins font-medium text-sm hover:bg-[var(--custom-color)]/90 transition-colors duration-300"
              >
                Inscription
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3 py-2">
                <Link
                  href="/"
                  className="font-poppins py-2 text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/produits"
                  className="font-poppins py-2 text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produits & Commandes
                </Link>
                <Link
                  href="/services"
                  className="font-poppins py-2 text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="font-poppins py-2 text-gray-700 hover:text-[var(--custom-color)] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactez-nous
                </Link>

                {/* Mobile Call to Action Buttons */}
                <div className="flex space-x-4 py-2">
                  <Link
                    href="/login"
                    className="flex-1 px-4 py-2 border border-[var(--custom-color)] text-[var(--custom-color)] rounded-lg font-poppins font-medium text-center hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/signup"
                    className="flex-1 px-4 py-2 bg-[var(--custom-color)] text-white rounded-lg font-poppins font-medium text-center hover:bg-[var(--custom-color)]/90 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}