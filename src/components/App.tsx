import { Route, Routes } from "react-router-dom";
import Listquizpage from "../pages/Listquizpage";
import Quizpage from "../pages/Quizpage";
import { tests } from "../data";
import "../styles/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Listquizpage tests={tests} />}></Route>
      <Route path="/test/:id" element={<Quizpage tests={tests} />}></Route>
    </Routes>
  );
}

export default App;
