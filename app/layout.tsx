import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
// 如果Google的字體沒有了化，可以使用
import localFont from 'next/font/local'
import NavBar from "./NavBar";
import { Suspense } from "react";
import AuthProvider from "./auth/Provider";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
})

const poppins = localFont({
  src: '../public/fonts/627622453ef56b0d-s.p.woff2',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript/>
      {/* <body className={inter.className}> */}
      {/* <body className={roboto.className}> */}
      <body className={poppins.variable}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">
            <Suspense fallback={<p>Loading...</p>}>
              {children}
            </Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
