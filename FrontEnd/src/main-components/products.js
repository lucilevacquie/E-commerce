import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "./box";

const Container = styled.div``;

const Boxes = styled.div`
  margin: 15px 5px;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-column-gap: 5%;
  grid-row-gap: 15px;
  justify-content: center;
`;

const Products = () => {
  const [products = [], setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      setProducts(await response.json());
    };
    fetchProducts();
  }, []);
  return (
    <Container>
      <Boxes>
        {products.map((item) => {
          return (
            <Box
              key={item._id}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          );
        })}
      </Boxes>
    </Container>
  );
};

export default Products;
