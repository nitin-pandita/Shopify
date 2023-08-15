import { Image } from "@chakra-ui/react";
import React from "react";
import Image1 from "../image/image1.png";
import Image2 from "../image/image2.png";
import { styled } from "styled-components";
import background from "../image/background.png";
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
      </div>
      <div className="imageCollab">
        <ImagesFloat src={Image1} />
        <Image src={Image2} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px;
  width: auto;
  min-height: 80vh;
  padding: 0 4rem;

  .heading {
    h1 {
      font-size: 90px;
      line-height: 8rem;
      font-weight: bold;
      opacity: 0.8;
    }
    p {
      font-size: 24px;
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
  top: 0;
  left: 50%;
  transform: translateY(64%);
`;

export default Content;
