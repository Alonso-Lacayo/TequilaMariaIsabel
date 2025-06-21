import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-white" id="discover">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative h-[600px]"
          >
            <Image
              src="/bottle-beach.webp"
              alt="María Isabel Tequila bottle on the beach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
            />
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif text-primary mb-2">INSPIRED BY THE REGION</h2>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-serif text-secondary">MARÍA ISABEL</span>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-600">TEQUILA</span>
                  <span className="text-sm text-gray-600">100% DE AGAVE</span>
                  <span className="text-sm text-gray-600">REPOSADO</span>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Rich in heritage and local tradition, María Isabel Tequila hopes to bring you and yours closer together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="/our-story"
                className="inline-block px-8 py-3 bg-secondary text-white font-serif
                         hover:bg-primary transition-colors duration-300"
              >
                READ OUR STORY
              </a>
            </motion.div> 
          </div>
        </div>
      </div>
    </section>
  );
} 