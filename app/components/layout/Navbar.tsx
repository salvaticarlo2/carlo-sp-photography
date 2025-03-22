'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar style
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal bg-opacity-95 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair text-off-white">
            Carlo SP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-off-white hover:text-earth-tone transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/galleries" className="text-off-white hover:text-earth-tone transition-colors">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-off-white hover:text-earth-tone transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/prints" className="text-off-white hover:text-earth-tone transition-colors">
                  Prints
                </Link>
              </li>
              <li>
                <Link href="/films" className="text-off-white hover:text-earth-tone transition-colors">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-off-white hover:text-earth-tone transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-off-white hover:text-earth-tone transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-off-white hover:text-earth-tone transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* 
            NO social icons here at all 
            We have removed them to ensure there's no chance 
            they appear in your DOM
          */}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-off-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // "Close" icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // "Hamburger" icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-slate py-4">
          <div className="container-custom">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galleries"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Galleries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workshops"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prints"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Prints
                  </Link>
                </li>
                <li>
                  <Link
                    href="/films"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Films
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-off-white hover:text-earth-tone transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* 
                NO social links in the mobile menu either
              */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}