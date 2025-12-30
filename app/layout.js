import './globals.css';
import { Nunito_Sans, Cormorant_Garamond } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import { siteConfig } from '@/config/siteConfig';

// Load Nunito Sans font (body text - similar to Ambit)
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700'],
});

// Load Cormorant Garamond font (headings - similar to Gatefold Demi)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

export const metadata = siteConfig.metadata.base;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${nunitoSans.variable}
          ${cormorant.variable}
          font-sans
          antialiased
          bg-white
          text-dark
        `}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
