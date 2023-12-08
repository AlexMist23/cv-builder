"use client";

import { useSelector } from "react-redux";
import styles from "./component.module.css";
import { selectAdminData } from "@/lib/redux";

interface Props {
  info: Info;
}

export const Head = ({ info }: Props) => {
  const jobDesc = useSelector(selectAdminData).formData.position;
  return (
    <>
      <h1 className={styles.name}>{info.name}</h1>
      <h2 className={styles.jobDesc}>
        {jobDesc ? jobDesc : info.jobDesc}
      </h2>
      <h4 className={styles.summaryTitle}>SUMMARY</h4>
      <p className={styles.summary}>{info.summary}</p>
    </>
  );
};

export default Head;

export interface Info {
  name: string;
  jobDesc: string;
  summary: string;
}
