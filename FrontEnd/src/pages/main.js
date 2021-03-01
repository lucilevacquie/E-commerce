import React from "react";
import styled from "styled-components";
import Products from "../main-components/products";
import WallOfFrame from "../assets/wallofframe.png";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 350px 1vh;
`;

const Carousel = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.shell};
`;

const Image = styled.img`
  margin: auto;
`;

const Main = () => {
  return (
    <Container>
      <Carousel>
        <Image src={WallOfFrame} />
      </Carousel>
      <Products />
    </Container>
  );
};

export default Main;
