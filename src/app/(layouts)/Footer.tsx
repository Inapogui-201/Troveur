"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 text-gray-900 py-16 overflow-hidden">
      {/* Fond avec dégradé et effet de parallaxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 opacity-90"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/world-dotted-map.png')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {/* Colonne 1 : Logo et Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src="/Logoo.png"
                  alt="Logo Troveur"
                  fill
                  sizes="(max-width: 768px) 100px, 100px"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            </Link>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Troveur connecte voyageurs et acheteurs pour des achats
              internationaux simplifiés. Rejoignez notre communauté pour un
              commerce mondial accessible et économique.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <Facebook className="w-6 h-6" />,
                  url: "https://facebook.com",
                },
                {
                  icon: <Twitter className="w-6 h-6" />,
                  url: "https://twitter.com",
                },
                {
                  icon: <Instagram className="w-6 h-6" />,
                  url: "https://instagram.com",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  url: "https://linkedin.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--custom-color)] hover:text-[var(--custom-color)] transform hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", path: "/" },
                { name: "À propos", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Témoignages", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-900 hover:text-[var(--custom-color)] transition-colors duration-300 relative group text-sm sm:text-base"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[var(--custom-color)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-900 text-sm sm:text-base">
                Email:{" "}
                <a
                  href="mailto:contact@troveur.com"
                  className="hover:text-[var(--custom-color)] transition-colors duration-300"
                >
                  contact@troveur.com
                </a>
              </li>
              <li className="text-gray-900 text-sm sm:text-base">
                Téléphone:{" "}
                <a
                  href="tel:+212669646759"
                  className="hover:text-[var(--custom-color)] transition-colors duration-300"
                >
                  +212 669 646 759
                </a>
              </li>
              <li className="text-gray-900 text-sm sm:text-base">
                2 boulevard Bahamed, Casablanca, Maroc
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-900 mb-4 text-sm sm:text-base">
              Restez informé de nos dernières offres et actualités.
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-full bg-gray-100 backdrop-blur-sm text-gray-900 border border-black focus:outline-none focus:border-[var(--custom-color)] transition-all duration-300 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-[var(--custom-color)] hover:bg-[var(--custom-color)]/80 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Ligne de séparation et Copyright */}
        <div className="border-t border-[var(--custom-color)] mt-12 pt-6 text-center">
          <p className="text-[var(--custom-color)] text-sm">
            © {new Date().getFullYear()} Troveur. Tous droits réservés.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;