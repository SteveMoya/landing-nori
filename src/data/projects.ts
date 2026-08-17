import type { Pastel } from './site';

export interface Project {
  name: string;
  description: string;
  tags: string[];
  tone: Pastel;
  url: string;
}

// mock: proyectos web ficticios (mockups CSS, sin imágenes)
export const projects: Project[] = [
  {
    name: 'Café Aura',
    description: 'Web para cafetería de especialidad con reservas online y carta visual.',
    tags: ['Diseño UI', 'Astro', 'Reservas'],
    tone: 'peach',
    url: '#proyectos',
  },
  {
    name: 'Fit Pulse',
    description: 'App web de entrenamiento con planes personalizados y progreso en vivo.',
    tags: ['UX', 'React', 'PWA'],
    tone: 'mint',
    url: '#proyectos',
  },
  {
    name: 'Vega Studio',
    description: 'Portafolio de estudio de arquitectura con galería inmersiva y carga instantánea.',
    tags: ['Bento grid', 'Imagen', 'SEO'],
    tone: 'cielo',
    url: '#proyectos',
  },
  {
    name: 'Kiosko Books',
    description: 'E-commerce de libros independientes con recomendaciones personalizadas.',
    tags: ['E-commerce', 'Checkout', 'Analytics'],
    tone: 'lavanda',
    url: '#proyectos',
  },
];
