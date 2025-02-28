// caminho: app/layout.js

import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutRaiz({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
