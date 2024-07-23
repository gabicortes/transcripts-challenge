import audioIcon from "../../assets/icons/audioIcon.svg";
import playIcon from "../../assets/icons/playIcon.svg";
import moreOptions from "../../assets/icons/moreOptions.svg";
import styles from "./MediaPlayer.module.css";

export const MediaPlayer = () => {
    return (
        <div className={styles.wrapper}>
            <img src={playIcon} />
            <span>0:00 / 1:23</span>
            <progress id="audio" value="80" max="100" className={styles.progressBar}>
                80%
            </progress>
            <img src={audioIcon} />
            <img src={moreOptions} />
        </div>
    );
};
