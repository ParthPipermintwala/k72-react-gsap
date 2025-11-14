import React from "react";

export default function Icon() {
  return (
    <div className="mt-25">
      <p className="uppercase text-md text-center font-[font2] my-5">
        Follow us
      </p>
      <div className="flex justify-center items-center gap-2 text-center text-4xl font-[600]">
        <div className="p-2 border-2 rounded-full max-sm:w-[9vh] max-sm:h-[5vh] max-sm:p-3  w-[7vw] h-[4vw] flex justify-center items-center  hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
          <p>IN</p>
        </div>
        <div className="p-2 border-2 rounded-full max-sm:w-[9vh] max-sm:h-[5vh] max-sm:p-3  w-[7vw] h-[4vw] flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
          <p className="text-center">IG</p>
        </div>
        <div className="p-2 border-2 rounded-full max-sm:w-[9vh] max-sm:h-[5vh] max-sm:p-3  w-[7vw] h-[4vw] flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
          <p className="text-center">FB</p>
        </div>
        <div className="p-2 border-2 rounded-full max-sm:w-[9vh] max-sm:h-[5vh] max-sm:p-3  w-[7vw] h-[4vw] flex justify-center items-center hover:border-[#D3FD50]  hover:text-[#D3FD50]  transition-all">
          <p className="text-center">LI</p>
        </div>
      </div>
    </div>
  );
}
