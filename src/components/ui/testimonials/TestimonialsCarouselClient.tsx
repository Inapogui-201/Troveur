"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "../../../lib/testimonials";

interface TestimonialsCarouselClientProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarouselClient({
  testimonials,
}: TestimonialsCarouselClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Déterminer le nombre de diapositives visibles selon la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fonctions de navigation
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + visibleSlides >= testimonials.length
        ? 0
        : prev + visibleSlides
    );
    setIsAutoPlaying(false);
  }, [visibleSlides, testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - visibleSlides < 0
        ? Math.max(testimonials.length - visibleSlides, 0)
        : prev - visibleSlides
    );
    setIsAutoPlaying(false);
  }, [visibleSlides, testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Calculer les témoignages affichés
  const displayedTestimonials = [];
  const startIndex = currentIndex;
  for (let i = 0; i < visibleSlides; i++) {
    const index = (startIndex + i) % testimonials.length;
    displayedTestimonials.push(testimonials[index]);
  }

  // Calculer le nombre de groupes pour les indicateurs
  const totalGroups = Math.ceil(testimonials.length / visibleSlides);

  return (
    <>
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--custom-color)]/10 flex items-center justify-center"
        >
          <Quote className="w-8 h-8 text-[var(--custom-color)]" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[var(--custom-color)]/10 flex items-center justify-center"
        >
          <Quote className="w-8 h-8 text-[var(--custom-color)]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 -mt-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-3">
            Ils partagent leur expérience Troveur
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-1 bg-[var(--custom-color)] mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-poppins">
            Découvrez ce que notre communauté pense du service
          </p>
        </motion.div>

        {/* Carrousel */}
        <div
          className="relative group"
          role="region"
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex"
              >
                {displayedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`h-full p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--custom-color)]/20 ${
                        testimonial.type === "buyer"
                          ? "bg-white"
                          : "bg-[var(--custom-color)]/10"
                      }`}
                      role="group"
                      aria-roledescription="slide"
                    >
                      {/* Étoiles */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-[var(--custom-color)] fill-[var(--custom-color)]"
                                : "text-gray-300"
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      {/* Témoignage */}
                      <blockquote className="text-gray-700 mb-6 italic relative font-poppins">
                        <span className="absolute -left-3 -top-3 text-4xl text-[var(--custom-color)] opacity-30">
                          &quot;
                        </span>
                        {testimonial.content}
                      </blockquote>

                      {/* Informations utilisateur */}
                      <div className="flex items-center">
                        <Avatar
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-[var(--custom-color)] font-bold mr-4 ${testimonial.avatarColor}`}
                        >
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-poppins font-bold text-[var(--custom-color)]">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-poppins">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 font-poppins">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--custom-color)]"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--custom-color)]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--custom-color)]"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 text-[var(--custom-color)]" />
          </button>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center mt-8 space-x-2" role="tablist">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * visibleSlides)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--custom-color)] ${
                Math.floor(currentIndex / visibleSlides) === index
                  ? "bg-[var(--custom-color)] w-6"
                  : "bg-gray-300"
              }`}
              aria-label={`Aller au groupe de témoignages ${index + 1}`}
              aria-selected={Math.floor(currentIndex / visibleSlides) === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </>
  );
}