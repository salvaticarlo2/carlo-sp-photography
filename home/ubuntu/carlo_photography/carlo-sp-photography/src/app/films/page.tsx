'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder film data
const films = [
  {
    id: 1,
    slug: 'iceland-winter-journey',
    title: 'Iceland: A Winter Journey',
    duration: '12:34',
    date: 'January 2025',
    category: 'Travel Documentary',
    description: 'Follow my photographic expedition through the frozen landscapes of Iceland, capturing the northern lights, ice caves, and dramatic winter scenery.',
    longDescription: 'This film documents my two-week journey across Iceland during the heart of winter. From the iconic waterfalls of the south coast to the remote eastern fjords, I share the challenges and rewards of landscape photography in extreme conditions. The film includes behind-the-scenes footage of my process, time-lapse sequences of the ever-changing weather, and interviews with local guides who helped me access some of the country\'s most remote locations.',
    thumbnailUrl: '/images/films/iceland-winter-journey.jpg',
    videoUrl: 'https://vimeo.com/123456789',
    featured: true
  },
  {
    id: 2,
    slug: 'light-chasing',
    title: 'Light Chasing',
    duration: '18:45',
    date: 'October 2024',
    category: 'Photography Tutorial',
    description: 'An in-depth look at my approach to finding and working with natural light in landscape photography, with practical demonstrations from various locations.',
    longDescription: 'Light is the essence of photography, and in this film, I share my techniques for predicting, finding, and working with natural light in landscape settings. Through practical demonstrations filmed in diverse locations—from the mountains of Patagonia to the coastlines of Oregon—I explain how I plan shoots around optimal lighting conditions and adapt when nature has other plans. The film includes detailed explanations of apps and tools I use for planning, as well as post-processing techniques to enhance natural light qualities.',
    thumbnailUrl: '/images/films/light-chasing.jpg',
    videoUrl: 'https://vimeo.com/234567890',
    featured: true
  },
  {
    id: 3,
    slug: 'dolomites-autumn',
    title: 'Dolomites in Autumn',
    duration: '15:21',
    date: 'November 2024',
    category: 'Travel Documentary',
    description: 'Experience the spectacular fall colors of the Italian Dolomites as I explore this UNESCO World Heritage site during its most colorful season.',
    longDescription: 'The Dolomites are spectacular in any season, but autumn brings a special magic as the larch trees turn golden against the backdrop of dramatic limestone peaks. This film follows my ten-day photography trip through the region, showcasing both iconic locations and hidden gems discovered through extensive exploration. I discuss composition techniques specific to mountain landscapes and demonstrate how I use filters to balance the challenging light conditions often found in alpine environments.',
    thumbnailUrl: '/images/films/dolomites-autumn.jpg',
    videoUrl: 'https://vimeo.com/345678901',
    featured: false
  },
  {
    id: 4,
    slug: 'composition-fundamentals',
    title: 'Composition Fundamentals',
    duration: '22:15',
    date: 'August 2024',
    category: 'Photography Tutorial',
    description: 'A comprehensive guide to composition in landscape photography, covering essential principles and advanced techniques for creating compelling images.',
    longDescription: 'Good composition is the foundation of powerful landscape photography. In this educational film, I break down my approach to composition, from fundamental principles like the rule of thirds and leading lines to more advanced concepts like visual weight and negative space. Using examples from my portfolio, I analyze what works, what doesn\'t, and why. The film includes practical field demonstrations where I walk through my entire process of arriving at a scene, exploring compositional possibilities, and refining my approach to create the strongest possible image.',
    thumbnailUrl: '/images/films/composition-fundamentals.jpg',
    videoUrl: 'https://vimeo.com/456789012',
    featured: true
  },
  {
    id: 5,
    slug: 'desert-minimalism',
    title: 'Desert Minimalism',
    duration: '14:08',
    date: 'March 2024',
    category: 'Behind the Scenes',
    description: 'Join me in Namibia\'s Namib Desert as I pursue minimalist compositions in one of Earth\'s most ancient and visually striking landscapes.',
    longDescription: 'The stark, sculptural dunes of Namibia\'s Namib Desert offer a perfect canvas for minimalist landscape photography. This film documents my process of creating a series of abstract, minimalist images that capture the essence of this extraordinary environment. I discuss the challenges of working in extreme desert conditions, from protecting equipment from sand to managing the intense contrast between light and shadow. Time-lapse sequences reveal the constantly shifting patterns of light and shadow across the dunes, while drone footage provides a broader context for this remarkable landscape.',
    thumbnailUrl: '/images/films/desert-minimalism.jpg',
    videoUrl: 'https://vimeo.com/567890123',
    featured: false
  },
  {
    id: 6,
    slug: 'long-exposure-mastery',
    title: 'Long Exposure Mastery',
    duration: '19:42',
    date: 'July 2024',
    category: 'Photography Tutorial',
    description: 'A detailed guide to long exposure photography techniques, covering equipment, settings, and creative applications in landscape photography.',
    longDescription: 'Long exposure photography allows us to reveal the passage of time in a single frame, creating ethereal effects with moving water, clouds, and light. In this technical tutorial, I cover everything from the essential equipment (filters, tripods, remote releases) to the camera settings and techniques that lead to successful long exposures. Through practical demonstrations in various environments—coastal scenes, waterfalls, urban landscapes, and night skies—I show how to overcome common challenges like calculating exposure times, managing filter stacking, and maintaining image sharpness during extended exposures.',
    thumbnailUrl: '/images/films/long-exposure-mastery.jpg',
    videoUrl: 'https://vimeo.com/678901234',
    featured: false
  },
  {
    id: 7,
    slug: 'patagonia-expedition',
    title: 'Patagonia Expedition',
    duration: '25:17',
    date: 'April 2024',
    category: 'Travel Documentary',
    description: 'Follow my month-long photographic expedition through the wild landscapes of Patagonia, capturing its iconic peaks, glaciers, and ever-changing weather.',
    longDescription: 'Patagonia represents the ultimate landscape photography destination for many photographers, myself included. This documentary follows my ambitious month-long expedition through both the Chilean and Argentinian sides of this remarkable region. From the iconic peaks of Torres del Paine and Fitz Roy to lesser-known locations discovered through extensive research and local connections, the film showcases the breathtaking diversity of Patagonian landscapes. I share the logistical challenges of such an extensive trip, the physical demands of accessing remote locations, and the patience required to wait for perfect conditions in a region known for its notoriously unpredictable weather.',
    thumbnailUrl: '/images/films/patagonia-expedition.jpg',
    videoUrl: 'https://vimeo.com/789012345',
    featured: false
  },
  {
    id: 8,
    slug: 'post-processing-workflow',
    title: 'My Post-Processing Workflow',
    duration: '28:34',
    date: 'September 2024',
    category: 'Photography Tutorial',
    description: 'A comprehensive look at my complete post-processing workflow, from raw file organization to final output for print and digital display.',
    longDescription: 'Post-processing is an essential part of the modern landscape photographer\'s workflow, and in this detailed tutorial, I share my complete approach from start to finish. Beginning with file organization and backup strategies, I move through my selection process, raw development in Adobe Lightroom, advanced editing techniques in Photoshop, and final preparation for various output methods. Rather than focusing on trendy effects or heavy manipulation, I emphasize a natural, authentic approach that remains true to the original scene while enhancing its inherent qualities. Using several example images from different environments and lighting conditions, I demonstrate how I adapt my processing approach to serve the unique qualities of each photograph.',
    thumbnailUrl: '/images/films/post-processing-workflow.jpg',
    videoUrl: 'https://vimeo.com/890123456',
    featured: true
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Films' },
  { id: 'travel-documentary', name: 'Travel Documentaries' },
  { id: 'photography-tutorial', name: 'Photography Tutorials' },
  { id: 'behind-the-scenes', name: 'Behind the Scenes' }
];

export default function Films() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  
  // Filter films by category
  const filteredFilms = selectedCategory === 'all' 
    ? films 
    : films.filter(film => film.category.toLowerCase().replace(' ', '-') === selectedCategory.toLowerCase());
  
  // Featured films for the hero section
  const featuredFilms = films.filter(film => film.featured);
  
  // Toggle film modal
  const openFilm = (id: number) => {
    setActiveFilm(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeFilm = () => {
    setActiveFilm(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Get active film data
  const activeFilmData = activeFilm !== null ? films.find(film => film.id === activeFilm) : null;

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">Films</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Explore behind-the-scenes footage, time-lapse videos, and photography tutorials
            that offer insight into my creative process and adventures in the field.
          </p>
        </div>
      </section>
      
      {/* Featured Films */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title mb-12">Featured Films</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredFilms.slice(0, 2).map((film) => (
              <div 
                key={film.id}
                className="group cursor-pointer"
                onClick={() => openFilm(film.id)}
              >
                <div className="aspect-video bg-charcoal relative overflow-hidden">
                  {/* In production, we'd use actual thumbnails */}
                  <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20 transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-charcoal bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-earth-tone bg-opacity-80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-off-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-playfair text-xl text-off-white group-hover:text-earth-tone transition-colors">{film.title}</h3>
                  <p className="text-medium-gray">{film.category}</p>
                  <div className="flex items-center mt-2 text-sm text-medium-gray">
                    <span className="mr-4">{film.duration}</span>
                    <span>{film.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Film Collection */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title mb-8">Film Collection</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-sm transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-earth-tone text-off-white' 
                    : 'bg-dark-slate text-medium-gray hover:text-off-white'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Film Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFilms.map((film) => (
              <div 
                key={film.id}
                className="group cursor-pointer"
                onClick={() => openFilm(film.id)}
              >
                <div className="aspect-video bg-charcoal relative overflow-hidden">
                  {/* In production, we'd use actual thumbnails */}
                  <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20 transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-charcoal bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-earth-tone bg-opacity-80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-off-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-playfair text-xl text-off-white group-hover:text-earth-tone transition-colors">{film.title}</h3>
                  <p className="text-medium-gray">{film.category}</p>
                  <div className="flex items-center mt-2 text-sm text-medium-gray">
                    <span className="mr-4">{film.duration}</span>
                    <span>{film.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About My Films */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">About My Films</h2>
            <div classN<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>