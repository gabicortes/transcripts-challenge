import { MediaPlayer } from "../MediaPlayer";
import styles from "./Footer.module.css";

type FooterProps = {
    audioUrl?: string
    onChangeTime: React.Dispatch<React.SetStateAction<number>>
}

export const Footer = ({ audioUrl, onChangeTime }: FooterProps) => {
    return <div className={styles.wrapper}>
        <MediaPlayer audioUrl={audioUrl} onChangeTime={onChangeTime} />
    </div >
};
