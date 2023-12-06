/* CSS */
import styles from "./page.module.css";

/* Components */
import { Head } from "./components/Head/Head";
import { InfoPanel } from "./components/InfoPanel/InfoPanel";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { Line } from "./components/Line/Line";
import { SkillContainer } from "./components/SkillContainer/SkillContainer";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";

export default function Home() {
  const name = "Aleksander Misterkiewicz";
  const jobDesc = "Intern QA Engineer";
  const summary =
    "Driven Quality Assurance Engineer with a robust foundation in software testing, development, and design. Demonstrated proficiency in Python and JavaScript gained through recent courses and ongoing programming pursuits. Seeking opportunities to advance within the software development industry.";

  const contactInfo: contactInfoElement[] = [
    {
      icon: "email.svg",
      content: "aleksander.misterq@gmail.com",
      link: "mailto:aleksander.misterq@gmail.com",
    },
    { icon: "location.svg", content: "Gdansk, Poland", link: null },
    { icon: "phone.svg", content: "123 456 789", link: "tel:+48573484737" },
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
    "SQL",
    "Python",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "Django",
    "Flask",
    "Node.js",
    "React",
    "Redux.js",
    "Next.js",
    "JIRA",
    "Agile",
    "Git",
    
  ];
  const workExperienceList: workExperience[] = [
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
  return (
    <main className={styles.main}>
      <Head name={name} jobDesc={jobDesc} summary={summary} />
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
    </main>
  );
}

interface contactInfoElement {
  icon: string;
  content: string;
  link: string | null;
}

interface workExperience {
  role: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList: string[];
}
