"use client";

import styles from "./component.module.css";
import Image from "next/image";

interface Props {
  info: Info;
  profileImgUrl: string;
}

export const Head = ({ info, profileImgUrl }: Props) => {
  return (
    <div className={styles.head}>
      <div className={styles.infoContainer}>
        <h1 className={styles.name}>{info.name}</h1>
        <h2 className={styles.jobDesc}>{info.jobDesc}</h2>
        <br />
        <p className={styles.summary}>{info.summary}</p>
      </div>

      <Image
        className={styles.cvPic}
        src={profileImgUrl}
        alt=""
        height={500}
        width={500}
        quality={100}
      />
    </div>
  );
};

export default Head;

export interface Info {
  name: string;
  jobDesc: string;
  summary: string;
}
