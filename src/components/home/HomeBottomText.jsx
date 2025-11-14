import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="mx-2 font-[font1] text-[4vw] uppercase flex justify-center items-center gap-12 font-[1500] pb-8 max-sm:gap-3 max-sm:font-[1000] max-md:text-[6vw] ">
      <Link to='/Agence' className="border-3 border-white px-8 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] hover:scale-102 duration-250 ease-in-out max-md:py-1">
        Agence
      </Link>
      <Link to='/Project' className="border-3 border-white px-8 rounded-full  hover:border-[#D3FD50] hover:text-[#D3FD50] hover:scale-102 duration-250 ease-in-out max-md:py-1">
        Project
      </Link>
    </div>
  );
}

export default HomeBottomText;
