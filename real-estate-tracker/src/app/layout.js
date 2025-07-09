
'use client'

import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from 'next-auth/react';
import { SearchProvider } from './context/SearchContext';
import { FavoritesProvider } from './context/FavoritesContext';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#F9FAFB] text-[#333333]">
        <SessionProvider>
          <SearchProvider>
            <FavoritesProvider>
              <main>{children}</main>
            </FavoritesProvider>
          </SearchProvider>
        </SessionProvider>
      </body>
    </html>
  );
}