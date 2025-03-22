'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: '/images/testimonials/testimonial-1.jpg',
    quote: "Carlo's Iceland workshop was life-changing. Not only did I come away with incredible images, but I also gained a deeper understanding of composition and light that has transformed my approach to landscape photography.",
    workshop: 'Iceland Winter Workshop',
    rating: 5,
    featured: true,
    category: 'workshop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Vancouver, Canada',
    image: '/images/testimonials/testimonial-2.jpg',
    quote: "The quality of Carlo's prints is exceptional. The colors are vibrant yet true to life, and the attention to detail is remarkable. My living room has been transformed by his stunning mountain landscape.",
    workshop: null,
    rating: 5,
    featured: true,
    category: 'print'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    image: '/images/testimonials/testimonial-3.jpg',
    quote: "I've attended workshops with several photographers, but Carlo's teaching style stands out. He has a unique ability to explain complex techniques in an accessible way, and he's incredibly generous with his knowledge.",
    workshop: 'Dolomites Summer Workshop',
    rating: 5,
    featured: true,
    category: 'workshop'
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'Edinburgh, Scotland',
    image: '/images/testimonials/testimonial-4.jpg',
    quote: "The Scottish Highlands workshop exceeded all my expectations. Carlo knows exactly where to be at the right time for the best light, and his guidance on composition helped me capture images I'm truly proud of.",
    workshop: 'Scottish Highlands Workshop',
    rating: 5,
    featured: false,
    category: 'workshop'
  },
  {
    id: 5,
    name: 'Olivia Thompson',
    location: 'Sydney, Australia',
    image: '/images/testimonials/testimonial-5.jpg',
    quote: "I purchased three prints from Carlo's coastal collection, and they're absolutely stunning. The print quality is superb, and they arrived perfectly packaged with a personal note. Exceptional service!",
    workshop: null,
    rating: 5,
    featured: false,
    category: 'print'
  },
  {
    id: 6,
    name: 'Daniel Müller',
    location: 'Munich, Germany',
    image: '/images/testimonials/testimonial-6.jpg',
    quote: "Carlo's one-on-one mentoring has been instrumental in developing my photography skills. His feedback is always constructive and specific, focusing on exactly what I need to improve. Worth every penny.",
    workshop: 'One-on-One Mentoring',
    rating: 5,
    featured: false,
    category: 'mentoring'
  },
  {
    id: 7,
    name: 'Sophie Laurent',
    location: 'Paris, France',
    image: '/images/testimonials/testimonial-7.jpg',
    quote: "The Norway Aurora workshop was magical. Carlo's expertise in predicting and photographing the northern lights is impressive. He ensured everyone got amazing shots, regardless of experience level.",
    workshop: 'Norway Aurora Workshop',
    rating: 5,
    featured: false,
    category: 'workshop'
  },
  {
    id: 8,
    name: 'Robert Campbell',
    location: 'Toronto, Canada',
    image: '/images/testimonials/testimonial-8.jpg',
    quote: "I've been following Carlo's work for years and finally purchased a large format print. The detail and depth are remarkable—it's like having a window to the mountains in my office.",
    workshop: null,
    rating: 5,
    featured: false,
    category: 'print'
  },
  {
    id: 9,
    name: 'Aiko Nakamura',
    location: 'Tokyo, Japan',
    image: '/images/testimonials/testimonial-9.jpg',
    quote: "The post-processing techniques I learned in Carlo's online course have elevated my work significantly. His approach to color and light is both artistic and technically precise.",
    workshop: 'Advanced Post-Processing Course',
    rating: 5,
    featured: false,
    category: 'course'
  },
  {
    id: 10,
    name: 'Thomas Bergman',
    location: 'Stockholm, Sweden',
    image: '/images/testimonials/testimonial-10.jpg',
    quote: "Carlo's attention to each participant during the Faroe Islands workshop was impressive. Despite challenging weather, he helped us all create compelling images and taught us to embrace the conditions rather than fight them.",
    workshop: 'Faroe Islands Workshop',
    rating: 5,
    featured: false,
    category: 'workshop'
  },
  {
    id: 11,
    name: 'Isabella Rossi',
    location: 'Milan, Italy',
    image: '/images/testimonials/testimonial-11.jpg',
    quote: "The Dolomites workshop was perfectly organized from accommodation to shooting locations. Carlo's knowledge of the area meant we were always in the right place at the right time, even when weather conditions changed.",
    workshop: 'Dolomites Autumn Workshop',
    rating: 5,
    featured: false,
    category: 'workshop'
  },
  {
    id: 12,
    name: 'David Anderson',
    location: 'Denver, USA',
    image: '/images/testimonials/testimonial-12.jpg',
    quote: 'I commissioned Carlo for a custom print of my favorite mountain range. The communication throughout the process was excellent, and the final piece captures exactly the mood and atmosphere I was hoping for.',
    workshop: null,
    rating: 5,
    featured: false,
    category: 'print'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Testimonials' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'print', name: 'Prints & Products' },
  { id: 'mentoring', name: 'Mentoring' },
  { id: 'course', name: 'Online Courses' }
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter testimonials by category
  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedCategory === 'all' || testimonial.category === selectedCategory
  );
  
  // Featured testimonials for the hero section
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">Testimonials</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Hear what clients and workshop participants have to say about their experiences
            with Carlo SP Landscape Photography.
          </p>
        </div>
      </section>
      
      {/* Featured Testimonials */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title mb-12">Featured Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-charcoal p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    {/* Rating Stars */}
                    <div className="flex text-earth-tone">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-off-white text-lg italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="mt-6 pt-6 border-t border-medium-gray">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-medium-gray mr-4">
                      {/* In production, we'd use actual images */}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-off-white">{testimonial.name}</h3>
                      <p className="text-medium-gray text-sm">{testimonial.location}</p>
                      {testimonial.workshop && (
                        <p className="text-earth-tone text-sm mt-1">{testimonial.workshop}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Testimonials */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair text-center mb-12">Client Experiences</h2>
          
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
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-dark-slate p-6">
                <div className="flex items-center mb-4">
                  {/* Rating Stars */}
                  <div className="flex text-earth-tone">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-off-white italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-medium-gray mr-3">
                    {/* In production, we'd use actual images */}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-off-white text-sm">{testimonial.name}</h3>
                    <p className="text-medium-gray text-xs">{testimonial.location}</p>
                    {testimonial.workshop && (
                      <p className="text-earth-tone text-xs mt-1">{testimonial.workshop}</p>
                    )}
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
            <h2 className="section-title mb-8">Ready to Create Your Own Experience?</h2>
            <p className="text-lg mb-8">
              Join one of my upcoming workshops or explore my print collections to bring the beauty of landscape photography into your home.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/workshops" className="btn-secondary">
                Explore Workshops
              </a>
              <a href="/prints" className="btn-primary">
                Browse Print Collection
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Submission */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-8">Share Your Experience</h2>
            <p className="text-center text-medium-gray mb-12">
              If you've participated in one of my workshops or purchased a print, I'd love to hear about your experience.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-off-white mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-off-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-off-white mb-2">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                  placeholder="City, Country"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-off-white mb-2">Type of Experience</label>
                <select 
                  id="experience" 
                  className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="workshop">Workshop</option>
                  <option value="print">Print Purchase</option>
                  <option value="mentoring">One-on-One Mentoring</option>
                  <option value="course">Online Course</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="testimonial" className="block text-off-white mb-2">Your Testimonial</label>
                <textarea 
                  id="testimonial" 
                  rows={6}
                  className="w-full bg-charcoal border border-medium-gray text-off-white px-4 py-3 focus:outline-none focus:border-earth-tone"
                  required
                ></textarea><response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>