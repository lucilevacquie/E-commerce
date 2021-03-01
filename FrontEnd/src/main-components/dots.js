import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
`;

const Dot = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.active ? "black" : "grey")};
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px;
  opacity: 0.7;
`;

const Dots = ({ currentIndex, dataCarousel }) => {
  return (
    <Container>
      {Object.keys(dataCarousel).map((key, index) => (
        <Dot key={key} active={currentIndex === index} />
      ))}
    </Container>
  );
};

export default Dots;
