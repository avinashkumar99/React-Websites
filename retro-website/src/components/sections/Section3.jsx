import React, { useEffect } from "react";
import gsap from "gsap";

const Section3 = () => {
  useEffect(() => {
    //  gsap.to(".anchor-t" ,{
    //   width: '100%',
    //   duration:
    //  })
  }, []);
  return (
    <div className="h-auto md:h-screen w-full bg-black text-white">
      <div className="h-full w-full md:flex md:flex-col md:align-middle md:justify-center py-8 relative">
        {/* Relative position to parent  */}
        <div className="hidden md:block absolute right-4 top-4 group">
          <a href="#" className={`anchor-t lg:text-2xl md:text-xl relative`}>
            Learn more about our approach
          </a>
          <span className="absolute w-0 h-[3px] bg-white bottom-0 left-0 transition-all duration-500 group-hover:w-full"></span>
        </div>

        {/* Normal flow  */}
        <div className="h-auto md:w-[40%] w-[95%] text-3xl md:text-4xl lg:text-6xl mx-auto font-semibold mb-10">
          Where Innovation Meets Identity: Shaping Brands for the Future.
        </div>
        <p className="h-auto md:w-[40%] w-[95%] text-sm md:text-lg mx-auto my-6 text-[#c7bebd]">
          At NEON Retrofuture, we craft more than just designs—we create
          immersive brand experiences that captivate and inspire. Our approach
          merges global influences with cutting-edge technology and a distinct
          retro-futuristic vision, leading to visually stunning and meaningful
          identities.
        </p>
        <p className="h-auto md:w-[40%] w-[95%] text-sm md:text-lg mx-auto text-[#c7bebd] mb-6">
          We transform innovative concepts into designs that not only resonate
          across diverse cultures but also endure over time. Discover how our
          blend of creativity and expertise shapes unforgettable brand stories
          and forges connections that last.
        </p>
        <div className="md:hidden p-4 mb-4 group ">
          <a href="#" className="anchor-t relative">
            Learn more about our approach
          </a>
          <span className="absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Section3;
