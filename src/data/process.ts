import type { Pastel } from './site';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tone: Pastel;
}

export const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Descubrimiento',
    description:
      'Entrevistas, objetivos y análisis. Entendemos tu negocio antes de abrir el editor.',
    tone: 'lavanda',
  },
  {
    number: '02',
    title: 'Estrategia & wireframes',
    description:
      'Arquitectura de contenido y flujos. El mapa del sitio que convierte visitas en clientes.',
    tone: 'cielo',
  },
  {
    number: '03',
    title: 'Diseño UI',
    description:
      'Mockups en alta fidelidad con tu identidad. Iteramos contigo hasta que se sienta tuyo.',
    tone: 'peach',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description:
      'Código limpio, accesible y veloz. Tu diseño cobra vida en el navegador real.',
    tone: 'mint',
  },
  {
    number: '05',
    title: 'Lanzamiento & mejora',
    description:
      'Deploy, métricas y acompañamiento. Medimos, ajustamos y hacemos crecer el resultado.',
    tone: 'butter',
  },
];
