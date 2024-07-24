import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound, Transcript } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='transcripts/:id' element={<Transcript />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
