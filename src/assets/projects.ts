export type Project = {
  id: string;
  title: string;
  role: "Full Stack" | "Frontend";
  description: string;

  frontendTech: string[];
  backendTech?: string[];

  scope?: {
    modules: string[];
    adminCapabilities: string[];
  };

  features: {
    title: string;
    description: string;
  }[];

  engineeringHighlights?: {
    title: string;
    problem: string;
    solution: string;
    outcome: string;
  }[];

  bannerImage: string;
  screenshots: string[];

  liveUrl?: string;
  repoUrl?: {
    frontend?: string;
    backend?: string;
  };

  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "foodhub",
    title: "FoodHub",
    role: "Full Stack",
    description:
      "A comprehensive food ordering ecosystem featuring a Next.js-powered storefront and a robust Node.js/Express server. The platform serves three distinct user roles—Customers, Providers, and Admins—with specialized workflows for meal discovery, restaurant management, and system-wide oversight.",

    frontendTech: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "TanStack Form",
      "React Context API",
    ],

    backendTech: [
      "Node.js",
      "Express.js (v5)",
      "Prisma ORM",
      "PostgreSQL",
      "Zod",
      "Better Auth",
      "Nodemailer",
    ],

    scope: {
      modules: [
        "Customer Meal Discovery & Ordering",
        "Provider Restaurant & Menu Management",
        "Admin User & Category Oversight",
        "Role-Based Authentication & Authorization",
        "Real-time Review & Rating System",
        "Global Cart State Management",
      ],
      adminCapabilities: [
        "User lifecycle management (List, Status Updates)",
        "System-wide category CRUD (Emoji & Image support)",
        "Global order monitoring and status tracking",
        "Centralized error logging and audit trails",
      ],
    },

    features: [
      {
        title: "Three-Way Role Ecosystem",
        description:
          "Engineered distinct workflows for Customers (ordering), Providers (merchant tools), and Admins (governance), all secured via role-based dashboard routing.",
      },
      {
        title: "Smart Cart Logic",
        description:
          "Developed a global cart context featuring provider-conflict handling (preventing mixed-restaurant orders) and persistent local storage synchronization.",
      },
      {
        title: "Automated Image Pipeline",
        description:
          "Created a reusable ImageUpload module utilizing a ref-based interface to handle client-side validation, previews, and direct Cloudinary uploads via custom API routes.",
      },
      {
        title: "Dynamic Review System",
        description:
          "Built a modular review and star-rating engine that calculates average ratings and total review counts in real-time for each meal.",
      },
      {
        title: "Enterprise Middleware Suite",
        description:
          "Architected a standardized backend utility layer including Prisma-aware global error handling, pagination helpers, and structured API response wrappers.",
      },
    ],

    engineeringHighlights: [
      {
        title: "Reusable Module Architecture",
        problem:
          "Building complex features like image uploading and pagination repeatedly across different dashboards leads to code bloating and inconsistency.",
        solution:
          "Abstracted core functionalities into atomic UI primitives and common modules (like ConfirmationDialog and PaginationControls) using Tailwind-merge and Class Variance Authority (CVA).",
        outcome:
          "Significantly reduced development time for new features while ensuring a 100% consistent UX across Customer, Provider, and Admin interfaces.",
      },
    ],

    bannerImage: "/projects/foodhub.webp",

    screenshots: [
      "/projects/foodhub-homepage.webp",
      "/projects/foodhub-browse.webp",
      "/projects/foodhub-cart.webp",
      "/projects/foodhub-provider-dashboard.webp",
      "/projects/foodhub-admin-panel.webp",
    ],

    liveUrl: "https://foodhub-client-pi.vercel.app/",
    repoUrl: {
      frontend: "https://github.com/ar-saad/foodhub-client",
      backend: "https://github.com/ar-saad/foodhub-server",
    },

    featured: true,
  },
  {
    id: "startup-base",
    title: "Startup Base",
    role: "Full Stack",
    description:
      "The first comprehensive digital databank and 'Yellow Pages' for the Bangladesh startup ecosystem. Designed to foster a healthy startup culture, it connects startups with investors, accelerators, and service providers to help reach the national goal of 50 unicorns by 2041.",

    frontendTech: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "React Hook Form",
    ],

    backendTech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],

    scope: {
      modules: [
        "Startup Directory",
        "Investor & VC Portal",
        "Accelerator & Incubator Listing",
        "Co-Working Space Finder",
        "News & Events Hub",
        "Knowledgebase",
        "Moderator Control Panel",
        "Admin Approval System",
      ],
      adminCapabilities: [
        "User role management (Admin, Moderator, End User)",
        "Approval/Disapproval of company registration requests",
        "Claim request verification and ownership transfer",
        "Real-time News and Knowledgebase content management",
        "Global system oversight and feedback monitoring",
      ],
    },

    features: [
      {
        title: "Multi-Tiered User Roles",
        description:
          "Implemented a sophisticated RBAC (Role-Based Access Control) system supporting Admin, Moderator, and five distinct End-User types including Startups and VCs.",
      },
      {
        title: "Business Claim System",
        description:
          "Developed a secure document-upload workflow allowing legitimate business owners to claim existing profiles by submitting trade licenses and incorporation papers for admin review.",
      },
      {
        title: "Advanced Filtering & Search",
        description:
          "Built a high-performance directory allowing users to search and filter entities by industry sector, name, and location for quick networking.",
      },
      {
        title: "Customizable User Dashboards",
        description:
          "Created dynamic dashboards that adapt features and registration forms based on the specific user type, such as showing 'Office Packages' to Co-Working providers.",
      },
      {
        title: "Real-Time Content Management",
        description:
          "Integrated a full CRUD system for news, events, and educational blog posts, enabling moderators to keep the ecosystem updated in real-time.",
      },
    ],

    engineeringHighlights: [
      {
        title: "Scalable NoSQL Architecture",
        problem:
          "The startup ecosystem involves highly diverse and unstructured data points for different entities (Investors vs. Co-working spaces) that a rigid schema couldn't handle.",
        solution:
          "Utilized MongoDB with Mongoose to create flexible data models that accommodate varying attributes while maintaining data consistency across user roles.",
        outcome:
          "Enabled a seamless experience where different entity types coexist in the same database without performance bottlenecks or schema conflicts.",
      },
    ],

    bannerImage: "/projects/startup-base.webp",

    screenshots: [
      "/projects/startup-base-1.webp",
      "/projects/startup-base-2.webp",
      "/projects/startup-base-3.webp",
      "/projects/startup-base-4.webp",
      "/projects/startup-base-5.webp",
    ],

    liveUrl: "https://startupbase.info",

    featured: true,
  },
  {
    id: "smart-school-bus",
    title: "Smart School Bus",
    role: "Frontend",
    description:
      "A large-scale school transportation management platform used to monitor student travel, vehicle movement, payments, and safety in real time. Built for parents, school authorities, and administrators with a strong focus on reliability, performance, and usability.",

    frontendTech: [
      "React",
      "JavaScript",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "React Icons",
      "React Hook Form",
      "Recharts",
    ],

    scope: {
      modules: [
        "Parent Portal",
        "Admin Dashboard",
        "Student Management",
        "Vehicle & Route Management",
        "Live GPS Tracking",
        "Real-Time Video Monitoring",
        "Attendance System",
        "Online Payments",
        "Reports & Analytics",
      ],
      adminCapabilities: [
        "Advanced filtering across all datasets",
        "Statistical dashboards with aggregated metrics",
        "Exportable reports",
        "Multi-vehicle live monitoring",
        "Centralized system configuration",
      ],
    },

    features: [
      {
        title: "Real-Time Vehicle Tracking",
        description:
          "Integrated Google Maps to display live bus locations, routes, and movement status, providing transparency and peace of mind for parents and administrators.",
      },
      {
        title: "Live Video Streaming",
        description:
          "Enabled real-time access to multiple onboard camera feeds using MediaMTX, allowing authorized users to monitor student safety during transit.",
      },
      {
        title: "Photo-Based Attendance System",
        description:
          "Implemented smart card attendance where tapping captures a student photo instantly, allowing parents to visually confirm boarding and drop-off events.",
      },
      {
        title: "Secure Online Payments",
        description:
          "Integrated in-app payments with transaction tracking, enabling seamless fee collection and reducing reliance on manual payment processes.",
      },
      {
        title: "Comprehensive Admin Dashboard",
        description:
          "Designed an organized admin panel with detailed statistics, filters, and management tools to oversee vehicles, students, travels, and financial data.",
      },
    ],

    engineeringHighlights: [
      {
        title: "Route-Based Code Splitting & Lazy Loading",
        problem:
          "As the application scaled, the growing JavaScript bundle significantly increased initial load time, negatively impacting first-time user experience.",
        solution:
          "Implemented route-level code splitting using lazy loading so that only the required modules are loaded when a route is accessed.",
        outcome:
          "Drastically improved initial load performance while keeping per-route navigation overhead minimal, resulting in a smoother and more scalable user experience.",
      },
    ],

    bannerImage: "/projects/smart-school-bus.webp",

    screenshots: [
      "/projects/smart-school-bus-1.webp",
      "/projects/smart-school-bus-2.webp",
      "/projects/smart-school-bus-3.webp",
      "/projects/smart-school-bus-4.webp",
      "/projects/smart-school-bus-5.webp",
    ],

    liveUrl: "https://smartschoolbus.gov.bd",

    featured: true,
  },
  {
    id: "alumni-connect",
    title: "Alumni Connect",
    role: "Frontend",
    description:
      "A scalable web application designed to connect individuals with their alma mater and fellow alumni. The platform streamlines alumni tracking, membership certification, and secure fund management for institutions like The Gregorian Society.",

    frontendTech: ["React.js", "Tailwind CSS", "Dynamic Color Themes"],

    backendTech: [
      "Django",
      "Node.js",
      "Secure Payment Gateway",
      "Automated Email System",
    ],

    scope: {
      modules: [
        "Alumni Tracking & Career Progress", //[cite: 2]
        "Membership Management with Automated Certificates", //[cite: 2]
        "Secure Payment & Fund Management", //[cite: 2]
        "Event Creation & Management", //[cite: 2]
        "Integrated Blogging Platform", //[cite: 2]
        "Admin Dashboard & Transaction Management", //[cite: 2]
      ],
      adminCapabilities: [
        "Association Member List management and data download", //[cite: 2]
        "Event creation with participation criteria and photos", //[cite: 2]
        "Payment, donation, and registration monitoring", //[cite: 2]
        "System-wide notice board and announcement management", //[cite: 2]
      ],
    },

    features: [
      {
        title: "Automated Membership Certification",
        description:
          "Upon successful registration and payment, the system automatically generates and emails customizable membership certificates and payment receipts to users.", //[cite: 2]
      },
      {
        title: "Flexible Membership Plans",
        description:
          "Supports customizable membership levels (e.g., Lifetime vs. General) with integrated handling for both online and offline payment verification.", //[cite: 2]
      },
      {
        title: "Intuitive User Dashboard",
        description:
          "A centralized hub for alumni to receive updates, manage their memberships, view upcoming events, and track personal transaction history.", //[cite: 2]
      },
      {
        title: "Multi-Tenant Architecture",
        description:
          "Every new alumni association receives a custom subdomain under alumniconnect.xyz, with the flexibility to use their own custom domains.", //[cite: 2]
      },
      {
        title: "Dynamic UI Customization",
        description:
          "Fully customizable public-facing homepages featuring dynamic color theme selection to match the institution's branding.", //[cite: 2]
      },
    ],

    engineeringHighlights: [
      {
        title: "Robust Payment & Transaction Security",
        problem:
          "Managing large-scale alumni donations and membership fees requires high security and transparent tracking for administrators.", //[cite: 2]
        solution:
          "Implemented a secure payment gateway with a dedicated Admin Transaction Management panel to filter and verify successful transactions, donations, and event registrations.", //[cite: 2]
        outcome:
          "Provided institutions with a reliable, fault-tolerant financial oversight system that reduces manual administrative overhead.", //[cite: 2]
      },
    ],

    bannerImage: "/projects/alumni-connect.webp",

    screenshots: [
      "/projects/alumni-connect-homepage.webp", //[cite: 2]
      "/projects/alumni-connect-user-dashboard.webp", //[cite: 2]
      "/projects/alumni-connect-admin-panel.webp", //[cite: 2]
      "/projects/alumni-connect-certificate.webp", //[cite: 2]
      "/projects/alumni-connect-event-management.webp", //[cite: 2]
    ],

    liveUrl: "https://alumniconnect.xyz", //[cite: 2]

    featured: true,
  },
];
