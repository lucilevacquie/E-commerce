import React from "react";
import styled from "styled-components";
import Img1 from "../assets/portrait.png";

const Container = styled.div`
  background-color: lightseagreen;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.div``;

const Title = styled.div``;

const Description = styled.div`
  font-size: 14px;
`;

const Box = () => {
  return (
    <Container>
      <Image src={Img1} />
      <Text>
        <Title>Product 1</Title>
        <Description>Awesome!</Description>
      </Text>
    </Container>
  );
};

export default Box;
