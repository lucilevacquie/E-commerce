import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  color: black;
`;

const Footer = () => {
  return <Container>Footer</Container>;
};

export default Footer;
