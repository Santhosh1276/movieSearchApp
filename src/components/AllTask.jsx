/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";

const AllTask = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<h1> No Page found </h1>} />
      </Routes>
    </div>
  );
};

export default AllTask;
