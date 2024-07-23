import { MediaPlayer } from "../MediaPlayer";
import styles from "./Footer.module.css";

export const Footer = () => {
    return <div className={styles.wrapper}>
        <MediaPlayer />
    </div>;
};
