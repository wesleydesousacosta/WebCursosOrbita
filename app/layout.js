// caminho: app/layout.js

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutRaiz({ children }) {
  return (
   
    <html lang="pt">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
