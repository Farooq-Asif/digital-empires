import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Press from "../Pages/Press/Press";
import Login from "../Pages/Login/Login";
import Main from "../Dashboard/Main";
import RecentNews from "../Dashboard/RecentNews";
import { useSelector } from "react-redux";
import CeoDetails from "../Pages/CeoDetails/CeoDetails";
const Routers = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/press" element={<Press />} />
      <Route path="/ceodetails" element={<CeoDetails/>} />
      <Route path="/login" element={<Login />} />
      {token ? (
        <>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/recentnews" element={<RecentNews />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default Routers;
