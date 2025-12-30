'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function AboutPage() {
  const { about } = siteConfig;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const icons = {
    leaf: Leaf,
    heart: Heart,
    users: Users,
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/bakery-interior-1.jpg"
          alt="Nena Craft Bakery interior"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="heading-xl mb-4">{about.heading}</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10 hidden md:block" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="sage-line mb-6" />
              <h2 className="heading-lg mb-6">{about.intro}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {about.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-pattern-confetti">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="subheading mx-auto">
              The principles that guide everything we bake
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {about.values.map((value, index) => {
              const IconComponent = icons[value.icon];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 text-center shadow-soft card-hover"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-cormorant">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <div className="sage-line mb-6" />
              <h2 className="heading-lg mb-6">The Art of Sourdough</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our sourdough journey begins with our century-old starter, lovingly maintained and fed daily by our head baker. This living culture is the heart of our bakery, giving each loaf its distinctive tangy flavour and beautiful open crumb.
                </p>
                <p>
                  We use a 24-hour cold fermentation process, allowing the dough to develop complex flavours while making the bread more digestible. Our commitment to traditional techniques means we never use commercial yeast in our sourdough - just flour, water, salt, and time.
                </p>
                <p>
                  Every morning at 4am, our bakers begin shaping and scoring the day's loaves. By the time we open our doors, the aroma of freshly baked bread fills the air, ready to greet our customers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="/images/sourdough-loaves.jpg"
                  alt="Freshly baked sourdough loaves"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cafe-interior.jpg"
            alt="Nena Craft Bakery cafe"
            fill
            className="object-cover"
          />
          <div className="sage-overlay absolute inset-0" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-white"
          >
            <h2 className="heading-lg mb-4 text-white">Come Say Hello</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Visit one of our two locations and experience the warmth of Nena Craft Bakery for yourself.
              Fresh bread, great coffee, and friendly faces await.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[#E9BFBD] text-dark px-8 py-4 rounded-full font-semibold hover:bg-[#dba9a7] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Find Our Locations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
