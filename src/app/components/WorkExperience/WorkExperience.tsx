import styles from "./workexperience.module.css";
import Image from "next/image";

interface Props {
  role: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList: string[];
}

export const WorkExperience: React.FC<Props> = ({
  role,
  company,
  date,
  descList,
}) => {
  return (
    <div className={styles.workExpContainer}>
      <h3 className={styles.role}>{role}</h3>
      <h3 className={styles.company}>{company}</h3>
      <p className={styles.date}>
        {date.start} - {date.end}
      </p>
      <ul className={styles.descUl}>
        {descList.map((desc, i) => (
          <p className={styles.descLi} key={i}>
            {desc}
          </p>
        ))}
      </ul>
    </div>
  );
};
