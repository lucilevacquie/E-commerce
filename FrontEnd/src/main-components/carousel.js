import React, { useState } from "react";
import styled from "styled-components";

import Dots from "./dots";
import ArrowContainer from "./arrowContainer";

const DataCarousel = {
  1: {
    src: "../assets/chicken_pollo-reddit.jpg",
    alt: "Credit to chicken_pollo on Reddit",
  },
  2: {
    src: "../assets/Miyanomi-reddit.jpg",
    alt: "Credit to Miyanomi on Reddit",
  },
  3: {
    src: "../assets/flurpyflurples-reddit.jpg",
    alt: "Credit to flurpyflurples on Reddit",
  },
};

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.shell};
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  max-height: 100%;
  height: 100vh;
`;

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Slide = styled.div`
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  list-style-type: none;
  text-align: center;
`;

const ImgSlide = styled.div`
  width: 100vw;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Carousel = () => {
  const [count, setCount] = useState(0);
  const prev = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = DataCarousel.length - 1;
    }
    setCount(newCount);
  };
  const next = () => {
    let newCount = count + 1;
    if (newCount >= DataCarousel.length) {
      newCount = 0;
    }
    setCount(newCount);
  };
  return (
    <Container>
      <SlideContainer>
        <ArrowContainer next={next} prev={prev} />
        <Slide>
          {Object.keys(DataCarousel).map(
            (key, index) =>
              index === count && (
                <ImgSlide key={index}>
                  <Img
                    src={DataCarousel[key].src}
                    alt={DataCarousel[key].alt}
                  />
                </ImgSlide>
              )
          )}
        </Slide>
        <Dots currentIndex={count} dataCarousel={DataCarousel} />
      </SlideContainer>
    </Container>
  );
};

export default Carousel;
