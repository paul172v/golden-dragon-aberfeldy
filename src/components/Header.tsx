import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="header-content">
        <div className="header--row-one">
          <h1>Golden Dragon - Chinese Takeaway</h1>
          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#map">Location</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header--row-two">
          <p>We Accept Cash Only</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
