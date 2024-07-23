import { Footer, Header, TranscriptText } from "./components";
import styles from "./App.module.css";

import { useEffect, useState } from "react";
import axiosInstance from "./getTranscript";

// TODO: chequear que haya aplicado el overflow auto y aparezca la scroll bar

function App() {
  return (
    <div className={styles.app}>
      <Header title="CompanyName Transcript Q4 2022" />
      <TranscriptText />
      <Footer />
    </div>
  );
}

export default App;
