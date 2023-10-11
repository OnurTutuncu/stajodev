import React from "react";
import { Layout, Home } from "./pages";
import NavbarProvider from "./context/NavbarProvider";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MatchList from "./pages/MatchList";

function App() {
  return (
    <Router>
      <NavbarProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches/:year" element={<MatchList />} />
          </Routes>
        </Layout>
      </NavbarProvider>
    </Router>
  );
}

export default App;
