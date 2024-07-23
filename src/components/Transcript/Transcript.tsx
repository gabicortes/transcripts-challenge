import { Footer } from '../Footer'
import { Header } from '../Header'
import { TranscriptText } from '../TranscriptText'
import styles from './Transcript.module.css'

export const Transcript = () => {
    return <div className={styles.wrapper}>
        <Header title="CompanyName Transcript Q4 2022" />
        <TranscriptText />
        <Footer />
    </div>
}