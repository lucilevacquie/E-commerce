import React from "react";
import styled from "styled-components";

import Keycaps from "../assets/keycaps.jpg";
import PCB from "../assets/pcb.jpg";
import Plates from "../assets/plate.jpg";
import Switches from "../assets/switch.jpg";
import Cable from "../assets/cables.png";
import Case from "../assets/case.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, 150px);
  grid-gap: 10px;
  margin: 50px;
`;

const Box1 = styled.a`
  grid-row-start: 1;
  grid-row-end: 3;
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Img1 = styled.img`
  width: 100%;
  height: 100%;
`;

const Box2 = styled.a`
  grid-column-start: 2;
  grid-column-end: 4;
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Img2 = styled.img`
  width: 80%;
  height: 100%;
  display: flex;
  margin: auto;
`;

const Box3 = styled.a`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 4;
  grid-column-end: 5;
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Img3 = styled.img`
  width: 100%;
  height: 100%;
`;

const Box4 = styled.a`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Img4 = styled.img`
  width: 80%;
  height: 100%;
  display: flex;
  margin: auto;
`;

const Box5 = styled.a`
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 4;
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Img5 = styled.img`
  width: 100%;
  height: 100%;
`;

const Box6 = styled.a`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
  :hover {
    background-color: black;
    opacity: 0.5;
  }
`;

const Img6 = styled.img`
  width: 80%;
  height: 100%;
  display: flex;
  margin: auto;
`;

const Menu = () => {
  return (
    <Container>
      <Box1>
        <Img1 src={Keycaps} alt="" />
      </Box1>
      <Box2>
        <Img2 src={Case} alt="" />
      </Box2>
      <Box3>
        <Img3 src={Cable} alt="" />
      </Box3>
      <Box4>
        <Img4 src={Switches} alt="" />
      </Box4>
      <Box5>
        <Img5 src={PCB} alt="" />
      </Box5>
      <Box6>
        <Img6 src={Plates} alt="" />
      </Box6>
    </Container>
  );
};

export default Menu;
