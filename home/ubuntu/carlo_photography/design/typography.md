# Typography for Carlo SP Landscape Photography Website

Based on the analysis of Andy Mumford's website and best practices for photography websites, we'll implement a clean, elegant typography system that complements the visual nature of the content without competing with the photographs.

## Font Selections

### Primary Heading Font: Playfair Display
- Classification: Serif
- Weights to use: 400 (Regular), 700 (Bold)
- Usage: Main headings, page titles, section headers
- Characteristics: Elegant, classic, sophisticated with distinctive character
- Fallback: Georgia, serif

### Primary Body Font: Raleway
- Classification: Sans-serif
- Weights to use: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)
- Usage: Body text, navigation, buttons, form elements
- Characteristics: Clean, modern, highly readable with a distinctive 'W'
- Fallback: Helvetica, Arial, sans-serif

### Accent Font: Montserrat
- Classification: Sans-serif
- Weights to use: 400 (Regular), 600 (Semibold)
- Usage: Subheadings, captions, emphasis text, prices
- Characteristics: Geometric, contemporary, versatile
- Fallback: Arial, sans-serif

## Type Scale

We'll use a modular scale with a ratio of 1.2 (minor third) to ensure harmonious proportions:

- Base size (body text): 16px (1rem)
- Small text (captions, metadata): 14px (0.875rem)
- Extra small text (footnotes): 12px (0.75rem)
- H6: 19px (1.2rem)
- H5: 23px (1.44rem)
- H4: 28px (1.728rem)
- H3: 33px (2.074rem)
- H2: 40px (2.488rem)
- H1: 48px (3rem)
- Hero/Display: 64px (4rem)

## Line Heights

- Body text: 1.6 (comfortable reading)
- Headings: 1.2 (tighter for headlines)
- Small text: 1.4 (improved readability at small sizes)

## Text Styles

### Navigation
- Font: Raleway
- Weight: 500 (Medium)
- Size: 16px (1rem)
- Case: Uppercase
- Letter spacing: 0.05em
- Hover state: Accent color with subtle transition

### Page Titles
- Font: Playfair Display
- Weight: 700 (Bold)
- Size: 48px (3rem) on desktop, 36px (2.25rem) on mobile
- Case: Title case
- Letter spacing: -0.01em

### Section Headers
- Font: Playfair Display
- Weight: 400 (Regular)
- Size: 40px (2.488rem)
- Case: Title case
- Letter spacing: -0.01em

### Image Captions
- Font: Montserrat
- Weight: 400 (Regular)
- Size: 14px (0.875rem)
- Case: Sentence case
- Letter spacing: 0.02em

### Buttons
- Font: Raleway
- Weight: 600 (Semibold)
- Size: 16px (1rem)
- Case: Uppercase
- Letter spacing: 0.05em

### Pull Quotes
- Font: Playfair Display
- Weight: 400 (Regular)
- Style: Italic
- Size: 24px (1.5rem)
- Line height: 1.4

## Implementation Notes

1. Use web fonts from Google Fonts for optimal loading performance
2. Implement proper font loading strategies to avoid FOUT (Flash of Unstyled Text)
3. Ensure sufficient contrast between text and backgrounds for accessibility
4. Maintain consistent type hierarchy across all pages
5. Use responsive typography that scales appropriately on different devices
6. Limit the number of font weights to optimize loading performance
7. Implement proper spacing between text elements for readability
8. Use CSS variables for font families and sizes to maintain consistency
