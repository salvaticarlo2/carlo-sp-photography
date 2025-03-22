'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-slate text-off-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-playfair text-off-white">
              Carlo SP
            </Link>
            <p className="mt-4 text-medium-gray">
              Professional landscape photographer capturing the beauty of natural landscapes around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/galleries" className="text-medium-gray hover:text-earth-tone transition-colors">
                  Galleries
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-medium-gray hover:text-earth-tone transition-colors">
                  Workshops
                </Link>
              </li>
              {/* ... etc. no icons ... */}
            </ul>
          </div>

          {/* No Social Icons in the Footer at all */}
          {/* Contact or Newsletter etc. is fine */}
        </div>

        <div className="mt-12 pt-8 border-t border-medium-gray text-center">
          <p className="text-medium-gray">
            &copy; {new Date().getFullYear()} Carlo SP Landscape Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}