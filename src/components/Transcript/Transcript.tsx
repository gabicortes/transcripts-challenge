import { useTranscripts } from '../../hooks/useTranscripts'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { TranscriptText } from '../TranscriptText'
import styles from './Transcript.module.css'

export const Transcript = () => {
    const { transcript, blocks } = useTranscripts()

    return <div className={styles.wrapper}>
        <Header title={transcript?.title || 'Loading...'} />
        <TranscriptText blocks={blocks} />
        <Footer />
    </div>
}