import styles from "./component.module.css";

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const StretchSection = ({children}:Props) => {
    return (
        <div className={styles.div}>
            {children}
        </div>)
        
}