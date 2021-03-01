import React from "react";
import ArrowNext from "./arrowNext";
import ArrowPrev from "./arrowPrev";

const ArrowContainer = ({ next, prev }) => {
  return (
    <>
      <ArrowPrev onClickFunc={prev} />
      <ArrowNext onClickFunc={next} />
    </>
  );
};

export default ArrowContainer;
