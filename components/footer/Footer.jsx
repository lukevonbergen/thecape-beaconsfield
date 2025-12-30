import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={150}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your local neighbourhood café serving South African-inspired breakfasts, lunches & homebaked treats for over 19 years.
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Explore</h4>
            <ul className="space-y-3">
              {siteConfig.footer.columns[0].links.map((link) => (
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

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Opening Hours</h4>
            <ul className="space-y-3">
              {siteConfig.contact.hours.map((hour, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <span className="font-medium text-white">{hour.days}</span>
                    <br />
                    {hour.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-white">{siteConfig.footer.location.address}</span>
                  <br />
                  {siteConfig.footer.location.town}
                  <br />
                  {siteConfig.footer.location.postcode}
                </div>
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
              <li>
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 text-sm font-medium mt-2"
                >
                  View on Map →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} {siteConfig.footer.copyright}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
