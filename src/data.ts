export const NAV = [
  { label: "About", href: "#about" },
  { label: "Craft", href: "#craft" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const TRIO = [
  {
    index: "01",
    title: "The Barista",
    body: "Over seven years of dedication to the specialty coffee movement — honing hospitality, sensory skill, and craft behind the bar.",
  },
  {
    index: "02",
    title: "The Espresso",
    body: "A 25-second extraction, a golden crema, and a story in every sip.",
  },
  {
    index: "03",
    title: "The Bean",
    body: "Single-origin stories, roasted with intention and ground to order.",
  },
];

export interface Job {
  period: string;
  role: string;
  place: string;
  points: string[];
  skills: [string, number][];
}

export const EXPERIENCE: Job[] = [
  {
    period: "Dec 2024 — 2026",
    role: "Head Barista",
    place: "Feels Café · Jhamsikhel, Lalitpur",
    points: [
      "Maintained consistency in espresso quality and latte art across all shifts",
      "Managed inventory, stock ordering, and supplier coordination",
      "Trained new hires and interns on machines and grinders",
      "Calibrated grinders and espresso machines for consistency",
      "Built a positive, high-energy team culture under service pressure",
      "Created in-house graphics for promotions, seasonal offers, and social media",
      "Produced print-ready and digital assets for daily café operations",
    ],
    skills: [
      ["Extraction Consistency", 98],
      ["Workflow Mastery", 96],
    ],
  },
  {
    period: "2020 — 2024",
    role: "Barista",
    place: "Chaasuwa Restaurant · Satdobato, Lalitpur",
    points: [
      "Brewed coffees as per restaurant standards and menu specifications",
      "Served guests with attentive, professional service",
      "Set up bar stations and maintained sanitation across bar and dining areas",
      "Regularly cleaned and maintained espresso machine performance",
    ],
    skills: [
      ["Beverage Craft & Standard", 95],
      ["Bar Sanitation & Pace", 94],
    ],
  },
  {
    period: "2018 — 2020",
    role: "Barista",
    place: "Jhamel Beats · Jhamsikhel, Lalitpur",
    points: [
      "Worked as a barista within a medium-sized team",
      "Maintained a clean and well-organized bar environment",
      "Brewed and served coffee to guests with professionalism",
      "Expanded knowledge of different coffee types and techniques",
    ],
    skills: [
      ["Brewing Proficiency", 90],
      ["Guest Engagement", 92],
    ],
  },
];

export const STATS: [string, string][] = [
  ["7+", "Years behind the bar"],
  ["10K+", "Cups crafted"],
  ["50+", "Menu creations"],
  ["∞", "Passion for the craft"],
];

export const SERVICES = [
  {
    icon: "gauge",
    title: "Espresso Extraction",
    body: "Precision shots pulled at 9 bars, dialled in by dose, yield and time — every time.",
  },
  {
    icon: "art",
    title: "Latte Art",
    body: "From rosettas to swans, poured with a steady hand and a pitcher full of microfoam.",
  },
  {
    icon: "flask",
    title: "Manual Brewing",
    body: "V60, AeroPress, Chemex — slow coffee that honours the bean and the brewer.",
  },
  {
    icon: "menu",
    title: "Café Menu Design",
    body: "Menus that balance flavour, margin and mood — crafted to match the room.",
  },
  {
    icon: "users",
    title: "Barista Training",
    body: "Mentoring the next generation of pour-over pros, from tamp to latte art.",
  },
  {
    icon: "camera",
    title: "Culinary Photography",
    body: "Making every cup look as good as it tastes — styled, lit and shot in-house.",
  },
];

export const CREATIVE = [
  {
    icon: "menu",
    title: "Print-Ready Menu Design",
    body: "Café and restaurant menus designed for both print and digital — balancing flavour, margin, and brand mood.",
  },
  {
    icon: "pen",
    title: "Graphic Design",
    body: "Promotional graphics, seasonal campaign visuals, and social media content built for hospitality branding.",
  },
  {
    icon: "camera",
    title: "Photography",
    body: "Culinary and beverage photography — styled, lit, and shot to make every dish and drink look as good as it tastes.",
  },
  {
    icon: "video",
    title: "Videography",
    body: "Short-form video for social media — behind-the-bar clips, pour-overs, and brand storytelling content.",
  },
];

export const FREELANCE = [
  {
    title: "Barista Consulting",
    body: "Menu development, barista training programs, equipment calibration, and workflow optimization for café startups and established venues.",
  },
  {
    title: "Café & Menu Design",
    body: "Beautiful, print-ready menus and digital assets tailored to your brand's identity using Canva and layout design principles.",
  },
  {
    title: "Social Media Content",
    body: "Eye-catching promotional graphics, seasonal campaigns, and consistent visual branding for restaurant and café social channels.",
  },
  {
    title: "Barista Training Sessions",
    body: "One-on-one or group training for aspiring baristas — covering espresso theory, latte art, manual brewing, and customer interaction.",
  },
  {
    title: "Guest Barista & Events",
    body: "Available for pop-up coffee experiences, hospitality events, brand activations, and cupping workshops.",
  },
];

export const TRAINING = [
  {
    title: "Professional Barista Training",
    meta: "Mount Strada Barista Academy, Kathmandu · 4 months · Sept 2019 – Jan 2020",
  },
  {
    title: "Cook Training Course",
    meta: "Hands-on culinary fundamentals and kitchen operations",
  },
];

export const CERTS = [
  {
    title: "Barista Certification",
    meta: "Professional barista certification — espresso, milk, manual brewing",
  },
  {
    title: "College (Grade 12)",
    meta: "Grand Academy, Kumaripati, Lalitpur · 2019",
  },
  {
    title: "SEE (Grade 10)",
    meta: "Gyan Kunj English School, Satdobato, Lalitpur · 2017",
  },
];

export const MARQUEE = [
  "Specialty Coffee",
  "Latte Art",
  "Espresso",
  "Manual Brewing",
  "Menu Design",
  "Barista Training",
  "Café Branding",
  "Cupping",
];
