'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock, ExternalLink, Instagram, Facebook, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={siteConfig.hero.image}
            alt={siteConfig.hero.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <p className="font-dancing text-3xl md:text-4xl lg:text-5xl text-white/90 mb-2">
            {siteConfig.hero.heading.line1}
          </p>
          <h1 className="font-heading font-bold text-white uppercase tracking-wide">
            <span className="block text-5xl md:text-7xl lg:text-8xl">{siteConfig.hero.heading.line2}</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">{siteConfig.hero.heading.line3}</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl mt-2">{siteConfig.hero.heading.line4}</span>
          </h1>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="terracotta-line-center mb-6" />
              <h2 className="heading-lg mb-6">{siteConfig.welcome.heading}</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4 text-gray-600 leading-relaxed">
              {siteConfig.welcome.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href={siteConfig.welcome.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Calendar size={18} />
                {siteConfig.welcome.ctaText}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Opening Hours Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 lg:gap-20"
          >
            {/* Contact Column */}
            <motion.div variants={fadeInUp}>
              <h3 className="heading-md mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{siteConfig.contact.address.line1}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.line2}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.postcode}</p>
                  </div>
                </div>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-medium">{siteConfig.contact.phone}</span>
                </a>
                <div className="flex gap-4 pt-4">
                  <a
                    href={siteConfig.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Map
                  </a>
                  <a
                    href={siteConfig.welcome.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Calendar size={18} />
                    Make a Booking
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours Column */}
            <motion.div variants={fadeInUp}>
              <h3 className="heading-md mb-6">Opening Times</h3>
              <div className="space-y-4">
                {siteConfig.contact.hours.map((hour, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-primary/20 last:border-b-0">
                    <Clock className="w-5 h-5 text-primary" />
                    <div className="flex justify-between flex-1">
                      <span className="font-medium">{hour.days}</span>
                      <span className="text-gray-600">{hour.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 italic">
                {siteConfig.contact.groupNote}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - From Our Kitchen */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="terracotta-line-center mb-6" />
              <h2 className="heading-lg">{siteConfig.gallery.heading}</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {siteConfig.gallery.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="gallery-card group aspect-square"
                >
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="w-16 h-1 bg-white mx-auto rounded-full mb-6" />
              <h2 className="heading-lg mb-4 text-white">{siteConfig.menuPreview.heading}</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                {siteConfig.menuPreview.intro}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {siteConfig.menuPreview.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                    index === 0
                      ? 'bg-white text-secondary hover:bg-accent'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary'
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={siteConfig.catering.image}
                alt={siteConfig.catering.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="terracotta-line mb-6" />
              <h2 className="heading-lg mb-4">{siteConfig.catering.heading}</h2>
              <p className="text-gray-600 mb-6">{siteConfig.catering.content}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.catering.ctaHref}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Phone size={18} />
                  {siteConfig.catering.ctaText}
                </a>
                <div className="flex gap-3">
                  {siteConfig.footer.social.instagram && (
                    <a
                      href={siteConfig.footer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
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
                      className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="terracotta-line-center mb-6" />
              <h2 className="heading-lg">{siteConfig.testimonials.heading}</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {siteConfig.testimonials.entries.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-soft"
                >
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium text-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
