import './globals.css';
import { Lato, Playfair_Display, Dancing_Script } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import { siteConfig } from '@/config/siteConfig';

// Load Lato font (body text)
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
});

// Load Playfair Display font (headings)
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

// Load Dancing Script font (accent/script text)
const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['400', '500', '600', '700'],
});

export const metadata = siteConfig.metadata.base;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${lato.variable}
          ${playfair.variable}
          ${dancing.variable}
          font-sans
          antialiased
          bg-background
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
