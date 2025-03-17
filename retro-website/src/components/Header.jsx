import React from "react";

const Header = () => {
  return (
    <header className="w-[100vw] min-h-28  bg-black text-white flex  items-center">
      <div className="w-1/3 bg-blue-900  flex ">
        <span className="h-full font-extrabold text-6xl headingtext">NEON</span>
        <span className="self-start font-semibold">TM</span>
        <span className="font-semibold bodyText w-1/2">
          “I'm wearing dark sunglasses today, because I'm seeing the future and
          it's looking very bright.” David Lynch
        </span>
      </div>
    </header>
  );
};

export default Header;
