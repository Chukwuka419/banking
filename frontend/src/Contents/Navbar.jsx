import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Style/navbar.css"



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  // Arrow function
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <h1>StanleyCool</h1>
        </div>
        <div className={`nav_menu ${menuOpen ? "open" : ""} `}>

          <Router>
            <Routes>
              <Route path="/" element={<li>
                <a href="#">Home</a>
              </li>} />

            </Routes>

          </Router>

        </div>

        {menuActive ? (
          <div className="nav_hamburger" onClick={handleMenuClick}></div>
        ) : (
          <div
            className={`nav_hamburger ${menuActive ? "" : "toggle"}`}
            onClick={handleMenuClick}
          ></div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;