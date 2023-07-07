// import { useState, useEffect } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Films from "./pages/Films";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Films" element={<Films/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
