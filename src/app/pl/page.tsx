"use client";

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
  InputPanel,
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
} from "@/lib/data/pl";

export default function Index() {
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
    <>
      {process.env.NEXT_PUBLIC_IS_ADMIN && <InputPanel />}
      <main className={styles.main}>
        <div className={styles.page}>
          <div className={styles.pageElement}>
            <Head
              info={{
                name: info.name,
                jobDesc: info.jobDesc,
                summary: info.summary,
              }}
              profileImgUrl="/webp/cv-img.webp"
            />
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
            <SectionTitle
              title="PROJECTS"
              imgSrc="/svg/sections/projects.svg"
            />
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
            I agree to the processing of personal data provided in this document
            for realising the recruitment process pursuant to the Personal Data
            Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and
            in agreement with Regulation (EU) 2016/679 of the European
            Parliament and of the Council of 27 April 2016 on the protection of
            natural persons with regard to the processing of personal data and
            on the free movement of such data, and repealing Directive 95/46/EC
            (General Data Protection Regulation).
          </p>
        </div>
      </main>
    </>
  );
}
