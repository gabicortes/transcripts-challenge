import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound, Transcript } from "./components";

// TODO: chequear que haya aplicado el overflow auto y aparezca la scroll bar
// TODO: agregar id

function App() {
  return (
    <Router>
      <Routes>
        <Route path='transcripts' element={<Transcript />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
