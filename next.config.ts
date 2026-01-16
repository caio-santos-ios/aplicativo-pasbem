import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* O basePath é o que resolve o erro 404 no subdiretório */
  basePath: "/aplicativo",
  
  /* Configurações extras para evitar problemas de imagem/estáticos */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;