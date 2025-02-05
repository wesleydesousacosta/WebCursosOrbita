import { Inter } from "next/font/google";
import { useTranslation } from "react-i18next";
import "../styles/globals.css";

// Importa a configuração do i18n
import "/app/lib/i18n";  // Caminho absoluto para o arquivo em '/app/lib'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
