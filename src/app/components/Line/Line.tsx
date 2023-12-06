import styles from "./line.module.css";

export const Line = () => {
  return (
    <div className={styles.lineContainer}>
      <div className={`${styles.st0} ${styles.line}`}></div>
      <div className={`${styles.st1} ${styles.line}`}></div>
      <div className={`${styles.st2} ${styles.line}`}></div>
    </div>
  );
};
