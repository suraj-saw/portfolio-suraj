export const projects = [
  {
    title: 'Survey Collection App',
    slug: 'survey-collection-app',
    tagline: "A sleek and modern survey collection app built with Flutter and Firebase.",
    overview: "A comprehensive survey collection application that allows users to collect and manage data from households, individuals, and trips.",
    features: [
      'Geo-mapped trip origins and destinations to planner-defined traffic zones.',
      'Real-time survey data aggregation with Firebase-based role authentication.',
      'Dynamic forms for household, individual, and trip-level data collection.',
    ],
    techStack: ['Flutter', 'Firebase', 'Geolocation APIs'],
    challenges: [
      'Implementing real-time data synchronization with Firebase.',
      'Designing an intuitive UI for complex survey forms.',
      'Ensuring accurate geolocation mapping for trip data.',
    ],
    learnings: [
      'Gained experience in Flutter for cross-platform mobile development.',
      'Enhanced understanding of Firebase for backend services.',
      'Improved skills in designing user-friendly interfaces for data collection.',
    ],
    feedback: false,
    links: {
      live: '',
      github: 'https://github.com/suraj-saw/RITES_SURVEY_APP',
    },
  },
  {
    title: 'Portfolio | Suraj Kumar Saw',
    slug: 'portfolio',
    tagline: 'A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.',
    overview: 'My personal portfolio is built to highlight my journey as a developer.',
    features: [
      'API to track and display profile views in real-time.',
      'Love count feature to allow visitors to express appreciation.',
      'Implemented server actions using the latest Next.js features.',
      'Dynamic project listing with slug-based routing.',
      'Mobile-responsive and optimized for all devices.',
    ],
    techStack: ['Next.js', 'ShadCN/UI', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
    challenges: [
      'Implementing real-time tracking for profile views efficiently.',
      'Designing and integrating a scalable database schema with Mongoose.',
      'Utilizing server actions for seamless interactions.',
    ],
    learnings: [
      'Deepened knowledge of Next.js server actions.',
      'Gained experience in designing interactive UI components.',
      'Enhanced understanding of MongoDB operations.',
    ],
    feedback: true,
    links: {
      live: '',
      github: 'https://github.com/suraj-saw/portfolio-suraj',
    },
  },
  {
    title: 'Notes & Bookmark Manager',
    slug: 'notes-bookmark-manager',
    tagline: 'A modern web app for managing notes and bookmarks with tagging and search.',
    overview: 'Notes & Bookmark Manager is a responsive web app that allows users to create, organize, and search their notes and bookmarks.',
    features: [
      'Built a full-stack web app for managing notes and bookmarks with tagging and search.',
      'Implemented JWT authentication, CRUD operations, favorites, and metadata scraping.',
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'Next.js'],
    challenges: [
      'Designing a secure authentication system with JWT.',
      'Implementing efficient search and tagging functionality.',
      'Integrating metadata scraping for bookmarks.',
    ],
    learnings: [
      'Gained experience in building full-stack applications with Node.js and Next.js.',
      'Enhanced understanding of authentication and security best practices.',
      'Improved skills in designing user-friendly interfaces for data management.',
    ],
    feedback: true,
    links: {
      live: '',
      github: 'https://github.com/suraj-saw/Personal-Notes-and-Bookmark-Manager',
    },
  },
  // {
  //   title: 'Plagiarism Detection App',
  //   slug: 'plagiarism-detection-app',
  //   tagline: 'A cross-platform plagiarism detection app using Flutter for UI and Flask for backend processing.',
  //   overview: 'Plagiarism Detection App is a web application that allows users to check for plagiarism in their text by comparing it against a reference database.',
  //   features: [
  //     'Implemented fast literal text matching using the KMP algorithm.',
  //     'Flask API serving reference texts with result visualization in Flutter UI.',
  //   ],
  //   techStack: ['Flutter', 'Flask', 'Python'],
  //   challenges: [
  //     'Implementing the KMP algorithm for efficient text matching.',
  //     'Designing a responsive UI in Flutter to display results clearly.',
  //     'Ensuring smooth communication between the Flutter frontend and Flask backend.',
  //   ],
  //   learnings: [
  //     'Gained experience in implementing algorithms for text processing.',
  //     'Enhanced skills in building cross-platform applications with Flutter.',
  //     'Improved understanding of API design and integration between frontend and backend.',
  //   ],
  //   feedback: true,
  //   links: {
  //     live: '',
  //     github: 'https://github.com/suraj-saw/Plagiarism-Detector-App',
  //   },
  // },

  {
    title: 'Plagiarism Detection App',
    slug: 'plagiarism-detection-app',
    tagline: 'A cross-platform plagiarism detection app using Flutter for UI and Node.js + Express for backend processing.',
    overview: 'A cross-platform mobile and web application that detects plagiarism in text by comparing it against a database of reference documents stored in Supabase. Uses KMP string matching and trigram indexing with Porter stemming for accurate detection.',
    features: [
      'Implemented fast literal text matching using the KMP algorithm with trigram indexing.',
      'Node.js + Express API with Porter stemming and stopword filtering for NLP preprocessing.',
      'Reference texts stored in Supabase (PostgreSQL) with inverted index for fast lookup.',
      'Visual circular progress indicator showing plagiarism percentage with color-coded results.',
      'View matched source links directly from the app.',
    ],
    techStack: ['Flutter', 'Node.js', 'Express', 'Supabase', 'Vercel'],
    challenges: [
      'Implementing the KMP algorithm combined with trigram indexing for efficient text matching.',
      'Designing a responsive UI in Flutter to display results clearly with color-coded verdicts.',
      'Ensuring smooth communication between the Flutter frontend and Node.js backend.',
      'Building a Porter stemmer and inverted index from scratch in JavaScript.',
    ],
    learnings: [
      'Gained experience in implementing string matching algorithms (KMP) for text processing.',
      'Enhanced skills in building cross-platform applications with Flutter.',
      'Improved understanding of NLP preprocessing: tokenization, stemming, and stopword filtering.',
      'Learned to design and deploy REST APIs with Express on Vercel serverless functions.',
    ],
    feedback: true,
    links: {
      live: 'https://plagiarism-detector-kmp.netlify.app/',
      github: 'https://github.com/suraj-saw/Plagiarism-Detector-App',
      apk: 'https://drive.google.com/file/d/1FMjFxBdD6dWATBTo1skobjfZMrlFvK1U/view?usp=drive_link',
    },
  },
];