import type { ContactInfo, Info, Languages } from "@/components";

const phone = process.env.NEXT_PUBLIC_PHONE;

export const info: Info = {
  name: "Misterkiewicz Aleksander",
  jobDesc: "Junior Front-End Developer",
  summary:
  "Detail-oriented quality assurance tester transitioning to front-end development. Skilled in software testing, development, and design with a focus on Python and JavaScript. Seeking opportunities to apply analytical problem-solving skills and technical expertise in a junior front-end role."
};
export const contactInfo: ContactInfo[] = [
  {
    icon: "email.svg",
    content: "aleksander.misterkiewicz@outlook.com",
    link: "mailto:aleksander.misterkiewicz@outlook.com",
  },

  {
    icon: "linkedin.svg",
    content: "linkedin.com/in/aleksandermst",
    link: "https://www.linkedin.com/in/aleksandermst",
  },
  {
    icon: "phone.svg",
    content: phone ? phone : "123 456 789",
    link: phone ? "tel:" + phone : "123 456 789",
  },
  {
    icon: "github.svg",
    content: "github.com/AlexMist23",
    link: "https://github.com/AlexMist23",
  },

  { icon: "location.svg", content: "Gdansk, Poland" },

  {
    icon: "website.svg",
    content: "a-misterkiewicz.vercel.app",
    link: "https://a-misterkiewicz.vercel.app/",
  },
];
export const skillsList: TechnicalSkill[] = [
  { category: 'Programming Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS', 'SQL']},
  { category: 'Front-End Technologies', skills: ['React', 'Redux.js', 'Next.js', 'SVG', 'Responsive Design'] },
  { category: 'Back-End Technologies', skills: ['Node.js', 'Django', 'Flask'] },
  { category: 'Databases', skills: ['PostgreSQL'] },
  { category: 'Version Control', skills: ['Git', 'GitHub'] },
  { category: 'Development Tools', skills: ['Jira']}
];
export const workExperienceList: WorkExp[] = [
  {
    role: "Intern Quality Assurance Engineer",
    company: "Luxoft",
    date: { start: "09/2023", end: "12/2023" },
    descList: [
      "Reviewed and analyzed digital maps data, ensuring accuracy and quality standards.",
      "Annotated 2D/3D images and videos using specialized tools, enhancing data accuracy and integrity.",
      "Collaborated effectively with team members and developers, improving project alignment and workflow efficiency.",
    ],
  },
  {
    role: "QA Tester",
    company: "QLOC",
    date: { start: "08/2022", end: "07/2023" },
    descList: [
      "Executed sanity, performance, functional, and regression tests in an Agile environment, improving software quality.",
      "Streamlined issue reporting and client feedback processes, contributing to continuous improvement and Agile workflow optimization.",
    ],
  },
];
export const coursesList: Course[] = [
  {
    title: "JavaScript Specialist: React + Redux",
    company: "CodersLab",
    date: { start: "12/2022", end: "05/2023" },
    descList: [
      "Subject Scope: Advanced JavaScript, single-page application (SPA) project using React Router, React Redux library, and REST API.",
    ],
  },
  {
    title: "Python Developer",
    company: "CodersLab",
    date: { start: "08/2022", end: "07/2023" },
    descList: [
      "Subject Scope: Fundamentals of Python, object-oriented programming in Python, SQL databases, Django framework, basics of JavaScript, final project.",
    ],
  },
];
export const languages: Languages = [
  { name: "English", level: 4 },
  { name: "Polish", level: 7 },
];
export const educationList: EducationList[] = [
  {
    school: "Vocational Technical High School for Telecommunications",
    desc: "IT profile",
    date: { start: "09/2017", end: "06/2020" },
  },
];
export const projectsList: Project[] = [
  {
    name: "Weather App",
    techStack: ["TypeScript", "Next.js", "React", "Redux"],
    demo: "https://weather-appx.vercel.app",
    repo: "https://github.com/AlexMist23/weather-app",
    descList: [
      "Developed a weather information app using Next.js, React, and React-Redux.",
      "Integrated OpenWeatherMap API for real-time data, managing state with Redux and creating a responsive, aesthetically pleasing design.",
    ],
  },
  {
    name: "Cinema Service",
    techStack: ["Python", "Django", "PostgreSQL"],
    repo: "https://github.com/AlexMist23/django_cinema_app",
    descList: [
      "Developed a comprehensive cinema web application using Python, Django, and PostgreSQL, demonstrating full-stack proficiency.",
      "Implemented a robust user authentication system and efficient data management using Django's model structures and PostgreSQL.",
    ],
  },
  {
    name: "CV Builder",
    techStack: ["TypeScript", "Next.js", "React"],
    demo: "https://a-misterkiewicz.vercel.app/",
    repo: "https://github.com/AlexMist23/cv-builder",
    descList: [
      "Developed a custom CV creation tool using TypeScript, Next.js, and React, offering full control over design elements using React components.",
      "Planned future enhancements include a user-friendly interface for seamless CV customization.",
    ],
  },
];
export const clause: string =
  "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).";

export interface Course {
  title: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList?: string[];
}
export interface WorkExp {
  role: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList?: string[];
}
export interface EducationList {
  school: string;
  desc: string;
  date: { start: string; end: string | "Present" };
}
export interface Project {
  name: string;
  techStack: string[];
  demo?: string;
  repo: string;
  date?: { start: string; end: string | "Present" };
  descList: string[];
}

export interface TechnicalSkill {
  category: string;
  skills: string[];
}
