import type { IconName } from '../components/ui/Icon.astro';
import type { Pastel } from './site';

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  tone: Pastel;
}

export const services: Service[] = [
  {
    icon: 'pen',
    title: 'Diseño UI/UX',
    description:
      'Interfaces pensadas para tu usuario: flujos claros, jerarquía visual y decisiones basadas en datos.',
    tone: 'lavanda',
  },
  {
    icon: 'code',
    title: 'Desarrollo web',
    description:
      'Código limpio y rápido. Sitios estáticos, aplicaciones y CMS a medida, siempre con rendimiento real.',
    tone: 'cielo',
  },
  {
    icon: 'cart',
    title: 'E-commerce',
    description:
      'Tiendas que convierten: catálogo, checkout y experiencia de compra optimizados para vender más.',
    tone: 'mint',
  },
  {
    icon: 'search',
    title: 'SEO & rendimiento',
    description:
      'Tu web visible en Google y rápida en cualquier dispositivo. Core Web Vitals en verde, de verdad.',
    tone: 'peach',
  },
  {
    icon: 'sparkles',
    title: 'Marca visual',
    description:
      'Identidad, logotipo y sistema visual coherente antes de escribir la primera línea de código.',
    tone: 'butter',
  },
  {
    icon: 'heart',
    title: 'Soporte continuo',
    description:
      'Mantenimiento, mejoras y acompañamiento. Tu web evoluciona con tu negocio, no se queda congelada.',
    tone: 'lavanda',
  },
];
