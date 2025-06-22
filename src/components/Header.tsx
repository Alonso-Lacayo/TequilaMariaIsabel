'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="María Isabel Tequila"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/our-story" 
              className="text-secondary hover:text-primary transition-colors font-serif"
            >
              OUR STORY
            </Link>
            <Link 
              href="/order" 
              className="text-secondary hover:text-primary transition-colors font-serif"
            >
              ORDER
            </Link>
            <Link 
              href="/contact" 
              className="text-secondary hover:text-primary transition-colors font-serif"
            >
              CONTACT
            </Link>
          </nav>

          <button 
            className="md:hidden text-secondary z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden pt-24"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col items-center space-y-8">
              <Link 
                href="/our-story" 
                className="text-secondary hover:text-primary transition-colors font-serif text-2xl w-full text-center py-2"
                onClick={closeMobileMenu}
              >
                OUR STORY
              </Link>
              <Link 
                href="/order" 
                className="text-secondary hover:text-primary transition-colors font-serif text-2xl w-full text-center py-2"
                onClick={closeMobileMenu}
              >
                ORDER
              </Link>
              <Link 
                href="/contact" 
                className="text-secondary hover:text-primary transition-colors font-serif text-2xl w-full text-center py-2"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 