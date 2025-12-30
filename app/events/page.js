'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Phone, Instagram, Facebook, ArrowRight } from 'lucide-react';
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

export default function EventsPage() {
  const { events } = siteConfig;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="heading-xl mb-4 text-white">{events.heroTitle}</h1>
            <p className="text-xl text-white/80">{events.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
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
              <h2 className="heading-lg">{events.upcomingTitle}</h2>
            </motion.div>

            {events.upcoming && events.upcoming.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {events.upcoming.map((event, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="event-card bg-white rounded-2xl overflow-hidden shadow-soft"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">{event.date}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="heading-sm mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      <a
                        href={event.ctaHref}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <Phone size={18} />
                        {event.ctaText}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div variants={fadeInUp} className="text-center py-12">
                <p className="text-gray-600 text-lg">{events.noEventsMessage}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Past Events Gallery */}
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
              <h2 className="heading-lg">{events.pastTitle}</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {events.pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={event.image}
                    alt={event.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium">{event.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Private Hire Section */}
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
              <h2 className="heading-lg mb-4">{events.privateHire.heading}</h2>
              <p className="text-gray-600 mb-8">{events.privateHire.content}</p>
              <a
                href={events.privateHire.ctaHref}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={18} />
                {events.privateHire.ctaText}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <p className="text-xl mb-6">{events.socialCta.text}</p>
            <div className="flex justify-center gap-4">
              {siteConfig.footer.social.instagram && (
                <a
                  href={siteConfig.footer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {siteConfig.footer.social.facebook && (
                <a
                  href={siteConfig.footer.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
