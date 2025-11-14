import Stair from "./components/common/Stair";
import "./index.css";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import NavContext from "./context/NavContext";
import Loading from "./components/common/Loading";
import { useEffect, useState } from "react";
const App = () => {
  const navigation = useNavigation();
   const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (navigation.state === "loading") {
      setShowLoader(true);
    } else if (navigation.state === "idle") {
      const t = setTimeout(() => setShowLoader(false));
      return () => clearTimeout(t);
    }
  }, [navigation.state]);

  return (
    <NavContext>
      {showLoader ? (
        <Loading />
      ) : (
        <Stair>
          <Navbar />
          <Outlet />
        </Stair>
      )}
    </NavContext>
  );
};
export default App;
