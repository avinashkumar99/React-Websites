import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const imgs = [
  "images/1.jpg",
  // "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

const HeroSection2 = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const imageContainer = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImg((prev) => {
        if (prev === imgs.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    const tl = gsap.timeline();
    tl.fromTo(
      imageContainer.current,
      { opacity: 1 },
      {
        opacity: 1,
        delay: 1,

        scrollTrigger: {
          trigger: imageContainer.current,
          start: "top 300px",
          end: "bottom 80%",
          // markers: true,
          scrub: true,
        },
      }
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="hero2"
      className="w-full h-56 md:h-screen relative overflow-hidden object-cover bg-white"
    >
      <div className="h-full w-full" ref={imageContainer}>
        <img
          loading="lazy"
          ref={imgRef}
          src={imgs[currentImg]}
          alt="image1"
          className="absolute top-0 left-0 h-[100%] sm:h-auto w-[100%]"
        />
      </div>
    </div>
  );
};

export default HeroSection2;
