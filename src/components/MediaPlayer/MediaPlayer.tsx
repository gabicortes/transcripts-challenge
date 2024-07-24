import React, { useEffect } from "react";
import styles from "./MediaPlayer.module.css";

type MediaPlayerProps = {
    audioUrl?: string;
    audioRef: React.RefObject<HTMLAudioElement>;
    onChangeTime: React.Dispatch<React.SetStateAction<number | undefined>>;
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
                const roundedTime = Math.round(audio.currentTime * 1000) / 1000;
                onChangeTime(roundedTime);
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
