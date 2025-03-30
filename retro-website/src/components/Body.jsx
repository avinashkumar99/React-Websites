import React from "react";
import HeroSection from "./sections/HeroSection";
import HeroSection2 from "./sections/HeroSection2";

const Body = () => {
  return (
    <>
      <div className="min-h-[100vh] min-w-[100vw] ">
        <HeroSection />
        <HeroSection2 />
      </div>
    </>
  );
};

export default Body;
