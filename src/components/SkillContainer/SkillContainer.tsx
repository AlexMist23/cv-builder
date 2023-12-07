import styles from "./component.module.css";

interface Props {
  skillsList: string[];
}

export const SkillContainer: React.FC<Props> = ({ skillsList }) => {
  return (
    <ul className={styles.skillsContainer}>
      {skillsList.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  );
};
