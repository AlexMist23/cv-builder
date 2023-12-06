import styles from "./skillcontainer.module.css";

interface Props {
  skillsList: string[];
}

export const SkillContainer: React.FC<Props> = ({ skillsList }) => {
  return (
    <div className={styles.skillsContainer}>
      {skillsList.map((skill, i) => (
        <p key={i}>{skill}</p>
      ))}
    </div>
  );
};
