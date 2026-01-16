'use client';

import { useEffect } from "react";
import { Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Provider as JotaiProvider } from "jotai";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

/**
 * Nota: Em Next.js App Router com 'use client', metadados devem ser 
 * exportados de um arquivo layout.tsx separado ou movidos para um 
 * componente de servidor. Para simplificar e garantir o PWA, 
 * usamos as tags <meta> diretamente no <html>.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Registro manual do Service Worker para garantir o modo Standalone (sem barra)
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/aplicativo/sw.js", { scope: "/aplicativo/" })
          .then((reg) => console.log("Service Worker registrado com sucesso:", reg))
          .catch((err) => console.error("Falha ao registrar Service Worker:", err));
      });
    }
  }, []);

  return (
    <html lang="pt-br">
      <head>
        <title>PasBem</title>
        <meta name="description" content="Aplicativo PasBem" />
        
        {/* Configurações críticas para remover a barra branca e o modo navegador */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PasBem" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        <link rel="manifest" href="/aplicativo/manifest.json" />
        <link rel="apple-touch-icon" href="/aplicativo/icon-192x192.png" />
      </head>
      <body className={outfit.className}>
        <JotaiProvider>
          {children}
          <ToastContainer 
            position="top-center" 
            autoClose={3000} 
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </JotaiProvider>
      </body>
    </html>
  );
}