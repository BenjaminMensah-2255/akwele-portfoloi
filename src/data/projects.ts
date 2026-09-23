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
  presentation?: {
    canvaUrl: string;
    downloadUrl?: string;
    downloadLabel?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "wonderbuild-digital-marketing-strategy",
    title: "Wonderbuild Digital Strategy",
    client: "Wonderbuild",
    industry: "Digital Marketing",
    year: "2026",
    type: "Campaign concept, lead generation, brand visibility",
    objective:
      "WonderBuild is a Ghanaian manufacturer of innovative interlocking bricks designed to make construction stronger, more efficient and reliable. With a focus on quality, durability and dependable supply, WonderBuild provides practical building solutions for contractors, builders, property developers, architects and construction companies.",
    image: "/wonderbuild.jpeg",
    alt: "Strategic campaign planning desk with architectural imagery and reporting materials.",
    outcome: "Stronger customer pipeline",
    role: "Digital marketing strategy and campaign planning",
    challenge:
      "Wonderbuild needed a modern campaign concept that could make the brand easier to notice and easier for potential customers to understand.",
    strategy:
      "Focus the campaign around visibility, lead generation, and a clear customer journey from first impression to enquiry.",
    execution:
      "Developed a campaign direction with clear messaging, content priorities, and performance signals that could support customer pipeline growth.",
    channels: ["Social media", "Content", "Lead generation", "Analytics"],
    metrics: [
      { value: "24+", label: "Projects completed" },
      { value: "32", label: "Campaigns managed" },
      { value: "3+", label: "Years learning" },
      { value: "18", label: "Happy clients" },
    ],
    lessons:
      "A campaign becomes more useful when it connects visibility with a clear next step for the customer.",
  },
  {
    slug: "kodu-pads-eco-friendly-period-care",
    title: "Kodu Pads Eco-Friendly Period Care",
    client: "Kodu Pads",
    industry: "Health & Wellness",
    year: "2026",
    type: "Sustainable product storytelling and brand awareness",
    objective:
      "Introduce eco-friendly menstrual pads made from plantain and banana fibres with a clear comfort and sustainability message.",
    image: "/kodu.jpeg",
    alt: "Kodu Pads eco-friendly menstrual pad product visual.",
    outcome: "Natural period care awareness",
    role: "Product storytelling, campaign concept, and content direction",
    challenge:
      "Kodu Pads needed communication that could make a sensitive health product feel safe, comfortable, reliable, and easy to understand.",
    strategy:
      "Position the product around natural materials, Ghanaian innovation, environmental care, and everyday confidence for women and girls.",
    execution:
      "Built a campaign direction that explains the plantain and banana fibre benefit while keeping the message warm, practical, and respectful.",
    channels: ["Product storytelling", "Social media", "Awareness campaign", "Sustainability messaging"],
    metrics: [
      { value: "100%", label: "Plant-based focus" },
      { value: "3", label: "Core benefits" },
      { value: "1", label: "Ghanaian innovation" },
      { value: "24+", label: "Projects completed" },
    ],
    lessons:
      "Health and sustainability messages work best when the audience can understand the product benefit without losing the human feeling behind it.",
    presentation: {
      canvaUrl: "https://canva.link/px7xduccz55g31t",
      downloadUrl: "/downloads/kodu-pads-marketing-strategy.pptx",
      downloadLabel: "Download PPT",
    },
  },
  {
    slug: "pitch-deck-for-a-lego",
    title: "A Pitch Deck for a Lego",
    client: "LEGO",
    industry: "Client Research",
    year: "2026",
    type: "Client research assignment and Canva pitch deck",
    objective:
      "Improve LEGO's website interactivity and increase engagement through a clear client research presentation.",
    image: "/images/lego-pitch-deck.png",
    alt: "Canva pitch deck cover for a LEGO client research assignment.",
    outcome: "Website engagement pitch deck",
    role: "Client research, competitor analysis, and Canva presentation design",
    challenge:
      "The project needed to translate LEGO's digital engagement opportunity into a presentation that was simple to follow and useful for decision-making.",
    strategy:
      "Structure the deck around client business information, an industry report, key challenges, growth areas, and LEGO's position against key competitors.",
    execution:
      "Built the Canva deck around two ideas: interactive product exploration and a build-and-share community experience.",
    channels: ["Client research", "Industry report", "Competitor analysis", "Canva presentation"],
    metrics: [
      { value: "1", label: "Business need" },
      { value: "2", label: "Hypotheses" },
      { value: "4", label: "Research sections" },
      { value: "2026", label: "Presented" },
    ],
    lessons:
      "A stronger pitch connects research, competitors, and clear digital ideas to one practical business need.",
    presentation: {
      canvaUrl: "https://canva.link/1we0ow1uvnm14qc",
    },
  },
  {
    slug: "luxe-essentials-new-collection",
    title: "Luxe Essentials New Collection",
    client: "Luxe Essentials",
    industry: "Beauty",
    year: "2026",
    type: "Beauty campaign and launch presentation",
    objective:
      "Showcase a new cosmetics collection with a clean, elegant, and premium visual style.",
    image: "/images/beauty-launch.png",
    alt: "Premium beauty campaign flat-lay with cosmetics and abstract analytics paper.",
    outcome: "Premium collection campaign",
    role: "Campaign concept, content direction, visual positioning",
    challenge:
      "The collection needed a polished campaign idea that could feel premium while still being clear and accessible.",
    strategy:
      "Use refined beauty positioning, simple product storytelling, and consistent content cues to make the collection feel desirable.",
    execution:
      "Created a campaign concept around elegance, product confidence, and a clean visual language for launch communication.",
    channels: ["Instagram", "Content design", "Product storytelling", "Campaign copy"],
    metrics: [
      { value: "90%", label: "Social media marketing" },
      { value: "92%", label: "Content marketing" },
      { value: "88%", label: "SEO" },
      { value: "82%", label: "Copywriting" },
    ],
    lessons:
      "Beauty marketing works best when the product benefit and the visual feeling support the same story.",
  },
  {
    slug: "black-suits-me-best",
    title: "Black Suits Me Best",
    client: "Fashion Branding Concept",
    industry: "Fashion",
    year: "2026",
    type: "Fashion campaign and brand identity",
    objective:
      "Create a bold fashion campaign using a minimalist black-and-white aesthetic.",
    image: "/images/fashion-awareness.png",
    alt: "Editorial fashion campaign moodboard with burgundy fabric and monochrome contact sheets.",
    outcome: "Confident fashion identity",
    role: "Campaign concept and brand direction",
    challenge:
      "The project needed a strong, stylish identity that could communicate confidence without overcomplicating the visuals.",
    strategy:
      "Build the campaign around contrast, restraint, and a memorable fashion statement.",
    execution:
      "Developed a minimalist campaign direction using bold styling cues, controlled composition, and direct visual messaging.",
    channels: ["Fashion branding", "Social media", "Campaign visuals", "Copywriting"],
    metrics: [
      { value: "95%", label: "Communication" },
      { value: "84%", label: "Marketing research" },
      { value: "76%", label: "Canva" },
      { value: "80%", label: "Meta Ads" },
    ],
    lessons:
      "Minimal campaigns still need a clear point of view. Restraint works when the idea is strong enough.",
  },
  {
    slug: "cargo-logistic-shipping",
    title: "Cargo Logistic Shipping",
    client: "Logistics Brand Concept",
    industry: "Logistics",
    year: "2026",
    type: "Logo design and brand concept",
    objective:
      "Create a clean, professional logo design for a shipping and logistics brand.",
    image: "/images/commerce-growth.png",
    alt: "E-commerce and logistics planning table with packaging, report sheet, and phone.",
    outcome: "Reliable logistics identity",
    role: "Brand concept, visual direction, messaging",
    challenge:
      "The logistics concept needed to suggest movement, reliability, and global transportation in a professional way.",
    strategy:
      "Keep the visual language clean and practical, with emphasis on trust, clarity, and delivery confidence.",
    execution:
      "Developed a logistics brand concept that could support shipping communication and customer-facing service materials.",
    channels: ["Brand identity", "Logistics messaging", "Customer trust", "Service design"],
    metrics: [
      { value: "3+", label: "Years learning" },
      { value: "24+", label: "Projects completed" },
      { value: "18", label: "Happy clients" },
      { value: "32", label: "Campaigns managed" },
    ],
    lessons:
      "In logistics, clarity is part of the brand. Customers need to understand what is moving, when, and why they can trust the process.",
  },
  {
    slug: "healthy-radiant-skin-beauty-guide",
    title: "Skincare Routine Visual Story",
    client: "Skincare Concept",
    industry: "Beauty",
    year: "2026",
    type: "Skincare routine design and visual storytelling",
    objective:
      "Create a fresh, calming skincare routine design that guides viewers through each step in a clean, modern, and visually appealing way.",
    image: "/skin.jpeg",
    alt: "Clean skincare routine visual design with soft colours and beauty imagery.",
    outcome: "Inviting skincare visual story",
    role: "Visual concept, layout design, and skincare content direction",
    challenge:
      "The project needed to make a simple skincare concept feel easy to connect with while still being informative and polished.",
    strategy:
      "Use soft colours, balanced layouts, and engaging imagery to create a calm visual rhythm across each skincare step.",
    execution:
      "Designed a routine-based visual story that keeps the overall look clean, modern, and inviting for the audience.",
    channels: ["Blog content", "Beauty education", "Visual content", "SEO"],
    metrics: [
      { value: "88%", label: "SEO" },
      { value: "92%", label: "Content marketing" },
      { value: "82%", label: "Copywriting" },
      { value: "85%", label: "Google Analytics" },
    ],
    lessons:
      "A clear visual system can turn a simple skincare routine into a story that feels both useful and emotionally inviting.",
  },
  {
    slug: "smart-scale-fast",
    title: "Smart Scale Fast",
    client: "Promotional Graphic",
    industry: "Business",
    year: "2026",
    type: "Promotional graphic and campaign message",
    objective:
      "Encourage customers to unlock their potential, achieve goals, and take action through a clear layout.",
    image: "/images/commerce-growth.png",
    alt: "Business growth planning table with packaging, analytics printout, and campaign materials.",
    outcome: "Clear action-driven graphic",
    role: "Promotional concept, visual layout, campaign message",
    challenge:
      "The graphic needed to motivate action without becoming cluttered or confusing.",
    strategy:
      "Make the message direct, use a clear hierarchy, and keep the visual structure easy to scan.",
    execution:
      "Created an action-focused promotional direction that supports business growth messaging.",
    channels: ["Promotional design", "Social media", "Business messaging", "Content"],
    metrics: [
      { value: "95%", label: "Communication" },
      { value: "94%", label: "Problem solving" },
      { value: "84%", label: "Marketing research" },
      { value: "82%", label: "Copywriting" },
    ],
    lessons:
      "A growth message works better when the audience can immediately see what action to take next.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
