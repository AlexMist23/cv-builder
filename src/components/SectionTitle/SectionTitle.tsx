import { Line } from "../Line/Line";
import styles from "./sectiontitle.module.css";
import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ imgSrc, title }) => {
  return (
    <div className={styles.sectorTitle}>
      <Image src={`/svg/sections/${imgSrc}`} width={40} height={40} alt="" />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
