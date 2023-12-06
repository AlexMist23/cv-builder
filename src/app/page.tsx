/* CSS */
import styles from "./page.module.css";

/* Components */
import { Head } from "./components/Head/Head";
import { InfoPanel } from "./components/InfoPanel/InfoPanel";
import { SectorTitle } from "./components/SectorTitle/SectorTitle";
import { Line } from "./components/Line/Line";
import { SkillContainer } from "./components/SkillContainer/SkillContainer";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";

export default function Home() {
  const name = "Aleksander Misterkiewicz";
  const jobDesc = "Intern QA Engineer";
  const summary =
    "Driven Quality Assurance Engineer with a robust foundation in softwaretesting, development, and design. Demonstrated proficiency in Python andJavaScript gained through recent courses and ongoing programmingpursuits. Seeking opportunities to advance within the softwaredevelopment industry.";

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
        "Digital maps data review",
        "Annotation of 2D/3D images and videos according to the provided specification",
        "Working with Annotation Tools and Database",
        "Data analysis and review results reports",
        "Communication with team members and developers",
      ],
    },
    {
      role: "QA Tester",
      company: "QLOC",
      date: { start: "08/2022", end: "07/2023" },
      descList: [
        "Execution of a wide range of software tests (sanity, performance, functional, regressions, etc.)",
        "Issue reporting and client feedback in an Agile environment",
      ],
    },
  ];
  return (
    <main className={styles.main}>
      <Head name={name} jobDesc={jobDesc} summary={summary} />
      <br />
      <br />
      <InfoPanel contactInfo={contactInfo} />
      <br />
      <SectorTitle title="SKILLS" imgSrc="/skills.svg" />
      <br />
      <SkillContainer skillsList={skillsList} />
      <br />
      <Line />
      <br />
      <SectorTitle title="WORK EXPERIENCE" imgSrc="/work_experience.svg" />
      <br />
      <WorkExperience workExperienceList={workExperienceList} />
      <br />
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
