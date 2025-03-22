'use client';

import { useState, useEffect } from 'react';

// SEO-friendly component for Instagram feed
export default function InstagramFeed() {
  // In a real application, this would fetch from the Instagram API
  // For now, we'll use placeholder data
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: '/images/instagram/post1.jpg',
      likes: 245,
      comments: 18,
      caption: 'Sunrise over the mountains. #landscapephotography #mountains #sunrise',
      url: 'https://www.instagram.com/p/placeholder1/'
    },
    {
      id: 2,
      image: '/images/instagram/post2.jpg',
      likes: 312,
      comments: 24,
      caption: 'Coastal reflections at blue hour. #seascape #bluehour #reflection',
      url: 'https://www.instagram.com/p/placeholder2/'
    },
    {
      id: 3,
      image: '/images/instagram/post3.jpg',
      likes: 189,
      comments: 12,
      caption: 'Forest mist in autumn. #forest #autumn #fog #woodland',
      url: 'https://www.instagram.com/p/placeholder3/'
    },
    {
      id: 4,
      image: '/images/instagram/post4.jpg',
      likes: 276,
      comments: 21,
      caption: 'Desert dunes at sunset. #desert #dunes #goldenhour #landscape',
      url: 'https://www.instagram.com/p/placeholder4/'
    },
    {
      id: 5,
      image: '/images/instagram/post5.jpg',
      likes: 354,
      comments: 32,
      caption: 'Northern lights over Iceland. #auroraborealis #iceland #nightphotography',
      url: 'https://www.instagram.com/p/placeholder5/'
    },
    {
      id: 6,
      image: '/images/instagram/post6.jpg',
      likes: 201,
      comments: 15,
      caption: 'Waterfall long exposure. #waterfall #longexposure #nature',
      url: 'https://www.instagram.com/p/placeholder6/'
    }
  ]);

  return (
    <section className="py-16 bg-charcoal">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-playfair mb-2">Instagram</h2>
            <p className="text-medium-gray">
              Follow me on{' '}
              <a
                href="https://www.instagram.com/carlosp_landscapephotography"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-tone hover:underline"
              >
                @carlosp_landscapephotography
              </a>
            </p>
          </div>

          <a
            href="https://www.instagram.com/carlosp_landscapephotography"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex items-center text-earth-tone hover:underline"
          >
            <span>View Instagram Profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative aspect-square bg-dark-slate overflow-hidden"
              aria-label={`Instagram post: ${post.caption}`}
            >
              {/* In production, we'd use actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-earth-tone/20 to-sage-green/20 transition-transform duration-500 group-hover:scale-110"></div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-off-white text-center">
                  <div className="flex space-x-4">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 15c-1.381 0-2.739-.214-4.044-.572l-4.604 2.013 1.316-4.155c-1.082-1.170-1.668-2.572-1.668-4.056 0-3.988 4.021-7.246 9-7.246s9 3.258 9 7.246c0 3.988-4.021 7.246-9 7.246z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}