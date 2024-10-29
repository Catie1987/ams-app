import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "AMS VIETNAM",
  description: "AMS VIETNAM CO LTD",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  }
}>) {
  return (
    <html lang={params.locale}>
      <body>
        
        <Providers locale={params.locale}>
          <Header/>
          {children}
          <Footer/>
        </Providers>
        
      </body>
    </html>
  );
}
