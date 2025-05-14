"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Plane,
  Package,
  ShieldCheck,
  User,
  ArrowRightLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react";

// Types
interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
  number: number;
}

interface Data {
  acheteurs: Step[];
  voyageurs: Step[];
}

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"acheteurs" | "voyageurs">("acheteurs");
  const [isMobile, setIsMobile] = useState(false);

  // Détection du mode mobile avec debounce pour optimiser les performances
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 1024);
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Données organisées avec useMemo pour éviter les recréations inutiles
  const data: Data = useMemo(() => ({
    acheteurs: [
      {
        icon: <ShoppingBag className="text-[var(--custom-color)]" size={24} />,
        title: "Trouvez votre produit",
        description: "Recherchez l'article que vous souhaitez à l'étranger",
        number: 1,
      },
      {
        icon: <Plane className="text-[var(--custom-color)]" size={24} />,
        title: "Localisez un voyageur",
        description: "Trouvez un voyageur se rendant dans votre pays",
        number: 2,
      },
      {
        icon: <Package className="text-[var(--custom-color)]" size={24} />,
        title: "Passez commande",
        description: "Confirmez les détails de votre commande",
        number: 3,
      },
      {
        icon: <ShieldCheck className="text-[var(--custom-color)]" size={24} />,
        title: "Paiement sécurisé",
        description: "Le paiement est mis en attente jusqu'à réception",
        number: 4,
      },
      {
        icon: <User className="text-[var(--custom-color)]" size={24} />,
        title: "Suivi en temps réel",
        description: "Communiquez avec votre voyageur via le chat",
        number: 5,
      },
      {
        icon: <ArrowRightLeft className="text-[var(--custom-color)]" size={24} />,
        title: "Réception",
        description: "Validez la réception pour libérer le paiement",
        number: 6,
      },
    ],
    voyageurs: [
      {
        icon: <Plane className="text-[var(--custom-color)]" size={24} />,
        title: "Planifiez votre voyage",
        description: "Indiquez vos dates et destinations",
        number: 1,
      },
      {
        icon: <ShoppingBag className="text-[var(--custom-color)]" size={24} />,
        title: "Parcourez les demandes",
        description: "Consultez les commandes correspondant à votre trajet",
        number: 2,
      },
      {
        icon: <Package className="text-[var(--custom-color)]" size={24} />,
        title: "Acceptez une commande",
        description: "Choisissez une commande à rapporter",
        number: 3,
      },
      {
        icon: <ShieldCheck className="text-[var(--custom-color)]" size={24} />,
        title: "Achat sécurisé",
        description: "Achetez le produit avec notre protection",
        number: 4,
      },
      {
        icon: <User className="text-[var(--custom-color)]" size={24} />,
        title: "Livraison",
        description: "Remettez le produit à l'acheteur",
        number: 5,
      },
      {
        icon: <ArrowRightLeft className="text-[var(--custom-color)]" size={24} />,
        title: "Paiement",
        description: "Recevez votre rémunération après confirmation",
        number: 6,
      },
    ],
  }), []);

  // Animations réutilisables
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1 }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" as const }
  };

  // Vue mobile améliorée avec timeline vertical
  const renderMobileView = () => (
    <div className="w-full px-4 py-8">
      {/* En-tête avec icône animée */}
      <div className="flex flex-col items-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={pulseAnimation}
          className="w-24 h-24 rounded-full border-2 border-[var(--custom-color)] flex items-center justify-center bg-white shadow-lg mb-6"
        >
          <div className="text-4xl">
            {activeTab === "acheteurs" ? "🛍️" : "✈️"}
          </div>
        </motion.div>
      </div>

      {/* Timeline verticale animée */}
      <div className="relative">
        {/* Ligne verticale de connexion */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 ml-0.5"></div>

        {/* Étapes avec animation séquentielle */}
        <div className="space-y-8">
          <AnimatePresence>
            {data[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                className="flex items-start relative"
              >
                {/* Indicateur sur la timeline */}
                <div className="z-10">
                  <div className="bg-white p-3 rounded-full shadow-md border border-gray-100 relative">
                    <Badge
                      className="absolute -top-2 -right-2 bg-[var(--custom-color)] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs"
                    >
                      {item.number}
                    </Badge>
                    {item.icon}
                  </div>
                </div>

                {/* Contenu avec effet de survol */}
                <motion.div 
                  className="ml-4 bg-white p-4 rounded-lg shadow-sm flex-1 border-l-4 border-[var(--custom-color)]"
                  whileHover={{ 
                    x: 5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-poppins font-semibold text-base text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 font-poppins">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  // Vue desktop améliorée avec connexions animées
  const renderDesktopView = () => {
    const items = data[activeTab];
    
    // Configuration du cercle
    const radius = 250;
    const centerX = "50%";
    const centerY = 300;

    // Contenu central adapté au contexte
    const centerContent = {
      title: activeTab === "acheteurs" ? "COMMANDEZ FACILEMENT" : "VOYAGEZ UTILEMENT",
      subtitle: "Acheteurs et Voyageurs",
      description: "se connectent.",
      icon: activeTab === "acheteurs" ? "🛍️" : "✈️"
    };

    // Calcul des positions pour l'animation
    const positions = items.map((_, i) => {
      const angle = ((2 * Math.PI) / items.length) * i - Math.PI / 2;
      return {
        x: radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });

    return (
      <div className="relative w-full flex justify-center h-[700px]">
        <div className="relative w-full max-w-4xl h-[650px]">
          {/* Élément central avec animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={pulseAnimation}
            className="absolute bg-gradient-to-br from-white to-gray-50 rounded-full border-2 border-[var(--custom-color)]/30 flex flex-col items-center justify-center p-6 shadow-lg z-20 transform -translate-x-1/2"
            style={{
              width: "180px",
              height: "180px",
              top: `${centerY - 90}px`,
              left: centerX,
            }}
          >
            <div className="text-3xl mb-2">{centerContent.icon}</div>
            <h3 className="font-poppins font-bold text-sm text-center text-gray-800 mb-1">
              {centerContent.title}
            </h3>
            <p className="text-xs text-gray-600 text-center mb-1 font-poppins">
              {centerContent.subtitle}
            </p>
            <p className="text-xs text-gray-600 text-center font-poppins">
              {centerContent.description}
            </p>
          </motion.div>


          {/* Étapes disposées en cercle */}
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInVariants}
                className="absolute w-48 text-center transform -translate-x-1/2"
                style={{
                  top: `${positions[index].y - 50}px`,
                  left: `calc(${centerX} + ${positions[index].x}px)`,
                }}
              >
                <motion.div 
                  className="relative inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white p-4 rounded-full shadow-md border border-gray-200 mb-3 mx-auto flex items-center justify-center">
                    <Badge
                      className="absolute -top-2 -right-2 bg-[var(--custom-color)] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm"
                    >
                      {item.number}
                    </Badge>
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="font-poppins font-bold text-sm text-gray-800 uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 font-poppins">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec animations améliorées */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-poppins font-bold text-gray-800 mb-4">
              Comment ça marche ?
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-1 bg-[var(--custom-color)] mx-auto mb-6"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg font-poppins leading-relaxed"
          >
            Troveur est la solution idéale pour obtenir des produits indisponibles dans votre pays
            ou trop coûteux localement. Des vêtements aux gadgets technologiques, 
            obtenez tout ce dont vous avez besoin via notre plateforme sécurisée.
          </motion.p>

          {/* Onglets améliorés avec effet de transition */}
          <motion.div 
            className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={() => setActiveTab("acheteurs")}
              variant={activeTab === "acheteurs" ? "default" : "outline"}
              className={`rounded-full font-poppins text-sm md:text-base py-2 px-4 md:px-6 transition-all duration-300 ${
                activeTab === "acheteurs"
                  ? "bg-[var(--custom-color)] text-white hover:bg-[var(--custom-color)]/90 shadow-md"
                  : "text-gray-600 hover:bg-gray-200 border-transparent"
              }`}
              aria-label="Afficher le processus pour les acheteurs"
            >
              <ShoppingBag size={18} className="mr-2" />
              Pour les acheteurs
            </Button>
            <Button
              onClick={() => setActiveTab("voyageurs")}
              variant={activeTab === "voyageurs" ? "default" : "outline"}
              className={`rounded-full font-poppins text-sm md:text-base py-2 px-4 md:px-6 transition-all duration-300 ${
                activeTab === "voyageurs"
                  ? "bg-[var(--custom-color)] text-white hover:bg-[var(--custom-color)]/90 shadow-md"
                  : "text-gray-600 hover:bg-gray-200 border-transparent"
              }`}
              aria-label="Afficher le processus pour les voyageurs"
            >
              <Plane size={18} className="mr-2" />
              Pour les voyageurs
            </Button>
          </motion.div>
        </div>

        {/* Contenu principal avec détection mobile/desktop */}
        <AnimatePresence>
          <motion.div
            key={activeTab + (isMobile ? "mobile" : "desktop")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {isMobile ? renderMobileView() : renderDesktopView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;