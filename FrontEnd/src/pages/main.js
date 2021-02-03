import React from "react";
import styled from "styled-components";
import Products from "../main-components/products";
import WallOfFrame from "../assets/wallofframe.png";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.shell};
  height: 100%;
  display: grid;
  grid-template-rows: 350px 1vh;
`;

const Image = styled.img`
  margin: auto;
`;

const Main = () => {
  return (
    <Container>
      <Image src={WallOfFrame} />
      <Products />
    </Container>
  );
};

export default Main;
