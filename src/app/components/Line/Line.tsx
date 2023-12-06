import styles from "./line.module.css";
import Image from "next/image";

export const Line = () => {
  return (
    <div className={styles.line}>
      <Image src={"/line.svg"} width={100} height={1} alt="" />
    </div>
  );
};
