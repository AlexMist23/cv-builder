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
  clause,
} from "@/lib/data/pl-general";
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
          </div>
          <div className={styles.pageElement}>
            <InfoPanel contactInfo={contactInfo} />
          </div>
          <div className={styles.pageElement}>
            <div className={styles.dotLine} />
            <SectionTitle
              lineHide={true}
              title="DOŚWIADCZENIE"
              imgSrc="/svg/sections/work_experience.svg"
            />
            <SectionList list={tWorkExperienceList} />
          </div>
          <div className={styles.pageElement}>
            <div className={styles.dotLine} />
            <SectionTitle title="KURSY" imgSrc="/svg/sections/courses.svg" />
            <SectionList list={tCoursesList} />
          </div>
          <div className={styles.pageElement}>
            <SectionTitle title="JĘZYKI" imgSrc="/svg/sections/languages.svg" />
            <Languages languages={languages} />
          </div>

          <p className={styles.footer}>{clause}</p>
        </div>
      </main>
    </>
  );
}
