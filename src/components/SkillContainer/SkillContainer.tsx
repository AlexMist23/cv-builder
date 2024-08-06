import styles from "./component.module.css";
import { TechnicalSkill } from "@/lib/data/en";
interface Props {
  skillsList: TechnicalSkill[];
}

export const SkillContainer: React.FC<Props> = ({ skillsList }) => {
  return (
    <ul className={styles.skillsContainer}>
      {skillsList.map((el, i) => (
        <li key={i}>
          <h3>{el.category}</h3>
          <p>{el.skills.join(', ')}</p>
        </li>
      ))}
    </ul>
  );
};
