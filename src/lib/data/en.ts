import type { ContactInfo, Info, Languages } from "@/components";

const phone = process.env.NEXT_PUBLIC_PHONE;

export const info: Info = {
  name: "Misterkiewicz Aleksander",
  jobDesc: "QA Tester",
  summary:
    "Driven Quality Assurance Engineer with a robust foundation in software testing, development, and design. Passionate about leveraging analytical thinking to solve complex problems within the realm of software development. Demonstrated proficiency in Python and JavaScript gained through recent courses and ongoing programming pursuits. Seeking .",
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
  "Responsive Design",
];
export const workExperienceList: WorkExp[] = [
  {
    role: "Intern Quality Assurance Engineer",
    company: "Luxoft",
    date: { start: "2023-09", end: "2023-12" },
    descList: [
      "Conducted a comprehensive review and analysis of digital maps data, demonstrating meticulous attention to detail and commitment to quality assurance.",
      "Annotatation of 2D/3D images and videos using specialized tools and database systems, contributing to the enhancement of data accuracy and integrity.",
      "Collaborated  with team members and developers to ensure seamless communication, fostering project alignment and efficient workflow.",
    ],
  },
  {
    role: "QA Tester",
    company: "QLOC",
    date: { start: "2022-08", end: "2023-07" },
    descList: [
      "Executed diverse software tests encompassing sanity, performance, functional, and regression testing in an Agile setting",
      "Played a pivotal role in issue reporting and client feedback processes, facilitating continuous improvement within the team and Agile workflow",
    ],
  },
];
export const coursesList: Course[] = [
  {
    title: "JavaScript Specialist: React + Redux",
    company: "CodersLab",
    date: { start: "2022-12", end: "2023-05" },
    descList: [
      "Subject Scope: Advanced JavaScript, single-page application (SPA) project using React Router, React Redux library, and REST API.",
    ],
  },
  {
    title: "Python Developer",
    company: "CodersLab",
    date: { start: "2022-08", end: "2023-07" },
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
      "This application is built using Next.js, React, and React-Redux, leveraging the power of these technologies to provide weather information.",
      "It fetches real-time weather data from the OpenWeatherMap API (https://openweathermap.org/), managing and distributing the data seamlessly through Redux for efficient rendering within React components on pages served by Next.js.",
      "The Weather App combines functionality with an aesthetically pleasing, responsive design.",
    ],
  },
  {
    name: "Cinema Service",
    techStack: ["Python", "Django", "PostgreSQL"],
    repo: "https://github.com/AlexMist23/django_cinema_app",
    descList: [
      "The Cinema Service project, developed in Python using the Django framework, showcases a blend of backend and frontend expertise",
      "Utilizing Django with a PostgreSQL database, this project demonstrates my proficiency across various languages and technologies.",
      "The platform introduces a comprehensive cinema web application enabling users to access movie schedules across multiple locations.",
      "The system includes a robust login system integrated with Django's powerful model structures within PostgreSQL, ensuring secure and efficient data management.",
    ],
  },
  {
    name: "CV Builder",
    techStack: ["TypeScript", "Next.js", "React"],
    demo: "https://cv-aleksander-misterkiewicz.vercel.app",
    repo: "https://github.com/AlexMist23/cv-builder",
    date: { start: "11/2023", end: "Present" },
    descList: [
      "Crafted using TypeScript, Next.js, and React, revolutionizes the traditional resume-building process.",
      "Application utilizes React elements to create a visually stunning and custom-tailored CV experience, elevating the presentation to an art form.",
      "Due to the early phase of development, the tool currently provides only available React components for building usage.",
      "In the planned futures, a user interface will be provided to further enhance the user experience.",
      "This approach grants full control over color schemes, layout, and design, resulting in a beautifully presented CV seamlessly fitting within selected number of A3/A4-sized pages.",
      "The CV Builder showcases my expertise in leveraging modern web technologies to create intuitive and visually engaging applications, offering a unique and personalized approach to resume creation.",
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
