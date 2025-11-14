import { useLocation } from "react-router-dom";
import HamburgerLogo from "../common/HamburgerLogo.jsx";
export default function MenuContainer({
  logo,
  click,
  main,
  title,
  height,
  width,
}) {
  const location = useLocation().pathname;
  const handleEnter = (e) => {
    const overlay = e.currentTarget.querySelector(".nav-color-overlay");
    if (overlay) overlay.style.height = "100%";
  };
  const handleLeave = (e) => {
    const overlay = e.currentTarget.querySelector(".nav-color-overlay");
    if (overlay) overlay.style.height = "0%";
  };
  return (
    <div
      className={`${height ? height : "h-24"} ${
        width ? width : "w-[16vw]"
      } max-md:w-[18vh] max-md:h-10 relative group ${
        main ? "mainMenu max-md:h-[50px]" : "menu max-md:hidden"
      } `}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={click}
    >
      {logo ? <HamburgerLogo /> : null}
      <div className={`h-[98%] w-full ${location === '/Contact' ? 'bg-teal-50' : 'bg-black'} absolute top-0 left-0 flex flex-col justify-end pl-2 `}>
        <h2 className={`max-md:hidden z-50 group-hover:text-black transition-all font-[font2] uppercase ${location === '/Contact' ? 'text-black' : 'text-white'}`}>
          {title}
        </h2>
      </div>
      <div className="nav-color-overlay bg-[#d3fd50] transition-all w-full h-0 absolute top-0"></div>
    </div>
  );
}
