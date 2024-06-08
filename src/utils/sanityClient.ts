import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configurar el cliente de Sanity con tus detalles del proyecto
const client = createClient({
  projectId: "ihd1obi1",
  dataset: "production",
  useCdn: true, // `false` si quieres asegurarte de obtener datos frescos
  apiVersion: '2023-06-01', // Usa la fecha de la versión de la API (ISO formato de fecha)
});

// Configurar el builder de URL para imágenes
const builder = imageUrlBuilder(client);

// Helper function para obtener URLs de imágenes
export const urlFor = (source) => builder.image(source);

// Exportar el cliente de Sanity por si necesitas hacer otras operaciones con él
export default client;