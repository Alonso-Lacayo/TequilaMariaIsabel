'use client';

import { motion } from 'framer-motion';

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
          className="max-w-3xl mx-auto px-6 sm:px-10"
        >
          <h1 className="text-5xl font-serif text-primary text-center mb-12">
            Our Story
          </h1>
          
          <div className="space-y-8 text-secondary">
            <p className="text-lg leading-relaxed">
              Our story begins with a profound love and an enduring memory. Maria Isabel was not just a beloved wife but also a beacon of joy, grace, and inspiration. Her untimely departure left a void, but also a vision - to create something that would honor her life and the love we shared. This vision gave birth to Tequila Reposado Maria Isabel.
            </p>

            <p className="text-lg leading-relaxed">
              In Spanish, &apos;Reposado&apos; means &apos;resting,&apos; symbolizing Maria Isabel&apos;s current state, resting and waiting for resurrection. This tequila isn&apos;t just a drink; it&apos;s a narrative of love, loss, and hope.
            </p>

            <p className="text-lg leading-relaxed">
              The most distinctive feature of our tequila is the silhouette of Maria Isabel&apos;s face at the bottom of the label. This isn&apos;t merely a design; it&apos;s the soul of our brand. With each pour of Tequila Reposado Maria Isabel, it&apos;s as if she awakens, joining in the celebration of life and the enduring spirit of love.
            </p>

            <p className="text-lg leading-relaxed">
              Each bottle of our tequila is crafted with the utmost care, encapsulating not just the finest agave flavors but also the essence of a story that transcends time. It&apos;s an ode to those we love and the memories that never fade.
            </p>

            <p className="text-lg leading-relaxed italic font-serif text-primary">
              So, as you savor Tequila Reposado Maria Isabel, remember that you&apos;re not just enjoying a premium tequila. You&apos;re part of a story of eternal love, a tribute to a beautiful soul whose spirit is interwoven in every sip. Here&apos;s to Maria Isabel - forever in our hearts, forever in our toast.
            </p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
} 