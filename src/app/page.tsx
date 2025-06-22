'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import { motion } from 'framer-motion';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProductShowcase />
      
      {/* Distinguished Taste Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-primary">DISTINGUISHED TASTE</h2>
              <div className="space-y-6">
                <p className="text-3xl font-serif text-secondary leading-relaxed">
                  Our work is the collaboration of esteemed distillers and artists across México.
                </p>
                <p className="text-3xl font-serif text-secondary leading-relaxed">
                  María Isabel is a refined reposado. We invite you to wake her up.
                </p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 border-2 border-secondary text-secondary font-serif
                           hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  GET IN TOUCH
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <Image
                src="/cactus.png"
                alt="Agave cactus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
