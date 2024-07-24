import React, { useState, useEffect, useRef } from "react";
import styles from "./MediaPlayer.module.css";

type MediaPlayerProps = {
    audioUrl?: string;
    onChangeTime: React.Dispatch<React.SetStateAction<number>>
};

export const MediaPlayer = ({ audioUrl, onChangeTime }: MediaPlayerProps) => {

    const audioRef = useRef<HTMLAudioElement>(null);

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
        <audio
            className={styles.audioWrapper}
            controls
            ref={audioRef}
            src={audioUrl}
        />
    );
};
