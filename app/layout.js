import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda de electrodomesticos",
  description: "Aplicacion hecha con Next como proyecto final de Coderhouse",
  openGraph: {
    title: "Ecommerce CH Electrodomesticos",
    description: "Ecommerce desarollado en Next",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="h-auto p-3">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
