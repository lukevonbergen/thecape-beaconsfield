'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Phone } from 'lucide-react';
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
    transition: { staggerChildren: 0.05 },
  },
};

// Inner component that uses useSearchParams
function MenuContent() {
  const { menu } = siteConfig;
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(0);

  // Check URL params on mount for tab selection
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'takeaway') {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, [searchParams]);

  const currentMenu = activeTab === 0 ? menu.dineIn : menu.takeaway;

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
            <h1 className="heading-xl mb-4 text-white">{menu.heading}</h1>
            <p className="text-xl text-white/80">{menu.subheading}</p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-6 bg-background border-b border-accent sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex justify-center gap-4">
            {menu.tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`tab-button ${
                  activeTab === index
                    ? 'tab-button-active'
                    : 'tab-button-inactive'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Note */}
      <section className="py-4 bg-accent">
        <div className="container-custom">
          <p className="text-center text-sm text-gray-600 italic">
            {currentMenu.note}
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              {currentMenu.sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  variants={fadeInUp}
                  className="menu-section"
                >
                  {/* Section Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="heading-md text-primary">{section.title}</h2>
                      <div className="flex-1 h-px bg-primary/20" />
                    </div>
                    {section.subtitle && (
                      <p className="text-sm text-gray-500 italic">{section.subtitle}</p>
                    )}
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="menu-item"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="menu-item-name">{item.name}</h3>
                            {item.description && (
                              <p className="menu-item-description">{item.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Cakes Note (Dine-In only) */}
              {activeTab === 0 && menu.dineIn.cakesNote && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-primary/10 rounded-xl p-6 mt-8 text-center"
                >
                  <p className="text-gray-700 font-medium">{menu.dineIn.cakesNote}</p>
                </motion.div>
              )}

              {/* Allergen Note (Dine-In only) */}
              {activeTab === 0 && menu.dineIn.allergenNote && (
                <motion.div
                  variants={fadeInUp}
                  className="mt-12 pt-8 border-t border-accent"
                >
                  <p className="text-sm text-gray-500 text-center italic">
                    {menu.dineIn.allergenNote}
                  </p>
                </motion.div>
              )}

              {/* Footer Note (Takeaway only) */}
              {activeTab === 1 && menu.takeaway.footerNote && (
                <motion.div
                  variants={fadeInUp}
                  className="bg-secondary/10 rounded-xl p-6 mt-8"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                    <p className="text-gray-700">{menu.takeaway.footerNote}</p>
                    <a
                      href="tel:01494681137"
                      className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Download / Contact CTA */}
      <section className="py-12 bg-accent">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <p className="text-gray-700 font-medium">
              Questions about our menu? Want to make a reservation?
            </p>
            <a
              href="tel:01494681137"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone size={18} />
              Call Us: 01494 681137
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Loading fallback
function MenuLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading menu...</p>
      </div>
    </div>
  );
}

// Main page component wrapped in Suspense
export default function MenuPage() {
  return (
    <Suspense fallback={<MenuLoading />}>
      <MenuContent />
    </Suspense>
  );
}
