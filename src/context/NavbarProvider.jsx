import { useState } from "react";
import NavbarContext from "./NavbarContext";

const NavbarProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [countryName, setCountryName] = useState(null);

  return (
    <NavbarContext.Provider value={{ showMenu, setShowMenu, countryName, setCountryName }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
