import styles from "./component.module.css";
import Image from "next/image";

export interface ContactInfo {
  icon: string;
  content: string;
  link?: string;
}

export const InfoPanel = ({ contactInfo }: { contactInfo: ContactInfo[] }) => {
  return (
    <div className={styles.contactContainer}>
      {contactInfo.map((element, i) => (
        <div className={styles.contactElement} key={i}>
          <Image
            src={`/svg/info/${element.icon}`}
            height={20}
            width={20}
            alt=""
          />
          {element.link ? (
            <a href={element.link}>{element.content}</a>
          ) : (
            <span>{element.content}</span>
          )}
        </div>
      ))}
    </div>
  );
};
