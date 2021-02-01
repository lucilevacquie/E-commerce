import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer";

const Container = styled.div`
  height: 100vh;
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
