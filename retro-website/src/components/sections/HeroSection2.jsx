import React, { useRef } from "react";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <section id="hero2" className="w-[100%] h-[100vh] ">
      <img src="images/1.jpg" alt="image1" className="h-[100%] w-[100%]" />
    </section>
  );
};

export default HeroSection2;
