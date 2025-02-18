import { Lexend } from "next/font/google";  
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apprends chez Daniel",
  description: "Recursos para aprender francés",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable}`}>
        {children}
      </body>
    </html>
  );
}
