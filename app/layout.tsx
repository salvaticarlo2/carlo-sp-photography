export const metadata = {
  title: 'Carlo SP Landscape Photography | Professional Landscape Photographer',
  description:
    'Carlo SP is a professional landscape photographer specializing in capturing the beauty of natural landscapes. Explore galleries, workshops, prints, and more.',
  keywords:
    'landscape photography, Carlo SP, photography workshops, landscape prints, nature photography',
  openGraph: {
    title: 'Carlo SP Landscape Photography',
    description: 'Professional landscape photography, workshops, and fine art prints',
    url: 'https://carlosp.photography',
    siteName: 'Carlo SP Landscape Photography',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlo SP Landscape Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlo SP Landscape Photography',
    description:
      'Professional landscape photography, workshops, and fine art prints',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://carlosp.photography'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-off-white font-raleway">
        {/* Header with a small logo */}
        <header className="p-4">
          <img src="/images/logo.png" alt="Carlo SP Logo" className="h-10" />
        </header>
        {children}
      </body>
    </html>
  );
}