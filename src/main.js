import React from "react";
import styled from "styled-components";
import Carousel from "./main-components/carousel";
import Products from "./main-components/products";

const Container = styled.div`
  background-color: grey;
  height: 100%;
  display: grid;
  grid-template-rows: 250px 1vh;
`;

const Main = () => {
  return (
    <Container>
      <Carousel />
      <Products />
    </Container>
  );
};

export default Main;
