/* CSS */
import styles from "@/styles/page.module.css";

/* Components */
import {
  Head,
  InfoPanel,
  SectionTitle,
  SkillContainer,
  Languages,
  SectionList,
} from "@/components";

import type { SectionListProps } from "@/components";

/* Data */
import {
  info,
  contactInfo,
  skillsList,
  workExperienceList,
  coursesList,
  languages,
} from "@/lib/data";

export default function Home() {
  const tWorkExperienceList: SectionListProps = workExperienceList.map(
    (exp) => ({
      title: exp.role,
      subtitle: exp.company,
      date: exp.date,
      descList: exp.descList,
    })
  );

  const tCoursesList: SectionListProps = coursesList.map((exp) => ({
    title: exp.title,
    subtitle: exp.company,
    date: exp.date,
    descList: exp.descList,
  }));
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <div>
          <Head info={info} />
          <br />
          <InfoPanel contactInfo={contactInfo} />
          <SectionTitle
            title="SKILLS"
            imgSrc="/svg/sections/skills.svg"
            lineHide={true}
          />
          <br />
          <SkillContainer skillsList={skillsList} />
        </div>
        <div>
          <SectionTitle
            title="WORK EXPERIENCE"
            imgSrc="/svg/sections/work_experience.svg"
          />
          <SectionList list={tWorkExperienceList} />
        </div>
        <div>
          <SectionTitle title="COURSES" imgSrc="/svg/sections/courses.svg" />
          <SectionList list={tCoursesList} />
        </div>
        <div>
          <SectionTitle
            title="LANGUAGES"
            imgSrc="/svg/sections/languages.svg"
          />
          <Languages languages={languages} />
        </div>
      </div>
      <div className={styles.page}>
        <div>
          <SectionTitle
            title="EDUCATION"
            imgSrc="/svg/sections/education.svg"
          />
        </div>
      </div>
    </main>
  );
}
