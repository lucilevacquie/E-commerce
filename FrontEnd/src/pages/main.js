import React from "react";
import styled from "styled-components";
import Carousel from "../main-components/carousel";
import Menu from "../main-components/menu";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 350px 1vh;
`;

const Main = () => {
  return (
    <Container>
      <Carousel />
      <Menu />
    </Container>
  );
};

export default Main;
