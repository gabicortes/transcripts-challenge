import { MediaPlayer } from "../MediaPlayer";
import styles from "./Footer.module.css";

type FooterProps = {
    audioUrl?: string
}

export const Footer = ({ audioUrl }: FooterProps) => {
    return <div className={styles.wrapper}>
        <MediaPlayer audioUrl={audioUrl} />
    </div>;
};
