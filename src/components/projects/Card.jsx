import React from "react";

export default function Card({ src }) {
  return (
    <div className="w-1/2 h-full relative hover:rounded-4xl transition-all overflow-hidden group max-sm:w-full rounded-xs">
      <img
        src={src}
        alt=""
        className="object-cover w-full h-full"
        loading="lazy"
      />
      <div className="left-0 h-full w-full absolute top-0  bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-100">
        <h2 className=" text-teal-50  text-[3.5vw] border-2 rounded-full p-2 px-8">
          VIEW PROJECT
        </h2>
      </div>
    </div>
  );
}
