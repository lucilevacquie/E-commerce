import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.satisfy};
  font-size: 32px;
  color: black;
`;

const Name = () => {
  return <Container>Bluce.</Container>;
};

export default Name;
