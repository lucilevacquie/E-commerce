import React from "react";
import styled from "styled-components";
import ArrowImg from "../assets/arrow-button.png";

const ArrowButton = styled.div`
  position: absolute;
  right: 5%;
`;
const Image = styled.img`
  width: 70px;
  cursor: pointer;
  opacity: 0.4;
  :hover {
    opacity: 1;
  }
`;

const ArrowNext = ({ onClickFunc }) => {
  return (
    <ArrowButton>
      <Image src={ArrowImg} alt="Next" onClick={onClickFunc} />
    </ArrowButton>
  );
};

export default ArrowNext;
