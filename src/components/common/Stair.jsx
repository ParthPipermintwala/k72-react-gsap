import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";

const Stair = ({ children }) => {
  const [navOpen] = useContext(NavbarContext)??[];
  const currentPath = useLocation().pathname;
  const stairRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(stairRef.current, {
        display: "block",
        duration: 0,
      });
      tl.from(".stair", {
        height: 0,
        delay: 0.1,
        stagger: {
          amount: -0.26, 
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.23, 
        },
      });
      tl.to(stairRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1,
        duration: 0.1,
      });
      return () => {
        tl.kill();
        gsap.killTweensOf(stairRef.current);
        gsap.killTweensOf(".stair");
        gsap.killTweensOf(pageRef.current);
      };
    },
    { dependencies: navOpen ? [] : [currentPath], revertOnUpdate: true }
  );
  return (
    <>
      <div ref={stairRef} className="w-screen h-screen fixed z-50 top-0  ">
        <div className="w-full h-full flex">
          <div className="stair h-full w-1/5 bg-gray-950"></div>
          <div className="stair h-full w-1/5 bg-gray-950"></div>
          <div className="stair h-full w-1/5 bg-gray-950"></div>
          <div className="stair h-full w-1/5 bg-gray-950"></div>
          <div className="stair h-full w-1/5 bg-gray-950"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </>
  );
};

export default Stair;
