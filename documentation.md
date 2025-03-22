# Carlo SP Landscape Photography Website Documentation

## Overview
This document provides information on how to maintain, update, and deploy the Carlo SP Landscape Photography website. The website is built using Next.js and is designed to be deployed on Vercel through GitHub.

## Website Structure
The website consists of the following main sections:

1. **Home Page**: Introduction and featured content
2. **Galleries**: Photography portfolios organized by themes/locations
3. **Workshops**: Information on photography workshops
4. **Prints**: Online store for purchasing prints
5. **Films**: Video content section
6. **Blog**: Articles and posts about photography
7. **Testimonials**: Client feedback and reviews
8. **Contact**: Contact form and information

## Technology Stack
- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) and GitHub

## File Structure
```
carlo-sp-photography/
├── public/               # Static assets
│   ├── images/           # Image files
│   ├── robots.txt        # SEO configuration
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── blog/         # Blog section
│   │   ├── contact/      # Contact section
│   │   ├── films/        # Films section
│   │   ├── galleries/    # Galleries section
│   │   ├── prints/       # Prints section
│   │   ├── testimonials/ # Testimonials section
│   │   ├── workshops/    # Workshops section
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── InstagramFeed.tsx
│   └── styles/           # Global styles
└── package.json          # Dependencies and scripts
```

## Updating Content

### Adding New Gallery Images
1. Add image files to `/public/images/galleries/[category]/`
2. Update the gallery data in `/src/app/galleries/page.tsx`

### Adding New Workshop
1. Add workshop details to the workshops array in `/src/app/workshops/page.tsx`
2. Create a new page in `/src/app/workshops/[slug]/page.tsx` if needed

### Adding New Blog Post
1. Add the blog post data to the blogPosts array in `/src/app/blog/page.tsx`
2. Update the blogPostsData object in `/src/app/blog/[slug]/page.tsx`

### Updating Contact Information
Modify the contact details in `/src/app/contact/page.tsx`

## Deployment Instructions

### Deploying to Vercel with GitHub
1. Push your code to a GitHub repository
2. Log in to Vercel (vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./carlo-sp-photography
   - Build Command: npm run build
   - Output Directory: .next
6. Click "Deploy"

### Custom Domain Setup
1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your domain: carlosp.photography
4. Follow Vercel's instructions to configure DNS settings

## SEO Optimization
The website includes the following SEO features:
- Meta tags in `/src/app/layout.tsx`
- Open Graph and Twitter card tags
- robots.txt in `/public/robots.txt`
- sitemap.xml in `/public/sitemap.xml`

To update SEO settings:
1. Modify metadata in `/src/app/layout.tsx`
2. Update sitemap.xml when adding new pages

## Social Media Integration
The website is integrated with Instagram and other social media platforms:
- Instagram feed component in `/src/components/InstagramFeed.tsx`
- Social media links in Navbar and Footer

To update social media links:
1. Modify the links in `/src/components/layout/Navbar.tsx`
2. Update the links in `/src/components/layout/Footer.tsx`

## Maintenance Tips
1. Regularly update dependencies with `npm update`
2. Test the website after making significant changes
3. Keep content fresh by adding new galleries, blog posts, and workshops
4. Monitor website performance using Vercel Analytics
5. Regularly backup your codebase

## Support
For technical support or questions about the website, please contact the developer.
