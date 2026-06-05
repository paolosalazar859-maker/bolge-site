// src/app/community/page.js
"use client";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

export default function CommunityPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white py-12">
      <h1 className="text-4xl font-bold mb-8">Síguenos en nuestras plataformas</h1>
      <div className="flex flex-col gap-6">
        <Link href="https://www.tiktok.com/@bolge__" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:opacity-80 transition-opacity">
          <FaTiktok className="text-pink-500" size={32} />
          <span>TikTok</span>
        </Link>
        <Link href="https://www.instagram.com/bolge__" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:opacity-80 transition-opacity">
          <FaInstagram className="text-pink-400" size={32} />
          <span>Instagram</span>
        </Link>
        <Link href="https://www.youtube.com/channel/placeholder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl hover:opacity-80 transition-opacity">
          <FaYoutube className="text-red-600" size={32} />
          <span>YouTube</span>
        </Link>
      </div>
      <Link href="/" className="mt-12 text-sm underline">← Volver a inicio</Link>
    </section>
  );
}
