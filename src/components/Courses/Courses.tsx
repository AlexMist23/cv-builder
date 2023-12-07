import styles from "./courses.module.css";

export interface Course {
  title: string;
  company: string;
  date: { start: string; end: string | "Present" };
  desc: string;
}

interface Props {
  coursesList: Course[];
}
export const Courses: React.FC<Props> = ({ coursesList }) => {
  return (
    <ul className={styles.main}>
      {coursesList.map(({ title, company, date, desc }, i) => (
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

const CoursesElement: React.FC<Course> = ({ title, company, date, desc }) => {
  return (
    <li className={styles.workExpContainer}>
      <div className={styles.ball1}></div>
      <div className={styles.workExp}>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.company}>{company}</h2>
        <p className={styles.date}>
          {date.start} - {date.end}
        </p>
        <div className={styles.descLiContainer}>
          <div className={styles.ball2}></div>
          <p className={styles.descLi}>{desc}</p>
        </div>
      </div>
    </li>
  );
};
