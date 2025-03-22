'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Placeholder blog post data - in a real application, this would come from a database or CMS
const blogPostsData = {
  'mastering-composition-in-landscape-photography': {
    id: 1,
    title: 'Mastering Composition in Landscape Photography',
    excerpt: 'Learn how to create compelling compositions that elevate your landscape photography from ordinary to extraordinary.',
    content: `
      <p>Composition is perhaps the most crucial element that separates a snapshot from a compelling landscape photograph. While technical aspects like exposure and focus are important, it's the arrangement of elements within the frame that creates visual impact and communicates your vision as a photographer.</p>
      
      <h2>The Foundation: Rule of Thirds</h2>
      
      <p>The rule of thirds remains one of the most useful compositional guidelines in landscape photography. By dividing your frame into a 3×3 grid and placing key elements along these lines or at their intersections, you create a more balanced and engaging image than centering your subject.</p>
      
      <p>However, don't treat this rule as absolute. Sometimes a centered composition, particularly with symmetrical scenes like perfect reflections, can be extremely powerful. The rule of thirds is a starting point, not a limitation.</p>
      
      <h2>Creating Depth with Foreground, Middle Ground, and Background</h2>
      
      <p>One of the challenges in landscape photography is translating the three-dimensional world into a two-dimensional medium. Including distinct foreground, middle ground, and background elements helps create a sense of depth that draws viewers into your image.</p>
      
      <p>Look for interesting foreground elements—rocks, flowers, patterns in sand or ice—that can anchor your composition and provide a point of entry into the scene. The middle ground connects these elements to the background, which often contains the grand vista or main subject.</p>
      
      <h2>Leading Lines: Guiding the Eye</h2>
      
      <p>Leading lines are powerful compositional tools that guide the viewer's eye through your image. Rivers, roads, shorelines, ridgelines, and even patterns of light and shadow can serve as leading lines.</p>
      
      <p>The most effective leading lines start near the edge of the frame (often the bottom) and lead toward your main subject or into the distance. S-curves—lines that gently wind through the frame—are particularly effective as they add a dynamic quality to the composition.</p>
      
      <h2>The Power of Negative Space</h2>
      
      <p>Not every landscape photograph needs to be filled with elements from edge to edge. Negative space—areas of minimal detail like clear skies, still water, or snow fields—can be used deliberately to create a sense of simplicity, isolation, or tranquility.</p>
      
      <p>Minimalist compositions that juxtapose a strong subject against extensive negative space often create the most powerful emotional impact. They give the viewer's eye a place to rest and emphasize the main subject through contrast.</p>
      
      <h2>Frame Within a Frame</h2>
      
      <p>Using natural elements to create a frame within your composition is another effective technique. Overhanging branches, cave openings, arches, or even the space between two mountains can frame your main subject, adding depth and drawing attention to the focal point.</p>
      
      <p>These natural frames not only add visual interest but also help contain the viewer's gaze within the image, preventing their eye from wandering out of the frame.</p>
      
      <h2>Balance and Visual Weight</h2>
      
      <p>Every element in your composition has visual weight—the amount of attention it draws based on its size, color, brightness, and complexity. A successful composition balances these elements across the frame.</p>
      
      <p>This doesn't necessarily mean symmetry. In fact, asymmetrical balance—where different types of elements counterbalance each other—often creates more dynamic and interesting compositions. For example, a small but bright or colorful element can balance a larger but more subdued one.</p>
      
      <h2>Breaking the Rules Deliberately</h2>
      
      <p>Once you understand compositional principles, you'll know when and how to break them effectively. Centered compositions, tilted horizons, or deliberately unbalanced frames can create tension and visual interest when used intentionally.</p>
      
      <p>The key is being deliberate in your choices. Breaking rules accidentally usually results in weaker images, but breaking them purposefully with a clear vision can lead to unique and powerful photographs.</p>
      
      <h2>Practical Tips for Field Composition</h2>
      
      <ul>
        <li><strong>Work the scene:</strong> Don't settle for your first composition. Explore different angles, heights, and focal lengths.</li>
        <li><strong>Use a tripod:</strong> Beyond stability, a tripod slows you down and encourages more thoughtful composition.</li>
        <li><strong>Check the edges:</strong> Be aware of what's happening at the edges of your frame—unwanted elements can distract from your main subject.</li>
        <li><strong>Simplify:</strong> Often, removing elements from your composition is more powerful than adding them.</li>
        <li><strong>Wait for the right light:</strong> Sometimes the perfect composition needs the perfect light to truly shine.</li>
      </ul>
      
      <p>Remember that composition is subjective, and what works for one scene may not work for another. The most important aspect is developing your eye to recognize potential compositions in the field and having the technical skills to execute your vision.</p>
      
      <p>With practice, these compositional techniques will become second nature, allowing you to focus less on the rules and more on expressing your unique perspective of the landscape.</p>
    `,
    author: 'Carlo SP',
    date: 'March 15, 2025',
    category: 'Photography Techniques',
    tags: ['composition', 'techniques', 'landscape photography'],
    featuredImage: '/images/blog/mastering-composition.jpg',
    featured: true,
    relatedPosts: [3, 4, 6]
  },
  'iceland-photography-guide': {
    id: 2,
    title: 'The Ultimate Guide to Photographing Iceland',
    excerpt: 'Planning a photography trip to Iceland? This comprehensive guide covers the best locations, timing, gear, and practical tips for capturing this otherworldly landscape.',
    content: `
      <p>Iceland has become a mecca for landscape photographers, and for good reason. This small island nation offers an astonishing diversity of landscapes—from cascading waterfalls and black sand beaches to geothermal areas and massive glaciers—all within a relatively compact area. Having led multiple photography workshops in Iceland over the years, I've compiled this guide to help you plan your own photographic adventure.</p>
      
      <h2>When to Visit</h2>
      
      <p>Each season in Iceland offers distinct photographic opportunities:</p>
      
      <h3>Summer (June-August)</h3>
      
      <p>The midnight sun provides nearly 24 hours of daylight, giving you extended golden hour light and the ability to photograph around the clock. Summer brings vibrant green landscapes, puffins along the coastal cliffs, and access to the highlands (which are closed in winter). However, popular locations can be crowded, and you won't see the northern lights during this period.</p>
      
      <h3>Winter (November-March)</h3>
      
      <p>Winter offers the magical combination of snow-covered landscapes, ice caves, and the northern lights. The low-angle light creates beautiful directional illumination throughout the day. The challenges include limited daylight (4-6 hours), potentially harsh weather, and some roads being impassable. Winter requires more preparation but often yields the most dramatic images.</p>
      
      <h3>Shoulder Seasons (April-May, September-October)</h3>
      
      <p>These transitional periods offer a balance of reasonable daylight hours, fewer tourists, and the possibility of northern lights (especially in September-October). Spring brings rushing waterfalls from melting snow, while autumn offers subtle fall colors in the low-growing vegetation.</p>
      
      <h2>Essential Locations</h2>
      
      <h3>South Coast</h3>
      
      <ul>
        <li><strong>Seljalandsfoss and Skógafoss:</strong> Two iconic waterfalls, each offering unique compositional opportunities. Seljalandsfoss allows you to walk behind the cascade, while Skógafoss is massive and powerful.</li>
        <li><strong>Reynisfjara:</strong> The black sand beach near Vík with dramatic basalt columns and sea stacks (Reynisdrangar) offshore.</li>
        <li><strong>Dyrhólaey:</strong> A massive stone arch offering panoramic views of the coastline.</li>
      </ul>
      
      <h3>Vatnajökull National Park</h3>
      
      <ul>
        <li><strong>Jökulsárlón Glacier Lagoon:</strong> Perhaps Iceland's most photogenic location, where massive icebergs calve from the glacier and float through the lagoon toward the sea.</li>
        <li><strong>Diamond Beach:</strong> Where icebergs wash up on black sand, creating surreal juxtapositions of ice and volcanic sand.</li>
        <li><strong>Ice Caves:</strong> Accessible only in winter with guides, these offer otherworldly blue ice formations beneath the glacier.</li>
      </ul>
      
      <h3>Snæfellsnes Peninsula</h3>
      
      <ul>
        <li><strong>Kirkjufell:</strong> The "Church Mountain" is one of Iceland's most photographed mountains, especially with Kirkjufellsfoss waterfall in the foreground.</li>
        <li><strong>Búðir Black Church:</strong> A small black church set against a vast landscape, offering minimalist composition opportunities.</li>
        <li><strong>Arnarstapi:</strong> Dramatic coastal cliffs and rock formations.</li>
      </ul>
      
      <h3>Highlands (Summer Only)</h3>
      
      <ul>
        <li><strong>Landmannalaugar:</strong> Rhyolite mountains with incredible color variations, hot springs, and hiking trails.</li>
        <li><strong>Þórsmörk:</strong> A mountain ridge with lush valleys, rivers, and dramatic peaks.</li>
        <li><strong>Háifoss:</strong> One of Iceland's highest waterfalls, set in a dramatic canyon.</li>
      </ul>
      
      <h2>Essential Gear</h2>
      
      <p>Iceland's challenging conditions require careful gear preparation:</p>
      
      <ul>
        <li><strong>Weather-sealed camera and lenses:</strong> Protection against rain, snow, and dust is essential.</li>
        <li><strong>Lens selection:</strong> A wide-angle (14-24mm) for landscapes, a mid-range zoom (24-70mm) for versatility, and potentially a telephoto (70-200mm) for compressing distant features.</li>
        <li><strong>Sturdy tripod:</strong> Wind is a constant factor in Iceland; a solid tripod is non-negotiable.</li>
        <li><strong>Filters:</strong> Neutral density filters for long exposures of water, graduated ND filters for balancing bright skies, and a polarizer for managing reflections and enhancing colors.</li>
        <li><strong>Extra batteries:</strong> Cold weather depletes batteries faster, and charging opportunities may be limited in remote areas.</li>
        <li><strong>Weather protection:</strong> Rain covers for your camera, lens cleaning supplies, and silica gel packets to combat humidity.</li>
        <li><strong>Personal gear:</strong> Waterproof hiking boots, layered clothing, waterproof outerwear, gloves that allow camera operation, and microspikes for icy conditions in winter.</li>
      </ul>
      
      <h2>Practical Tips</h2>
      
      <h3>Planning and Logistics</h3>
      
      <ul>
        <li><strong>Rent a 4x4 vehicle:</strong> Essential for winter and if you plan to access F-roads in the highlands during summer.</li>
        <li><strong>Check road conditions:</strong> Use the Icelandic Road and Coastal Administration website (road.is) for real-time updates.</li>
        <li><strong>Weather apps:</strong> The Icelandic Meteorological Office app (vedur.is) provides the most accurate forecasts.</li>
        <li><strong>Northern lights prediction:</strong> Use the Aurora forecast from vedur.is and apps like My Aurora Forecast.</li>
        <li><strong>Accommodation:</strong> Book well in advance, especially for summer. Consider guesthouses or farm stays for locations closer to photography spots.</li>
      </ul>
      
      <h3>Photography Approach</h3>
      
      <ul>
        <li><strong>Be flexible:</strong> Iceland's weather changes rapidly; have backup locations planned for each day.</li>
        <li><strong>Respect the environment:</strong> Stay on marked paths, never walk on moss (it takes decades to regrow), and follow all safety guidelines.</li>
        <li><strong>Scout during midday:</strong> Use the less photogenic midday hours to scout locations for sunset, sunrise, or northern lights.</li>
        <li><strong>Embrace the conditions:</strong> Some of my best images have come during "bad" weather—stormy skies, fog, or light rain can add drama and mood.</li>
        <li><strong>Look for unique perspectives:</strong> The iconic locations have been photographed millions of times; challenge yourself to find fresh compositions.</li>
      </ul>
      
      <p>Iceland offers almost limitless photographic potential, but it also demands respect for its powerful natural forces. Safety should always be your priority—no photograph is worth risking your wellbeing. With proper preparation, flexibility, and an openness to the unexpected, your photographic journey through Iceland will likely be one of the most rewarding experiences of your creative life.</p>
    `,
    author: 'Carlo SP',
    date: 'February 28, 2025',
    category: 'Location Guides',
    tags: ['iceland', 'travel', 'location guide'],
    featuredImage: '/images/blog/iceland-guide.jpg',
    featured: true,
    relatedPosts: [6, 5, 3]
  },
  // Additional blog posts would be defined here
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Get blog post data based on slug
  const post = blogPostsData[slug as keyof typeof blogPostsData];
  
  // If post doesn't exist, we'd normally redirect or show 404
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="section-title">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  // Get related posts
  const relatedPosts = post.relatedPosts?.map(id => 
    Object.values(blogPostsData).find(p => p.id === id)
  ).filter(Boolean) || [];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-earth-tone mb-4">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center text-medium-gray mb-8">
              <span className="mr-4">By {post.author}</span>
              <span>{post.date}</span>
            </div>
            <p className="text-lg text-off-white">{post.excerpt}</p>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="bg-dark-slate py-12">
        <div className="container-custom"<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>