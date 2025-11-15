import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";
import Logo from "../common/Logo.jsx";
import Close from "../common/Close.jsx";

import MenuContainer from "./MenuContainer.jsx";
const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const navRef = useRef(null);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(navRef.current, {
      delay: 0.5,
      scale: 2,
      duration: 0.4,
    });
    tl.to(navRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
    const scroll = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 100) {
          gsap.to(navRef.current, { yPercent: -100, duration: 0.4 });
        } else if (self.direction === -1) {
          gsap.to(navRef.current, { yPercent: 0, duration: 0.4 });
        }
      },
    });
    ScrollTrigger.matchMedia({
      "(min-width:720px)": () => {
        ScrollTrigger.create({
          trigger: document.body,
          onUpdate: (self) => {
            if (self.scroll() <= 0) {
              gsap.to(".mainMenu", { height: "96px" });
              gsap.to(".menu", { y: 0 });
              gsap.to(".mainMenu h2", { opacity: 1 });
              gsap.to(".menu h2", { opacity: 1 });
            } else if (self.scroll() > 0) {
              gsap.to(".menu h2", { opacity: 0, duration: 0 });
              gsap.to(".mainMenu h2", { opacity: 0, duration: 0 });
              gsap.to(".menu", { y: "-100%" });
              gsap.to(".mainMenu", { height: "50px" });
            }
          },
        });
      },
    });
    return () => {
      scroll.kill();
      gsap.killTweensOf(navRef.current);
    };
  }, [currentPath]);
  return (
    <div
      className="flex fixed top-0 w-screen items-start justify-between z-10 overflow-hidden cursor-pointer"
      ref={navRef}
    >
      <Logo />
      <Close />

      <div className={`flex flex-row-reverse ${navOpen ? "hidden" : "block"} `}>
        <MenuContainer
          logo={true}
          click={() => setNavOpen(true)}
          main={true}
          title="Menu"
        />
        <MenuContainer
          logo={false}
          click={() => navigate("/Agence")}
          main={false}
          title="Agence"
          height={"h-[65px]"}
          width={"w-[24vw]"}
        />
        <MenuContainer
          logo={false}
          click={() => navigate("/Project")}
          main={false}
          title="Project"
          height={"h-[40px]"}
          width={"w-[24vw]"}
        />
      </div>
    </div>
  );
};

export default Navbar;
