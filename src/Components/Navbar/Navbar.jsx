import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "work", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-500 bg-opacity-80 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <AnchorLink
          href="#home"
          onClick={() => {
            setMenu("home");
            setIsOpen(false);
          }}
        >
          <img src={logo} alt="logo" className="h-10" />
        </AnchorLink>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {!isOpen ? (
            <img
              src={menu_open}
              onClick={() => setIsOpen(true)}
              className="h-6 cursor-pointer"
              alt="menu open"
            />
          ) : (
            <img
              src={menu_close}
              onClick={() => setIsOpen(false)}
              className="h-6 cursor-pointer"
              alt="menu close"
            />
          )}
        </div>

        {/* Menu */}
        <ul
          className={`${
            isOpen
              ? "flex flex-col items-center gap-6 absolute top-[70px] right-0 w-[60%] max-w-xs bg-[#5c1763] rounded-lg shadow-lg px-6 py-6 z-50"
              : "hidden"
          } md:flex md:flex-row items-center gap-10 md:static md:bg-transparent md:w-auto md:translate-x-0 md:top-0`}
        >
          {links.map((link) => (
            <li key={link.id} className="relative">
              <AnchorLink
                href={`#${link.id}`}
                offset="0"
                className="text-white font-medium hover:text-blue-400 transition"
                onClick={() => {
                  setMenu(link.id);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </AnchorLink>
              {menu === link.id && (
                <img
                  src={underline}
                  alt="underline"
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-3 w-14"
                />
              )}
            </li>
          ))}
          <li className="md:hidden">
            <AnchorLink
              href="#contact"
              onClick={() => {
                setMenu("contact");
                setIsOpen(false);
              }}
              className="text-white bg-pink-500  px-4 py-2 rounded-md hover:bg-purple-950"
            >
              Contact Me
            </AnchorLink>
          </li>
        </ul>

        {/* Contact Button for Desktop */}
        <div className="hidden md:block">
          <AnchorLink
            href="#contact"
            onClick={() => {
              setMenu("contact");
              setIsOpen(false);
            }}
            className="text-white bg-custom-gradient px-5 py-2 rounded-md hover:from-[#d3444e] hover:to-[#c471ed] transition"
          >
            Contact Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
