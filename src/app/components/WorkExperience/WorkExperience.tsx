import styles from "./workexperience.module.css";
import Image from "next/image";

interface WorkExp {
  role: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList: string[];
}

interface Props {
  workExperienceList: WorkExp[];
}

export const WorkExperience: React.FC<Props> = ({ workExperienceList }) => {
  return (
    <ul className={styles.main}>
      {workExperienceList.map(({ role, company, date, descList }, i) => (
        <WorkExperienceElement
          key={i}
          role={role}
          company={company}
          date={date}
          descList={descList}
        />
      ))}
    </ul>
  );
};

const WorkExperienceElement: React.FC<WorkExp> = ({
  role,
  company,
  date,
  descList,
}) => {
  return (
    <ul className={styles.workExpContainer}>
      <Image src={"/li_ball.svg"} width={10} height={10} alt="" />
      <li className={styles.workExp}>
        <h2 className={styles.role}>{role}</h2>
        <h2 className={styles.company}>{company}</h2>
        <p className={styles.date}>
          {date.start} - {date.end}
        </p>
        <ul className={styles.descUl}>
          {descList.map((desc, i) => (
            <li key={i} className={styles.descLiContainer}>
              <Image src={"/li_ball.svg"} width={7} height={7} alt="" />
              <p className={styles.descLi}>{desc}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
