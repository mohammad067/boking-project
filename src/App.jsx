import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
  <>
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path="/"  />
        <Route path="/explore"  />
        <Route path="/popular"  />
        <Route path="/articles"  />
      </Routes>
    </BrowserRouter>
    <h1 className="text-center mt-20 mb-6 leading-tight font-bold text-6xl"> One platform for every <br/> ticket you need </h1>
    <p className="text-center text-sm leading-tight font-semibold"> one place for all your ticket booking needs </p>
    <button >ddffddf</button>
    </>
  );
}

export default App;