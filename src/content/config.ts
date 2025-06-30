export const siteConfig = {
  title: 'Andrew M. | Crafting the Future of UI/UX Design',
  description: 'A blog by Andrew Mitchell about UI/UX design, tutorials, and insights.',
  
  author: {
    name: 'Andrew Mitchell',
    avatar: 'https://placehold.co/128x128.png',
    bio: 'UI/UX designer with 8+ years of experience, passionate about creating user-centered designs and sharing insights.',
    email: 'andrew.mitchell@example.com',
    social: [
      { name: 'LinkedIn', url: '#', icon: 'group_work' },
      { name: 'Behance', url: '#', icon: 'palette' },
      { name: 'Twitter', url: '#', icon: 'gesture' },
      { name: 'Dribbble', url: '#', icon: 'sports_basketball' },
    ],
  },
  
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],

  home: {
    hero: {
      title: 'Code, Pixels, and a Dash of Magic.',
      description: "Welcome to my digital playground. I'm Andrew, a designer and developer obsessed with building delightful, human-centered experiences.",
      buttons: {
        primary: { text: 'My Work', url: '#' },
        secondary: { text: 'Subscribe', url: '#' },
      },
      image: {
        src: 'https://placehold.co/600x400.png',
        alt: 'Hero Image',
        hint: 'abstract design illustration',
      }
    },
    latestArticles: {
      title: 'Latest Articles',
      description: 'A collection of my latest thoughts on design, tech, and everything in between.',
    }
  },

  blog: {
    sharePostText: 'Share this post',
    shareLinks: [
      { name: 'LinkedIn', url: '#', icon: 'group_work' },
      { name: 'Twitter', url: '#', icon: 'gesture' },
      { name: 'Facebook', url: '#', icon: 'facebook' },
    ]
  },

  about: {
    intro: 'Crafting digital experiences that transform businesses and delight users. Specializing in user-centered design with 8+ years of expertise in creating intuitive interfaces.',
    aboutSection: {
      title: 'About Me',
      paragraphs: [
        "I'm a passionate UI/UX designer dedicated to creating meaningful digital experiences. With expertise in user research, wireframing, prototyping, and visual design, I help businesses solve complex problems through thoughtful design solutions.",
        "My approach combines data-driven insights with creative innovation to deliver products that not only look beautiful but also drive business results and user satisfaction."
      ],
      buttonText: 'Start Collaborating!',
      image: {
        src: 'https://placehold.co/600x400.png',
        alt: 'Cute robot mascot',
        hint: 'cute robot street',
      }
    },
    servicesSection: {
        title: 'How I Can Help'
    },
    services: [
      {
        icon: 'devices',
        title: 'UI/UX Design',
        description: 'Creating intuitive interfaces and seamless user experiences that convert visitors into loyal customers.',
        items: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design & Branding'],
      },
      {
        icon: 'smartphone',
        title: 'Mobile App Design',
        description: 'Designing native and cross-platform mobile applications that provide exceptional user experiences.',
        items: ['iOS & Android Design', 'Interactive Prototypes', 'App Store Optimization'],
      },
      {
        icon: 'palette',
        title: 'Brand Identity',
        description: 'Developing cohesive brand identities that resonate with your target audience and stand out in the market.',
        items: ['Logo & Brand Design', 'Brand Guidelines', 'Marketing Materials'],
      },
    ],
    faqSection: {
        title: 'Frequently Asked Questions',
        description: 'Get answers to common questions about my design process, timeline, and collaboration approach.',
        buttonText: 'Ask a Question'
    },
    faqs: [
      {
        question: "What's your design process like?",
        answer: "My process is collaborative and iterative, centered around the user. It starts with discovery and research, moves to ideation and wireframing, then prototyping and user testing, and finally, high-fidelity design and handoff. I ensure feedback is incorporated at every stage.",
      },
      {
        question: 'How long does a typical project take?',
        answer: "Project timelines vary greatly depending on the scope and complexity. A small project might take a few weeks, while a full app design from scratch could take several months. After our initial discussion, I can provide a more accurate estimate.",
      },
      {
        question: 'Do you work with development teams?',
        answer: "Absolutely. I have extensive experience collaborating with developers. I provide detailed design specifications, assets, and prototypes to ensure a smooth handoff. I'm also available for support throughout the development phase to ensure pixel-perfect implementation.",
      },
      {
        question: 'What tools do you use?',
        answer: "I'm proficient in a wide range of design tools. My primary tools are Figma for UI/UX design and prototyping, Adobe Illustrator for vector graphics, and Protopie for advanced animations. I'm also adaptable and can work with your team's preferred tools.",
      },
    ]
  },

  contact: {
    title: 'Get in Touch',
    description: "Have a question, project idea, or just want to say hi? Fill out the form below, and I'll get back to you as soon as possible.",
    form: {
        buttonText: 'Send Message'
    },
    followUpText: 'You can also reach me via email or follow me on social media for updates.'
  },

  footer: {
    newsletter: {
        title: 'Join Newsletter',
        description: 'Get the latest design tips, tutorials, and insights delivered straight to your inbox every week.',
        buttonText: 'Subscribe'
    },
    links: [
        { name: 'Terms', url: '#' },
        { name: 'Privacy', url: '#' },
        { name: 'Docs', url: '#' },
        { name: '404', url: '#' },
    ],
    copyright: '© {year} Andrew Mitchell. All rights reserved.'
  }
};
