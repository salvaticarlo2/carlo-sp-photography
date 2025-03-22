'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder workshop data
const workshops = [
  {
    id: 1,
    slug: 'iceland-winter',
    title: 'Iceland Winter Landscapes',
    dates: 'January 15-22, 2026',
    duration: '8 days',
    location: 'Iceland',
    price: '$3,495',
    difficulty: 'Moderate',
    maxParticipants: 8,
    availability: 'Limited Spots',
    description: 'Capture the dramatic winter landscapes of Iceland, from ice caves and frozen waterfalls to the magical northern lights. This workshop focuses on advanced techniques for challenging light conditions.',
    highlights: [
      'Northern Lights photography sessions',
      'Ice cave exploration and photography',
      'Black sand beaches and dramatic coastal formations',
      'Frozen waterfall compositions',
      'Post-processing techniques for winter scenes'
    ]
  },
  {
    id: 2,
    slug: 'dolomites-autumn',
    title: 'Dolomites Autumn Colors',
    dates: 'October 5-12, 2026',
    duration: '8 days',
    location: 'Italian Dolomites',
    price: '$3,295',
    difficulty: 'Moderate',
    maxParticipants: 10,
    availability: 'Available',
    description: 'Experience the breathtaking autumn colors in the Italian Dolomites. This workshop combines stunning mountain landscapes with the vibrant colors of fall, creating endless photographic opportunities.',
    highlights: [
      'Iconic Dolomites peaks in autumn light',
      'Alpine lakes and reflections',
      'Sunrise sessions at key locations',
      'Traditional mountain villages',
      'Composition techniques for mountain landscapes'
    ]
  },
  {
    id: 3,
    slug: 'southwest-usa',
    title: 'American Southwest',
    dates: 'April 10-18, 2026',
    duration: '9 days',
    location: 'Arizona & Utah, USA',
    price: '$3,795',
    difficulty: 'Easy to Moderate',
    maxParticipants: 8,
    availability: 'Filling Fast',
    description: 'Explore the iconic landscapes of the American Southwest, from the depths of canyon country to the sculptural formations of slot canyons. This workshop focuses on composition and capturing the unique light of the desert.',
    highlights: [
      'Antelope Canyon light beams',
      'Monument Valley sunrise and sunset',
      'Grand Canyon dramatic light',
      'Desert composition techniques',
      'Night sky photography'
    ]
  },
  {
    id: 4,
    slug: 'new-zealand',
    title: 'New Zealand Landscapes',
    dates: 'March 5-15, 2026',
    duration: '11 days',
    location: 'South Island, New Zealand',
    price: '$4,295',
    difficulty: 'Moderate',
    maxParticipants: 8,
    availability: 'Available',
    description: 'Discover the diverse landscapes of New Zealand\'s South Island, from coastal scenes to alpine vistas. This comprehensive workshop covers a wide range of landscape photography techniques.',
    highlights: [
      'Milford Sound dramatic light',
      'Mount Cook and alpine landscapes',
      'Moeraki Boulders coastal photography',
      'Rainforest and waterfall techniques',
      'Long exposure seascapes'
    ]
  },
  {
    id: 5,
    slug: 'scotland-highlands',
    title: 'Scottish Highlands',
    dates: 'May 18-25, 2026',
    duration: '8 days',
    location: 'Scotland, UK',
    price: '$2,995',
    difficulty: 'Easy to Moderate',
    maxParticipants: 8,
    availability: 'Available',
    description: 'Capture the moody landscapes of the Scottish Highlands in spring. This workshop focuses on creating atmospheric images that convey the essence of this ancient landscape.',
    highlights: [
      'Isle of Skye iconic locations',
      'Highland glens and mountains',
      'Historic castles in landscape settings',
      'Coastal formations and seascapes',
      'Working with changing weather conditions'
    ]
  },
];

// Placeholder testimonials
const testimonials = [
  {
    text: "Carlo's workshop in Iceland exceeded all my expectations. His knowledge of the locations and ability to adapt to changing weather conditions ensured we got the best possible shots. The small group size meant plenty of individual attention.",
    author: "Michael Thompson",
    location: "Vancouver, Canada",
    workshop: "Iceland Winter Landscapes"
  },
  {
    text: "I've attended many photography workshops, but Carlo's stood out for the perfect balance of technical instruction and creative guidance. He has an incredible eye for composition and helped me see landscapes in a completely new way.",
    author: "Sarah Johnson",
    location: "London, UK",
    workshop: "Scottish Highlands"
  },
  {
    text: "The Dolomites workshop was life-changing for my photography. Carlo's patience and expertise helped me overcome technical challenges I'd been struggling with for years. The locations were breathtaking and the group dynamics were wonderful.",
    author: "David Chen",
    location: "Singapore",
    workshop: "Dolomites Autumn Colors"
  },
  {
    text: "As a beginner, I was worried about keeping up, but Carlo made sure everyone got the attention they needed regardless of skill level. I came away with images I'm proud of and skills that have transformed my approach to landscape photography.",
    author: "Emma Rodriguez",
    location: "Madrid, Spain",
    workshop: "American Southwest"
  },
];

// FAQ items
const faqItems = [
  {
    question: "What skill level are the workshops designed for?",
    answer: "My workshops are designed to accommodate photographers of all skill levels, from beginners to advanced. The small group size allows me to provide personalized instruction based on your experience and goals."
  },
  {
    question: "What equipment should I bring?",
    answer: "A DSLR or mirrorless camera, tripod, and a selection of lenses (wide-angle is essential for landscapes) are recommended. A detailed equipment list will be provided upon booking. Filters (ND and polarizing) are also useful but not mandatory."
  },
  {
    question: "How physically demanding are the workshops?",
    answer: "The physical demands vary by location. Each workshop listing includes a difficulty rating. Most involve moderate hiking with camera gear, but we always work at a comfortable pace with plenty of breaks."
  },
  {
    question: "What's included in the workshop price?",
    answer: "Workshop prices typically include all instruction, location guidance, and post-processing sessions. Accommodation is included for most workshops. Transportation during the workshop is usually included, but flights to and from the workshop location are not. A detailed inclusion list is provided for each specific workshop."
  },
  {
    question: "How do I reserve a spot?",
    answer: "A 30% deposit is required to secure your booking, with the balance due 90 days before the workshop start date. You can book directly through the website or contact me for more information."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Deposits are fully refundable up to 120 days before the workshop. Cancellations between 120 and 60 days receive a 50% refund. Unfortunately, no refunds are possible for cancellations within 60 days of the workshop, but you may transfer your spot to another person."
  },
];

export default function Workshops() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <h1 className="section-title mt-12">Photography Workshops</h1>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Join me on an immersive photography adventure in some of the world's most breathtaking locations.
            Small groups, personalized instruction, and unforgettable experiences await.
          </p>
        </div>
      </section>
      
      {/* Workshop Philosophy */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair mb-8 text-center">Workshop Philosophy</h2>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                My workshops are designed to provide an immersive photography experience that combines technical instruction, creative guidance, and the joy of exploring stunning landscapes. With small group sizes (maximum 8-10 participants), I ensure that each photographer receives personalized attention and support.
              </p>
              <p className="mb-4">
                We'll rise early for the best light, stay out late for sunset and night photography, and use the midday hours for post-processing sessions and technique discussions. Throughout the workshop, I'll share my approach to composition, light, and the technical aspects of landscape photography.
              </p>
              <p className="mb-4">
                Beyond the photography, these workshops offer the opportunity to connect with like-minded photographers, explore remote and beautiful locations, and develop your unique creative vision. Whether you're a beginner looking to learn the fundamentals or an experienced photographer aiming to refine your style, my workshops provide a supportive environment for growth.
              </p>
              <p>
                All locations are carefully selected based on their photographic potential, and itineraries are designed to maximize our time in the field while allowing flexibility for changing weather conditions and special opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Workshops */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title mb-12">Upcoming Workshops</h2>
          
          <div className="space-y-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-dark-slate p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Workshop Image (placeholder) */}
                <div className="aspect-[4/3] bg-charcoal relative md:col-span-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20"></div>
                </div>
                
                {/* Workshop Details */}
                <div className="md:col-span-2">
                  <h3 className="font-playfair text-2xl mb-2">{workshop.title}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                    <div>
                      <span className="text-medium-gray">Dates:</span> {workshop.dates}
                    </div>
                    <div>
                      <span className="text-medium-gray">Duration:</span> {workshop.duration}
                    </div>
                    <div>
                      <span className="text-medium-gray">Location:</span> {workshop.location}
                    </div>
                    <div>
                      <span className="text-medium-gray">Price:</span> {workshop.price}
                    </div>
                    <div>
                      <span className="text-medium-gray">Difficulty:</span> {workshop.difficulty}
                    </div>
                    <div>
                      <span className="text-medium-gray">Group Size:</span> Max {workshop.maxParticipants}
                    </div>
                  </div>
                  
                  <p className="mb-4">{workshop.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-block bg-earth-tone text-off-white px-3 py-1 text-sm font-medium">
                      {workshop.availability}
                    </span>
                  </div>
                  
                  <Link href={`/workshops/${workshop.slug}`} className="btn-primary">
                    View Details & Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-dark-slate">
        <div className="container-custom">
          <h2 className="section-title mb-12">What Participants Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text mb-4">"{testimonial.text}"</p>
                <p className="testimonial-author mb-1">{testimonial.author}</p>
                <p className="text-medium-gray text-sm mb-2">{testimonial.location}</p>
                <p className="text-earth-tone text-sm italic">Workshop: {testimonial.workshop}</p>
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
      
      {/* FAQ Section */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom">
          <h2 className="section-title mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-dark-slate p-6">
                <h3 className="font-playfair text-xl mb-3">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-earth-tone text-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">Have Questions?</h2>
            <p className="text-lg mb-8">
              If you have any questions about the workshops or would like more information before booking,
              please don't hesitate to get in touch. I'm happy to help you find the perfect workshop for your needs.
            </p>
            <Link href="/contact" className="bg-off-white text-earth-tone px-6 py-3 font-raleway font-semibold uppercase tracking-wider transition-all hover:bg-opacity-90">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
