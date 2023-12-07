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
  educationList,
} from "@/lib/data";

export default function Home() {
  const tWorkExperienceList: SectionListProps = workExperienceList.map(
    (workExp) => ({
      title: workExp.role,
      subtitle: workExp.company,
      date: workExp.date,
      descList: workExp.descList,
    })
  );
  const tCoursesList: SectionListProps = coursesList.map((course) => ({
    title: course.title,
    subtitle: course.company,
    date: course.date,
    descList: course.descList,
  }));
  const tEducationList: SectionListProps = educationList.map((exp) => ({
    title: exp.school,
    subtitle: exp.desc,
    date: exp.date,
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
          <SectionList list={tEducationList} />
        </div>
      </div>
    </main>
  );
}
