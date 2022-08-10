import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Error from "./pages/Error";
import About from "./pages/About";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:idLogement" element={<Logement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>
);
