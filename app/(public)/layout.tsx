
import type { Metadata } from "next";
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import '@/app/ui/globals.css';
import { barlow, dancingScript, oswald } from '@/app/ui/fonts';



export const metadata: Metadata = {
  title: "Printing NG",
  description: "Printing Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${barlow.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
