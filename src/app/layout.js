import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "School of Islam",
  description: "A Project by YouthLink",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
