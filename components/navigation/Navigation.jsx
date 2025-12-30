'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Announcement Banner */}
      {siteConfig.banner.show && (
        <div className="bg-primary text-white py-2.5 text-center">
          <p className="text-sm font-medium tracking-wide px-4">
            {siteConfig.banner.text}
          </p>
        </div>
      )}

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={180}
                height={60}
                className="h-14 sm:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-primary ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href={siteConfig.nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-[#a85430] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Calendar size={18} />
                {siteConfig.nav.cta.text}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-dark"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
          >
            <div className="space-y-1 pt-4 border-t border-accent">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? 'bg-accent text-primary'
                      : 'text-dark hover:bg-accent hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-full font-medium hover:bg-[#a85430] transition-colors duration-300 mt-4"
              >
                <Calendar size={18} />
                {siteConfig.nav.cta.text}
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
