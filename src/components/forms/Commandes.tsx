"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Define types for our component
interface User {
  name: string;
  location: string;
  avatar: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  users: User[];
}

export default function RecentOrders() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Number of cards to show at once based on viewport
  const getCardsToShow = (): number => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4; // xl
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm
    }
    return 3; // Default for server rendering
  };

  const [cardsToShow, setCardsToShow] = useState<number>(3);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log("Fetching from /api/recent...");
        const response = await fetch('/api/recent');
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Données reçues:", data);
        setProducts(data.products || []);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des commandes récentes:", error);
        setError("Impossible de charger les commandes récentes. Veuillez réessayer plus tard.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Update cards to show on resize
  useEffect(() => {
    const handleResize = (): void => {
      setCardsToShow(getCardsToShow());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = products.length > 0 ? Math.max(products.length - cardsToShow + 1, 1) : 0;

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-poppins font-bold mb-4 text-gray-800">
              Chargement des commandes récentes...
            </h2>
            <div className="w-24 h-1 bg-[var(--custom-color)] mx-auto mb-6"></div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--custom-color)]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-poppins font-bold mb-4 text-gray-800">
              Erreur
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-6 px-6 py-3 bg-[var(--custom-color)] text-white rounded-lg font-poppins font-medium hover:bg-[var(--custom-color)]/80 transition-colors duration-300"
            >
              Réessayer
            </button>
          </div>
        </div>
      </section>
    );
  }

  // No products state
  if (products.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-poppins font-bold mb-4 text-gray-800">
              Aucune commande récente
            </h2>
            <div className="w-24 h-1 bg-[var(--custom-color)] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
              Aucune commande récente n&apos;a été trouvée. Revenez plus tard!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold mb-4 text-gray-800">
            Commandes récemment effectuées
          </h2>
          <div className="w-24 h-1 bg-[var(--custom-color)] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
            Ces commandes ont été récemment livrées à l&apos;autre bout du monde. En
            toute sécurité, rapidement et à moindre coût grâce à notre
            communauté de voyageurs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
            disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--custom-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out pb-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2`}
                >
                  <div
                    className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-[var(--custom-color)]/20"
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={320}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        unoptimized={product.image.startsWith('http')}
                      />
                      <div className="absolute top-3 right-3 bg-[var(--custom-color)] text-white text-xs py-1 px-2 rounded-full font-poppins">
                        {product.category}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-poppins font-medium text-lg mb-1 text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-[var(--custom-color)] font-poppins font-semibold">
                        {product.price}
                      </p>
                    </div>

                    <div className="p-4 border-t border-gray-100">
                      <div className="flex justify-between items-center relative">
                        <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none ">
                          <svg className="w-full h-16" viewBox="0 0 200 40">
                            <path
                              d="M 40,30 Q 100,5 160,30"
                              fill="none"
                              stroke={
                                hoveredCard === product.id
                                  ? "var(--custom-color)"
                                  : "#e5e7eb"
                              }
                              strokeWidth="2"
                              strokeDasharray={
                                hoveredCard === product.id ? "0" : "4"
                              }
                              className="transition-colors duration-300"
                            />
                            <circle
                              cx="100"
                              cy="5"
                              r="4"
                              fill="white"
                              stroke={
                                hoveredCard === product.id
                                  ? "var(--custom-color)"
                                  : "#e5e7eb"
                              }
                              className="transition-colors duration-300"
                            />
                            <text
                              x="100"
                              y="7"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fontSize="10"
                            >
                              ✈️
                            </text>
                          </svg>
                        </div>

                        {product.users.map((user, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center gap-1 z-10"
                          >
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                                index === 0 ? "bg-blue-100" : "bg-green-100"
                              }`}
                            >
                              {user.avatar}
                            </div>
                            <span className="font-poppins font-medium text-sm">
                              {user.name}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <span>{index === 0 ? "✈️" : "🏠"}</span>
                              <span className="max-w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                {user.location.split(index === 0 ? "/" : ", ")[0]}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 font-poppins">
                              {user.location.includes("/")
                                ? user.location.split("/")[1]
                                : user.location.split(", ")[1]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
            disabled={currentIndex === totalSlides - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--custom-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-[var(--custom-color)]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/commandes-recentes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[var(--custom-color)] text-[var(--custom-color)] rounded-lg font-poppins font-medium hover:bg-[var(--custom-color)] hover:text-white transition-colors duration-300"
          >
            Voir toutes les commandes récentes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}