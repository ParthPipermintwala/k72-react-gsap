import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-950 text-white mt-3 w-full h-[30vh] p-3 py-5 flex flex-col justify-between max-sm:p-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 text-center text-4xl font-[600] max-sm:text-xl">
          <div className="p-2 border-2 rounded-full w-[7vw] h-[4vw] max-sm:w-[5vh] max-sm:h-[1vh] max-sm:p-3 flex justify-center items-center  hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
            <p>IN</p>
          </div>
          <div className="p-2 border-2 rounded-full w-[7vw] h-[4vw]  max-sm:w-[5vh] max-sm:h-[1vh] max-sm:p-3 flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
            <p className="text-center">IG</p>
          </div>
          <div className="p-2 border-2 rounded-full w-[7vw] h-[4vw]  max-sm:w-[5vh] max-sm:h-[1vh] max-sm:p-3 flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
            <p className="text-center">FB</p>
          </div>
          <div className="p-2 border-2 rounded-full w-[7vw] h-[4vw]  max-sm:w-[5vh] max-sm:h-[1vh] max-sm:p-3 flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
            <p className="text-center">LI</p>
          </div>
        </div>
        <div className="px-6 pb-2 border-2 text-center text-4xl max-sm:text-2xl max-sm:px-3 max-sm:pb-1 font-[600] rounded-full flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div className="uppercase flex justify-between items-center max-sm:flex-col max-sm:gap-1">
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&duration=3000&pause=1000&color=D3FD50&center=true&vCenter=true&multiline=false&repeat=true&width=380&lines=Created+by+Parth+Pipermintwala"
          alt="Author"
          className=""
        />
        <div className="flex justify-center items-center uppercase text-sm font-[400] gap-6 max-sm:hidden">
          <p>privacy policy</p>
          <p>privacy notice</p>
          <p>terms of service</p>
          <p>content choices</p>
        </div>
      </div>
    </div>
  );
}
