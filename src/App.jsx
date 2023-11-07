import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Resources from "./components/Resources";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/taketest/:test" element={<QuizPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
