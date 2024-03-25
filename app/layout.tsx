import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/ReactToastify.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Polls App",
  description: "Um aplicativo para a criação de enquetes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bg-neutral-950 min-h-screen p-4 lg:px-16 lg:py-8`}>
        <ToastContainer
          theme="dark"
        />
        <div
          className="container mx-auto p-4 pb-6 bg-neutral-900 text-neutral-50 w-full
                     min-h-[calc(100vh-32px)] rounded-2xl
                     lg:min-h-[calc(100vh-64px)] lg:p-8"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
