import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Donate from "./components/Donate/Donate";
import Centers from "./components/Center/Centers";
import Check from "./components/Check/Check";
import NotFound from "./components/NotFound/NotFound";
import fetchCenters from "./utils/fetchCenters";
import { API } from "./services/api";
import "./App.css";

const App = () => {
  const [centersData, setCentersData] = useState([]);
  const [centersError, setCentersError] = useState("");

  useEffect(() => {
    const fetchCentersFromApi = async () => {
      try {
        const result = await fetchCenters(API); // Assuming fetchData is a function in api.js
        setCentersData(result.data);
        setCentersError(""); // when url corrected error shouldn't persists
      } catch (error) {
        setCentersError(error.message);
        setCentersData([]); // when url corrupted res shouldn't persist
      }
      console.log("Fetching data...");
    };

    fetchCentersFromApi();
  }, []);

  return (
    <div className="body">
      <NavBar />

      <div className="main-comp">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/centers" element={<Centers centersData={centersData} centersError={centersError}/>} />
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
