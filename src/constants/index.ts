/**
 * Application Constants
 * 
 * Centralized location for commonly used URLs, links, and constants
 * to improve maintainability and reduce duplication across components.
 */

// External Service URLs
export const URLS = {
  // YorkSU (Student Union)
  YORKSU_FRAGSOC: 'https://yorksu.org/activities/view/fragsoc',
  YORKSU_EMAIL: 'fragsoc@yorksu.org',

  // Discord Servers
  DISCORD: {
    MAIN: 'https://discord.gg/vaTV73U5Hz',
    FRAGSOC_GENERAL: 'https://discord.gg/fragsoc', // Alternative invite link
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

  // Site URLs
  SITE_URL: 'https://fragsoc.co.uk',
  CONTACT_SUCCESS: 'https://fragsoc.co.uk/contact?success=true',

  // External APIs
  FORMSPREE: {
    BASE: 'https://formspree.io/f',
    // Form endpoint will be constructed using environment variable
  },
} as const;

// Email addresses
export const EMAILS = {
  FRAGSOC: 'fragsoc@yorksu.org',
} as const;

// Form configuration
export const FORM_CONFIG = {
  CONTACT_SUBJECT: 'New FragSoc Contact Form Submission',
  SUCCESS_REDIRECT: URLS.CONTACT_SUCCESS,
  CC_EMAIL: EMAILS.FRAGSOC,
} as const;

// Common text strings
export const TEXT = {
  DISCORD_JOIN: 'Join Our Discord',
  MEMBERSHIP_GET: 'Get Membership',
  VISIT_YORKSU: 'Visit YorkSU Page',
  PURCHASE_MEMBERSHIP: 'Purchase Membership Online',
  VIEW_COLLECTION: 'View Collection',
} as const;
