export const siteConfig = {
  name: 'Troveur',
  description: 'Votre plateforme de services à la demande',
  url: 'https://troveur.fr',
  ogImage: 'https://troveur.fr/og.jpg',
  links: {
    twitter: 'https://twitter.com/troveur',
    github: 'https://github.com/troveur',
  },
} as const;

export type SiteConfig = typeof siteConfig;
