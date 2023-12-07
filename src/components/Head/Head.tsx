import styles from "./head.module.css";

interface Props {
  info: Info;
}

export const Head = ({ info }: Props) => {
  const { name, jobDesc, summary } = info;
  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.jobDesc}>{jobDesc}</h2>
      <h4 className={styles.summaryTitle}>SUMMARY</h4>
      <p className={styles.summary}>{summary}</p>
    </>
  );
};

export default Head;

export interface Info {
  name: string;
  jobDesc: string;
  summary: string;
}