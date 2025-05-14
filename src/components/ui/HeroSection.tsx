"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h3 className="text-[var(--custom-color)] font-poppins font-semibold text-lg mb-4">
              Trouvez des produits rares en un clic !
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Achetez des produits à l&apos;étranger et faites-vous livrer par des
              voyageurs
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-poppins">
              Troveur rassemble les voyageurs et les acheteurs qui collaborent
              pour faciliter les achats dans le monde entier.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--custom-color)]">
                  15K+
                </span>
                <span className="text-gray-600">Utilisateurs actifs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--custom-color)]">
                  8K+
                </span>
                <span className="text-gray-600">Commandes réussies</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--custom-color)]">
                  120+
                </span>
                <span className="text-gray-600">Pays couverts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/commande"
                className="bg-[var(--custom-color)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#118a99] transition duration-300 text-center font-poppins font-medium"
              >
                Commander un produit
              </Link>
              <Link
                href="/voyage"
                className="border-2 border-[var(--custom-color)] text-[var(--custom-color)] px-6 py-3 rounded-lg shadow-md hover:bg-gray-50 transition duration-300 text-center font-poppins font-medium"
              >
                Voyager avec une commande
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-[var(--custom-color)]/20 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/hero.jpeg"
                  alt="Troveur - Connecter voyageurs et acheteurs"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-2 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src="/hero.jpeg"
                      alt="User"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-poppins font-medium text-sm">Sarah L.</p>
                    <div className="flex items-center text-[var(--custom-color)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 font-poppins">
                  &ldquo;Grâce à Troveur, j&apos;ai pu acheter des produits introuvables en
                  France. Service impeccable !&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
