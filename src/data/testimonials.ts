export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

// mock: testimonios ficticios de clientes
export const testimonials: Testimonial[] = [
  {
    quote:
      'Pasamos de una web que nadie encontraba a una que atrae clientes cada semana. El proceso fue clarísimo en cada paso.',
    name: 'Sofía Méndez',
    role: 'Fundadora · Café Aura',
    initials: 'SM',
  },
  {
    quote:
      'El sitio cargó un 300% más rápido y las ventas online subieron el primer mes. Nori entiende de negocio, no solo de diseño.',
    name: 'Raúl Peña',
    role: 'CEO · Kiosko Books',
    initials: 'RP',
  },
  {
    quote:
      'Trabajaron como parte de nuestro equipo. Entregaron antes de tiempo y el resultado superó los mockups.',
    name: 'Elena Duarte',
    role: 'Product Lead · Fit Pulse',
    initials: 'ED',
  },
];
