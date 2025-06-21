import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
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

        <button className="md:hidden text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
} 