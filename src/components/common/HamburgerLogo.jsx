import React from "react";
import { useLocation } from "react-router-dom";

export default function HamburgerLogo() {
  const location = useLocation().pathname;
  return (
    <div className=" h-full w-full relative flex flex-col items-end justify-start gap-1.5 p-5 max-lg:px-5">
      <div className={` w-20 h-0.5 z-50 group-hover:bg-black transition-all ${location === '/Contact' ? 'bg-black' : 'bg-white'}`}></div>
      <div className={` w-12 h-0.5 z-50 group-hover:bg-black transition-all ${location === '/Contact' ? 'bg-black' : 'bg-white'}`}></div>
    </div>
  );
}
