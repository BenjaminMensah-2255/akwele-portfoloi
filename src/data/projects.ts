export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  type: string;
  objective: string;
  image: string;
  alt: string;
  outcome: string;
  role: string;
  challenge: string;
  strategy: string;
  execution: string;
  channels: string[];
  metrics: { value: string; label: string }[];
  lessons: string;
};

export const projects: Project[] = [
  {
    slug: "fashion-brand-awareness",
    title: "Brand Awareness Campaign",
    client: "Independent Fashion Label",
    industry: "Fashion",
    year: "2026",
    type: "Social strategy, paid media, reporting",
    objective:
      "Increase qualified reach before a seasonal collection launch without diluting the brand's refined tone.",
    image: "/images/fashion-awareness.png",
    alt: "Editorial campaign moodboard with burgundy fabric and monochrome contact sheets.",
    outcome: "+184% engagement across launch content",
    role: "Digital strategy, content direction, Meta campaign planning",
    challenge:
      "The brand had strong visuals but inconsistent content architecture, making it difficult to build momentum before launches.",
    strategy:
      "Create a pre-launch rhythm around collection cues, founder perspective, and audience education, then use paid social to amplify the best-performing creative.",
    execution:
      "Built a four-week launch calendar, defined content territories, mapped audience segments, and reviewed creative performance twice weekly.",
    channels: ["Instagram", "Meta Ads", "Influencer amplification", "Email"],
    metrics: [
      { value: "+184%", label: "Engagement" },
      { value: "2.4M", label: "Impressions" },
      { value: "+61%", label: "Profile visits" },
      { value: "38%", label: "Lower CPM" },
    ],
    lessons:
      "The highest-performing creative was not the most polished asset. It was the clearest expression of the collection's point of view.",
  },
  {
    slug: "beauty-product-launch",
    title: "Product Launch Strategy",
    client: "Beauty Brand",
    industry: "Beauty",
    year: "2025",
    type: "Launch strategy, content system, performance analysis",
    objective:
      "Introduce a new skincare product with clear positioning and measurable demand signals before retail expansion.",
    image: "/images/beauty-launch.png",
    alt: "Premium beauty campaign flat-lay with cosmetic products and abstract analytics paper.",
    outcome: "3.7x ROAS during launch period",
    role: "Launch planning, message strategy, analytics",
    challenge:
      "The product had a loyal base but needed clearer reasons to choose it in a crowded category.",
    strategy:
      "Build a proof-led launch narrative around routine, texture, and outcomes, supported by sequenced paid creative and post-launch retargeting.",
    execution:
      "Defined the message hierarchy, wrote ad angles, coordinated creator usage rights, and built weekly reporting for creative decisions.",
    channels: ["Meta Ads", "Google Search", "Creators", "Email"],
    metrics: [
      { value: "3.7x", label: "ROAS" },
      { value: "+96%", label: "Add-to-cart rate" },
      { value: "-28%", label: "CPC" },
      { value: "41%", label: "Returning buyers" },
    ],
    lessons:
      "Specific product education outperformed broad beauty language, especially when paired with creator assets that felt close to real routines.",
  },
  {
    slug: "hospitality-lead-generation",
    title: "Lead Generation Campaign",
    client: "Boutique Hospitality Group",
    industry: "Hospitality",
    year: "2025",
    type: "Lead generation, landing flow, paid search",
    objective:
      "Generate qualified event and booking enquiries while protecting the premium perception of the property.",
    image: "/images/hospitality-leads.png",
    alt: "Sophisticated hospitality planning desk with architectural images, laptop, and sunlight.",
    outcome: "-32% cost per qualified lead",
    role: "Campaign strategy, paid search, reporting",
    challenge:
      "Previous campaigns drove enquiries, but too many were low-fit and required time-consuming manual follow-up.",
    strategy:
      "Refine offer framing, separate audience intent by campaign group, and tighten the lead form around qualifying details.",
    execution:
      "Rebuilt campaign structure, revised landing copy, introduced qualification fields, and tracked lead quality with weekly source review.",
    channels: ["Google Ads", "Meta Ads", "Landing page", "CRM"],
    metrics: [
      { value: "-32%", label: "Cost per lead" },
      { value: "+47%", label: "Qualified enquiries" },
      { value: "18%", label: "Booking lift" },
      { value: "5.2x", label: "Pipeline return" },
    ],
    lessons:
      "Higher-quality demand came from clearer disqualification. The campaign improved when it stopped trying to appeal to everyone.",
  },
  {
    slug: "commerce-paid-social-growth",
    title: "Paid Social Growth Campaign",
    client: "E-commerce Brand",
    industry: "E-commerce",
    year: "2024",
    type: "Paid social, retention content, creative testing",
    objective:
      "Improve acquisition efficiency for a growing online store while identifying repeatable creative signals.",
    image: "/images/commerce-growth.png",
    alt: "E-commerce campaign table with premium packaging, abstract reporting sheet, and phone.",
    outcome: "+73% revenue from paid social",
    role: "Media planning, creative testing, analytics",
    challenge:
      "The account had enough spend to learn, but campaign structure and creative testing were too scattered to produce reliable decisions.",
    strategy:
      "Simplify campaign architecture, isolate creative variables, and connect acquisition messaging with retention-oriented content.",
    execution:
      "Rebuilt the testing framework, created weekly creative reads, adjusted spend toward winning concepts, and shared concise decision notes.",
    channels: ["Meta Ads", "Email", "Landing pages", "Analytics"],
    metrics: [
      { value: "+73%", label: "Revenue" },
      { value: "2.9x", label: "ROAS" },
      { value: "-21%", label: "CPA" },
      { value: "+54%", label: "Repeat orders" },
    ],
    lessons:
      "Creative volume mattered less than creative clarity. The winning ads made the product's use case obvious in the first few seconds.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
