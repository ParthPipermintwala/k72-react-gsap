import { useContext } from "react";
import { NavbarContext } from "../../context/NavContext";

export default function Close() {
   const [navOpen, setNavOpen] = useContext(NavbarContext);
  return (
    <div
      className={`h-[6vw] w-[6vw] relative m-3 group transition-all ${
        navOpen ? "block" : "hidden"
      }`}
      onClick={() => setNavOpen(false)}
    >
      <div className="h-[8vw] w-0.5 rotate-45 group-hover:bg-[#d3fd50] origin-top absolute top-0 right-0 bg-amber-50 transition-all"></div>
      <div className="min-h-[8vw] w-0.5 -rotate-45 group-hover:bg-[#d3fd50] origin-top-right absolute top-0 bg-amber-50 transition-all"></div>
    </div>
  );
}
