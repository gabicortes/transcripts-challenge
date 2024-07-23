import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Transcript } from "./components/Transcript";

// TODO: chequear que haya aplicado el overflow auto y aparezca la scroll bar
// TODO: agregar id

function App() {
  return (
    <Router>
      <Routes>
        <Route path='transcripts' element={<Transcript />} />
      </Routes>
    </Router>
  );
}

export default App;
