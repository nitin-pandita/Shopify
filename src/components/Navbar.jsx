import { Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../image/logo.png";
import { styled } from "styled-components";
import { FaBookmark, FaShoppingCart, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <NavLinks>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">New Arrival</a>
          </li>
        </NavLinks>
      </div>
      <div className="contact-links">
        <NavLinks>
          <li>
            <a href="/">
              <FaShoppingCart color="3EC5B7" size={25} />
              Order
            </a>
          </li>
          <li>
            <a href="/">
              <FaBookmark color="3EC5B7" size={25} />
              WristList
            </a>
          </li>
          <li>
            <a href="/">
              <FaUserPlus color="3EC5B7" size={25} />
              Login
            </a>
          </li>
        </NavLinks>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  padding: 1rem;
  margin: 0 40px;
  font-family: "Inter", sans-serif;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  li {
    list-style: none;
    margin-left: 23px;
    a {
      display: flex;
      align-items: center;
      font-size: 20px;
      position: relative; /* Add this */
      text-decoration: none; /* Add this */
      color: #000; /* Change this to your desired text color */
      transition: color 0.3s ease; /* Add transition for smooth color change */

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #007bff; /* Change this to your desired line color */
        bottom: -2px;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      &:hover {
        color: #007bff; /* Change color on hover */
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
`;

export default Navbar;
