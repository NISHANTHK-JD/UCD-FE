import "./App.css";
import "./Styles.css";
// import "./index.css";
import Navbar from "./Navbar";
import Register from "./Pages/Register";
// import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";

import { Route, Routes } from "react-router-dom";
import LoginSignup from "./Pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
