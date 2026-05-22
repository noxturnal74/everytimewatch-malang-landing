export const brandConfig = {
  "slug": "everytimewatch",
  "repo": "everytimewatch-malang-landing",
  "brandName": "Everytimewatch",
  "monogram": "EW",
  "layout": "watch",
  "category": "Watch boutique",
  "address": "Jl. Veteran Malang No.2, Penanggungan, Malang",
  "contact": "WhatsApp via Linktree",
  "hours": "Daily 10:00-21:00, consultation by appointment",
  "publicLink": "https://linktr.ee/everytimewatch",
  "instagram": "https://www.instagram.com/everytimewatch",
  "theme": {
    "bg": "#0e0b08",
    "ink": "#f8efe0",
    "muted": "#aa9a83",
    "accent": "#c8a34f",
    "accent2": "#efe3c2",
    "panel": "#17110c"
  },
  "dna": {
    "visual": "Cinematic horology editorial with asymmetrical whitespace, serif detail, and macro-inspired product surfaces.",
    "business": "Reduce trust friction around servicing, authenticity, warranty, and curated watch purchases.",
    "story": "Visitor moves from care promise to service process, authenticity guarantee, collection inquiry, and private consultation.",
    "emotion": "Quiet confidence, precision, ownership pride.",
    "type": "Cormorant-style serif display with restrained grotesk captions.",
    "motion": "Slow dial rotation, gentle text reveal, no aggressive transitions.",
    "layout": "Private atelier flow with ledger panels and inspection sequence.",
    "conversion": "Primary route is watch consultation; secondary route is collection inquiry.",
    "photo": "Macro dial details, gloved handling, strap textures, counter lighting, certificate close-ups.",
    "unique": "The interface behaves like a luxury service appointment, not a generic retail page."
  },
  "metrics": [
    "Original watch inquiry",
    "Warranty-led messaging",
    "Tokopedia path",
    "Private consultation"
  ],
  "packages": [
    {
      "name": "Battery Care",
      "price": "from Rp50k",
      "note": "battery replacement and inspection"
    },
    {
      "name": "Strap Refresh",
      "price": "from Rp85k",
      "note": "strap fitting and polish check"
    },
    {
      "name": "Full Check",
      "price": "by quote",
      "note": "condition review before repair"
    }
  ],
  "operations": [
    "Authenticity checklist",
    "Warranty explanation",
    "Service intake",
    "Payment options",
    "Reserved collection inquiry"
  ],
  "workflow": [
    "Send watch model",
    "Upload issue photo",
    "Receive care recommendation",
    "Confirm service slot",
    "Collect with warranty note"
  ],
  "proof": [
    "Public profile mentions service related watches and original watches.",
    "Payment and marketplace routes support buyer trust.",
    "Veteran Malang address anchors local credibility."
  ],
  "team": [
    "Watch consultant",
    "Service technician",
    "Collection advisor"
  ],
  "testimonials": [
    "Konsultasi jam terasa aman karena alurnya jelas.",
    "Penjelasan garansi bikin lebih yakin."
  ],
  "faqs": [
    "Do you handle battery replacement?",
    "How is authenticity explained?",
    "Can I reserve a watch before visiting?"
  ],
  "policies": [
    "Service quotation is confirmed before work begins.",
    "Warranty terms depend on service type.",
    "Product availability must be confirmed by admin."
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
  ]
} as const;

export type BrandConfig = typeof brandConfig;
