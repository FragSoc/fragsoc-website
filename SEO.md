# SEO Implementation Guide

This document outlines the SEO improvements implemented for the FragSoc website.

## Features Implemented

### 1. Robots.txt (`/robots.txt`)
- **Location**: `src/app/robots.ts`
- **Purpose**: Tells search engine crawlers which pages to index
- **Configuration**:
  - Allows crawling of all public pages
  - Disallows private directories and API routes
  - Points to sitemap location

### 2. Sitemap.xml (`/sitemap.xml`)
- **Location**: `src/app/sitemap.ts`
- **Purpose**: Provides search engines with a map of all pages
- **Features**:
  - Dynamic generation based on app structure
  - Priority and change frequency for each page
  - Last modified dates
  - Automatically includes all routes

### 3. Enhanced Metadata
- **Location**: `src/app/layout.tsx`
- **Features**:
  - Comprehensive meta tags
  - Open Graph tags for social media
  - Twitter Card optimization
  - Google verification support
  - Canonical URLs

### 4. Structured Data (JSON-LD)
- **Location**: `src/lib/structured-data.ts`
- **Purpose**: Helps search engines understand the content
- **Schemas Implemented**:
  - Organization schema (for FragSoc)
  - Website schema (for the site)
  - Enhanced search capabilities

## Environment Variables

Add these to your `.env.local` file:

```bash
# Required for SEO
NEXT_PUBLIC_BASE_URL=https://fragsoc.co.uk

# Optional for Google Search Console
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
```

## SEO Best Practices Implemented

### Technical SEO
- ✅ Robots.txt for crawler guidance
- ✅ XML sitemap for indexing
- ✅ Canonical URLs to prevent duplicate content
- ✅ Meta tags for page descriptions
- ✅ Structured data markup

### Content SEO
- ✅ Descriptive page titles
- ✅ Meta descriptions under 160 characters
- ✅ Relevant keywords in metadata
- ✅ Alt text for images (implement in components)

### Social Media SEO
- ✅ Open Graph tags for Facebook/LinkedIn
- ✅ Twitter Card optimization
- ✅ Social media preview images

## Page Priority Structure

| Page | Priority | Change Frequency | Description |
|------|----------|------------------|-------------|
| Home | 1.0 | Weekly | Main landing page |
| About | 0.9 | Monthly | Society information |
| Esports | 0.9 | Weekly | Tournament info |
| Committee | 0.8 | Monthly | Team information |
| LAN Events | 0.8 | Weekly | Event listings |
| Socials | 0.7 | Weekly | Social events |
| Contact | 0.7 | Monthly | Contact information |
| UoY Esports | 0.7 | Weekly | University esports |
| Fanart | 0.6 | Weekly | Community content |
| Twitch | 0.6 | Weekly | Streaming info |
| FAQ | 0.5 | Monthly | Support content |

## Testing Your SEO

### 1. Google Search Console
1. Add your site to Google Search Console
2. Verify ownership using the verification meta tag
3. Submit your sitemap: `https://yoursite.com/sitemap.xml`

### 2. Rich Results Testing
- Use Google's Rich Results Test
- Test your structured data markup
- Verify organization and website schemas

### 3. Social Media Testing
- Facebook Sharing Debugger
- Twitter Card Validator
- LinkedIn Post Inspector

### 4. SEO Audit Tools
- Google Lighthouse (built into Chrome DevTools)
- SEMrush Site Audit
- Screaming Frog SEO Spider

## Next Steps

1. **Set up Google Search Console**
2. **Add Google Analytics** (if not already done)
3. **Optimize images** with alt text
4. **Create blog/news section** for fresh content
5. **Build backlinks** through university partnerships
6. **Monitor performance** with SEO tools

## Files Modified/Created

```
src/
├── app/
│   ├── layout.tsx          # Enhanced metadata
│   ├── robots.ts           # Robots.txt generation
│   └── sitemap.ts          # Sitemap generation
├── lib/
│   └── structured-data.ts  # JSON-LD schemas
└── .env.example            # SEO environment variables
```

## Performance Impact

- **Robots.txt**: Minimal impact, generated at build time
- **Sitemap.xml**: Minimal impact, generated at build time
- **Structured Data**: ~2KB additional HTML per page
- **Enhanced Metadata**: ~1KB additional HTML per page

Total impact: Negligible performance cost with significant SEO benefits.
