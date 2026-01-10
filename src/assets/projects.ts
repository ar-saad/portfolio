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
];
