'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder workshop data - in a real application, this would come from a database or CMS
const workshopsData = {
  'iceland-winter': {
    id: 1,
    title: 'Iceland Winter Landscapes',
    dates: 'January 15-22, 2026',
    duration: '8 days',
    location: 'Iceland',
    price: '$3,495',
    difficulty: 'Moderate',
    maxParticipants: 8,
    availability: 'Limited Spots',
    spotsLeft: 3,
    description: 'Capture the dramatic winter landscapes of Iceland, from ice caves and frozen waterfalls to the magical northern lights. This workshop focuses on advanced techniques for challenging light conditions.',
    longDescription: `
      Experience the raw beauty of Iceland in winter during this immersive 8-day photography workshop. We'll explore the south coast's dramatic landscapes, from black sand beaches and towering waterfalls to mystical ice caves and glacier lagoons. 
      
      Winter in Iceland offers unique photographic opportunities with soft, directional light throughout the day, creating perfect conditions for landscape photography. The low sun angle produces long shadows and golden light even at midday, while the possibility of northern lights adds an exciting night photography element.
      
      This workshop is designed for photographers of all levels who are comfortable with basic camera operations and ready to expand their creative and technical skills. We'll focus on advanced techniques for challenging winter conditions, including exposure management in high-contrast snow scenes, capturing the northern lights, and creating compelling compositions in minimalist winter landscapes.
      
      Throughout the workshop, we'll combine in-field instruction with post-processing sessions, helping you develop a complete workflow from capture to final image. Group size is limited to 8 participants to ensure personalized attention and an intimate experience.
    `,
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Reykjavik',
        description: "Arrive in Reykjavik and transfer to our hotel. We'll have a welcome dinner and workshop orientation in the evening, discussing our itinerary and photography goals."
      },
      {
        day: 'Day 2',
        title: 'South Coast Waterfalls',
        description: "We begin our journey along the south coast, photographing the iconic Seljalandsfoss and Skógafoss waterfalls. We'll explore techniques for long exposure waterfall photography and working with ice and snow elements."
      },
      {
        day: 'Day 3',
        title: 'Vík and Black Sand Beaches',
        description: "Today we'll explore the black sand beaches near Vík, including Reynisfjara with its dramatic basalt columns and sea stacks. We'll focus on coastal composition and working with the dynamic elements of waves and light."
      },
      {
        day: 'Day 4',
        title: 'Ice Caves and Glacier Exploration',
        description: "A highlight of our trip will be exploring ice caves beneath Vatnajökull glacier with specialist guides. We'll learn techniques for photographing these ethereal blue ice formations and the surrounding glacial landscapes."
      },
      {
        day: 'Day 5',
        title: 'Jökulsárlón Glacier Lagoon',
        description: "Full day at the breathtaking Jökulsárlón glacier lagoon and Diamond Beach, where icebergs wash ashore on black sand. We'll capture sunrise and sunset at these locations, with midday post-processing sessions."
      },
      {
        day: 'Day 6',
        title: 'Eastern Fjords',
        description: "We'll explore the less-photographed eastern fjords, seeking unique compositions of mountains, snow, and sea. Weather permitting, we'll also have another opportunity for northern lights photography."
      },
      {
        day: 'Day 7',
        title: 'Geothermal Areas and Return to Reykjavik',
        description: "On our return journey to Reykjavik, we'll photograph geothermal areas with their steam vents, mud pots, and colorful mineral deposits. Final post-processing session and farewell dinner in Reykjavik."
      },
      {
        day: 'Day 8',
        title: 'Departure',
        description: 'Breakfast at the hotel before departures. Optional Blue Lagoon visit for those with later flights.'
      }
    ],
    includes: [
      'All accommodation (7 nights in comfortable hotels)',
      'Transportation throughout the workshop in a spacious 4x4 vehicle',
      'Professional photography instruction and guidance',
      'Ice cave tour with specialized guides and safety equipment',
      'Post-processing sessions and image reviews',
      'Welcome and farewell dinners',
      'Breakfast daily'
    ],
    excludes: [
      'Flights to and from Iceland',
      'Lunches and dinners (except welcome and farewell dinners)',
      'Travel insurance (required)',
      'Personal expenses and gratuities',
      'Optional Blue Lagoon visit'
    ],
    instructor: {
      name: 'Carlo SP',
      bio: 'Carlo is a professional landscape photographer with over 10 years of experience photographing in extreme environments. He has led numerous workshops in Iceland and specializes in winter and night photography techniques.'
    },
    testimonials: [
      {
        text: "The Iceland workshop was truly life-changing for my photography. Carlo's knowledge of the locations and ability to adapt to changing weather conditions ensured we got the best possible shots. His technical instruction was clear and helpful, and I came away with images I'm truly proud of.",
        author: "Michael Thompson",
        location: "Vancouver, Canada"
      },
      {
        text: "As someone who had never photographed in snow before, I was concerned about the technical challenges. Carlo provided excellent guidance on exposure settings, keeping gear safe in harsh conditions, and finding compelling compositions in the winter landscape. The ice cave experience alone was worth the trip!",
        author: "Jennifer Wu",
        location: "Singapore"
      }
    ]
  },
  'dolomites-autumn': {
    id: 2,
    title: 'Dolomites Autumn Colors',
    dates: 'October 5-12, 2026',
    duration: '8 days',
    location: 'Italian Dolomites',
    price: '$3,295',
    difficulty: 'Moderate',
    maxParticipants: 10,
    availability: 'Available',
    spotsLeft: 8,
    description: 'Experience the breathtaking autumn colors in the Italian Dolomites. This workshop combines stunning mountain landscapes with the vibrant colors of fall, creating endless photographic opportunities.',
    longDescription: `
      Join me for an unforgettable autumn photography adventure in the Italian Dolomites, one of Europe's most spectacular mountain ranges. October brings a magical transformation to this UNESCO World Heritage site as the larch trees turn golden, creating a stunning contrast against the dramatic limestone peaks.
      
      The Dolomites offer an incredible diversity of landscapes, from jagged mountain spires and reflective alpine lakes to rolling meadows and traditional mountain villages. During this 8-day workshop, we'll explore the most photogenic locations while taking advantage of the beautiful autumn light and colors.
      
      This workshop is suitable for photographers of all levels who are comfortable with basic camera operations. We'll focus on composition techniques specific to mountain landscapes, working with changing light conditions, and capturing the essence of autumn in this unique alpine environment.
      
      With a small group of maximum 10 participants, you'll receive personalized instruction both in the field and during our post-processing sessions. We'll stay in comfortable accommodations close to our shooting locations, allowing us to maximize our time in the best light.
    `,
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Venice',
        description: 'Arrive in Venice and transfer to our hotel in the Dolomites region. Welcome dinner and workshop orientation in the evening.'
      },
      {
        day: 'Day 2-7',
        title: 'Dolomites Photography',
        description: 'We\'ll spend these days exploring the most photogenic locations in the Dolomites, including Tre Cime di Lavaredo, Alpe di Siusi, Val di Funes, and Lake Braies. Each day will include sunrise and sunset shoots, with midday breaks for rest and post-processing sessions.'
      },
      {
        day: 'Day 8',
        title: 'Departure',
        description: 'Final sunrise shoot followed by breakfast before departures.'
      }
    ],
    includes: [
      'All accommodation (7 nights in comfortable hotels)',
      'Transportation throughout the workshop',
      'Professional photography instruction and guidance',
      'Post-processing sessions and image reviews',
      'Welcome and farewell dinners',
      'Breakfast daily'
    ],
    excludes: [
      'Flights to and from Italy',
      'Lunches and dinners (except welcome and farewell dinners)',
      'Travel insurance (required)',
      'Personal expenses and gratuities'
    ],
    instructor: {
      name: 'Carlo SP',
      bio: 'Carlo is a professional landscape photographer with a special affinity for mountain landscapes. He has photographed the Dolomites extensively in all seasons and knows the region intimately.'
    },
    testimonials: [
      {
        text: "The Dolomites workshop exceeded all my expectations. Carlo's knowledge of the area meant we were always in the right place at the right time, even when weather conditions changed. His passion for the mountains is contagious, and I learned so much about creating depth and scale in mountain photography.",
        author: "David Chen",
        location: "Singapore"
      },
      {
        text: "This was my second workshop with Carlo, and it was just as amazing as the first. The autumn colors in the Dolomites were spectacular, and Carlo helped me capture them in ways I never would have thought of on my own. The group was supportive and fun, and I came away with both great images and new friends.",
        author: "Lisa Johnson",
        location: "Toronto, Canada"
      }
    ]
  },
  // Additional workshops would be defined here
};

export default function WorkshopPage({ params }: { params: { slug: string } }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeTerms: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { slug } = params;
  
  // Get workshop data based on slug
  const workshop = workshopsData[slug as keyof typeof workshopsData];
  
  // If workshop doesn't exist, we'd normally redirect or show 404
  if (!workshop) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="section-title">Workshop Not Found</h1>
          <p className="mb-8">The workshop you're looking for doesn't exist.</p>
          <Link href="/workshops" className="btn-primary">
            Back to Workshops
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      agreeTerms: false
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title mt-12">{workshop.title}</h1>
            <p className="text-center text-lg mb-8">{workshop.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-dark-slate p-4">
                <p className="text-medium-gray text-sm mb-1">Dates</p>
                <p className="font-montserrat">{workshop.dates}</p>
              </div>
              <div className="bg-dark-slate p-4">
                <p className="text-medium-gray text-sm mb-1">Duration</p>
                <p className="font-montserrat">{workshop.duration}</p>
              </div>
              <div className="bg-dark-slate p-4">
                <p className="text-medium-gray text-sm mb-1">Price</p>
                <p className="font-montserrat">{workshop.price}</p>
              </div>
              <div className="bg-dark-slate p-4">
                <p className="text-medium-gray text-sm mb-1">Availability</p>
                <p className="font-montserrat text-earth-tone">{workshop.spotsLeft} spots left</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Image */}
      <section className="bg-dark-slate py-12">
        <div className="container-custom">
          <div className="aspect-[21/9] bg-charcoal relative">
            {/* In production, we'd use actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20"></div>
          </div>
        </div>
      </section>
      
      {/* Workshop Details */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none mb-12">
                {workshop.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <h2 className="font-playfair text-3xl mb-6">Itinerary</h2>
              <div className="space-y-6 mb-12">
                {workshop.itinerary.map((day, index) => (
                  <div key={index} className="bg-dark-slate p-6">
                    <h3 className="font-montserrat font-semibold text-xl mb-2">
                      <span className="text-earth-tone">{day.day}:</span> {day.title}
                    </h3>
                    <p>{day.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="font-playfair text-3xl mb-6">What's Included</h2>
                  <ul className="space-y-2">
                    {workshop.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-earth-tone flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="font-playfair text-3xl mb-6">What's Not Included</h2>
                  <<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>