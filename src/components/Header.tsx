import React from "react";

interface T {
  id: string;
}

const Header: React.FC<T> = (props) => {
  return (
    <header className="header" id={props.id}>
      <div className="header-content">
        <div className="header--row-one">
          <h1>Golden Wok - Chinese Takeaway</h1>
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
