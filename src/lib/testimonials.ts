export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    location: string;
    type: "buyer" | "traveler";
    avatarColor: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Émilie T.",
      role: "Acheteuse de produits USA",
      content:
        "J'ai reçu mes sneakers limited edition en parfait état avant même la date estimée. Le voyageur m'a envoyé des photos à chaque étape !",
      rating: 5,
      location: "Lyon, France",
      type: "buyer",
      avatarColor: "bg-[var(--custom-color)]",
    },
    {
      id: 2,
      name: "Karim B.",
      role: "Voyageur Dubaï-France",
      content:
        "3 voyages, 12 commandes livrées. L'escrow sécurisé me permet de voyager l'esprit tranquille. Excellente communauté.",
      rating: 5,
      location: "Marseille, France",
      type: "traveler",
      avatarColor: "bg-[var(--custom-color)]",
    },
    {
      id: 3,
      name: "Léa S.",
      role: "Acheteuse cosmétiques Corée",
      content:
        "Plus rapide qu'un shipping international et moins cher. La livraison en main propre change tout pour les produits fragiles.",
      rating: 4,
      location: "Bruxelles, Belgique",
      type: "buyer",
      avatarColor: "bg-[var(--custom-color)]",
    },
    {
      id: 4,
      name: "Alexandre P.",
      role: "Voyageur France-Japon",
      content:
        "Je voyage souvent pour le travail. Troveur me permet de rentabiliser mes déplacements tout en aidant des passionnés.",
      rating: 5,
      location: "Tokyo, Japon",
      type: "traveler",
      avatarColor: "bg-[var(--custom-color)]",
    },
    {
      id: 5,
      name: "Sarah K.",
      role: "Acheteuse de thé rare",
      content:
        "Enfin un moyen fiable d'obtenir des thés authentiques directement des petites exploitations chinoises !",
      rating: 5,
      location: "Montréal, Canada",
      type: "buyer",
      avatarColor: "bg-[var(--custom-color)]",
    },
  ];