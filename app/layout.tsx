import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIHLA — Streetwear",
  description: "Limited drops. Unlimited culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-[#f0f0f0]">
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
          <p className="text-2xl md:text-3xl font-black tracking-[0.5em] uppercase text-white mb-6">RIHLA</p>
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/30">Coming Soon</p>
        </div>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
