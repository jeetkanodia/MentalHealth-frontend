import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/about" element={<p>About</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
