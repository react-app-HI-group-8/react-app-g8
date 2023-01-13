import React, { useState } from "react";
import Button from "../Button/Button";
import { Drawer } from "antd";
import { Spiral as Hamburger } from "hamburger-react";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <Drawer
        className="drawer"
        title="Monaki"
        placement="right"
        onClose={onClose}
        open={open}
        bodyStyle={{ backgroundColor: "#000" }}
        headerStyle={{ backgroundColor: "#000" }}
        width={"100%"}
      >
        <ul>
          <li onClick={onClose}>
            <a href="#home">home</a>
          </li>
          <li onClick={onClose}>
            <a href="#gallery">gallery</a>
          </li>
          <li onClick={onClose}>
            <a href="#marketplace">marketplace</a>
          </li>
          <li>
            <Button
              buttonType="btnWhite"
              type="button"
              onClick={() => {
                window.location.href = "#marketplace";
                onClose();
              }}
            >
              BUY NFT
            </Button>
          </li>
        </ul>
      </Drawer>

      <div className="left">
        <h3>Monaki</h3>
      </div>
      <div className="center">
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
          <li>
            <a href="#marketplace">marketplace</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="hide_btn">
          <Button
            buttonType="btnWhite"
            type="button"
            onClick={() => {
              window.location.href = "#marketplace";
            }}
          >
            BUY NFT
          </Button>
        </div>
        <div className="display_none">
          <Hamburger
            className="burger"
            toggled={open}
            toggle={showDrawer}
            duration={0.8}
            color={open ? "#7843e8" : "#fff253"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
