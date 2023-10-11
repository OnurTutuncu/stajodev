import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import NavbarContext from "../../context/NavbarContext";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { showMenu, setShowMenu } = useContext(NavbarContext);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const redirectToHomePage = () => {
    // JavaScript ile yönlendirme
    window.location.href = "/anasayfa.html";
  };

  return (
    <header className="bg-black shadow-slate-500 shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-1">
        <button className="text-white lg:hidden focus:outline-none" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
        <nav className="hidden lg:flex space-x-4 justify-start">
          <a href="/anasayfa.html" className="text-white hover:text-gray-300">
            Ana Sayfa
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            Turnuvalar
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Hakkımızda
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            İletişim
          </a>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-16 lg:w-32" src="https://i.ibb.co/YT5CmdH/fifalogo1.png" alt="Logo" />
      </div>
      <form onSubmit={handleSearchSubmit} className="hidden lg:block">
        <input
          type="text"
          placeholder="Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        />
        <button type="submit" className="text-white p-2">
          Ara
        </button>
      </form>
    </header>
  );
};

export default Navbar;
