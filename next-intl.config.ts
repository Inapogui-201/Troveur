export const locales = ['fr', 'en'] as const;
export const defaultLocale = 'fr';
export const localePrefix = 'always';

// Placeholder pour les chemins de pages
export const pathnames = {
  '/': '/',
  '/about': {
    fr: '/a-propos',
    en: '/about'
  },
  '/contact': {
    fr: '/contact',
    en: '/contact'
  }
};
