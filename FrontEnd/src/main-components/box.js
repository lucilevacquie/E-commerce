import React, { lazy } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.mango};
  box-sizing: border-box;
  box-shadow: 5px 5px 10px #00000069;
  display: grid;
  grid-template-rows: 80% 20%;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 90%;
  margin: auto;
`;

const Text = styled.div`
  text-align: center;
`;

const Title = styled.div``;

const Price = styled.div`
  font-size: 14px;
`;

const Box = ({ title }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={`assets/${title}.png`} />
      </ImageWrapper>
      <Text>
        <Title>{title}</Title>
        <Price>£14.99</Price>
      </Text>
    </Container>
  );
};

export default Box;
