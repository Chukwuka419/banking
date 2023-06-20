import React, { useState } from 'react'
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
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
           
            <li>
              <a href="#">Education</a>
            </li>
           
            <li>
              <a href="../">Portfollo</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
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