// src/app/music/page.js
"use client";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic, SiTidal } from "react-icons/si";

export default function MusicPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white py-12">
      <h1 className="text-4xl font-bold mb-8">Escucha en tus plataformas favoritas</h1>
      <div className="flex flex-col gap-6">
        <Link href="https://open.spotify.com/artist/4Lu8zzPkOAP592vdHFHKA0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:opacity-80 transition-opacity">
          <FaSpotify className="text-green-500" size={32} />
          <span>Spotify</span>
        </Link>
        <Link href="https://music.apple.com/artist/placeholder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:opacity-80 transition-opacity">
          <SiApplemusic className="text-gray-300" size={32} />
          <span>Apple Music</span>
        </Link>
        <Link href="https://tidal.com/browse/artist/placeholder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:opacity-80 transition-opacity">
          <SiTidal className="text-blue-400" size={32} />
          <span>Tidal</span>
        </Link>
      </div>
      <Link href="/" className="mt-12 text-sm underline">← Volver a inicio</Link>
    </section>
  );
}
