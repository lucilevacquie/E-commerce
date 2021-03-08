import React from "react";
import styled from "styled-components";

import Keycaps from "../assets/keycaps.jpg";
import PCB from "../assets/pcb.jpg";
import Plates from "../assets/plate.jpg";
import Switches from "../assets/switch.jpg";
import Cable from "../assets/cables.png";
import Case from "../assets/case.png";

const dataMenu = [
  {
    gridRowStart: 1,
    gridRowEnd: 3,
    gridColumnStart: null,
    gridColumnEnd: null,
    img: Keycaps,
    href: "#",
    text: "Keycaps",
  },
  {
    gridRowStart: null,
    gridRowEnd: null,
    gridColumnStart: 2,
    gridColumnEnd: 4,
    img: Case,
    href: "#",
    text: "Cases",
  },
  {
    gridRowStart: 1,
    gridRowEnd: 4,
    gridColumnStart: 4,
    gridColumnEnd: 5,
    img: Cable,
    href: "#",
    text: "Cables",
  },
  {
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    img: PCB,
    href: "#",
    text: "PCB",
  },
  {
    gridRowStart: 2,
    gridRowEnd: 4,
    gridColumnStart: 3,
    gridColumnEnd: 4,
    img: Switches,
    href: "#",
    text: "Switches",
  },
  {
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    img: Plates,
    href: "#",
    text: "Plates",
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(3, 150px);
  grid-gap: 10px;
  padding: 50px;
  background-color: ${(props) => props.theme.colors.blush};
`;

const Box = styled.div`
  grid-row-start: ${(props) => dataMenu[props.index].gridRowStart};
  grid-row-end: ${(props) => dataMenu[props.index].gridRowEnd};
  grid-column-start: ${(props) => dataMenu[props.index].gridColumnStart};
  grid-column-end: ${(props) => dataMenu[props.index].gridColumnEnd};
  position: relative;
  display: flex;
  margin: 5px;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 34px;
  opacity: 0;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
`;

const Link = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Menu = () => {
  return (
    <Container>
      {dataMenu.map((item, index) => {
        return (
          <Box index={index}>
            <Background src={item.img} alt="" />
            <Content>
              <Link href={item.href} />
              <p>{item.text}</p>
            </Content>
          </Box>
        );
      })}
    </Container>
  );
};

export default Menu;
