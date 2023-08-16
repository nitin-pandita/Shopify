import { Image } from "@chakra-ui/react";
import React from "react";
import Image1 from "../image/image1.png";
import Image2 from "../image/image2.png";
import { styled } from "styled-components";
import { Button } from "@chakra-ui/react";
const Content = () => {
  return (
    <Container>
      <div className="heading">
        <h1>
          The Global <br /> commerce <br /> Platform
        </h1>
        <p>
          Build your business with Shopify to sell online, offline, <br /> and
          everywhere in between.
        </p>
        <ButtonStyled colorScheme="blue" size="lg">
          Explore Now
        </ButtonStyled>
      </div>
      <div className="imageCollab">
        <ImagesFloat src={Image1} />
        <Image src={Image2} />
      </div>
    </Container>
  );
};
const ButtonStyled = styled(Button)`
  margin-top: 1rem;
  color: white;
  font-size: 1.3rem;
  padding: 1rem 4rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 80vh;
  padding: 0 4rem;

  .heading {
    h1 {
      font-size: 70px;
      line-height: 6rem;
      font-weight: bold;
      opacity: 0.8;
    }
    p {
      font-size: 24px;
      margin: 2rem 0;
    }
  }
  .imageCollab {
    position: relative;
    width: 50%;
    overflow: hidden;
  }
`;
const ImagesFloat = styled(Image)`
  position: absolute;
  top: 30%;
  left: 0%;
  transform: translateX(74%);
`;

export default Content;
