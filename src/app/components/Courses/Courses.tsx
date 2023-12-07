import styles from "./workexperience.module.css";

interface Course {
  title: string;
  company: string;
  date: { start: string; end: string | "Present" };
  desc: string;
}

interface Props {
  CoursesList: Course[];
}

export const WorkExperience: React.FC<Props> = ({ CoursesList }) => {
  return (
    <ul className={styles.main}>
      {CoursesList.map(({ title, company, date, desc }, i) => (
        <CoursesElement
          key={i}
          title={title}
          company={company}
          date={date}
          desc={desc}
        />
      ))}
    </ul>
  );
};

const CoursesElement: React.FC<Course> = ({
  title,
  company,
  date,
  desc,
}) => {
  return (
    <li className={styles.workExpContainer}>
      <div className={styles.ball1}></div>
      <div className={styles.workExp}>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.company}>{company}</h2>
        <p className={styles.date}>
          {date.start} - {date.end}
        </p>
        <li className={styles.descLiContainer}>
          <div className={styles.ball2}></div>
          <p className={styles.descLi}>{desc}</p>
        </li>
      </div>
    </li>
  );
};
