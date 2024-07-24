import React, { useState, useEffect, useRef } from "react";
import styles from "./MediaPlayer.module.css";

type MediaPlayerProps = {
    audioUrl?: string;
};

export const MediaPlayer = ({ audioUrl }: MediaPlayerProps) => {
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            const handleTimeUpdate = () => {
                setCurrentTime(audio.currentTime);
            };

            audio.addEventListener("timeupdate", handleTimeUpdate);

            return () => {
                audio.removeEventListener("timeupdate", handleTimeUpdate);
            };
        }
    }, []);

    return (
        <audio
            className={styles.audioWrapper}
            controls
            ref={audioRef}
            src={audioUrl}
        />
    );
};
