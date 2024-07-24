import { useTranscripts } from "../../hooks/useTranscripts";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { TranscriptText } from "../TranscriptText";
import styles from "./Transcript.module.css";

export const Transcript = () => {
    const { transcript } = useTranscripts();

    return (
        <div className={styles.wrapper}>
            <div className={styles.textSection}>
                <Header title={transcript?.title || "Loading..."} />
                <TranscriptText blocks={transcript?.blocks} />
            </div>
            <Footer audioUrl={transcript?.audioUrl} />
        </div>
    );
};
