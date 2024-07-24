import { useRef, useState } from "react";
import { useTranscripts } from "../../hooks/useTranscripts";
import { Header } from "../Header";
import { TranscriptText } from "../TranscriptText";
import styles from "./Transcript.module.css";
import { MediaPlayer } from "../MediaPlayer";

export const Transcript = () => {
    const [playbackTime, setPlaybackTime] = useState<number | undefined>(
        undefined
    );
    const audioRef = useRef<HTMLAudioElement>(null);
    const { transcript } = useTranscripts();

    const seekToTime = (seconds: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = seconds;
            setPlaybackTime(seconds);
        }
    };

    return (
        <>
            <div className={styles.textSection}>
                <Header title={transcript?.title || "Loading..."} />
                <TranscriptText
                    blocks={transcript?.blocks}
                    playbackTime={playbackTime}
                    seekToTime={seekToTime}
                />
            </div>
            <MediaPlayer
                audioUrl={transcript?.audioUrl}
                onChangeTime={setPlaybackTime}
                audioRef={audioRef}
            />
        </>
    );
};
