import React from "react";
import styled from "styled-components";
import Carousel from "../main-components/carousel";
import Menu from "../main-components/menu";
import Footer from "../footer";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100vh 580px 100px;
`;

const Main = () => {
  return (
    <Container>
      <Carousel />
      <Menu />
      <Footer />
    </Container>
  );
};

export default Main;
