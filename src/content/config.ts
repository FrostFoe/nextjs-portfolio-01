export const siteConfig = {
  title: "FrostFoe | Crafting Digital Cosmos 🌌",
  description:
    "Explore the cosmos of UI/UX design, front-end development, and modern web technologies with FrostFoe. A journey through insightful articles and tutorials. 🚀",
  url: "https://ff-nextjs-portfolio-01.netlify.app/",
  keywords: [
    "UI/UX Design",
    "Web Development",
    "React",
    "Next.js",
    "Framer Motion",
    "Design Systems",
    "Creative Development",
  ],

  author: {
    name: "FrostFoe",
    avatar:
      "https://raw.githubusercontent.com/FrostFoe/localhost/refs/heads/main/images/logo.png",
    bio: "UI/UX designer with 8+ years of experience, passionate about creating user-centered designs and sharing insights. ✨",
    email: "frostfoe@gmail.com",
    social: [
      { name: "LinkedIn", url: "#", icon: "Linkedin" },
      { name: "Behance", url: "#", icon: "Palette" },
      { name: "Twitter", url: "#", icon: "Twitter" },
      { name: "Dribbble", url: "#", icon: "Dribbble" },
    ],
  },

  navLinks: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About Me", href: "/about" },
    { name: "Showcase", href: "/showcase" },
    { name: "Contact", href: "/contact" },
  ],

  home: {
    hero: {
      title: "Crafting Digital Cosmos, One Pixel at a Time. 🪐",
      description:
        "Welcome to my digital playground. I'm FrostFoe, a designer and developer obsessed with building delightful, human-centered experiences that feel out of this world. 👽",
      buttons: {
        primary: { text: "My Work", url: "/showcase" },
        secondary: { text: "Subscribe", url: "/#newsletter" },
      },
      image: {
        src: "https://img-c.udemycdn.com/course/750x422/4486772_7ce3_7.jpg",
        alt: "Hero Image",
        hint: "abstract design illustration",
      },
    },
    latestArticles: {
      title: "Latest Dispatches 📡",
      description:
        "A collection of my latest thoughts on design, tech, and everything in between, transmitted from the digital frontier.",
    },
  },

  blog: {
    sharePostText: "Share this post 🚀",
    shareLinks: [
      { name: "LinkedIn", icon: "Linkedin" },
      { name: "Twitter", icon: "Twitter" },
      { name: "Facebook", icon: "Facebook" },
    ],
  },

  about: {
    intro:
      "Crafting digital experiences that transform businesses and delight users. ✨ Specializing in user-centered design with 8+ years of expertise in creating intuitive interfaces.",
    aboutSection: {
      title: "About Me",
      paragraphs: [
        "I'm a passionate UI/UX designer dedicated to creating meaningful digital experiences. With expertise in user research, wireframing, prototyping, and visual design, I help businesses solve complex problems through thoughtful design solutions.",
        "My approach combines data-driven insights with creative innovation to deliver products that not only look beautiful but also drive business results and user satisfaction.",
      ],
      buttonText: "Start Collaborating!",
      image: {
        src: "https://img-c.udemycdn.com/course/750x422/4486772_7ce3_7.jpg",
        alt: "Cute robot mascot",
        hint: "cute robot street",
      },
    },
    servicesSection: {
      title: "How I Can Help 🧑‍🚀",
    },
    services: [
      {
        icon: "Laptop",
        title: "UI/UX Design",
        description:
          "Creating intuitive interfaces and seamless user experiences that convert visitors into loyal customers.",
        items: [
          "User Research & Analysis",
          "Wireframing & Prototyping",
          "Visual Design & Branding",
        ],
      },
      {
        icon: "Smartphone",
        title: "Mobile App Design",
        description:
          "Designing native and cross-platform mobile applications that provide exceptional user experiences.",
        items: [
          "iOS & Android Design",
          "Interactive Prototypes",
          "App Store Optimization",
        ],
      },
      {
        icon: "Palette",
        title: "Brand Identity",
        description:
          "Developing cohesive brand identities that resonate with your target audience and stand out in the market.",
        items: [
          "Logo & Brand Design",
          "Brand Guidelines",
          "Marketing Materials",
        ],
      },
    ],
    faqSection: {
      title: "Frequently Asked Questions ❓",
      description:
        "Get answers to common questions about my design process, timeline, and collaboration approach.",
      buttonText: "Ask a Question",
    },
    faqs: [
      {
        question: "What's your design process like?",
        answer:
          "My process is collaborative and iterative, centered around the user. It starts with discovery and research, moves to ideation and wireframing, then prototyping and user testing, and finally, high-fidelity design and handoff. I ensure feedback is incorporated at every stage.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary greatly depending on the scope and complexity. A small project might take a few weeks, while a full app design from scratch could take several months. After our initial discussion, I can provide a more accurate estimate.",
      },
      {
        question: "Do you work with development teams?",
        answer:
          "Absolutely. I have extensive experience collaborating with developers. I provide detailed design specifications, assets, and prototypes to ensure a smooth handoff. I'm also available for support throughout the development phase to ensure pixel-perfect implementation.",
      },
      {
        question: "What tools do you use?",
        answer:
          "I'm proficient in a wide range of design tools. My primary tools are Figma for UI/UX design and prototyping, Adobe Illustrator for vector graphics, and Protopie for advanced animations. I'm also adaptable and can work with your team's preferred tools.",
      },
    ],
  },

  contact: {
    title: "Get in Touch 👋",
    description:
      "Have a question, project idea, or just want to say hi? Fill out the form below, and I'll get back to you as soon as possible.",
    form: {
      buttonText: "Send Message",
    },
    followUpText:
      "You can also reach me via email or follow me on social media for updates.",
  },

  footer: {
    newsletter: {
      title: "Join the Cosmos 🌌",
      description:
        "Get the latest design tips, tutorials, and insights delivered straight to your inbox. No spam, just stardust. ✨",
      buttonText: "Subscribe",
    },
    links: [
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/privacy" },
      { name: "Docs", url: "/docs" },
      { name: "404", url: "/404" },
    ],
    copyright: "© {year} FrostFoe. All rights reserved.",
  },

  termsPage: {
    title: "Terms of Service 📜",
    description: "Our terms of service.",
    content: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website’s particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
      },
      {
        heading: "2. Disclaimer of Warranties",
        body: 'The site is provided "as is". My company and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement.',
      },
      {
        heading: "3. Limitation of Liability",
        body: "In no event will my company, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services.",
      },
    ],
  },

  privacyPage: {
    title: "Privacy Policy 🛡️",
    description: "How we handle your data.",
    content: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly to us. For example, we collect information when you subscribe to a newsletter, fill out a form, or otherwise communicate with us. The types of information we may collect include your name, email address, and any other information you choose to provide.",
      },
      {
        heading: "How We Use Information",
        body: "We may use the information we collect to: provide, maintain, and improve our services; send you technical notices, updates, security alerts, and support and administrative messages; respond to your comments, questions, and requests and provide customer service; and communicate with you about products, services, offers, promotions, rewards, and events offered by us.",
      },
    ],
  },

  docsPage: {
    title: "Documentation 📄",
    description: "Documentation for the site.",
    content: [
      {
        heading: "Getting Started",
        body: "This website is built with Next.js, Tailwind CSS, and MDX. It serves as a personal blog and portfolio. You can find all the code on GitHub.",
      },
      {
        heading: "Content Management",
        body: "All page content and blog posts are managed through files in the `/src/content` directory. The main site configuration is in `config.ts`, and blog posts are `.mdx` files in the `blog` subdirectory.",
      },
    ],
  },

  notFoundPage: {
    title: "404 - Lost in Space 👽",
    description:
      "Oops! Looks like you've ventured into an uncharted quadrant. 🧭",
    buttonText: "Go Back Home",
  },
};
