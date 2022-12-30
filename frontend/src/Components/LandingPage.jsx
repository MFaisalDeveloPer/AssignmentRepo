import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardCreate from "./CardCreate";
import CardUpate from "./CardUpdate";
import Home from "./Home";
import { LoginPage } from "./LoginPage";
import ShowCard from "./ShowCard";

const LandingPage = () => {
  return (
    <div>
      <BrowserRouter>
        {/* { <Home /> } */}
        {/* { <LoginPage/> } */}
        <Routes>
          <Route path="/CardEmployee" element={<CardCreate />} />
          <Route path="/empDetails" element={<ShowCard />} />
          <Route path="/CardUpate" element={<CardUpate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LandingPage;
