// import React, { useEffect, useRef } from "react";
// import HeroSection from "./sections/HeroSection";
// import HeroSection2 from "./sections/HeroSection2";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Body = () => {
//   const sectionRefs = useRef([]);

//   const addToRefs = (el) => {
//     if (el && !sectionRefs.current.includes(el)) {
//       sectionRefs.current.push(el);
//     }
//   };
//   useEffect(() => {
//     sectionRefs.current.forEach((section) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: () =>
//           section.offsetHeight < window.innerHeight
//             ? "top top"
//             : "bottom bottom",
//         pin: true,
//         pinSpacing: false,
//       });
//     });
//   }, []);

//   return (
//     <>
//       <div className="relative min-h-[100vh] w-[100vw] ">
//         <section className="panels" ref={addToRefs}>
//           <HeroSection />
//         </section>
//         <section className="panels" ref={addToRefs}>
//           <HeroSection2 />
//         </section>
//         <section className="panels" ref={addToRefs}>
//           {/* <HeroSection2 /> */}
//         </section>
//         <section className="panels" ref={addToRefs}>
//           {/* <HeroSection2 /> */}
//         </section>
//         <section className="panels" ref={addToRefs}>
//           {/* <HeroSection2 /> */}
//         </section>
//       </div>
//     </>
//   );
// };

// export default Body;

import React, { useEffect, useRef } from "react";
import HeroSection from "./sections/HeroSection";
import HeroSection2 from "./sections/HeroSection2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      console.log("element: ", el);
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Iterate over the section refs and create ScrollTriggers for each
    sectionRefs.current.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: () =>
          section.offsetHeight < window.innerHeight
            ? "top top"
            : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <>
      <div className="relative min-h-[100vh] w-[100vw]">
        <section className="panels" ref={addToRefs}>
          <HeroSection />
        </section>
        <section className="panels" ref={addToRefs}>
          <HeroSection2 />
        </section>
        <section className="panels" ref={addToRefs}>
          <Section3 />
        </section>
        <section className="panels" ref={addToRefs}>
          <Section4 />
        </section>
        <section className="panels" ref={addToRefs}>
          <Section5 />
        </section>
      </div>
    </>
  );
};

export default Body;
