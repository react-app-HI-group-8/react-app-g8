import React from "react";
import Button from "../button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h3>Monaki</h3>
      </div>
      <div className="center">
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#home">gallery</a>
          </li>
          <li>
            <a href="#home">discord</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <Button buttonType="btnWhite" type="button">
          BUY NFT
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
