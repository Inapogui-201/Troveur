import HeroSection from "@/components/ui/HeroSection";
import React from "react";
import HowItWorks from "@/components/ui/HowItWorks";
import TestimonialsCarouselServer from "@/components/ui/testimonials/TestimonialsCarouselServer";
import { Suspense } from "react";
import Commandes from "@/components/forms/Commandes";
import SnatchFeatures from "@/components/ui/SnatchFeatures";

export default function Home() {
        return (
    <div className="min-h-screen" suppressHydrationWarning={true}>
      <HeroSection/>
      <Commandes/>
      <HowItWorks/>
      <Suspense fallback={<div>Chargement des témoignages...</div>}>
        <TestimonialsCarouselServer />
      </Suspense>
      <SnatchFeatures/>

      
    </div>
  );
}