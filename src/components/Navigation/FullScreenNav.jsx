import { useContext, useRef } from "react";
import NavBarLink from "./NavBarLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { NavbarContext } from "../../context/NavContext";
import blog1 from "../../assets/Photos/FullNavigation_Photos/blog1-min.webp";
import blog2 from "../../assets/Photos/FullNavigation_Photos/blog2-min.webp";
import work1 from "../../assets/Photos/FullNavigation_Photos/work1.webp";
import work2 from "../../assets/Photos/FullNavigation_Photos/work2.webp";
import agency1 from "../../assets/Photos/FullNavigation_Photos/agency1-min.webp";
import agency2 from "../../assets/Photos/FullNavigation_Photos/agency2-min.webp";
import heart from "../../assets/Photos/FullNavigation_Photos/heart.svg";

export default function FullScreenNav() {
  const [, setNavOpen] = useContext(NavbarContext);
  const stairRef = useRef(null);
  const linksRef = useRef(null);
  const navigate = useNavigate();
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.set(stairRef.current, { display: "block" });
    tl.set(".stair", { y: "0%" });
    tl.to(".stair", {
      y: "100%",
      ease: "power3.inOut",
      duration: 0.6,
      stagger: {
        amount: -0.4,
      },
    });
    tl.set(stairRef.current, { display: "none" });

    return () => {
      tl.kill();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.set(linksRef.current, { opacity: 0, y: "-50%" });
    tl.to(linksRef.current, {
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 0.5,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-screen h-screen text-white bg-black font-[font2] cursor-pointer overflow-hidden">
      {/* Stair animation overlay */}
      <div
        ref={stairRef}
        className="w-screen h-screen fixed z-50 top-0 pointer-events-none"
      >
        <div className="w-full h-full flex">
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
        </div>
      </div>

      <Navbar />

      <div
        ref={linksRef}
        className="w-full h-screen flex flex-col justify-center items-center"
      >
        <NavBarLink
          title="HOME"
          src={[blog1, blog2]}
          tagline="LET'S START HERE"
          onclick={() => {
            navigate("/");
            setNavOpen(false);
          }}
        />
        <NavBarLink
          title="WORK"
          src={[work1, work2]}
          tagline="SEE EVERYTHING"
          onclick={() => {
            navigate("/Project");
            setNavOpen(false);
          }}
        />
        <NavBarLink
          title="AGENCY"
          src={[agency1, agency2]}
          tagline="KNOW US"
          onclick={() => {
            navigate("/Agence");
            setNavOpen(false);
          }}
        />
        <NavBarLink
          title="CONTACT"
          src={[heart, heart]}
          tagline="SEND US A FAX"
          imgWidth="w-1/16"
          onclick={() => {
            navigate("/Contact");
            setNavOpen(false);
          }}
        />
      </div>
    </div>
  );
}
