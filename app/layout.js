import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush Dangol",
  description: "Portfolio of Ayush Dangol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href="/images/facicon.ico" /> */}
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
