import { Testimonial, testimonials } from "../../../lib/testimonials";
import TestimonialsCarouselClient from "./TestimonialsCarouselClient";


export default async function TestimonialsCarouselServer() {
  const initialTestimonials: Testimonial[] = testimonials;

  return (
    <section
      id="temoignages"
      className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden scroll-mt-20"
      aria-label="Témoignages des utilisateurs"
    >
      <TestimonialsCarouselClient testimonials={initialTestimonials} />
    </section>
  );
}