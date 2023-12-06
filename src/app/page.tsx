/* CSS */
import styles from "./page.module.css";

/* Components */
import { Head } from "./components/Head/Head";
import { InfoPanel } from "./components/InfoPanel/InfoPanel";
import { SectorTitle } from "./components/SectorTitle/SectorTitle";
import { Line } from "./components/Line/Line";
import { SkillContainer } from "./components/SkillContainer/SkillContainer";

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
    "Python",
    "JavaScript",
    "TypeScript",
    "Django",
    "Flask",
    "Node.js",
    "React",
    "Redux",
    "Next.js",
  ];

  return (
    <main className={styles.main}>
      <Head name={name} jobDesc={jobDesc} summary={summary} />
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
    </main>
  );
}

interface contactInfoElement {
  icon: string;
  content: string;
  link: string | null;
}
