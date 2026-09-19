import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { InitialLoadProvider } from "@/components/InitialLoadProvider";
import { site } from "@/data/site";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono',
})

export const metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  icons: {
    icon:{
      url: "/images/favicon.png"
    }
  } 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-6 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <InitialLoadProvider>
          <Header />
          <StairTransition />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
        </InitialLoadProvider>
        
      </body>
    </html>
  );
}
