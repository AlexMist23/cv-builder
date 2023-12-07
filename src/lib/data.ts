import type {
  Course,
  ContactInfo,
  Info,
  WorkExp,
  Languages,
} from "@/components";
const phone = process.env.NEXT_PUBLIC_PHONE;

const targetCompany = "";
const position = "";

export const info: Info = {
  name: "Aleksander Misterkiewicz",
  jobDesc: position ? position : "Intern QA Engineer",
  summary:
    "Driven Quality Assurance Engineer with a robust foundation in software testing, development, and design. Demonstrated proficiency in Python and JavaScript gained through recent courses and ongoing programming pursuits. Seeking opportunities to advance within the software development industry.",
};
export const contactInfo: ContactInfo[] = [
  {
    icon: "email.svg",
    content: "aleksander.misterq@gmail.com",
    link: "mailto:aleksander.misterq@gmail.com",
  },
  { icon: "location.svg", content: "Gdansk, Poland", link: null },
  {
    icon: "phone.svg",
    content: phone ? phone : "+00 123 456 789",
    link: null,
  },
  {
    icon: "github.svg",
    content: "github.com/AlexMist23",
    link: "https://github.com/AlexMist23",
  },
  {
    icon: "linkedin.svg",
    content: "linkedin.com/in/aleksandermst",
    link: "https://www.linkedin.com/in/aleksandermst",
  },
];
export const skillsList: string[] = [
  "HTML5",
  "CSS",
  "SVG",
  "SQL",

  "JavaScript",
  "TypeScript",
  "Python",
  "PostgreSQL",

  "Node.js",
  "Next.js",
  "Django",
  "Flask",

  "React",
  "Redux.js",
  "JIRA",
  "Git",
];
export const workExperienceList: WorkExp[] = [
  {
    role: "Intern Quality Assurance Engineer",
    company: "Luxoft",
    date: { start: "09/2023", end: "11/2023" },
    descList: [
      "Conducted comprehensive review and analysis of digital maps data, ensuring accuracy and adherence to specifications",
      "Proficiently annotated 2D/3D images and videos using specialized tools and database systems",
      "Generated detailed reports on data analysis and review results, contributing to process optimization",
      "Collaborated closely with team members and developers to ensure seamless communication and project alignment",
    ],
  },
  {
    role: "QA Tester",
    company: "QLOC",
    date: { start: "08/2022", end: "07/2023" },
    descList: [
      "Executed diverse software tests encompassing sanity, performance, functional, and regression testing in an Agile setting",
      "Played a pivotal role in issue reporting and client feedback processes, facilitating continuous improvement within the team and Agile workflow",
    ],
  },
];
export const coursesList: Course[] = [
  {
    title: "JavaScript Specialst: React + Redux",
    company: "CodersLab",
    date: { start: "09/2023", end: "11/2023" },
    descList: [
      "Subject Scope: Advanced JavaScript, single-page application (SPA) project using React Router, React Redux library, and REST API.",
    ],
  },
  {
    title: "Python Developer",
    company: "CodersLab",
    date: { start: "08/2022", end: "07/2023" },
    descList: ["Subject Scope: Fundamentals of Python, object-oriented programming in Python, SQL databases, Django framework, basics of JavaScript, final project."],
  },
];
export const languages: Languages = [
  { name: "English", level: 4 },
  { name: "Polish", level: 7 },
];

export interface Course {
  title: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList: string[];
}

export interface WorkExp {
  role: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList: string[];
}
