import React from "react";
import styled from "styled-components";
import Box from "./box";

const Container = styled.div``;

const Boxes = styled.div`
  margin: 15px 5px;
  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-column-gap: 2%;
  grid-row-gap: 15px;
  justify-content: center;
`;

const Products = () => {
  return (
    <Container>
      <Boxes>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Boxes>
    </Container>
  );
};

export default Products;
