import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FullScreenNav from "../components/Navigation/FullScreenNav";

const NavbarContext = createContext();
const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState("white");

  const [navOpen, setNavOpen] = useState(false);

  const locate = useLocation().pathname;

  useEffect(() => {
    if (navOpen) {
      setNavColor("white");
      return;
    }
    if (locate === "/Project" || locate === "/Agence") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [locate, navOpen]);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {navOpen ? <FullScreenNav /> : children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
export { NavbarContext, NavbarColorContext };
