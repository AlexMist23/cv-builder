import styles from "./head.module.css";

interface Props {
  name: string;
  jobDesc: string;
  summary: string;
}

export const Head:React.FC<Props> = ({ name, jobDesc, summary }) => {
  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <h3 className={styles.jobDesc}>{jobDesc}</h3>
      <p className={styles.summary}>{summary}</p>
    </>
  );
};
