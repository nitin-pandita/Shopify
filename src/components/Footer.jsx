import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="copyrights">
        <div className="text">@Copyright to Nitin Pandita</div>
        <a href="">Twitter</a>
        <a href="">Github</a>
        <a href="">Instagram</a>
      </div>
    </FooterStyle>
  );
};
const FooterStyle = styled.div`
  background: #3ec5b7;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .copyrights {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 50%;
  }
  a {
    text-align: center;
    margin-left: 1.2rem;
    color: white;
    font-size: 1.2rem;
  }
`;
export default Footer;
