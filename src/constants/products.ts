import type { ImageMetadata } from "astro";

export interface Product {
  nombre: string;
  imagen: ImageMetadata;
  alt: string;
}

// Las imágenes se inyectan desde el componente para evitar
// problemas de resolución con barrel files y Astro assets
export const PRODUCTS: Omit<Product, "imagen">[] = [
  {
    nombre: "Camisetas",
    alt: "Mujer modelando camiseta negra con una imagen de una mano de esqueleto",
  },
  {
    nombre: "Tote Bags",
    alt: "Hombre posando extendiendo la mano con un Tote Bag de color negro y mostaza",
  },
  {
    nombre: "Mugs",
    alt: "Mug de cerámica con la imagen del guardabarranco",
  },
];