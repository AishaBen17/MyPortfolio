import React, { useState, useRef } from "react";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <AnchorLink className="anchor-link" href="#home">
        <p
          onClick={() => {
            setMenu("home");
            closeMenu();
          }}
        >
          <img src={logo} alt="logo-img" className="navbar-logo" />
        </p>
      </AnchorLink>

      {!isOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="open menu"
          className="nav-mob-icon"
        />
      )}

      {isOpen && (
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="nav-mob-icon"
        />
      )}

      <ul ref={menuRef} className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
                closeMenu();
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setMenu("about");
                closeMenu();
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={100} href="#services">
            <p
              onClick={() => {
                setMenu("services");
                closeMenu();
              }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setMenu("work");
                closeMenu();
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
                closeMenu();
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p
            onClick={() => {
              setMenu("contact");
              closeMenu();
            }}
          >
            Contact Me
          </p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
