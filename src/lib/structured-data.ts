// JSON-LD structured data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FragSoc - University of York Gaming Society",
  "alternateName": "FragSoc",
  "description": "FragSoc is the University of York's Video Gaming and LAN society. We run LAN parties, participate in esports tournaments, and host weekly social events.",
  "url": process.env.NEXT_PUBLIC_BASE_URL || "https://fragsoc.co.uk",
  "logo": `${process.env.NEXT_PUBLIC_BASE_URL || "https://fragsoc.co.uk"}/logo.png`,
  "foundingDate": "2010",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "York",
    "addressCountry": "GB",
    "addressRegion": "North Yorkshire"
  },
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "name": "University of York",
    "url": "https://www.york.ac.uk"
  },
  "sameAs": [
    "https://discord.gg/fragsoc",
    "https://www.twitch.tv/fragsocyork",
    "https://www.instagram.com/fragsocyork",
    "https://twitter.com/FragSocYork"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "York Students' Union",
    "url": "https://yorksu.org"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FragSoc - University of York Gaming Society",
  "url": process.env.NEXT_PUBLIC_BASE_URL || "https://fragsoc.co.uk",
  "description": "Official website of FragSoc, the University of York's gaming and esports society",
  "publisher": {
    "@type": "Organization",
    "name": "FragSoc"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL || "https://fragsoc.co.uk"}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}
