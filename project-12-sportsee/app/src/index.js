import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import HeaderNavigation from "./components/HeaderNavigation";
import SideNavigation from "./components/SideNavigation";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <HeaderNavigation />
    <div className="container">
      <SideNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </BrowserRouter>
);
