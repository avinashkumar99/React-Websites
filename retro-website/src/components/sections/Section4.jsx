import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Section4 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".ani-sec4",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      {
        y: -100,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".ani-sec4m",
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="ani-sec4m h-screen w-full flex flex-col lg:text-[10rem] xl:text-[12rem] 2xl:text-[20rem] md:text-[8rem] text-[4rem] bg-white font-extrabold p-4">
      <div className="ani-sec4 h-auto w-full ani-sec4 text-center">
        FEATURED
      </div>
      <div className="ani-sec4 h-auto w-full ani-sec4 text-center">WORK</div>
    </div>
  );
};

export default Section4;
