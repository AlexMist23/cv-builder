import { Line } from "../Line/Line";
import styles from "./component.module.css";
import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
  lineHide?: boolean;
}

export const SectionTitle = ({ imgSrc, title, lineHide = false }: Props) => {
  return (
    <>
      {!lineHide && <Line />}
      <div className={styles.sectorTitle}>
        <Image src={imgSrc} width={40} height={40} alt="" />
        <h2 className={styles.title}>{title}</h2>
      </div>
    </>
  );
};
