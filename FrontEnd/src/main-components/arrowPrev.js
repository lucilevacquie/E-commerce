import React from "react";
import styled from "styled-components";

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
      <Image
        src="images/assets/arrow-button.png"
        alt="Previous"
        onClick={onClickFunc}
      ></Image>
    </ArrowButton>
  );
};

export default ArrowPrev;
