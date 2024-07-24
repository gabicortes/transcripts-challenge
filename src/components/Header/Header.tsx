import styles from "./Header.module.css"

type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return <h1 className={styles.header}>{title}</h1>;
};
