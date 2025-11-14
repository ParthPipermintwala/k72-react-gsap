import React from "react";

export default function Post({ src, fname, lname, role }) {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center relative">
      <img
        src={src}
        alt=""
        className="h-[98%] z-10 rounded-4xl max-lg:w-[70vw] max-md:h-[60vh] max-md:w-[80vw] max-lg:h-[85vh] max-md:max-h-[450px]"
        loading="lazy"
      />
      <div className="absolute top-[17%] px-2 left-0 flex flex-nowrap gap-1.5 max-sm:top-[10%]">
        <h1 className="text-[10vw] max-md:text-[14vw] font-[600] text-[#d3fd50]  w-[120vw] leading-none text-right agencyMove1">
          {fname}
        </h1>
      </div>
      <div className="absolute -left-[75vw] z-20 w-full bottom-[30%]">
        <div className="flex gap-13 items-end flex-nowrap leading-none agencyMove2 max-sm:gap-4">
          <h1 className="text-[10vw] font-[600] text-[#d3fd50] max-md:text-[14vw] ">
            {lname}
          </h1>
          <p className="text-[3vw] text-white mb-2 min-w-fit max-sm:text-[4vw] max-md:text-[8vw] ">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
