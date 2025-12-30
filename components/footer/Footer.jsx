import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={150}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Artisan sourdough bakery, cafe and speciality coffee.
              Freshly baked every day with locally sourced, seasonal ingredients.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {siteConfig.footer.social.instagram && (
                <a
                  href={siteConfig.footer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.footer.social.facebook && (
                <a
                  href={siteConfig.footer.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Link Columns */}
          {siteConfig.footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-lg font-semibold mb-4 font-cormorant">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-cormorant">Have a Question?</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href={`mailto:${siteConfig.footer.contact.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">{siteConfig.footer.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.footer.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">{siteConfig.footer.contact.phone}</span>
                </a>
              </li>
            </ul>

            {/* Locations */}
            <div className="space-y-3">
              {siteConfig.footer.locations.map((location) => (
                <div key={location.name} className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="font-medium text-white">{location.name}:</span>
                    <br />
                    {location.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} {siteConfig.footer.copyright}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
