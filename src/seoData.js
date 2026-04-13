// Update BASE_URL to match the live domain before deploying.
export const BASE_URL = 'https://www.professorbone.com'
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

  services: {
    title: 'Services — Governance-First AI Architecture | Professor Bone',
    description:
      'Governed AI architecture, multi-agent systems design, and agentic web apps. BCWA, Value Resolution Stack, RAG pipelines, and full-stack AI integration by Clarence Downs.',
    canonical: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Governance-First AI Systems',
      description:
        'AI systems where governance is structural: Behavioral Constraint Weighting Architecture, multi-agent coordination, and domain-bounded agentic applications.',
      provider: PERSON_REF,
      url: `${BASE_URL}/services`,
    },
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

  // ── Research paper sub-routes (/research/[id]) ──────────────────────────
  // Each paper is individually addressable and indexable.
  // Keys use slash notation matching the URL sub-path.

  'research/agent-state': {
    title: 'Agent State Framework — Professor Bone Lab · JHU',
    description:
      'Defines a formal state model for autonomous AI agents: belief states, goal hierarchies, action affordances, and operational mode transitions in governed multi-agent systems.',
    canonical: '/research/agent-state',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: 'Agent State in Agentic AI Systems',
      author: PERSON_REF,
      url: `${BASE_URL}/research/agent-state`,
      publisher: 'Professor Bone Lab',
    },
  },

  'research/orchestrator': {
    title: 'Orchestrator Epistemic Capture — Professor Bone Lab · JHU',
    description:
      'Examines the failure mode where an orchestrating agent\'s belief state becomes the primary constraint on downstream behavior, introducing systematic bias into multi-agent pipelines.',
    canonical: '/research/orchestrator',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: 'Orchestrator Epistemic Capture',
      author: PERSON_REF,
      url: `${BASE_URL}/research/orchestrator`,
      publisher: 'Professor Bone Lab',
    },
  },

  'research/cognitive': {
    title: 'Cognitive Horizon — Professor Bone Lab · JHU',
    description:
      'A formal framework for the temporal and contextual limits of AI agent reasoning: where knowledge degrades, where attention saturates, and how systems should behave at the edge of their cognitive horizon.',
    canonical: '/research/cognitive',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: 'Cognitive Horizon',
      author: PERSON_REF,
      url: `${BASE_URL}/research/cognitive`,
      publisher: 'Professor Bone Lab',
    },
  },

  'research/epistemic': {
    title: 'Epistemic Governance: Deep Research — Professor Bone Lab · JHU',
    description:
      'How epistemic governance principles embed into multi-agent AI architectures: maintaining accurate, bounded, and auditable belief states under uncertainty.',
    canonical: '/research/epistemic',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: 'Epistemic Governance: Deep Research',
      author: PERSON_REF,
      url: `${BASE_URL}/research/epistemic`,
      publisher: 'Professor Bone Lab',
    },
  },

  'research/ggib-1': {
    title: 'GGIB-M Part 1: Metacognition Evaluation Design Space — Professor Bone Lab',
    description:
      'Critical analysis of the metacognition evaluation design space for AI systems. Part 1 of the six-part Governed General Intelligence Benchmark specification.',
    canonical: '/research/ggib-1',
  },

  'research/ggib-2': {
    title: 'GGIB-M Part 2: Metacognition Task Family Design — Professor Bone Lab',
    description:
      'Task family design for the Governed General Intelligence Benchmark metacognition track. Part 2 of the GGIB-M specification.',
    canonical: '/research/ggib-2',
  },

  'research/ggib-3': {
    title: 'GGIB-M Part 3: Formal Scoring Framework — Professor Bone Lab',
    description:
      'Formal scoring methodology for the Governed General Intelligence Benchmark. Part 3 of the six-part GGIB-M specification.',
    canonical: '/research/ggib-3',
  },

  'research/ggib-4': {
    title: 'GGIB-M Part 4: Human Baseline Design — Professor Bone Lab',
    description:
      'Human baseline design and calibration for the GGIB-M benchmark. Part 4 of the six-part Governed General Intelligence Benchmark specification.',
    canonical: '/research/ggib-4',
  },

  'research/ggib-5': {
    title: 'GGIB-M Part 5: Contamination Resistance and Gaming Defenses — Professor Bone Lab',
    description:
      'Contamination resistance strategies and gaming defense mechanisms for the GGIB-M benchmark. Part 5 of the six-part specification.',
    canonical: '/research/ggib-5',
  },

  'research/ggib-6': {
    title: 'GGIB-M Part 6: Kaggle-Ready Deliverables — Professor Bone Lab',
    description:
      'Kaggle submission deliverables and packaging specification for the GGIB-M benchmark. Part 6 of the six-part Governed General Intelligence Benchmark.',
    canonical: '/research/ggib-6',
  },
}
