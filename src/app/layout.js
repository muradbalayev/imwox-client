import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMVOX - Karyeranı IMVOX ilə qur",
  description: "Azərbaycanın peşəkar sosial şəbəkəsi. Tələbələri, peşəkarları və mentorları bir platformada birləşdiririk.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
