import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vip from "./pages/Vip";
import Sobre from "./pages/Sobre";
import Torneios from "./pages/Torneios";
import Contato from "./pages/Contato";
import Subscribe from "./pages/Subscribe";
import Subscribe2 from "./pages/Subscribe2";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/torneios" element={<Torneios />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/inscricoes" element={<Subscribe2 />} />
      </Routes>
    </Router>
  );
}
