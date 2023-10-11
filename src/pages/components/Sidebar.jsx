import { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import NavbarContext from "../../context/NavbarContext";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(NavbarContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 840 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu, setShowMenu]);

  return (
    <div
      className={`fixed top-0 left-0 bg-gray-900 h-full w-64 p-6 transition-transform duration-300 ease-in-out transform ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        <FaTimes size={24} />
      </button>
      <div className="mt-4 flex flex-col space-y-4">
        <a href="anasayfa.html" className="text-white hover:text-blue-600" onClick={toggleMenu}>
          Ana Sayfa
        </a>
        <a href="#" className="text-white hover:text-blue-600" onClick={toggleMenu}>
          Turnuvalar
        </a>
        <a href="#" className="text-white hover:text-blue-600" onClick={toggleMenu}>
          Hakkımızda
        </a>
        <a href="#" className="text-white hover:text-blue-600" onClick={toggleMenu}>
          İletişim
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
