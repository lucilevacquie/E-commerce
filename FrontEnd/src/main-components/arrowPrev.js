import React from "react";
import styled from "styled-components";
import ArrowImg from "../assets/arrow-button.png";

const ArrowButton = styled.div`
  position: absolute;
  transform: rotate(180deg);
  left: 5%;
`;
const Image = styled.img`
  width: 70px;
  cursor: pointer;
  opacity: 0.4;
  :hover {
    opacity: 1;
  }
`;

const ArrowPrev = ({ onClickFunc }) => {
  return (
    <ArrowButton>
      <Image src={ArrowImg} alt="Previous" onClick={onClickFunc}></Image>
    </ArrowButton>
  );
};

export default ArrowPrev;
