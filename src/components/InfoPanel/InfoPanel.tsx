import styles from "./infopanel.module.css";
import Image from "next/image";

interface Props {
  contactInfo: {
    icon: string;
    content: string;
    link: string | null;
  }[];
}

export const InfoPanel: React.FC<Props> = ({ contactInfo }) => {
  return (
    <div className={styles.contactContainer}>
      {contactInfo.map((element, i) => (
        <div className={styles.contactElement} key={i}>
          <Image src={`/svg/info/${element.icon}`} height={20} width={20} alt="" />
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
