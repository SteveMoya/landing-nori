import type { Pastel } from './site';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  tone: Pastel;
}

export const pricing: PricingTier[] = [
  {
    name: 'Landing',
    price: '$1,800',
    period: 'proyecto único',
    description: 'Una página que convierte. Ideal para lanzamientos y campañas.',
    features: [
      'Diseño UI a medida (1 página)',
      'Desarrollo + SEO básico',
      'Rendimiento 90+ en PageSpeed',
      'Entrega en 2 semanas',
      'Soporte 30 días',
    ],
    cta: 'Empezar landing',
    tone: 'cielo',
  },
  {
    name: 'Sitio completo',
    price: '$4,500',
    period: 'proyecto único',
    description: 'Tu presencia digital completa: hasta 8 páginas, con blog y CMS.',
    features: [
      'Todo lo de Landing',
      'Hasta 8 páginas + blog',
      'CMS fácil de usar',
      'Copywriting básico incluido',
      'SEO técnico completo',
      'Soporte 90 días',
    ],
    cta: 'Quiero mi sitio',
    featured: true,
    tone: 'butter',
  },
  {
    name: 'Plataforma',
    price: 'Desde $9,500',
    period: 'proyecto a medida',
    description: 'Aplicaciones web, e-commerce y productos digitales complejos.',
    features: [
      'Todo lo de Sitio completo',
      'Funcionalidad a medida',
      'E-commerce o SaaS',
      'Integraciones (pagos, CRM)',
      'QA y seguridad',
      'Soporte continuo',
    ],
    cta: 'Hablemos',
    tone: 'lavanda',
  },
];
