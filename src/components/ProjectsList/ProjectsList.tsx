import styles from "./component.module.css";

interface ProjectsListElement {
  name: string;
  techStack: string[];
  demo?: string;
  repo: string;
  date?: { start: string; end: string | "Present" | "Aktualnie" };
  descList: string[];
}

interface Props {
  list: ProjectsListElement[];
}
export const ProjectsList = ({ list }: Props) => {
  return (
    <ul className={styles.main}>
      {list.map(({ name, techStack, demo, repo, descList }, i) => (
        <ListElement
          key={i}
          name={name}
          techStack={techStack}
          demo={demo}
          repo={repo}
          descList={descList}
        />
      ))}
    </ul>
  );
};

const ListElement = ({
  name,
  techStack,
  demo,
  repo,
  date,
  descList,
}: ProjectsListElement) => {
  return (
    <li className={styles.listContainer}>
      <div className={styles.ball1}></div>
      <div>
        <h2 className={styles.name}>{name}</h2>
        <h2 className={styles.techStack}>{techStack.join(", ")}</h2>
        {demo && (
          <p className={styles.linkContainer}>
            Demo:{" "}
            <a className={styles.a} href={demo}>
              {demo}
            </a>
          </p>
        )}
        <p className={styles.linkContainer}>
          Repository:{" "}
          <a className={styles.a} href={repo}>
            {repo}
          </a>
        </p>
        <ul className={styles.descContainer}>
          {descList.map((desc, i) => (
            <li key={i} className={styles.descLiContainer}>
              <div className={styles.ball2}></div>
              <p>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
