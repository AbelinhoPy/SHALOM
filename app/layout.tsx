import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import {Toaster} from 'react-hot-toast'
import LayoutProvider from "./layout-provider";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Jahuga | Reservá tu Cancha y Turno en Paraguay",
  description: "Plataforma de reservas de canchas de fútbol sintético, pádel, vóley y salones con seña online en Paraguay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}
      
    >
      <body className="min-h-full flex flex-col"><LayoutProvider>{children}</LayoutProvider><Toaster /></body>
    </html>
  );
}
