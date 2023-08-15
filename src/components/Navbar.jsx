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
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">New Arrival</a>
          </li>
        </NavLinks>
      </div>
      <div className="contact-links">
        <NavLinks>
          <li>
            <a href="">
              <FaShoppingCart color="3EC5B7" size={30} />
              Order
            </a>
          </li>
          <li>
            <a href="">
              <FaBookmark color="3EC5B7" size={30} />
              WristList
            </a>
          </li>
          <li>
            <a href="">
              <FaUserPlus color="3EC5B7" size={30} />
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
    }
  }
`;
export default Navbar;
