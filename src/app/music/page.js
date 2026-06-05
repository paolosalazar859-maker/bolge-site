// src/app/music/page.js
"use client";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { FaApple, SiTidal } from "react-icons/fa";

export default function MusicPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white py-12">
      <h1 className="text-4xl font-bold mb-8">Escucha en tus plataformas favoritas</h1>
      <div className="flex flex-col gap-4 items-center">
  <Link href="https://open.spotify.com/artist/4Lu8zzPkOAP592vdHFHKA0" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-[#050505] text-white flex items-center gap-3 text-xl hover:opacity-80 transition-opacity rounded-sm overflow-hidden">
    <FaSpotify className="text-green-500" size={32} />
    <span>Spotify</span>
  </Link>
  <Link href="https://music.apple.com/us/artist/b%C3%B8lge/1261895838" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-[#050505] text-white flex items-center gap-3 text-xl hover:opacity-80 transition-opacity rounded-sm overflow-hidden">
        <FaApple className="text-gray-300" size={32} />
    <span>Apple Music</span>
  </Link>
  <Link href="https://tidal.com/artist/8953328/u" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-[#050505] text-white flex items-center gap-3 text-xl hover:opacity-80 transition-opacity rounded-sm overflow-hidden">
    <SiTidal className="text-white" size={32} />
    <span>Tidal</span>
  </Link>
</div>
      <Link href="/" className="mt-12 text-sm underline">← Volver a inicio</Link>
    </section>
  );
}
