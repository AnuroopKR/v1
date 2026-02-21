import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijnjodaya",
  description: "Arts and sports club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-primary-900`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="text-2xl font-bold text-primary tracking-tight">Vijnjodaya</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#about" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                  <a href="#events" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</a>
                  <a href="#achievements" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Achievements</a>
                  <a href="#team" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</a>
                  <a href="#gallery" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</a>
                  <a href="#contact" className="ml-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-light transition-all shadow-md active:scale-95">Join Us</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-primary text-white py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Vijnjodaya Arts & Sports Club</h3>
            <p className="text-emerald-100 max-w-md mx-auto mb-8 opacity-80">Celebrating Arts, Sports, and Spirit of Kerala since 2023.</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            </div>
            <div className="border-t border-emerald-800 pt-8 text-sm opacity-60">
              <p>© 2025 Vijnjodaya. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
