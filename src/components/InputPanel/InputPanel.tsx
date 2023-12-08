import styles from "./component.module.css";

interface Props {
  data?: string;
}

export const InputPanel = ({ data }: Props) => {
  return (
    <div className={styles.div}>
      <span className={styles.span}>Position:</span>
      <input className={styles.input}></input>
      <span className={styles.span}>Company:</span>
      <input className={styles.input}></input>
    </div>
  );
};
