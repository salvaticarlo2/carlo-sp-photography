'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder gallery categories
const galleryCategories = [
  { 
    slug: 'mountains', 
    title: 'Mountains', 
    description: 'Majestic peaks and dramatic mountain landscapes from around the world.',
    image: '/images/category-mountains.jpg',
    count: 12
  },
  { 
    slug: 'coastal', 
    title: 'Coastal', 
    description: 'Dramatic seascapes, rugged coastlines, and tranquil beaches.',
    image: '/images/category-coastal.jpg',
    count: 15
  },
  { 
    slug: 'forests', 
    title: 'Forests', 
    description: 'Mystical woodland scenes, ancient trees, and lush forest landscapes.',
    image: '/images/category-forests.jpg',
    count: 10
  },
  { 
    slug: 'deserts', 
    title: 'Deserts', 
    description: 'Stark beauty of arid landscapes, sand dunes, and desert formations.',
    image: '/images/category-deserts.jpg',
    count: 8
  },
  { 
    slug: 'waterfalls', 
    title: 'Waterfalls', 
    description: 'Powerful cascades and serene waterfall scenes from across the globe.',
    image: '/images/category-waterfalls.jpg',
    count: 9
  },
  { 
    slug: 'aurora', 
    title: 'Aurora', 
    description: 'The magical northern lights dancing across night skies.',
    image: '/images/category-aurora.jpg',
    count: 6
  },
];

export default function Galleries() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">Galleries</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Explore my portfolio of landscape photography, organized by themes and locations.
            Each collection represents my passion for capturing the beauty of the natural world.
          </p>
        </div>
      </section>
      
      {/* Gallery Categories */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <Link 
                href={`/galleries/${category.slug}`} 
                key={index}
                className="block group"
              >
                <div className="gallery-item aspect-[4/3] bg-charcoal overflow-hidden">
                  {/* In production, we'd use actual images */}
                  <div className="gallery-image bg-gradient-to-br from-earth-tone/20 to-sage-green/20 w-full h-full transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-charcoal bg-opacity-40 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="font-playfair text-2xl text-pure-white mb-2">{category.title}</h3>
                      <p className="text-light-gray text-sm mb-3">{category.description}</p>
                      <span className="inline-block text-earth-tone font-montserrat text-sm">{category.count} Images</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Work */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title mb-12">Recent Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for recent images - would be dynamically populated */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-[3/2] bg-dark-slate hover:opacity-90 transition-opacity relative group">
                {/* In production, we'd use actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/10 to-sage-green/10"></div>
                <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="btn-primary text-sm py-2">View Image</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-earth-tone text-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">Interested in Prints?</h2>
            <p className="text-lg mb-8">
              All images in my galleries are available as fine art prints, 
              carefully produced on museum-quality paper to bring the beauty of these landscapes into your space.
            </p>
            <Link href="/prints" className="bg-off-white text-earth-tone px-6 py-3 font-raleway font-semibold uppercase tracking-wider transition-all hover:bg-opacity-90">
              Browse Print Store
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
