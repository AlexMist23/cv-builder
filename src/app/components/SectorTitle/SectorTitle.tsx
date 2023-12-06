import styles from "./sectortitle.module.css";
import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
}

export const SectorTitle: React.FC<Props> = ({ imgSrc, title }) => {
  return (
    <div className={styles.sectorTitle}>
      <Image src={imgSrc} width={50} height={50} alt="" />
      <h2>{title}</h2>
    </div>
  );
};
