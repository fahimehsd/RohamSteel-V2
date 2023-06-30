import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "شرکت صنایع فولاد رهام استیل",
  description: "شرکت صنایع فولاد رهام استیل"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        {children}
        Footer
      </body>
    </html>
  );
}
