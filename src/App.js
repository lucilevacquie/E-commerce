import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 70% 20%;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
