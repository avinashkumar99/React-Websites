import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./sections/HeroSection";
import HeroSection2 from "./sections/HeroSection2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const screens = gsap.utils.toArray(".display-screen");

    const tops = screens.map((panel) =>
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
      })
    );

    screens.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start:
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map((st) => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            snapScroll
          );
        },
        duration: 0.5,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative min-h-[100vh] w-[100%]" ref={containerRef}>
      <section className="display-screen panels">
        <HeroSection />
      </section>
      <section className="display-screen panels">
        <HeroSection2 />
      </section>
      <section className="display-screen panels">
        <Section3 />
      </section>
      <section className="display-screen panels">
        <Section4 />
      </section>
      <section className="display-screen panels">
        <Section5 />
      </section>
    </div>
  );
};

export default Body;
