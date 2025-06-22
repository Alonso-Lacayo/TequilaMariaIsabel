'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurStoryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      <main className="container mx-auto min-h-[calc(100vh-80px)] pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto px-6 sm:px-10"
        >
          <h1 className="text-5xl font-serif text-primary text-center mb-16">
            Our Story
          </h1>
          
          <div className="space-y-24 text-secondary">
            {/* First Section - Hero */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden md:order-1">
                <Image
                  src="/close-up.jpg"
                  alt="María Isabel Tequila bottle in elegant dark setting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="md:order-2">
                <div className="p-8 border border-primary/20 rounded-lg bg-white/50 backdrop-blur-sm">
                  <p className="text-2xl font-serif text-secondary leading-relaxed">
                    Our story begins with a profound love and an enduring memory. Maria Isabel was not just a beloved wife but also a beacon of joy, grace, and inspiration. Her untimely departure left a void, but also a vision - to create something that would honor her life and the love we shared. This vision gave birth to Tequila Reposado Maria Isabel.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden md:order-2">
                <Image
                  src="/tequila-cap.jpg"
                  alt="Close up of María Isabel Tequila bottle cap"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-1">
                <div className="p-8 border border-primary/20 rounded-lg bg-white/50 backdrop-blur-sm">
                  <p className="text-2xl font-serif text-secondary leading-relaxed">
                    In Spanish, &apos;Reposado&apos; means &apos;resting,&apos; symbolizing Maria Isabel&apos;s current state, resting and waiting for resurrection. This tequila isn&apos;t just a drink; it&apos;s a narrative of love, loss, and hope.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden md:order-1">
                <Image
                  src="/pool.jpg"
                  alt="María Isabel Tequila by the poolside"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-2">
                <div className="p-8 border border-primary/20 rounded-lg bg-white/50 backdrop-blur-sm">
                  <p className="text-2xl font-serif text-secondary leading-relaxed">
                    The most distinctive feature of our tequila is the silhouette of Maria Isabel&apos;s face at the bottom of the label. This isn&apos;t merely a design; it&apos;s the soul of our brand. With each pour of Tequila Reposado Maria Isabel, it&apos;s as if she awakens, joining in the celebration of life and the enduring spirit of love.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Section - Closing Text */}
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="p-8 border border-primary/20 rounded-lg bg-white/50 backdrop-blur-sm">
                <p className="text-2xl font-serif text-secondary leading-relaxed">
                  Each bottle of our tequila is crafted with the utmost care, encapsulating not just the finest agave flavors but also the essence of a story that transcends time. It&apos;s an ode to those we love and the memories that never fade.
                </p>
              </div>

              <div className="p-8 border border-primary/20 rounded-lg bg-white/50 backdrop-blur-sm">
                <p className="text-2xl font-serif text-secondary leading-relaxed italic">
                  So, as you savor Tequila Reposado Maria Isabel, remember that you&apos;re not just enjoying a premium tequila. You&apos;re part of a story of eternal love, a tribute to a beautiful soul whose spirit is interwoven in every sip. Here&apos;s to Maria Isabel - forever in our hearts, forever in our toast.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
} 