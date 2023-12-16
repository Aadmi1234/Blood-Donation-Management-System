import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Donate from "./components/Donate/Donate";
import Centers from "./components/Center/Centers";
import Check from "./components/Check/Check";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <NavBar />

      <div className="main-comp">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/centers" element={<Centers />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/check" element={<Check />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
