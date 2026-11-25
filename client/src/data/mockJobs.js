/*
 * MOCK DATA - development only.
 *
 * Every company and listing below is fictional. The shape of each object is
 * what the Jobs UI expects, so when the backend is ready, the API response
 * should return the same fields and this file can simply be deleted.
 *
 * Job shape:
 *   id              string   unique id (will become the MongoDB _id)
 *   title           string
 *   company         string
 *   location        string
 *   workMode        "on-site" | "hybrid" | "remote"
 *   jobType         "full-time" | "part-time" | "internship" | "contract"
 *   experienceLevel "fresher" | "entry-level" | "mid-level" | "senior-level"
 *   category        one of the category values in jobFilterOptions.js
 *   description     string   short summary
 *   skills          string[]
 *   postedAt        string   ISO date (YYYY-MM-DD)
 */

export const MOCK_JOBS = [
  {
    id: "job-101",
    title: "Frontend Developer Intern",
    company: "Brightwave Technologies",
    location: "Bengaluru, Karnataka",
    workMode: "hybrid",
    jobType: "internship",
    experienceLevel: "fresher",
    category: "web-development",
    description:
      "Work with the product team to build and test user interface components in React. You will pair with senior developers and ship real features.",
    skills: ["React", "JavaScript", "CSS", "Git"],
    postedAt: "2026-11-23",
  },
  {
    id: "job-102",
    title: "Junior Full Stack Developer",
    company: "Kestrel Software",
    location: "Noida, Uttar Pradesh",
    workMode: "on-site",
    jobType: "full-time",
    experienceLevel: "entry-level",
    category: "software-development",
    description:
      "Build and maintain features across the MERN stack for internal business tools. Good fit for recent graduates with project experience.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    postedAt: "2026-11-22",
  },
  {
    id: "job-103",
    title: "Data Analyst",
    company: "Orchid Analytics",
    location: "Pune, Maharashtra",
    workMode: "hybrid",
    jobType: "full-time",
    experienceLevel: "mid-level",
    category: "data-analytics",
    description:
      "Turn business questions into dashboards and reports. You will own recurring analysis for the operations and sales teams.",
    skills: ["SQL", "Python", "Power BI", "Excel"],
    postedAt: "2026-11-21",
  },
  {
    id: "job-104",
    title: "UI/UX Designer",
    company: "Greenfield Digital",
    location: "Remote (India)",
    workMode: "remote",
    jobType: "full-time",
    experienceLevel: "mid-level",
    category: "ui-ux-design",
    description:
      "Design clear, accessible interfaces for web products, from early wireframes to final hand-off. Collaborate closely with developers.",
    skills: ["Figma", "Prototyping", "User research", "Design systems"],
    postedAt: "2026-11-20",
  },
  {
    id: "job-105",
    title: "Digital Marketing Executive",
    company: "Pinecrest Media",
    location: "Lucknow, Uttar Pradesh",
    workMode: "on-site",
    jobType: "full-time",
    experienceLevel: "entry-level",
    category: "digital-marketing",
    description:
      "Plan and run search and social campaigns for local and regional clients, and report on performance every month.",
    skills: ["SEO", "Google Analytics", "Social media", "Copywriting"],
    postedAt: "2026-11-19",
  },
  {
    id: "job-106",
    title: "Content Writing Intern",
    company: "Lumen Learning",
    location: "Remote (India)",
    workMode: "remote",
    jobType: "internship",
    experienceLevel: "fresher",
    category: "content-writing",
    description:
      "Research and write blog posts and study guides for an online learning platform. Editors will review and coach your drafts.",
    skills: ["Writing", "Editing", "Research", "SEO basics"],
    postedAt: "2026-11-18",
  },
  {
    id: "job-107",
    title: "Customer Support Associate",
    company: "Harbor Cloud Services",
    location: "Hyderabad, Telangana",
    workMode: "on-site",
    jobType: "full-time",
    experienceLevel: "fresher",
    category: "customer-support",
    description:
      "Answer customer queries by chat and email, resolve common issues, and escalate technical problems to the right team.",
    skills: ["Communication", "Ticketing tools", "Problem solving"],
    postedAt: "2026-11-17",
  },
  {
    id: "job-108",
    title: "Senior Backend Engineer",
    company: "Kestrel Software",
    location: "Bengaluru, Karnataka",
    workMode: "hybrid",
    jobType: "full-time",
    experienceLevel: "senior-level",
    category: "software-development",
    description:
      "Lead the design of scalable REST services and mentor a small team of engineers. Own reliability and performance of core APIs.",
    skills: ["Node.js", "MongoDB", "System design", "AWS"],
    postedAt: "2026-11-15",
  },
  {
    id: "job-109",
    title: "Accounts Executive",
    company: "Pinecrest Finance",
    location: "Delhi NCR",
    workMode: "on-site",
    jobType: "full-time",
    experienceLevel: "entry-level",
    category: "finance-accounting",
    description:
      "Handle day-to-day bookkeeping, invoicing, and GST filing support for a growing team of small-business clients.",
    skills: ["Tally", "GST", "Excel", "Bookkeeping"],
    postedAt: "2026-11-13",
  },
  {
    id: "job-110",
    title: "Data Science Intern",
    company: "Orchid Analytics",
    location: "Remote (India)",
    workMode: "remote",
    jobType: "internship",
    experienceLevel: "fresher",
    category: "data-analytics",
    description:
      "Support the data science team with data cleaning, exploratory analysis, and simple machine learning experiments.",
    skills: ["Python", "Pandas", "Statistics", "Machine learning"],
    postedAt: "2026-11-10",
  },
  {
    id: "job-111",
    title: "Freelance React Developer",
    company: "Brightwave Technologies",
    location: "Remote (India)",
    workMode: "remote",
    jobType: "contract",
    experienceLevel: "mid-level",
    category: "web-development",
    description:
      "A 3-month contract to build a customer dashboard in React. Clear scope, weekly check-ins, and a defined hand-over.",
    skills: ["React", "TypeScript", "REST APIs", "Testing"],
    postedAt: "2026-11-06",
  },
  {
    id: "job-112",
    title: "Social Media Coordinator",
    company: "Greenfield Digital",
    location: "Lucknow, Uttar Pradesh",
    workMode: "hybrid",
    jobType: "part-time",
    experienceLevel: "entry-level",
    category: "digital-marketing",
    description:
      "Part-time role managing content calendars and publishing across social channels, with a monthly performance summary.",
    skills: ["Content calendar", "Canva", "Analytics", "Instagram"],
    postedAt: "2026-11-02",
  },
];