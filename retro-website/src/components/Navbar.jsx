import React from "react";

const Navbar = () => {
  return (
    <nav className="lg:h-20 md:h-16 sm:h-12 h-16 w-100vw lg:pt-2 lg:px-4 px-3 md:pt-3 pt-1 border-b-2 border-white text-white">
      <div className="h-full w-full flex align-middle">
        {/* Logo and quotes  */}
        <div className="h-full w-[90%] md:w-1/4 flex flex-grow  ">
          {/* logo  */}
          <div className="lg:text-6xl sm:text-5xl text-4xl font-extrabold relative self-end h-auto">
            <span> NEON</span>
            <span className="absolute top-1 right-[-1.25rem] text-sm">TM</span>
          </div>

          {/* quote  */}
          <div className="flex-shrink flex flex-col leading-tight ml-6 md:text-[10px] text-[7px] lg:text-[12px] justify-end mb-2 font-semibold">
            <p className="flex-shrink">“I'm wearing dark sunglasses today,</p>
            <p className="flex-shrink">because I'm seeing the future and</p>
            <p className="flex-shrink">
              it's looking very bright.” David Lynch
            </p>
          </div>
        </div>

        {/* Time frame  */}
        <div className="h-full md:w-1/4 w-0 flex items-center justify-evenly xl:text-md md:text-sm sm:text-xs">
          <span>4:19 pm (Barcelona)</span>
          <span>11:20 pm (Hong Kong)</span>
        </div>

        {/* Nav Links  */}
        <div className="h-full md:w-1/4 w-0 flex xl:text-2xl lg:text-lg md:text-md sm:text-sm  items-center flex-grow">
          <ul className="flex flex-row justify-evenly w-full">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#approach">Approach</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#radio">Radio</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* For Mobile Screen  */}
        <div className="w-16 h-full md:w-0 "></div>
      </div>
    </nav>
  );
};

export default Navbar;
