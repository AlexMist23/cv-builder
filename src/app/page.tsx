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
  ProjectsList,
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
  projectsList,
  targetCompany,
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
        <div className={styles.pageElement}>
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
        <div className={styles.pageElement}>
          <div className={styles.dotLine} />
          <SectionTitle
            title="WORK EXPERIENCE"
            imgSrc="/svg/sections/work_experience.svg"
          />
          <SectionList list={tWorkExperienceList} />
        </div>
        <div className={styles.pageElement}>
          <div className={styles.dotLine} />
          <SectionTitle title="COURSES" imgSrc="/svg/sections/courses.svg" />
          <SectionList list={tCoursesList} />
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.pageElement}>
          <div className={styles.dotLine} />
          <SectionTitle
            title="EDUCATION"
            imgSrc="/svg/sections/education.svg"
            lineHide={true}
          />
          <SectionList list={tEducationList} />
        </div>
        <div className={styles.pageElement}>
          <div className={styles.dotLine} />
          <SectionTitle title="PROJECTS" imgSrc="/svg/sections/projects.svg" />
          <ProjectsList list={projectsList} />
        </div>

        <div className={styles.pageElement}>
          <SectionTitle
            title="LANGUAGES"
            imgSrc="/svg/sections/languages.svg"
          />
          <Languages languages={languages} />
        </div>

        <p className={styles.footer}>
          {targetCompany && (
            <>
              I hereby give consent for my personal data to be processed by{" "}
              {targetCompany} for the purpose of conducting recruitment for the
              position for which I am applying. I also consent to processing of
              my personal data by {targetCompany} for the purposes of any future
              recruitment processes.
            </>
          )}
        </p>
      </div>
    </main>
  );
}
