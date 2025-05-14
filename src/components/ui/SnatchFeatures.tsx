"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle, CreditCard, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

// Interface pour les sections
interface Section {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  content: React.ReactNode;
}

const TroveurFeatures: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Animation variants
  const fadeInUpVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }), []);

  // Animation pour le changement de contenu
  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  // Configuration des sections mémorisée
  const sections: Section[] = useMemo(() => [
    {
      id: "search",
      icon: Search,
      title: "Recherchez des offres adaptées",
      description: "Trouvez des fournisseurs fiables en un clin d'œil avec notre recherche intuitive.",
      content: (
        <motion.div
          className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Image
              src="/api/placeholder/600/400"
              alt="Recherche d'offres"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">Recherche intelligente</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 px-3 py-1 rounded-full inline-block mb-4">
              <span className="text-[var(--custom-color)] dark:text-[var(--custom-color)] font-semibold">Recherche rapide</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Filtres personnalisés</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Suggestions intelligentes</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Comparaison facile</span>
              </li>
            </ul>
          </div>
        </motion.div>
      ),
    },
    {
      id: "identify",
      icon: CheckCircle,
      title: "Identifiez le bon fournisseur",
      description: "Évaluez la fiabilité et la qualité des fournisseurs grâce à des vérifications rigoureuses.",
      content: (
        <motion.div
          className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Image
              src="/api/placeholder/600/400"
              alt="Fournisseur vérifié"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">Fournisseurs vérifiés</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 px-3 py-1 rounded-full inline-flex items-center">
                <span className="text-[var(--custom-color)] dark:text-[var(--custom-color)] font-semibold mr-1">Vérifié</span>
                <span className="bg-[var(--custom-color)] dark:bg-[var(--custom-color)] text-white px-1 rounded text-xs">PRO</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Depuis 2022</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">Avis clients</p>
                <p className="font-bold text-gray-900 dark:text-white">4.7/5</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">Livraison à temps</p>
                <p className="font-bold text-gray-900 dark:text-white">87%</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">Temps de réponse</p>
                <p className="font-bold text-gray-900 dark:text-white">≈ 5h</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">Revenus exports</p>
                <p className="font-bold text-gray-900 dark:text-white">$150M</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-8 h-5 bg-[var(--custom-color)] dark:bg-[var(--custom-color)] flex items-center justify-center text-white text-xs">CN</div>
              <span>Usine certifiée</span>
              <span>OEM premium</span>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      id: "payment",
      icon: CreditCard,
      title: "Payez en toute confiance",
      description: "Sécurisez vos transactions avec des méthodes de paiement fiables et protégées.",
      content: (
        <motion.div
          className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Image
              src="/api/placeholder/600/400"
              alt="Paiement sécurisé"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">Paiements sécurisés</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 px-3 py-1 rounded-full inline-block mb-4">
              <span className="text-[var(--custom-color)] dark:text-[var(--custom-color)] font-semibold">Protection maximale</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Cryptage avancé</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Paiements multi-devises</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Garantie de protection</span>
              </li>
            </ul>
          </div>
        </motion.div>
      ),
    },
    {
      id: "proceed",
      icon: Globe,
      title: "Procédez en toute sérénité",
      description: "Simplifiez vos commandes internationales avec notre plateforme et notre support dédié.",
      content: (
        <motion.div
          className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Image
              src="/api/placeholder/600/400"
              alt="Sérénité commerciale"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">Commerce international</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 px-3 py-1 rounded-full inline-block mb-4">
              <span className="text-[var(--custom-color)] dark:text-[var(--custom-color)] font-semibold">Commerce mondial</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Expédition internationale</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Support logistique</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 flex items-center justify-center text-[var(--custom-color)] dark:text-[var(--custom-color)] mr-3">✓</div>
                <span className="text-gray-600 dark:text-gray-300">Assistance 24/7</span>
              </li>
            </ul>
          </div>
        </motion.div>
      ),
    },
  ], [fadeInUpVariants]);

  // Fonction pour obtenir les classes de style actives/inactives pour les onglets
  const getSectionClasses = (index: number) => {
    const isActive = activeSection === index;

    return cn(
      "flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border relative",
      isActive
        ? "bg-[var(--custom-color)]/10 dark:bg-[var(--custom-color)]/20 border-[var(--custom-color)]/30 dark:border-[var(--custom-color)]/30 shadow-md"
        : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-gray-100 dark:border-gray-700"
    );
  };

  // Fonction pour obtenir les classes d'icône
  const getIconClasses = (index: number) => {
    const isActive = activeSection === index;

    return cn(
      "p-3 rounded-full transition-all duration-300",
      isActive
        ? "bg-[var(--custom-color)] text-white scale-110"
        : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
    );
  };

  // Fonction pour obtenir les classes de titre
  const getTitleClasses = (index: number) => {
    const isActive = activeSection === index;

    return cn(
      "text-lg font-semibold transition-all duration-300",
      isActive
        ? "text-[var(--custom-color)] dark:text-[var(--custom-color)]"
        : "text-gray-800 dark:text-gray-200"
    );
  };

  // Gérer le clic sur une section
  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Ce qui rend <span className="text-[var(--custom-color)] dark:text-[var(--custom-color)]">Troveur</span> unique
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Une plateforme intuitive pour sourcer, payer et gérer vos fournisseurs en toute confiance.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar navigation - version améliorée */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    className={getSectionClasses(index)}
                    onClick={() => handleSectionClick(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={getIconClasses(index)}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={getTitleClasses(index)}>{section.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{section.description}</p>
                    </div>
                    {activeSection === index && (
                      <motion.div 
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-8 bg-[var(--custom-color)] rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Content area - version améliorée */}
          <div className="lg:w-2/3">
            <motion.div 
              className="relative"
              key={activeSection}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              {sections[activeSection].content}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#get-started"
            className="inline-block bg-[var(--custom-color)] dark:bg-[var(--custom-color)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--custom-color)]/80 dark:hover:bg-[var(--custom-color)]/80 transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-[var(--custom-color)]/20 transform hover:-translate-y-1"
          >
            Commencer avec Troveur
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TroveurFeatures;