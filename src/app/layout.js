import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "BØLGE | Sitio Oficial | Música para los que sienten demasiado",
  description: "Entra al universo artístico de BØLGE. Escucha sus sencillos, explora su galería de fotos editorial y síguelo en sus redes oficiales (Spotify, Instagram, TikTok, Tidal, YouTube).",
  keywords: ["BØLGE", "BØLGE música", "pop urbano", "pop alternativo", "artista musical", "música nocturna", "sombras de la noche"],
  authors: [{ name: "BØLGE" }],
  openGraph: {
    title: "BØLGE | Sitio Oficial",
    description: "Música para los que sienten demasiado. Entra al universo oficial de BØLGE.",
    url: "https://instagram.com/bolge__",
    siteName: "BØLGE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BØLGE | Sitio Oficial</title>
        <meta name="description" content="Entra al universo artístico de BØLGE. Escucha sus sencillos, explora su galería de fotos editorial y síguelo en sus redes oficiales." />
      </Head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
