// Update BASE_URL to match the live domain before deploying.
export const BASE_URL = 'https://professorbone.com'
export const DEFAULT_OG_IMAGE = `${BASE_URL}/professor-bone-avatar.png`

const PERSON_REF = { '@id': `${BASE_URL}/#person` }

const PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Clarence Downs',
  alternateName: 'Professor Bone',
  jobTitle: 'AI Systems Architect',
  url: BASE_URL,
  image: `${BASE_URL}/professor-bone-avatar.png`,
  sameAs: [
    'https://github.com/ProfessorBone',
    'https://www.linkedin.com/in/clarencedowns/',
  ],
}

export const SEO_ROUTES = {
  home: {
    title: 'Professor Bone — AI Systems Architect & Logistics Technologist',
    description:
      'Clarence Downs designs agentic AI systems grounded in real logistics and field operations experience. Governed multi-agent infrastructure, research, and education from Professor Bone Lab.',
    canonical: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: 'Professor Bone',
          url: BASE_URL,
          author: PERSON_REF,
        },
        PERSON_SCHEMA,
      ],
    },
  },

  about: {
    title: 'About Clarence Downs — Professor Bone',
    description:
      'From UPS management to agentic AI engineering: the professional path of Clarence Downs, aka Professor Bone. AI Systems Architect, JHU Agentic AI Certificate, Anthropic Claude Certified Architect.',
    canonical: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: 'About Clarence Downs',
      url: `${BASE_URL}/about`,
      mainEntity: PERSON_REF,
    },
  },

  projects: {
    title: 'Projects — Agentic AI Systems | Professor Bone',
    description:
      'Production-grade agentic AI infrastructure built on real logistics context. CONTINUUM: a governed 8-agent control system. FREIGHTMIND: a two-agent field operations system.',
    canonical: '/projects',
  },

  research: {
    title: 'Research — Agentic AI Papers & Frameworks | Professor Bone Lab',
    description:
      'Original research on agentic AI architecture, epistemic governance, cognitive limits, and multi-agent evaluation. GGIB-M benchmark and peer papers from Professor Bone Lab at JHU.',
    canonical: '/research',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Research — Agentic AI Papers & Frameworks',
      url: `${BASE_URL}/research`,
      author: PERSON_REF,
    },
  },

  education: {
    title: 'Education & Credentials — Clarence Downs | Professor Bone',
    description:
      'B.S. Information Technology, JHU Agentic AI Certificate, Anthropic Claude Certified Architect. A non-traditional path built on real systems and serious study.',
    canonical: '/education',
  },

  academy: {
    title: "Unc's AI Academy — Practical AI Education | Professor Bone",
    description:
      "Unc's AI Academy is a practical AI education initiative for adult learners and career changers. Four build tiers: Foundations, Builder, Systems, and Architect.",
    canonical: '/academy',
  },

  contact: {
    title: "Let's Talk — AI Engineering, Research & Collaboration | Professor Bone",
    description:
      'Reach out to Clarence Downs for AI engineering roles, research collaboration, speaking, or consulting. Open to serious opportunities.',
    canonical: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: "Let's Talk",
      url: `${BASE_URL}/contact`,
    },
  },

  continuum: {
    title: 'CONTINUUM — Governed Multi-Agent AI Control System | Professor Bone',
    description:
      'CONTINUUM is a governed 8-agent AI control system built by Clarence Downs. 46 architectural decisions, 23 failure injection tests, 100 knowledge graph entries, zero cloud dependencies.',
    canonical: '/continuum',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CONTINUUM',
      description:
        'A governed multi-agent AI control system with 8 specialized agents, 46 architectural decision records, and zero cloud dependencies.',
      author: PERSON_REF,
      url: `${BASE_URL}/continuum`,
      applicationCategory: 'Artificial Intelligence',
    },
  },

  freightmind: {
    title: 'FREIGHTMIND — Multi-Agent Field Operations System | Professor Bone',
    description:
      'FREIGHTMIND pairs two specialized agents for real-time logistics operations. Jack Crawford commands; Will Graham executes. Built from years of field experience in freight management.',
    canonical: '/freightmind',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'FREIGHTMIND',
      description:
        'A two-agent logistics field operations system built for real-world trucking and freight management.',
      author: PERSON_REF,
      url: `${BASE_URL}/freightmind`,
      applicationCategory: 'Artificial Intelligence',
    },
  },

  buildguide: {
    title: 'AI Agent Build Guide — Field Manual for Agentic AI | Professor Bone',
    description:
      'A 172-page step-by-step field manual for building AI agents across four tiers of increasing power. Written by Clarence Downs covering 9 AGI phases and 7 event classes.',
    canonical: '/buildguide',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'AI Agent Build Guide',
      author: PERSON_REF,
      url: `${BASE_URL}/buildguide`,
      description:
        'A field manual for building AI agents from Basic to Kick-Ass across four tiers of increasing power.',
      numberOfPages: 172,
    },
  },
}
