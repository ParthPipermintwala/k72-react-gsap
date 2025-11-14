import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="mx-2 uppercase font-[font1] text-center text-[10vw] leading-[11vw] max-md:leading-[20vw] max-md:text-[13vw]">
      <div className="max-md:leading-[14vw] max-md:mb-4">The spark for</div>
      <div className="h-[8vw] flex items-center justify-center gap-4 max-md:gap-1 max-sm:my-2 max-sm:gap-1">
        all
        <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden max-md:h-[7vh] max-md:w-[20vh] ">
          <Video rounded={1}/>
        </div>
        things
      </div>
      <div>creative</div>
    </div>
  );
};

export default HomeHeroText;
