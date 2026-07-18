import { Profile, SkillCategory, Project, Experience, Education, Certification, Achievement } from "./types";

export const profileData: Profile = {
  name: "Gowthami N",
  titles: [
    "Aspiring UI/UX Designer",
    "Software Developer",
    "Electronics & Communication Engineer",
    "AI Enthusiast"
  ],
  bio: "Blending analytical engineering disciplines with elegant UI/UX layout systems.",
  aboutText: "I am comfortable working across the full journey from idea to interface — planning layouts, structuring navigation, and thinking through how a user actually experiences a product. This is exactly the kind of hands-on, real-world design environment I've been looking for. I already understand the fundamentals — user needs, layout, wireframing — through my Infosys UI/UX training, so I can contribute from day one. I pick up new tools quickly, I take feedback seriously, and I'm used to explaining and defending my decisions, not just making them — proven through an IEEE publication and a college paper presentation.",
  resumeUrl: "#", // will trigger a beautifully generated interactive resume PDF download
  email: "gowthaminattu28@gmail.com",
  phone: "9715326520",
  location: "Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/gowthami-nattuthurai",
  github: "https://github.com/gowthaminattu",
  leetcode: "https://leetcode.com/u/N-Gowthami",
  liveProject: "https://campusos-2.onrender.com",
  avatarUrl: "/images/gowthami_actual_profile.png"
};

export const skillsData: SkillCategory[] = [
  {
    title: "UI/UX Design",
    skills: [
      { name: "UI/UX Fundamentals", level: 90, iconName: "Layers" },
      { name: "Design Thinking", level: 85, iconName: "Brain" },
      { name: "User-Centered Design", level: 85, iconName: "Users" },
      { name: "Figma & Canva", level: 90, iconName: "PenTool" },
      { name: "Basic Wireframing", level: 85, iconName: "Layout" },
      { name: "Visual Layout Sense", level: 88, iconName: "Palette" }
    ]
  },
  {
    title: "Programming & Backend",
    skills: [
      { name: "Java", level: 80, iconName: "Code" },
      { name: "Python", level: 75, iconName: "Code" },
      { name: "MySQL / SQL", level: 82, iconName: "Database" },
      { name: "Node.js & Express", level: 70, iconName: "Server" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 90, iconName: "FileHtml" },
      { name: "JavaScript (ES6+)", level: 85, iconName: "Braces" },
      { name: "React", level: 80, iconName: "Atom" },
      { name: "Tailwind CSS", level: 90, iconName: "Wind" }
    ]
  },
  {
    title: "Hardware & Systems",
    skills: [
      { name: "Embedded Systems", level: 80, iconName: "Cpu" },
      { name: "Image Processing", level: 75, iconName: "Eye" },
      { name: "AWS Cloud Basics", level: 65, iconName: "Cloud" },
      { name: "Git & GitHub", level: 85, iconName: "GitBranch" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "CampusOS — Smart Campus Platform",
    description: "Designed the information architecture and dashboard UX for a full campus management platform covering admissions, hostel, fees, placements, timetable, and an AI chat assistant.",
    techStack: ["React", "Express", "Node.js", "MySQL", "Tailwind CSS", "Gemini AI"],
    category: "web",
    githubUrl: "https://github.com/gowthaminattu",
    liveUrl: "https://campusos-2.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    features: [
      "Structured card-based dashboard layout with a persistent sidebar",
      "Comprehensive modules for admissions, hostel, fees, and placements",
      "Dynamic timetable planner and automated notifications",
      "GPA, attendance, and student ID card summary panel for at-a-glance status",
      "Integrated AI chat assistant for rapid queries"
    ]
  },
  {
    title: "Sign Language Translator",
    description: "Converted sign language gestures into text using image processing, designed so the output is immediately readable for a non-technical end user. Published as an IEEE paper.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Image Processing", "Tkinter"],
    category: "other",
    githubUrl: "https://github.com/gowthaminattu",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    features: [
      "Real-time video capturing and frame-by-frame gesture parsing",
      "Complex image filtering and edge-detection for hand contouring",
      "Seamless translation from gestures to readable plain-text",
      "Published as a certified research paper in IEEE"
    ]
  },
  {
    title: "Audio to Text Generator",
    description: "Built an intuitive speech-to-text tool with a focus on simple, accessible output formatting and clean UI elements.",
    techStack: ["Python", "SpeechRecognition", "PyAudio", "Tkinter", "UI Design"],
    category: "other",
    githubUrl: "https://github.com/gowthaminattu",
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop",
    features: [
      "Instant real-time capturing with minimal latency",
      "Automatic audio chunking and background noise suppression",
      "Copyable formatted plain-text output in one-click",
      "Simple, modern UI suited for non-technical users"
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    company: "Infosys",
    role: "Virtual Intern — UI/UX & Platform Development",
    duration: "Nov 2025 — Jan 2026",
    responsibilities: [
      "Designed and prototyped a Digital Site Survey Platform for infrastructure planning and connectivity optimization.",
      "Conducted complete user research, wireframing, and user testing to improve navigation layout flow.",
      "Applied Infosys UI/UX guidelines and design thinking methods to produce accessible visual layouts."
    ]
  },
  {
    company: "NextGen Instrument, Erode",
    role: "Embedded Systems Intern",
    duration: "June 2025 (4 Weeks)",
    responsibilities: [
      "Gained hands-on experience in hardware interfacing, sensory systems, and microcontroller firmware.",
      "Developed basic communication interfaces to log sensory feeds into database registers.",
      "Participated in layout conceptualization for local embedded displays (LCD/OLED dashboards)."
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "V.S.B Engineering College, Karur",
    university: "Anna University",
    year: "2023 — 2026",
    cgpaOrPercentage: "CGPA 8.43 / 10"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Hayagriva R Metric HSS, Palani",
    year: "2023",
    cgpaOrPercentage: "75.67%"
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Introduction to UI/UX",
    issuer: "Infosys Springboard",
    date: "2025"
  },
  {
    title: "Database and SQL Foundation",
    issuer: "Infosys Springboard",
    date: "2024"
  },
  {
    title: "Java Foundation Course",
    issuer: "Infosys Springboard",
    date: "2025"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Paper Publication: IEEE",
    description: "Published a research paper on the 'Sign Language Translator' system in an IEEE index conference, displaying hands-on image processing expertise and accessibility considerations.",
    date: "2025",
    type: "publication",
    link: "https://github.com/gowthaminattu"
  },
  {
    title: "ET-GEN AI Hackathon",
    description: "Recognized as an active competitor in generating AI-driven tools, showcasing prompt engineering, UI design, and prototype architecture.",
    date: "2026",
    type: "hackathon"
  },
  {
    title: "Google Cloud Gen AI Academy APAC",
    description: "Selected and participated in APAC's Gen AI academy, acquiring training in foundational models and prompt design pipelines.",
    date: "2026",
    type: "hackathon"
  },
  {
    title: "Paper Presentation Winner",
    description: "Presented research paper 'Relive Bin' at Bannari Amman Institute of Technology, earning high marks for presentation style and environmental focus.",
    date: "2025",
    type: "award"
  }
];
