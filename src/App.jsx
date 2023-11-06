import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
