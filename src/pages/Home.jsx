import { useRef } from "react";
import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Video from "../components/home/Video.jsx";
export function Component() {
  const contentRef = useRef(null);
  useGSAP(() => {
    gsap.from(contentRef.current, {
      delay: 0.85,
      scale: 1.9,
      duration: 0.5,
    });
    return () => {
      gsap.killTweensOf(contentRef.current);
    };
  });
  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-full fixed">
        <Video />
      </div>
      <div
        className="pt-24 py-3 h-screen w-full relative flex flex-col justify-between text-white  max-md:justify-evenly"
        ref={contentRef}
      >
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
}
