'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';

// Placeholder hero images until we have actual content
const heroImages = [
  { src: '/images/hero1.jpg', alt: 'Mountain landscape at sunset' },
  { src: '/images/hero2.jpg', alt: 'Coastal seascape with dramatic clouds' },
  { src: '/images/hero3.jpg', alt: 'Forest scene with morning mist' },
];

// Placeholder gallery categories
const galleryCategories = [
  { title: 'Mountains', image: '/images/category-mountains.jpg' },
  { title: 'Coastal', image: '/images/category-coastal.jpg' },
  { title: 'Forests', image: '/images/category-forests.jpg' },
  { title: 'Deserts', image: '/images/category-deserts.jpg' },
];

// Placeholder testimonials
const testimonials = [
  {
    text: "Carlo's photography captures the essence of landscapes in a way that transports you directly to the scene. His work is breathtaking.",
    author: 'Maria Johnson',
    location: 'New York, USA',
  },
  {
    text: "I attended one of Carlo's workshops and it transformed my approach to landscape photography. His technical knowledge and artistic vision are exceptional.",
    author: 'James Wilson',
    location: 'London, UK',
  },
  {
    text: 'The print I purchased from Carlo is the centerpiece of my living room. The quality is outstanding and the colors are exactly as they appeared online.',
    author: 'Sophie Martinez',
    location: 'Barcelona, Spain',
  },
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Hero image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        {/* Placeholder for hero image - in production would use actual images */}
        <div className="hero-image bg-dark-slate">
          {/* We would normally have actual images here */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent opacity-70"></div>
        </div>

        <div className="hero-overlay">
          <h1 className="hero-title">CARLO SP</h1>
          <p className="hero-subtitle">
            Capturing the breathtaking beauty of landscapes around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/galleries" className="btn-primary">
              Explore Galleries
            </Link>
            <Link href="/workshops" className="btn-secondary">
              Join a Workshop
            </Link>
          </div>
        </div>

        {/* 
          REMOVED SCROLL ARROW 
          (The arrow previously lived in a div here.)
        */}
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">About Carlo SP</h2>
            <p className="text-lg mb-8">
              I am a landscape photographer dedicated to capturing the raw beauty and emotion of natural landscapes.
              My work focuses on the interplay of light, composition, and the unique character of each location,
              creating images that evoke a sense of presence and connection with the natural world.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title mb-12">Featured Work</h2>

          <div className="gallery-grid">
            {galleryCategories.map((category, index) => (
              <div key={index} className="gallery-item aspect-[4/3] bg-charcoal">
                {/* In production, we'd use actual images */}
                <div className="gallery-image bg-gradient-to-br from-earth-tone/20 to-sage-green/20"></div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/galleries" className="btn-primary">
              View All Galleries
            </Link>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-charcoal relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">Photography Workshops</h2>
            <p className="text-lg mb-8">
              Join me on an immersive photography adventure in some of the world's most breathtaking locations.
              My workshops combine in-field guidance, technical instruction, and post-processing techniques
              to help you create stunning landscape images while experiencing the beauty of nature.
            </p>
            <Link href="/workshops" className="btn-primary">
              Explore Workshops
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title mb-12">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="text-medium-gray text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-primary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title mb-8">Follow on Instagram</h2>
          <p className="text-center text-lg mb-12">
            Stay updated with my latest captures and behind-the-scenes moments
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder for Instagram feed - would be dynamically populated */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square bg-dark-slate hover:opacity-80 transition-opacity" />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/carlosp_landscapephotography"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              @carlosp_landscapephotography
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-earth-tone text-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">Get in Touch</h2>
            <p className="text-lg mb-8">
              Interested in purchasing prints, booking a workshop, or discussing a collaboration?
              I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="bg-off-white text-earth-tone px-6 py-3 font-raleway font-semibold uppercase tracking-wider transition-all hover:bg-opacity-90"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}