"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Menu, X } from "lucide-react";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Achievements", href: "#achievements" },
    // { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-primary-900`}>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-black text-primary tracking-tighter italic uppercase">
                Vijnjodaya
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary/70 hover:text-primary px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-3 bg-primary text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl active:scale-95"
              >
                Join Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-primary hover:bg-primary/5 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden glass-morphism border-t border-primary/5 absolute top-20 left-0 right-0 p-6 space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-black uppercase tracking-tighter text-primary/80 hover:text-primary py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center py-5 bg-primary text-white rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl"
            >
              Join Us
            </a>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-primary text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
                Vijnjodaya <span className="text-accent">Arts & Sports</span>
              </h3>
              <p className="text-white/60 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
                Celebrating Arts, Sports, and the Spirit of Kerala. Inspiring generations since 2023.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6">Explore</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/80 hover:text-accent font-bold transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#" className="hover:text-accent font-bold transition-colors uppercase tracking-widest text-xs">FB</a>
                <a href="#" className="hover:text-accent font-bold transition-colors uppercase tracking-widest text-xs">IG</a>
                <a href="#" className="hover:text-accent font-bold transition-colors uppercase tracking-widest text-xs">TW</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
              © 2025 Vijnjodaya Heritage Portal. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
