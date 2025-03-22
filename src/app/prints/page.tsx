'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder print data
const prints = [
  {
    id: 1,
    slug: 'alpine-sunrise',
    title: 'Alpine Sunrise',
    location: 'Swiss Alps',
    category: 'Mountains',
    description: 'First light illuminates the peaks of the Swiss Alps, creating a dramatic play of light and shadow across the mountain range.',
    basePrice: 120,
    image: '/images/prints/alpine-sunrise.jpg',
    featured: true,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ]
  },
  {
    id: 2,
    slug: 'coastal-sunset',
    title: 'Coastal Sunset',
    location: 'Oregon Coast',
    category: 'Coastal',
    description: 'Golden light bathes the rugged Oregon coastline as the sun sets over the Pacific Ocean, illuminating sea stacks and creating a serene coastal scene.',
    basePrice: 120,
    image: '/images/prints/coastal-sunset.jpg',
    featured: true,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ]
  },
  {
    id: 3,
    slug: 'misty-forest',
    title: 'Misty Forest',
    location: 'Pacific Northwest',
    category: 'Forests',
    description: 'Morning mist weaves through ancient trees in this atmospheric forest scene from the Pacific Northwest, creating a mystical and timeless landscape.',
    basePrice: 120,
    image: '/images/prints/misty-forest.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ]
  },
  {
    id: 4,
    slug: 'sand-dunes',
    title: 'Sand Dunes',
    location: 'Namibia',
    category: 'Deserts',
    description: 'The sculptural forms of Namibian sand dunes create a mesmerizing pattern of light and shadow in the warm glow of sunrise.',
    basePrice: 120,
    image: '/images/prints/sand-dunes.jpg',
    featured: true,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ]
  },
  {
    id: 5,
    slug: 'cascading-falls',
    title: 'Cascading Falls',
    location: 'Iceland',
    category: 'Waterfalls',
    description: 'Water cascades over multiple tiers of this dramatic Icelandic waterfall, surrounded by basalt columns and lush vegetation.',
    basePrice: 120,
    image: '/images/prints/cascading-falls.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ]
  },
  {
    id: 6,
    slug: 'green-glow',
    title: 'Green Glow',
    location: 'Iceland',
    category: 'Aurora',
    description: 'The northern lights dance across the night sky in Iceland, casting an ethereal green glow over the snow-covered landscape.',
    basePrice: 120,
    image: '/images/prints/green-glow.jpg',
    featured: true,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ]
  },
  {
    id: 7,
    slug: 'mountain-reflection',
    title: 'Mountain Reflection',
    location: 'Patagonia',
    category: 'Mountains',
    description: 'The iconic peaks of Patagonia are perfectly reflected in the still waters of an alpine lake at sunrise.',
    basePrice: 120,
    image: '/images/prints/mountain-reflection.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ]
  },
  {
    id: 8,
    slug: 'coastal-arch',
    title: 'Coastal Arch',
    location: 'California',
    category: 'Coastal',
    description: 'A natural stone arch frames the setting sun along the rugged California coastline, creating a window to the golden horizon.',
    basePrice: 120,
    image: '/images/prints/coastal-arch.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ]
  },
  {
    id: 9,
    slug: 'autumn-colors',
    title: 'Autumn Colors',
    location: 'New England',
    category: 'Forests',
    description: 'Vibrant fall foliage creates a tapestry of red, orange, and gold in this New England forest scene.',
    basePrice: 120,
    image: '/images/prints/autumn-colors.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ]
  },
  {
    id: 10,
    slug: 'desert-night',
    title: 'Desert Night',
    location: 'Arizona',
    category: 'Deserts',
    description: 'The Milky Way arches over iconic desert formations in Arizona, revealing the beauty of the night sky in this remote landscape.',
    basePrice: 120,
    image: '/images/prints/desert-night.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ]
  },
  {
    id: 11,
    slug: 'silky-flow',
    title: 'Silky Flow',
    location: 'New Zealand',
    category: 'Waterfalls',
    description: 'A long exposure captures the silky flow of water through a lush New Zealand rainforest, creating a dreamy, ethereal scene.',
    basePrice: 120,
    image: '/images/prints/silky-flow.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: false }
    ]
  },
  {
    id: 12,
    slug: 'arctic-lights',
    title: 'Arctic Lights',
    location: 'Norway',
    category: 'Aurora',
    description: 'The aurora borealis creates a spectacular display of color over a fjord in northern Norway, reflecting in the still water below.',
    basePrice: 120,
    image: '/images/prints/arctic-lights.jpg',
    featured: false,
    sizes: [
      { id: 1, name: '8×12"', price: 120, dimensions: '8×12" (20×30cm)', inStock: true },
      { id: 2, name: '12×18"', price: 220, dimensions: '12×18" (30×45cm)', inStock: true },
      { id: 3, name: '16×24"', price: 320, dimensions: '16×24" (40×60cm)', inStock: true },
      { id: 4, name: '24×36"', price: 450, dimensions: '24×36" (60×90cm)', inStock: true },
      { id: 5, name: '32×48"', price: 650, dimensions: '32×48" (80×120cm)', inStock: true }
    ]
  },
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Prints' },
  { id: 'mountains', name: 'Mountains' },
  { id: 'coastal', name: 'Coastal' },
  { id: 'forests', name: 'Forests' },
  { id: 'deserts', name: 'Deserts' },
  { id: 'waterfalls', name: 'Waterfalls' },
  { id: 'aurora', name: 'Aurora' },
];

export default function Prints() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{id: number, title: string, size: string, price: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Filter prints by category
  const filteredPrints = selectedCategory === 'all' 
    ? prints 
    : prints.filter(print => print.category.toLowerCase() === selectedCategory.toLowerCase());
  
  // Featured prints for the hero section
  const featuredPrints = prints.filter(print => print.featured);
  
  // Add to cart function
  const addToCart = (print: any, size: any) => {
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

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">Fine Art Prints</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Each print is carefully produced on museum-quality fine art paper, 
            creating a lasting piece that brings the beauty of nature into your space.
          </p>
        </div>
      </section>
      
      {/* Featured Prints */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title mb-12">Featured Prints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPrints.map((print) => (
              <Link 
                href={`/prints/${print.slug}`} 
                key={print.id}
                className="block group"
              >
                <div className="aspect-[3/4] bg-charcoal relative overflow-hidden">
                  {/* In production, we'd use actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20 transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="btn-primary text-sm py-2">View Print</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-playfair text-xl text-off-white">{print.title}</h3>
                  <p className="text-medium-gray">{print.location}</p>
                  <p className="text-earth-tone mt-2">From ${print.basePrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Print Store */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title mb-8">Print Collection</h2>
          
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
          
          {/* Print Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrints.map((print) => (
              <div key={print.id} className="bg-dark-slate p-6">
                <Link 
                  href={`/prints/${print.slug}`}
                  className="block aspect-[4/3] bg-charcoal relative overflow-hidden mb-4 group"
                >
                  {/* In production, we'd use actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20 transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="btn-primary text-sm py-2">View Details</span>
                    </div>
                  </div>
                </Link>
                
                <h3 className="font-playfair text-xl text-off-white mb-1">{print.title}</h3>
                <p className="text-medium-gray mb-4">{print.locati<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>