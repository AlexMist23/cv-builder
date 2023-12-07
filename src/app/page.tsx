/* CSS */
import styles from "./page.module.css";

/* Components */
import {
  Head,
  InfoPanel,
  SectionTitle,
  Line,
  SkillContainer,
  Courses,
  WorkExp,
  WorkExperience,
} from "@/components";

import type { Course, ContactInfo, Info } from "@/components";

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE
    ? process.env.NEXT_PUBLIC_PHONE
    : "+00 123 456 789";

  const info: Info = {
    name: "Aleksander Misterkiewicz",
    jobDesc: "Intern QA Engineer",
    summary:
      "Driven Quality Assurance Engineer with a robust foundation in software testing, development, and design. Demonstrated proficiency in Python and JavaScript gained through recent courses and ongoing programming pursuits. Seeking opportunities to advance within the software development industry.",
  };
  const contactInfo: ContactInfo[] = [
    {
      icon: "email.svg",
      content: "aleksander.misterq@gmail.com",
      link: "mailto:aleksander.misterq@gmail.com",
    },
    { icon: "location.svg", content: "Gdansk, Poland", link: null },
    { icon: "phone.svg", content: phone, link: `tel:${phone}` },
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
  const skillsList: string[] = [
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
  const workExperienceList: WorkExp[] = [
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
  const coursesList: Course[] = [
    {
      title: "JavaScript Specialst: React + Redux",
      company: "CodersLab",
      date: { start: "09/2023", end: "11/2023" },
      desc: "Subject Scope: Advanced JavaScript, single-page application (SPA) project using React Router, React Redux library, and REST API.",
    },
    {
      title: "Python Developer",
      company: "CodersLab",
      date: { start: "08/2022", end: "07/2023" },
      desc: "Subject Scope: Fundamentals of Python, object-oriented programming in Python, SQL databases, Django framework, basics of JavaScript, final project.",
    },
  ];

  return (
    <main className={styles.main}>
      <Head info={info} />
      <br />
      <br />
      <InfoPanel contactInfo={contactInfo} />
      <SectionTitle title="SKILLS" imgSrc="/skills.svg" />
      <br />
      <SkillContainer skillsList={skillsList} />
      <Line />
      <SectionTitle title="WORK EXPERIENCE" imgSrc="/work_experience.svg" />
      <br />
      <WorkExperience workExperienceList={workExperienceList} />
      <Line />
      <SectionTitle title="COURSES" imgSrc="/courses.svg" />
      <br />
      <Courses coursesList={coursesList} />
    </main>
  );
}
