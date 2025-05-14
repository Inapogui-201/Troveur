export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgot: '/auth/forgot-password',
  },
} as const;

export type AppRoutes = typeof routes;
