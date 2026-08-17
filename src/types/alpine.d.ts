// Alpine.js no incluye tipos de módulo; declaraciones mínimas.
declare module 'alpinejs' {
  interface AlpineStatic {
    plugin(...plugins: unknown[]): AlpineStatic;
    start(): void;
    data(name: string, callback: unknown): void;
    store(name: string, value: unknown): void;
  }
  const Alpine: AlpineStatic;
  export default Alpine;
}

declare module '@alpinejs/collapse';
