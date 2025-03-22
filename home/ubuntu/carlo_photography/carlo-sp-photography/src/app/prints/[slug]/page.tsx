'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder print data - in a real application, this would come from a database or CMS
const printsData = {
  'alpine-sunrise': {
    id: 1,
    title: 'Alpine Sunrise',
    location: 'Swiss Alps',
    category: 'Mountains',
    description: 'First light illuminates the peaks of the Swiss Alps, creating a dramatic play of light and shadow across the mountain range.',
    longDescription: `This image was captured during a crisp morning in the Swiss Alps, as the first rays of sunlight began to illuminate the jagged peaks. I had hiked up to this vantage point the evening before and camped overnight to ensure I would be in position for the magical alpine glow that occurs briefly at sunrise.

The conditions were perfect - clear skies after a storm had passed through, leaving a fresh dusting of snow on the peaks. The temperature was well below freezing, but the anticipation of what was about to unfold kept me warm as I set up my equipment in the pre-dawn darkness.

As the sun crested the distant horizon, the peaks were bathed in a warm, golden light that contrasted beautifully with the cool blue shadows in the valleys below. This interplay of warm and cool tones is what gives the image its depth and dimension.

I chose a composition that emphasized the layered nature of the mountain range, creating a sense of depth that draws the viewer's eye through the frame. The foreground ridge provides a solid anchor, while the receding peaks create a rhythm that leads to the glowing central mountain.`,
    story: `I had been planning this shot for months, studying maps and satellite imagery to find the perfect vantage point. The hike to this location was challenging, especially with a full pack of camping and camera gear, but the reward was beyond what I had imagined.

What makes this image special to me is not just the beautiful light, but the profound silence and solitude of that moment. Standing alone on that ridge, watching the world awaken as the light transformed the landscape, was a powerful reminder of why I'm drawn to landscape photography.

This image has become one of my most popular prints, perhaps because it captures that sense of awe and tranquility that we all seek in nature. Each time I look at it, I'm transported back to that perfect morning in the Alps.`,
    technicalDetails: `Camera: Sony A7R IV
Lens: Sony FE 24-70mm f/2.8 GM
Focal Length: 35mm
Aperture: f/11
Shutter Speed: 1/30 sec
ISO: 100
Filters: 3-stop soft graduated ND filter
Tripod: Really Right Stuff TVC-34L with BH-55 ballhead`,
    basePrice: 120,
    image: '/images/prints/alpine-sunrise.jpg',
    featured: true,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ],
    relatedPrints: [2, 7, 4]
  },
  'coastal-sunset': {
    id: 2,
    title: 'Coastal Sunset',
    location: 'Oregon Coast',
    category: 'Coastal',
    description: 'Golden light bathes the rugged Oregon coastline as the sun sets over the Pacific Ocean, illuminating sea stacks and creating a serene coastal scene.',
    longDescription: `This image captures the dramatic beauty of the Oregon coast at sunset, when the day's final light transforms the landscape into a scene of extraordinary beauty. The rugged sea stacks, shaped by centuries of erosion, stand as sentinels against the relentless Pacific Ocean.

I arrived at this location several hours before sunset to scout the best composition and observe how the light was changing. The tide was coming in, which created beautiful patterns in the foreground as waves washed over the sand. I knew I wanted to incorporate these patterns as a leading line toward the sea stacks.

As the sun approached the horizon, the quality of light changed dramatically, casting a golden glow across the scene. The warm tones of the sunset contrasted beautifully with the cool blues of the ocean and the dark silhouettes of the rocks. I waited for the perfect moment when a wave receded, creating reflections in the wet sand.`,
    story: `The Oregon coast has always been a special place for me. Its dramatic combination of forest, beach, and sea creates a landscape of incredible diversity and beauty. This particular evening stands out in my memory because of the perfect conditions that came together.

I had been photographing along the coast for several days, but most evenings had been foggy or overcast. On this evening, the clouds parted just enough to allow the setting sun to illuminate the scene with golden light while still providing texture in the sky.

What I love about this image is how it captures the sense of peace and timelessness that I felt in that moment. The eternal rhythm of the waves, the ancient sea stacks, and the ephemeral light all came together in perfect harmony.`,
    technicalDetails: `Camera: Canon EOS R5
Lens: Canon RF 15-35mm f/2.8L IS USM
Focal Length: 16mm
Aperture: f/13
Shutter Speed: 0.6 sec
ISO: 100
Filters: 6-stop ND filter and 2-stop soft graduated ND filter
Tripod: Gitzo GT3543LS with Really Right Stuff BH-55 ballhead`,
    basePrice: 120,
    image: '/images/prints/coastal-sunset.jpg',
    featured: true,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ],
    relatedPrints: [8, 5, 11]
  },
  // Additional prints would be defined here
};

export default function PrintPage({ params }: { params: { slug: string } }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [cart, setCart] = useState<{id: number, title: string, size: string, price: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { slug } = params;
  
  // Get print data based on slug
  const print = printsData[slug as keyof typeof printsData];
  
  // If print doesn't exist, we'd normally redirect or show 404
  if (!print) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="section-title">Print Not Found</h1>
          <p className="mb-8">The print you're looking for doesn't exist.</p>
          <Link href="/prints" className="btn-primary">
            Back to Prints
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  // Add to cart function
  const addToCart = () => {
    if (selectedSize === null) return;
    
    const size = print.sizes.find(s => s.id === selectedSize);
    if (!size) return;
    
    const newItem = {
      id: Date.now(), // unique id for cart item
      printId: print.id,
      title: print.title,
      size: size.name,
      price: size.price,
      image: print.image
    };
    
    setCart([...cart, newItem]);
    setIsCartOpen(true);
  };
  
  // Remove from cart function
  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  
  // Get related prints
  const relatedPrints = print.relatedPrints?.map(id => 
    Object.values(printsData).find(p => p.id === id)
  ).filter(Boolean) || [];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">{print.title}</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-4">
            {print.location}
          </p>
          <p className="text-center text-earth-tone">
            {print.category}
          </p>
        </div>
      </section>
      
      {/* Print Details */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Print Image */}
            <div className="aspect-[3/2] bg-charcoal relative">
              {/* In production, we'd use actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20"></div>
            </div>
            
            {/* Print Info and Purchase */}
            <div>
              <p className="text-lg mb-6">{print.description}</p>
              
              <div className="mb-8">
                <h3 className="font-montserrat font-semibold text-lg mb-4">Select Size</h3>
                <div className="grid grid-cols-2 gap-4">
                  {print.sizes.map((size) => (
                    <button
                      key={size.id}
                      className={`p-4 border text-left transition-colors ${
                        selectedSize === size.id 
                          ? 'border-earth-tone bg-earth-tone bg-opacity-10' 
                          : size.inStock 
                            ? 'border-medium-gray hover:border-earth-tone' 
                            : 'border-medium-gray text-medium-gray cursor-not-allowed'
                      }`}
                      onClick={() => size.inStock && setSelectedSize(size.id)}
                      disabled={!size.inStock}
                    >
                      <div className="font-montserrat font-semibold mb-1">{size.name}</div>
                      <div className="text-sm text-medium-gray mb-2">{size.dimensions}</div>
                      <div className="text-earth-tone">${size.price}</div>
                      {!size.inStock && (
                        <div className="text-alert-red text-sm mt-2">Out of Stock</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                className={`w-full btn-primary mb-6 ${
                  selectedSize === null ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={addToCart}
                disabled={selectedSize === null}
              >
                Add to Cart
              </button>
              
              <div className="bg-charcoal p-6 mb-8">
                <h3 className="font-montserrat font-semibold text-lg mb-4">Print Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-earth-tone flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Museum-quality Hahnemühle Photo Rag 308gsm paper</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-earth-tone flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Archival pigment inks with 100+ year longevity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-earth-tone flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Each print individually inspected and signed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-earth-tone flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Includes Certificate of Authenticity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-earth-tone flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Shipped worldwide via tracked courier</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-between">
                <Link href="/prints" className="text-earth-tone hover:underline">
                  Back to All Prints
                </Link>
                <button className="text-earth-tone hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Print Story */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">The Story Behind the Image</h2>
            <div className="prose prose-invert max-w-none mb-12">
              {print.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div className="prose prose-invert max-w-none">
              {print.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Details */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-8">Technical Details</h2>
            <div className="bg-charcoal p-6">
              <pre className="font-montserrat text-medium-gray whitespace-pre-wrap">
                {print.technicalDetails}
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Prints */}
      {relatedPrints.length > 0 && (
        <section className="py-16 bg-charcoal">
          <div className="container-custom">
            <h2 className="section-title mb-12">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPrints.map((relatedPrint) => (
                relatedPrint && (
                  <Link 
                    href={`/prints/${Object.keys(printsData).find(key => printsData[key as keyof typeof printsData].id === relatedPrint.id)}`} 
                    key={relatedPrint.id}
                    className="block group"
                  >
                    <div className="aspect-[3/2] bg-dark-slate relative overflow-hidden">
                      {/* In production, we'd use actual images */}
                      <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20 transition-transform duration-500<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>