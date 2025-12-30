'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Smartphone, Coffee, Calendar, Send } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Hero Carousel Component
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteConfig.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content Overlay Box */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="container-custom w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-lg mx-4 md:mx-0"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold text-white mb-4">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-white/90 text-lg mb-6">
              {slides[currentSlide].subheading}
            </p>
            <Link
              href={slides[currentSlide].ctaHref}
              className="inline-flex items-center gap-2 bg-[#E9BFBD] text-dark px-6 py-3 rounded-full font-semibold hover:bg-[#dba9a7] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {slides[currentSlide].ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const { products } = siteConfig;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">{products.heading}</h2>
          <p className="subheading mx-auto">{products.subheading}</p>
          <Link
            href="/pastries"
            className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all"
          >
            View More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Horizontal Scrolling Products */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex gap-6 pb-4"
            style={{ minWidth: 'max-content' }}
          >
            {products.items.map((product, index) => (
              <motion.div
                key={product.title}
                variants={fadeInUp}
                className="product-card w-64 flex-shrink-0"
              >
                <Link href={product.href} className="block group">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover product-card-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-dark group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Occasions Section (Patterned Background)
function OccasionsSection() {
  const { occasions } = siteConfig;

  return (
    <section className="section-padding bg-pattern-confetti">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">{occasions.heading}</h2>
          <p className="subheading mx-auto">{occasions.subheading}</p>
          <Link
            href="/pastries"
            className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all"
          >
            View More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {occasions.items.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Link href={item.href} className="block group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-soft">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Visit Us Section
function VisitUsSection() {
  const { visitUs } = siteConfig;

  const icons = {
    smartphone: Smartphone,
    coffee: Coffee,
    calendar: Calendar,
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">{visitUs.heading}</h2>
          <p className="subheading mx-auto">{visitUs.subheading}</p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {visitUs.options.map((option) => {
            const IconComponent = icons[option.icon];
            return (
              <motion.div key={option.title} variants={fadeInUp}>
                <Link href={option.href} className="block group">
                  <div className="bg-cream rounded-2xl p-8 text-center border-checkered-pink card-hover">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-cormorant">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Catering Section (Full-width with sage overlay)
function CateringSection() {
  const { catering } = siteConfig;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={catering.image}
          alt={catering.imageAlt}
          fill
          className="object-cover"
        />
        <div className="sage-overlay absolute inset-0" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white"
          >
            <h2 className="heading-lg mb-6 text-white">{catering.heading}</h2>
            <p className="text-lg text-white/90 mb-8 max-w-md">
              {catering.subheading}
            </p>
            <Link
              href={catering.ctaHref}
              className="inline-flex items-center gap-2 bg-[#E9BFBD] text-dark px-8 py-4 rounded-full font-semibold hover:bg-[#dba9a7] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {catering.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/images/celebration-cake.jpg"
                alt="Custom celebration cakes at Nena Craft Bakery"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  const { newsletter } = siteConfig;
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="section-padding bg-mint">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-4">{newsletter.heading}</h2>
          <p className="text-gray-600 mb-8">{newsletter.subheading}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              className="newsletter-input flex-1"
              required
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2"
            >
              {newsletter.buttonText}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { testimonials } = siteConfig;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">{testimonials.heading}</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.entries.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Main Home Page
export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ProductsSection />
      <OccasionsSection />
      <VisitUsSection />
      <CateringSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
