import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="flex flex-col justify-center bg-black min-h-[100vh] w-[100vw]">
      <Header />
      <Body />
    </div>
  );
};

export default App;
