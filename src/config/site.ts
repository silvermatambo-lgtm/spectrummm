export const siteConfig = {
  // ===== CORE BRAND DETAILS: EDIT THESE FOR EACH CLIENT =====
  name: "CLIENT BUSINESS NAME",
  shortName: "CLIENT NAME",
  slogan: "Your Trusted Business Partner",
  eyebrow: "Professional • Reliable • Responsive",
  description: "Replace this with a short description of the client business and what it does.",
  seoTitle: "CLIENT BUSINESS NAME | Professional Services",
  seoDescription: "Replace this with a concise SEO description of the client business, services and service area.",
  phoneDisplay: "+27 00 000 0000",
  phoneTel: "+27000000000",
  whatsapp: "27000000000",
  email: "info@example.co.za",
  website: "www.example.co.za",
  country: "South Africa",

  // Keep the website logo and favicon visually matched when rebranding.
  // Replace this path with the new client logo path and update index.html favicon to the same file.
  logo: "/images/spectrum-logo.jpeg",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Keep at least one hero item. Three slides are recommended.
  hero: [
    {
      image: "/images/hero-funeral-1.jpg",
      alt: "Client business service",
      heading: "Professional Solutions for Your Business",
      phrases: ["Quality Service", "Reliable Support", "Fast Response"],
      description: "Replace this text with the client's main value proposition.",
      primary: { label: "View Services", href: "#services" },
      secondary: { label: "WhatsApp Us", href: "whatsapp" },
    },
    {
      image: "/images/hero-funeral-2.jpg",
      alt: "Client business team",
      heading: "Trusted Service You Can Depend On",
      phrases: ["Professional", "Affordable", "Responsive"],
      description: "Use this slide for a second strong selling point.",
      primary: { label: "Get a Quote", href: "#quote" },
      secondary: { label: "Call Now", href: "tel:+27000000000" },
    },
    {
      image: "/images/hero-funeral-3.jpg",
      alt: "Client business work",
      heading: "Built Around Your Needs",
      phrases: ["Customer Focused", "Experienced Team", "Nationwide Support"],
      description: "Use this slide for another important client message or service category.",
      primary: { label: "Enquire Now", href: "#contact" },
      secondary: { label: "Why Choose Us", href: "#why-us" },
    },
  ],

  about: {
    image: "/images/funeral-service-1.jpg",
    badge: "About Our Business",
    heading: "Professional Service. Real Results.",
    paragraphs: [
      "Replace this paragraph with the client's company introduction, experience and service focus.",
      "Use this paragraph for service areas, customer commitment, quality standards or another important business statement.",
    ],
    highlights: ["Professional Service", "Reliable Support", "Quality Work", "Customer Focused"],
  },

  servicesHeading: "Our Services",
  servicesIntro: "Replace this introduction with a short explanation of the client's main services.",
  services: [
    {
      title: "Service One",
      description: "Short description of the first service.",
      points: ["Feature or benefit one", "Feature or benefit two", "Feature or benefit three"],
    },
    {
      title: "Service Two",
      description: "Short description of the second service.",
      points: ["Feature or benefit one", "Feature or benefit two", "Feature or benefit three"],
    },
    {
      title: "Service Three",
      description: "Short description of the third service.",
      points: ["Feature or benefit one", "Feature or benefit two", "Feature or benefit three"],
    },
    {
      title: "Service Four",
      description: "Short description of the fourth service.",
      points: ["Feature or benefit one", "Feature or benefit two", "Feature or benefit three"],
    },
  ],

  whyHeading: "Why Choose Us",
  whyUs: [
    { title: "Professional", text: "Replace with a client-specific reason to choose the business." },
    { title: "Reliable", text: "Replace with a client-specific reason to choose the business." },
    { title: "Fast Response", text: "Replace with a client-specific reason to choose the business." },
    { title: "Quality Service", text: "Replace with a client-specific reason to choose the business." },
    { title: "Experienced Team", text: "Replace with a client-specific reason to choose the business." },
    { title: "Customer Focused", text: "Replace with a client-specific reason to choose the business." },
  ],

  process: [
    { title: "Contact Us", text: "Client contacts the business by WhatsApp, phone or contact form." },
    { title: "Tell Us What You Need", text: "Collect the client's service requirements and important details." },
    { title: "Get a Quote", text: "Provide the customer with the relevant quote or next step." },
    { title: "We Deliver", text: "Complete the service professionally and keep the customer informed." },
  ],

  galleryHeading: "Our Work",
  galleryIntro: "Replace these placeholder images with real client work, products, facilities or service images.",
  galleryCategories: ["Projects", "Services"],

  // The template is crash-safe even if future rebrands use fewer gallery items.
  gallery: [
    { url: "/images/hero-funeral-1.jpg", alt: "Client project one", category: "Projects" },
    { url: "/images/hero-funeral-2.jpg", alt: "Client project two", category: "Services" },
    { url: "/images/hero-funeral-3.jpg", alt: "Client project three", category: "Projects" },
    { url: "/images/funeral-service-1.jpg", alt: "Client project four", category: "Services" },
    { url: "/images/funeral-service-2.jpg", alt: "Client project five", category: "Projects" },
  ],

  quoteHeading: "Ready to Get Started?",
  quoteText: "Contact us today for a quote or more information about our services.",
  contactServices: ["Service One", "Service Two", "Service Three", "Service Four", "General Enquiry"],

  faqs: [
    { q: "What services do you offer?", a: "Replace this with the client's service summary." },
    { q: "Which areas do you serve?", a: "Replace this with the client's service areas." },
    { q: "How do I request a quote?", a: "Contact us by WhatsApp, phone or the website enquiry form." },
    { q: "How quickly do you respond?", a: "Replace this with the client's normal response time or availability." },
  ],

  chat: {
    assistantLabel: "Website assistant",
    quick: ["View Services", "Get a Quote", "Call Us", "WhatsApp Us", "General Enquiry"],
    steps: [
      "Welcome. How can we assist you today?",
      "What is your name?",
      "Which service are you interested in?",
      "Please tell us a little more about what you need.",
      "Thank you. We will continue with you on WhatsApp.",
    ],
  },

  footer: {
    copyrightYear: 2026,
    privacy: "Information submitted through this website is used only to respond to enquiries and provide requested services.",
    terms: "Service information, pricing, availability and terms may vary. Contact the business to confirm current details.",
    designerName: "WebDevPro",
    designerUrl: "https://www.webdevpro.co.za",
    designerPhoneDisplay: "+27 81 215 9792",
    designerPhoneTel: "+27812159792",
  },
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
