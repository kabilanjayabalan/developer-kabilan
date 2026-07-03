export const profile = {
  name: "Kabilan Jayabalan",
  role: "Aspiring Junior Software Engineer",
  location: "Trichy, Tamil Nadu, India",
  email: "kabilan2k06@gmail.com",
  phone: "+91 93449 51077",
  tagline: "Java-focused engineer building efficient, real-world software solutions.",
  about: [
    "Aspiring Junior Software Engineer with a strong foundation in Java and a passion for developing scalable, efficient, and user-centric software solutions.",
    "Experienced in full-stack development, building responsive front-end applications with HTML, CSS, and JavaScript, and robust back-end systems using Java, Spring Boot, SQL, and RESTful APIs.",
    "A collaborative team player with excellent communication, adaptability, and a continuous learning mindset, eager to contribute to innovative and impactful projects.",
  ],
  socials: {
    github: "https://github.com/kabilanjayabalan",
    linkedin: "https://www.linkedin.com/in/kabilan-jayabalan/",
    email: "mailto:kabilan2k06@gmail.com",
    instagram: "https://www.instagram.com/kabil_jayabal/",
    twitter: "",
    leetcode: "https://leetcode.com/u/Kabilan_Jayabalan/",
  },
  resumeUrl: "/resume.pdf",
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages & Backend",
    items: ["Java", "Spring Boot", "SQL"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Postman", "RESTful APIs", "JWT / OAuth2"],
  },
]

export const projects: {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  year: string
}[] = [
    {
      title: "Legal Aid Matching Platform",
      description:
        "A legal aid platform with secure authentication, role-based access control, intelligent case matching, and real-time communication connecting citizens with verified pro bono lawyers and NGOs.",
      tags: ["Java", "Spring Boot", "Postgres SQL", "JWT/OAuth2"],
      repoUrl: "https://github.com/kabilanjayabalan/legal-aid-matching-assistant",
      liveUrl: "#",
      year: "2025",
    },
    {
      title: "Bus Tracking Intelligent",
      description:
        "A real-time bus tracking application featuring live GPS tracking, ETA prediction, seat availability, and real-time synchronization between user and conductor modules.",
      tags: ["React Native", "Node Js", "MongoDB"],
      repoUrl: "https://github.com/kabilanjayabalan/bus-tracker-intelligent",
      liveUrl: "#",
      year: "2026",
    },
  ]

export const experience: {
  role: string
  company: string
  period: string
  description: string
  tags?: string[]
}[] = [
    {
      role: "Java Full Stack Development Intern",
      company: "Infosys Springboard (Virtual)",
      period: "Nov 2025 — Jan 2026",
      description:
        "Gained hands-on experience in enterprise-level application development, software optimization, and modern technologies while collaborating with team members to deliver real-world project solutions and strengthen teamwork skills.",
      tags: ["Java", "Full Stack", "Enterprise Apps"],
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Microsoft (via Edunet Foundation)",
      period: "Apr 2025 — May 2025",
      description:
        "Completed a 4-week internship in Artificial Intelligence, gaining hands-on experience in machine learning, neural networks, AI applications, and data science through real-world projects, case studies, and analytical tasks.",
      tags: ["Python", "Machine Learning", "Data Science"],
    },
  ]

export const education: {
  degree: string
  school: string
  period: string
  description: string
}[] = [
    {
      degree: "B.E. Computer and Communication Engineering",
      school: "V.S.B Engineering College, Karur",
      period: "2023 — Present",
      description: "Pursuing a Bachelor of Engineering with a current CGPA of 7.75.",
    },
    {
      degree: "Higher Secondary (HSC)",
      school: "Sowdambikaa Matric Higher Secondary School, Trichy",
      period: "2021 — 2023",
      description: "Completed higher secondary education with 72%.",
    },
  ]

export const achievements: {
  title: string
  issuer: string
  year: string
  url?: string
}[] = [
    {
      title: "Java Programming Certification",
      issuer: "NPTEL",
      year: "2025",
      url: "https://drive.google.com/file/d/1U1h6Rt-zLhQQKvdWLvGqZ8RmeWujIUl8/view?usp=sharing",
    },
    {
      title: "Java & Python Course Certificate",
      issuer: "Infosys Springboard",
      year: "2025",
      url: "https://drive.google.com/drive/folders/1WYedaTSpVqnj4_WBC9UF07FBlGptkXaJ?usp=sharing",
    },
    {
      title: "Generative AI Fluency Certificate",
      issuer: "Nasscom",
      year: "2025",
      url: "https://drive.google.com/file/d/1ey_9sAgtejDU66nCAf4pPHhuXPBVr0Jk/view?usp=sharing",
    },
    {
      title: "Machine Learning & Cloud Computing",
      issuer: "AWS",
      year: "2025",
      url: "https://www.credly.com/users/kabilan-jayabal",
    },
  ]

export const publications: {
  title: string
  venue: string
  year: string
  url?: string
  scopusUrl?: string
  ieeeUrl?: string
}[] = [
    {
      title:
        "An Optimized Slot Booking System for Emergency EV Charging Stations With User-to-User Communication",
      venue:
        "International Conference on Intelligent Technologies for Sustainable Electric and Communications Systems, PSG Institute of Technology and Applied Research, Coimbatore",
      year: "2025",
      scopusUrl: "#",
      ieeeUrl: "https://ieeexplore.ieee.org/document/11307560",
    },
  ]

export const highlights: string[] = [
  "Presented a project at Infosys, Bangalore during the \u201CCelebrating Tech\u201D event.",
  "Hosted my department's Inter-College Level Symposium.",
  "Published a research paper at an international conference ( PSG iTech, Coimbatore ).",
]

export const languages: string[] = ["English", "Tamil"]
