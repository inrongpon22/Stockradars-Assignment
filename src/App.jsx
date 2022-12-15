import "./App.css";
// react router dom
import { Routes, Route } from "react-router-dom";
// pages
import Part1 from "./Pages/Part1";
import Part2 from "./Pages/Part2";
import RegisterSuccess from "./Components/RegisterSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Part1 />} />
        <Route path="/part2" element={<Part2 />} />
        <Route path="/part2/registsuccess" element={<RegisterSuccess />} />
      </Routes>
    </>
  );
}

export default App;
