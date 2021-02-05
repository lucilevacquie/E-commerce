import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.mango};
  box-sizing: border-box;
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

const Box = ({ title, img, price }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <Text>
        <Title>{title}</Title>
        <Price>£{price}</Price>
      </Text>
    </Container>
  );
};

export default Box;
