"use client";

import { useSelector } from "react-redux";
import styles from "./component.module.css";
import { selectAdminData } from "@/lib/redux";
import Image from "next/image";

interface Props {
  info: Info;
  profileImgUrl: string;
}

export const Head = ({ info, profileImgUrl }: Props) => {
  const jobDesc = useSelector(selectAdminData).formData.position;
  return (
    <div className={styles.head}>
      <div className={styles.infoContainer}>
        <h1 className={styles.name}>{info.name}</h1>
        <h2 className={styles.jobDesc}>{jobDesc ? jobDesc : info.jobDesc}</h2>
        <br />
        <p className={styles.summary}>{info.summary}</p>
      </div>

      <Image
        className={styles.cvPic}
        src={profileImgUrl}
        alt=""
        height={192}
        width={192}
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
