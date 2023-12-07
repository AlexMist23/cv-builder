import styles from "./component.module.css";

interface ListElement {
  title: string;
  subtitle?: string;
  date: { start: string; end: string | "Present" };
  descList?: string[];
}
export interface SectionListProps extends Array<ListElement> {}

interface Props {
  list: SectionListProps;
}
export const SectionList = ({ list }: Props) => {
  return (
    <ul className={styles.main}>
      {list.map(({ title, subtitle, date, descList }, i) => (
        <ListElement
          key={i}
          title={title}
          subtitle={subtitle}
          date={date}
          descList={descList}
        />
      ))}
    </ul>
  );
};

const ListElement: React.FC<ListElement> = ({
  title,
  subtitle,
  date,
  descList,
}) => {
  return (
    <li className={styles.listContainer}>
      <div className={styles.ball1}></div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.date}>
          {date.start} - {date.end}
        </p>
        <ul>
          {descList &&
            descList.map((desc, i) => (
              <li key={i} className={styles.descLiContainer}>
                <div className={styles.ball2}></div>
                <p className={styles.descLi}>{desc}</p>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};
