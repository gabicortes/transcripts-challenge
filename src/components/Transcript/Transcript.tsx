import { useState } from "react";
import { useTranscripts } from "../../hooks/useTranscripts";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { TranscriptText } from "../TranscriptText";
import styles from "./Transcript.module.css";

export const Transcript = () => {
    const [playbackTime, setPlaybackTime] = useState(0);
    const { transcript } = useTranscripts();

    return (
        <div className={styles.wrapper}>
            <div className={styles.textSection}>
                <Header title={transcript?.title || "Loading..."} />
                <TranscriptText blocks={transcript?.blocks} playbackTime={playbackTime} />
            </div>
            <Footer audioUrl={transcript?.audioUrl} onChangeTime={setPlaybackTime} />
        </div>
    );
};
