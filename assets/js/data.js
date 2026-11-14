// Canonical content reference for this site. index.html renders this content
// directly as static markup (no build step) — when copy changes, update both
// this file and the corresponding markup in index.html.
const siteData = {
  name: "Deniz Timurturkan",
  title: "Software Engineer",
  email: "deniztimurturkan@gmail.com",
  github: "#", // TODO: replace with real GitHub URL
  linkedin: "#", // TODO: replace with real LinkedIn URL

  bio: {
    short:
      "I'm a software engineer based in Atlanta, currently building full-stack web applications and AWS-backed services at Travelers. I graduated from Georgia Tech with a BS in Computer Science, where I also co-led embedded systems security research.",
  },

  education: {
    school: "Georgia Institute of Technology",
    degree: "Bachelor of Science in Computer Science",
    dates: "May 2025",
    courses: [
      "Automata & Complexity",
      "Computer Vision",
      "Machine Learning",
      "Introduction to AI",
      "Computer Graphics",
      "Design & Analysis of Algorithms",
      "Data Structures and Algorithms",
      "Computer Organization and Programming",
      "Object Oriented Programming",
      "Linear Algebra",
    ],
  },

  experience: [
    {
      role: "EDP Software Engineer",
      company: "Travelers",
      location: "Atlanta, GA",
      dates: "June 2025 – Present",
      bullets: [
        "Built full-stack web applications using TypeScript, HTML, and React (SPAs and MPAs) to deliver scalable, user-friendly interfaces that supported evolving business requirements.",
        "Developed and maintained lambdas and backend services, including AWS Bedrock agents that generate customized file summaries, improving data accessibility and reducing manual review time for clients.",
        "Led the EDP (Engineer Development Program) Networking Committee by organizing cross-team initiatives, strengthening collaboration and engagement among EDP engineers across the organization.",
        "Integrated APIs and managed data fetching, error handling, and state management in React using React Query, ensuring reliable data flow, improved performance, and a smoother user experience.",
      ],
    },
    {
      role: "SWE/QA Automation Engineer Intern",
      company: "Amwins",
      location: "Charlotte, NC",
      dates: "May 2024 – May 2025",
      bullets: [
        "Implemented web elements using JavaScript and HTML to enhance interactivity and improve overall UI efficiency.",
        "Developed and executed 100+ automated test scripts using AccelQ, contributing ~10% of the company's test portfolio to ensure reliable UI validation across multiple environments.",
        "Collaborated with development teams to detect and validate web elements, addressing UI performance issues and improving user experience.",
        "Authored and executed API call scripts integrated with SQL queries to validate front-end and back-end data flow and ensure data integrity.",
      ],
    },
    {
      role: "Embedded System Cyber Security Research Co-Leader",
      company: "Georgia Tech VIP / Research Institute",
      location: "Atlanta, GA",
      dates: "Aug 2023 – May 2025",
      bullets: [
        "Led a subteam of 8 members, organizing checkup meetings and ensuring the timely completion of presentations and research papers, including the published paper \"Wyze Camera Fall 2024.\"",
        "Performed software reverse engineering and RF analysis (RX and TX) using static and dynamic testing through instrumentation to identify potential vulnerabilities and enhance system security.",
        "Reverse engineered a Wyze IP camera system at both software and hardware levels using Ghidra, uncovering vulnerabilities to improve security measures.",
        "Developed SDR (Software Defined Radio) spoofing software using Scapy to simulate and test remote sensors, identifying weaknesses in wireless communications.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Br Magazacilik C.O.",
      location: "Izmir, Turkey",
      dates: "May 2023 – Jul 2023",
      bullets: [
        "Added multilanguage support to an e-commerce application to expand user accessibility and increase the application's global reach.",
        "Used Java and Android Studio to design and implement screens and functionalities, making the application flow more user-friendly.",
        "Worked in a git-flow based environment to document and manage a codebase in a team-based setting, minimizing errors and streamlining development.",
      ],
    },
  ],

  projects: [
    {
      id: "wyze-camera-research",
      title: "Wyze Camera Security Research",
      tagline: "Published research paper — hardware & software reverse engineering",
      bullets: [
        "Reverse engineered a Wyze IP camera at the software and hardware level using Ghidra to uncover vulnerabilities.",
        "Performed static and dynamic instrumentation-based testing and RF (RX/TX) analysis.",
        "Co-authored and published \"Wyze Camera Fall 2024\" as part of Georgia Tech VIP research.",
      ],
      link: null,
    },
    {
      id: "sdr-spoofing",
      title: "SDR Sensor Spoofing Tool",
      tagline: "Software Defined Radio · Scapy",
      bullets: [
        "Built spoofing software using Scapy to simulate and test remote wireless sensors.",
        "Identified weaknesses in wireless communication protocols to improve system robustness against attacks.",
      ],
      link: null,
    },
    {
      id: "bedrock-summarizer",
      title: "AWS Bedrock File Summarization Agents",
      tagline: "AWS Lambda · Bedrock · React",
      bullets: [
        "Developed backend lambdas and AWS Bedrock agents that generate customized file summaries.",
        "Reduced manual review time for clients and improved data accessibility.",
      ],
      link: null,
    },
    {
      id: "frogger",
      title: "Frogger",
      tagline: "Android app · Java",
      bullets: [
        "Built a Crossy Road-style Android game with smooth, animated transitions.",
        "Designed with the Agile process — sequence diagrams, use case diagrams, and prototype screens.",
        "Followed strict SOLID and GRASP principles for maintainable code.",
      ],
      link: null,
    },
  ],

  skills: {
    languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "HTML",
      "CSS",
      "SQL",
      "C",
      "C#",
      "Assembly",
      "SwiftUI",
    ],
    frameworks: ["React", "SwiftUI", "Qlik", "Ghidra", "Unity", "Git", "AccelQ", "Tableau", "AWS"],
    naturalLanguages: [
      "English",
      "Turkish",
      "German (beginner)",
      "Spanish (beginner)",
      "Korean (beginner)",
    ],
  },
};
