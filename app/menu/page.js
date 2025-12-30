'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

export default function MenuPage() {
  const { menu } = siteConfig;
  const [activeSection, setActiveSection] = useState(0);

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

  const DietaryBadge = ({ type }) => {
    const badgeClass = {
      'V': 'dietary-badge-v',
      'VG': 'dietary-badge-vg',
      'GF': 'dietary-badge-gf',
    };

    return (
      <span className={`dietary-badge ${badgeClass[type]}`} title={menu.dietaryKey.find(k => k.label === type)?.description}>
        {type}
      </span>
    );
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/coffee-latte.jpg"
          alt="Speciality coffee at Nena Craft Bakery"
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
            <h1 className="heading-xl mb-4">{menu.heading}</h1>
            <p className="text-xl text-white/90">{menu.subheading}</p>
          </motion.div>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex justify-center gap-4">
            {menu.sections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-primary text-white'
                    : 'bg-mint text-dark hover:bg-primary hover:text-white'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Key */}
      <section className="py-4 bg-cream">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {menu.dietaryKey.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <DietaryBadge type={item.label} />
                <span className="text-gray-600">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-white" id="drinks">
        <div className="container-custom">
          <motion.div
            key={activeSection}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {menu.sections[activeSection].categories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                className="mb-12 last:mb-0"
              >
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="heading-md text-primary">{category.name}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-dark">{item.name}</h3>
                          <div className="flex gap-1">
                            {item.dietary.map((d) => (
                              <DietaryBadge key={d} type={d} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-primary font-bold ml-4">£{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-mint">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-600 italic">
              {menu.note}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Allergy Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-cream rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-md mb-4">Allergen Information</h2>
            <p className="text-gray-600">
              Many of our items contain or may come into contact with common allergens including wheat, dairy, eggs, nuts, and soya.
              If you have any allergies or dietary requirements, please speak to a member of our team who will be happy to help.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
