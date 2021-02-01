import React, { lazy } from "react";
import styled from "styled-components";

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

const Box = ({ title }) => {
  return (
    <Container>
      <Image src={`assets/${title}.png`} />
      <Text>
        <Title>{title}</Title>
        <Description>Awesome!</Description>
      </Text>
    </Container>
  );
};

export default Box;
