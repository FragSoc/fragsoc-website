# URL Constants Implementation Guide

## Overview

This project now uses centralized constants for commonly used URLs to improve maintainability and reduce the risk of inconsistencies. All URLs are defined in `/src/constants/index.ts` and imported where needed.

## Benefits

- ✅ **Single Source of Truth**: All URLs are defined in one place
- ✅ **Easy Maintenance**: Update a URL once, and it changes everywhere
- ✅ **Consistency**: No risk of typos or outdated links
- ✅ **Type Safety**: TypeScript ensures correct usage
- ✅ **Better Organization**: Logical grouping of related URLs

## Constants Structure

### URL Categories

```typescript
export const URLS = {
  // YorkSU (Student Union)
  YORKSU_FRAGSOC: 'https://yorksu.org/activities/view/fragsoc',
  YORKSU_EMAIL: 'fragsoc@yorksu.org',

  // Discord Servers
  DISCORD: {
    MAIN: 'https://discord.gg/vaTV73U5Hz',
    FRAGSOC_GENERAL: 'https://discord.gg/fragsoc',
    ESPORTS: 'https://discord.gg/B8htGMcGaC',
    FRAGSMASH: 'https://discord.gg/A9BWHvHFVM',
  },

  // Social Media
  SOCIAL: {
    FACEBOOK: 'https://www.facebook.com/groups/FragSoc',
    TWITTER: 'https://twitter.com/FragSoc',
    INSTAGRAM: 'https://www.instagram.com/Fragsoc/?hl=en-gb',
    TWITCH: 'https://www.twitch.tv/fragsoc',
    YOUTUBE: 'https://www.youtube.com/user/Fragsoc/videos',
    REDDIT: 'https://www.reddit.com/user/FragSoc',
  },

  // External Services
  MERCHANDISE: 'https://raven.gg/stores/fragsoc-uoy-esports/',
  ROSES_LIVE: 'https://roseslive.co.uk/',
}
```

## Usage Examples

### Basic Import and Usage
```typescript
import { URLS, TEXT } from '@/constants';

// Instead of:
<Link href="https://yorksu.org/activities/view/fragsoc">

// Use:
<Link href={URLS.YORKSU_FRAGSOC}>
```

### Multiple Constants
```typescript
import { URLS, TEXT, EMAILS } from '@/constants';

const ContactForm = () => (
  <form>
    <input type="hidden" value={EMAILS.FRAGSOC} />
    <Link href={URLS.DISCORD.MAIN}>{TEXT.DISCORD_JOIN}</Link>
  </form>
);
```

## Migration Status

### ✅ Completed Components
- `src/constants/index.ts` - **Constants definition**
- `src/components/ContactForm.tsx` - **Form URLs and configuration**
- `src/components/Footer.tsx` - **All social media links**
- `src/components/Header.tsx` - **YorkSU membership links**
- `src/components/AutoPlayingBanner.tsx` - **Discord and merchandise**
- `src/components/MainSections.tsx` - **Roses Live and FragSmash Discord**
- `src/app/contact/page.tsx` - **Contact methods and links**
- `src/app/about/page.tsx` - **About page Discord links**

### 📋 Remaining Files (Optional)
These files contain URLs but have lower priority:
- `src/app/faq/page.tsx` - FAQ page links
- `src/app/committee/page.tsx` - Committee page links
- `src/app/fanart/page.tsx` - Fanart page links
- `src/app/esports/page.tsx` - Esports page links
- `src/components/HeroSection.tsx` - Hero section links

## Adding New Constants

### 1. Define in Constants File
```typescript
// Add to src/constants/index.ts
export const URLS = {
  // existing URLs...
  NEW_SERVICE: 'https://new-service.com',
} as const;
```

### 2. Import and Use
```typescript
import { URLS } from '@/constants';

<Link href={URLS.NEW_SERVICE}>New Service</Link>
```

### 3. Update Documentation
Update this file to reflect any new constants or categories.

## Best Practices

### ✅ Do
- Use constants for any URL used more than once
- Group related URLs logically (social media, discord servers, etc.)
- Use TypeScript `as const` for better type safety
- Import only what you need: `import { URLS } from '@/constants'`

### ❌ Don't
- Hardcode URLs that already exist in constants
- Create constants for URLs used only once
- Modify the constants file directly in components

## URL Categories Reference

| Category | Purpose | Examples |
|----------|---------|----------|
| `URLS.YORKSU_*` | Student Union related | Membership, email |
| `URLS.DISCORD.*` | Discord servers | Main, esports, specific games |
| `URLS.SOCIAL.*` | Social media | Facebook, Twitter, Instagram, etc. |
| `URLS.MERCHANDISE` | Store links | Raven.gg store |
| `EMAILS.*` | Email addresses | Contact emails |
| `TEXT.*` | Button labels | "Join Discord", "Get Membership" |

## Maintenance

### Updating URLs
1. Change the URL in `/src/constants/index.ts`
2. The change automatically applies everywhere
3. Test the build: `npm run build`
4. Commit the change

### Adding New URLs
1. Identify the appropriate category or create a new one
2. Add the constant with a descriptive name
3. Use the constant in components
4. Update this documentation

This centralized approach makes the codebase more maintainable and reduces the risk of broken or inconsistent links across the application.
