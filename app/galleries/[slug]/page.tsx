'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// This would normally come from a database or CMS
const galleryData = {
  mountains: {
    title: 'Mountains',
    description: 'Majestic peaks and dramatic mountain landscapes from around the world.',
    images: [
      { id: 1, title: 'Alpine Sunrise', location: 'Swiss Alps', src: '/images/mountains/alpine-sunrise.jpg' },
      { id: 2, title: 'Misty Peaks', location: 'Dolomites, Italy', src: '/images/mountains/misty-peaks.jpg' },
      { id: 3, title: 'Winter Majesty', location: 'Canadian Rockies', src: '/images/mountains/winter-majesty.jpg' },
      { id: 4, title: 'Golden Hour Ridge', location: 'Sierra Nevada', src: '/images/mountains/golden-hour-ridge.jpg' },
      { id: 5, title: 'Mountain Reflection', location: 'Patagonia', src: '/images/mountains/mountain-reflection.jpg' },
      { id: 6, title: 'Dramatic Peaks', location: 'Himalayas', src: '/images/mountains/dramatic-peaks.jpg' },
      { id: 7, title: 'Valley View', location: 'Yosemite', src: '/images/mountains/valley-view.jpg' },
      { id: 8, title: 'Sunset Silhouette', location: 'Scottish Highlands', src: '/images/mountains/sunset-silhouette.jpg' },
      { id: 9, title: 'Foggy Summit', location: 'Mount Rainier', src: '/images/mountains/foggy-summit.jpg' },
      { id: 10, title: 'Alpine Lake', location: 'New Zealand', src: '/images/mountains/alpine-lake.jpg' },
      { id: 11, title: 'Rugged Terrain', location: 'Iceland', src: '/images/mountains/rugged-terrain.jpg' },
      { id: 12, title: 'Mountain Storm', location: 'Colorado', src: '/images/mountains/mountain-storm.jpg' },
    ]
  },
  coastal: {
    title: 'Coastal',
    description: 'Dramatic seascapes, rugged coastlines, and tranquil beaches.',
    images: [
      { id: 1, title: 'Coastal Sunset', location: 'Oregon Coast', src: '/images/coastal/coastal-sunset.jpg' },
      { id: 2, title: 'Sea Stacks', location: 'Iceland', src: '/images/coastal/sea-stacks.jpg' },
      { id: 3, title: 'Rugged Shore', location: 'Cornwall, UK', src: '/images/coastal/rugged-shore.jpg' },
      { id: 4, title: 'Tranquil Bay', location: 'Mediterranean', src: '/images/coastal/tranquil-bay.jpg' },
      { id: 5, title: 'Stormy Seas', location: 'Atlantic Coast', src: '/images/coastal/stormy-seas.jpg' },
      { id: 6, title: 'Coastal Cliffs', location: 'Portugal', src: '/images/coastal/coastal-cliffs.jpg' },
      { id: 7, title: 'Beach Sunrise', location: 'Australia', src: '/images/coastal/beach-sunrise.jpg' },
      { id: 8, title: 'Misty Cove', location: 'New Zealand', src: '/images/coastal/misty-cove.jpg' },
      { id: 9, title: 'Rocky Shoreline', location: 'Maine', src: '/images/coastal/rocky-shoreline.jpg' },
      { id: 10, title: 'Tropical Paradise', location: 'Hawaii', src: '/images/coastal/tropical-paradise.jpg' },
      { id: 11, title: 'Coastal Arch', location: 'California', src: '/images/coastal/coastal-arch.jpg' },
      { id: 12, title: 'Dramatic Coastline', location: 'Norway', src: '/images/coastal/dramatic-coastline.jpg' },
      { id: 13, title: 'Sunset Reflections', location: 'Florida', src: '/images/coastal/sunset-reflections.jpg' },
      { id: 14, title: 'Coastal Fog', location: 'Washington', src: '/images/coastal/coastal-fog.jpg' },
      { id: 15, title: 'Tidal Pools', location: 'Scotland', src: '/images/coastal/tidal-pools.jpg' },
    ]
  },
  forests: {
    title: 'Forests',
    description: 'Mystical woodland scenes, ancient trees, and lush forest landscapes.',
    images: [
      { id: 1, title: 'Misty Forest', location: 'Pacific Northwest', src: '/images/forests/misty-forest.jpg' },
      { id: 2, title: 'Autumn Colors', location: 'New England', src: '/images/forests/autumn-colors.jpg' },
      { id: 3, title: 'Ancient Redwoods', location: 'California', src: '/images/forests/ancient-redwoods.jpg' },
      { id: 4, title: 'Forest Stream', location: 'Great Smoky Mountains', src: '/images/forests/forest-stream.jpg' },
      { id: 5, title: 'Woodland Path', location: 'England', src: '/images/forests/woodland-path.jpg' },
      { id: 6, title: 'Sunlit Canopy', location: 'Amazon', src: '/images/forests/sunlit-canopy.jpg' },
      { id: 7, title: 'Moss Covered', location: 'Olympic National Park', src: '/images/forests/moss-covered.jpg' },
      { id: 8, title: 'Forest Floor', location: 'Japan', src: '/images/forests/forest-floor.jpg' },
      { id: 9, title: 'Enchanted Woods', location: 'Ireland', src: '/images/forests/enchanted-woods.jpg' },
      { id: 10, title: 'Bamboo Forest', location: 'Kyoto', src: '/images/forests/bamboo-forest.jpg' },
    ]
  },
  deserts: {
    title: 'Deserts',
    description: 'Stark beauty of arid landscapes, sand dunes, and desert formations.',
    images: [
      { id: 1, title: 'Sand Dunes', location: 'Namibia', src: '/images/deserts/sand-dunes.jpg' },
      { id: 2, title: 'Desert Sunrise', location: 'Sahara', src: '/images/deserts/desert-sunrise.jpg' },
      { id: 3, title: 'Rock Formations', location: 'Utah', src: '/images/deserts/rock-formations.jpg' },
      { id: 4, title: 'Arid Landscape', location: 'Death Valley', src: '/images/deserts/arid-landscape.jpg' },
      { id: 5, title: 'Desert Night', location: 'Arizona', src: '/images/deserts/desert-night.jpg' },
      { id: 6, title: 'Cactus Silhouette', location: 'Mexico', src: '/images/deserts/cactus-silhouette.jpg' },
      { id: 7, title: 'Salt Flats', location: 'Bolivia', src: '/images/deserts/salt-flats.jpg' },
      { id: 8, title: 'Desert Storm', location: 'Morocco', src: '/images/deserts/desert-storm.jpg' },
    ]
  },
  waterfalls: {
    title: 'Waterfalls',
    description: 'Powerful cascades and serene waterfall scenes from across the globe.',
    images: [
      { id: 1, title: 'Cascading Falls', location: 'Iceland', src: '/images/waterfalls/cascading-falls.jpg' },
      { id: 2, title: 'Tropical Waterfall', location: 'Costa Rica', src: '/images/waterfalls/tropical-waterfall.jpg' },
      { id: 3, title: 'Misty Cascade', location: 'Washington', src: '/images/waterfalls/misty-cascade.jpg' },
      { id: 4, title: 'Forest Falls', location: 'Oregon', src: '/images/waterfalls/forest-falls.jpg' },
      { id: 5, title: 'Powerful Flow', location: 'Iguazu', src: '/images/waterfalls/powerful-flow.jpg' },
      { id: 6, title: 'Hidden Waterfall', location: 'Hawaii', src: '/images/waterfalls/hidden-waterfall.jpg' },
      { id: 7, title: 'Winter Falls', location: 'Norway', src: '/images/waterfalls/winter-falls.jpg' },
      { id: 8, title: 'Canyon Cascade', location: 'Arizona', src: '/images/waterfalls/canyon-cascade.jpg' },
      { id: 9, title: 'Silky Flow', location: 'New Zealand', src: '/images/waterfalls/silky-flow.jpg' },
    ]
  },
  aurora: {
    title: 'Aurora',
    description: 'The magical northern lights dancing across night skies.',
    images: [
      { id: 1, title: 'Green Glow', location: 'Iceland', src: '/images/aurora/green-glow.jpg' },
      { id: 2, title: 'Arctic Lights', location: 'Norway', src: '/images/aurora/arctic-lights.jpg' },
      { id: 3, title: 'Mountain Aurora', location: 'Alaska', src: '/images/aurora/mountain-aurora.jpg' },
      { id: 4, title: 'Starry Sky', location: 'Finland', src: '/images/aurora/starry-sky.jpg' },
      { id: 5, title: 'Purple Haze', location: 'Canada', src: '/images/aurora/purple-haze.jpg' },
      { id: 6, title: 'Reflection Dance', location: 'Sweden', src: '/images/aurora/reflection-dance.jpg' },
    ]
  }
};

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { slug } = params;
  
  // Get gallery data based on slug
  const gallery = galleryData[slug as keyof typeof galleryData];
  
  // If gallery doesn't exist, we'd normally redirect or show 404
  if (!gallery) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="section-title">Gallery Not Found</h1>
          <p className="mb-8">The gallery you're looking for doesn't exist.</p>
          <Link href="/galleries" className="btn-primary">
            Back to Galleries
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  // Lightbox functionality
  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const currentImage = selectedImage !== null 
    ? gallery.images.find(img => img.id === selectedImage) 
    : null;
  
  const nextImage = () => {
    if (selectedImage === null) return;
    
    const currentIndex = gallery.images.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % gallery.images.length;
    setSelectedImage(gallery.images[nextIndex].id);
  };
  
  const prevImage = () => {
    if (selectedImage === null) return;
    
    const currentIndex = gallery.images.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
    setSelectedImage(gallery.images[prevIndex].id);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">{gallery.title}</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            {gallery.description}
          </p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.images.map((image) => (
              <div 
                key={image.id} 
                className="aspect-[3/2] bg-charcoal relative group cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                {/* In production, we'd use actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/10 to-sage-green/10"></div>
                <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="font-playfair text-xl text-pure-white mb-1">{image.title}</h3>
                    <p className="text-light-gray text-sm">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Back to Galleries */}
      <section className="py-12 bg-charcoal">
        <div className="container-custom text-center">
          <Link href="/galleries" className="btn-primary">
            Back to All Galleries
          </Link>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-off-white hover:text-earth-tone"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-off-white hover:text-earth-tone"
            onClick={prevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="max-w-5xl max-h-[80vh] relative">
            {/* In production, we'd use actual images */}
            <div className="aspect-[3/2] bg-gradient-to-br from-earth-tone/20 to-sage-green/20 w-full h-full"></div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-charcoal bg-opacity-70 p-4">
              <h3 className="font-playfair text-xl text-pure-white">{currentImage.title}</h3>
              <p className="text-light-gray">{currentImage.location}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-off-white hover:text-earth-tone"
            onClick={nextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      <Footer />
    </>
  );
}
