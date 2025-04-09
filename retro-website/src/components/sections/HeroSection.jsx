import React, { useEffect, useRef } from "react";

import gsap from "gsap";

const headlines = [
  {
    id: 1,
    text: "GLOBAL BRANDING &",
  },
  {
    id: 2,
    text: "VISUAL DESIGN STUDIO",
  },
  {
    id: 3,
    text: "FROM BARCELONA.",
  },
];

const HeroSection = () => {
  const h1refs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      h1refs.current,
      { x: "-10vw", opacity: 0 },
      { x: "0vw", opacity: 1, duration: 2, stagger: 0.5, ease: "back.in" }
    );
  }, []);
  return (
    <>
      <div
        id="hero"
        className="w-[100%] h-auto text-white xl:p-8 lg:p-6 md:p-4 p-2"
      >
        {headlines.map((obj, idx) => {
          return (
            <>
              <h1
                key={obj.id}
                ref={(el) => (h1refs.current[idx] = el)}
                className="font-extrabold 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-3xl tracking-tighter leading-tight headingtext"
              >
                {obj.text}
              </h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
