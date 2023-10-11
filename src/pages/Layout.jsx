import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Ekstra bir bileşen

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar /> {/* Yeni eklenen bir sidebar bileşeni */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
