export const brandConfig = {
  "slug": "everytimewatch",
  "repo": "everytimewatch-malang-landing",
  "brandName": "Everytimewatch",
  "monogram": "EW",
  "category": "Watch boutique",
  "location": "Veteran Malang",
  "address": "Jl. Veteran Malang No.2, Penanggungan, Malang",
  "contact": "WhatsApp via Linktree",
  "publicLink": "https://linktr.ee/everytimewatch",
  "instagram": "https://www.instagram.com/everytimewatch",
  "designConcept": "Minimalist / Apple-style trust landing",
  "conversionGoal": "Make watch care feel premium and safe with calm spacing, warranty language, and direct consultation CTA.",
  "proofPoints": [
    "Public profile states watch-related service plus original watches with official warranty messaging.",
    "Veteran Malang address and review links make location trust a core selling point.",
    "WhatsApp, payment, Tokopedia, Instagram, and TikTok links support a consultation-to-purchase path."
  ],
  "sourceLinks": [
    {
      "label": "Everytimewatch Linktree",
      "url": "https://linktr.ee/everytimewatch"
    },
    {
      "label": "Everytimewatch Instagram",
      "url": "https://www.instagram.com/everytimewatch"
    }
  ],
  "theme": {
    "bg": "#11100d",
    "accent": "#c8a34f",
    "accent2": "#eadfbd",
    "paper": "#fff8e8"
  },
  "nav": [
    "Service",
    "Collection",
    "Warranty",
    "Consult"
  ],
  "hero": {
    "eyebrow": "Watch service and original watches",
    "title": "Premium care for watches that carry value.",
    "body": "A minimal trust-first boutique page for servicing, buying, and consulting about watches. Every interaction points to confidence, warranty, and careful handling.",
    "cta": "Consult a Watch"
  },
  "sections": [
    {
      "id": "service",
      "kicker": "Watch Service",
      "title": "Battery, strap, cleaning, and inspection with boutique clarity.",
      "items": [
        "Battery replacement",
        "Strap refresh",
        "Care inspection"
      ]
    },
    {
      "id": "collection",
      "kicker": "Curated Collection",
      "title": "Original watches presented with calm premium pacing.",
      "items": [
        "Original pieces",
        "Gift-ready options",
        "Collection inquiry"
      ]
    },
    {
      "id": "trust",
      "kicker": "Trust and Warranty",
      "title": "Service decisions feel safer when the proof is visible.",
      "items": [
        "Warranty messaging",
        "Location clarity",
        "Consultation route"
      ]
    }
  ],
  "layout": "minimal"
} as const;

export type BrandConfig = typeof brandConfig;
