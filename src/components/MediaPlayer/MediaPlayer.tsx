import React, { useEffect } from "react";
import styles from "./MediaPlayer.module.css";

type MediaPlayerProps = {
    audioUrl?: string;
    onChangeTime: React.Dispatch<React.SetStateAction<number>>;
    audioRef: React.RefObject<HTMLAudioElement>;
};

export const MediaPlayer = ({
    audioUrl,
    audioRef,
    onChangeTime,
}: MediaPlayerProps) => {
    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            const handleTimeUpdate = () => {
                onChangeTime(audio.currentTime);
            };

            audio.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                audio.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <audio
                className={styles.audioWrapper}
                controls
                ref={audioRef}
                src={audioUrl}
            />
        </div>
    );
};
