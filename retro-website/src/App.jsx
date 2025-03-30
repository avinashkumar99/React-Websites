import { useState, useEffect } from "react";
import "./App.css";
import React from "react";

import Body from "./components/Body";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col bg-black min-h-[100vh] w-[100vw]">
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
