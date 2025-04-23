import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Remove or comment out Geist
import { Lato } from "next/font/google"; // Import Lato
import Link from "next/link";
import "./globals.css";

// Configure Lato font
const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'], // Include weights you might need
  variable: "--font-lato", // Define CSS variable
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Amit Raj - Software Engineer",
  description: "Personal website of Amit Raj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // Use Lato font variable and updated slate colors
        className={`${lato.variable} font-sans antialiased bg-slate-900 text-slate-200 min-h-screen flex flex-col`}
      >
        <nav className="bg-slate-800 p-4 w-full sticky top-0 z-10 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              Amit Raj
            </Link>
            <div className="space-x-6">
              <Link href="/projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link href="/config" className="text-slate-300 hover:text-blue-400 transition-colors">
                Config
              </Link>
              <Link href="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-6 md:p-8 flex-grow">
         {children}
        </main>
        <footer className="bg-slate-800 p-5 text-center text-slate-400 text-sm w-full mt-auto">
          © {new Date().getFullYear()} Amit Raj. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
