import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<div />} />
          <Route path="/explore" element={<div />} />
          <Route path="/popular" element={<div />} />
          <Route path="/articles" element={<div />} />
        </Routes>
        <Home />
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;