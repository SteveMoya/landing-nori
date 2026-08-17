export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export type Pastel = 'lavanda' | 'mint' | 'peach' | 'butter' | 'cielo';

export const site = {
  name: 'Nori',
  tagline: 'Diseño web con propósito.',
  description:
    'Agencia boutique de diseño y desarrollo web. Creamos sitios que conectan tu marca con tu audiencia: estrategia, diseño UI/UX y código que rinde.',
  url: 'https://nori.stevemoya.me',
  email: 'hola@nori.studio',
  founded: 2021,

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas', href: '#preguntas' },
  ] satisfies NavItem[],

  hero: {
    badge: 'Agencia boutique de diseño y desarrollo',
    title: { start: 'Diseño web con', accent: 'propósito' },
    subtitle:
      'Sitios que conectan tu marca con tu audiencia: estrategia, diseño UI/UX y código que rinde. Sin plantillas, sin humo.',
    primaryCta: 'Hablemos de tu proyecto',
    secondaryCta: 'Ver proyectos',
    stat: { value: '120+', label: 'proyectos entregados' },
  },

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/nori.studio', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/noristudio', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@nori.studio', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@noristudio', icon: 'youtube' },
  ] satisfies Social[],

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;
