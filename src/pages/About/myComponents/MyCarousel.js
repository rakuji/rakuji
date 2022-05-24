import React  from "react";
import Carousel from "react-bootstrap/Carousel";
// 需安裝套件 及更改照片

let MyCarousel = function () {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={require("../images/slider01.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={require("../images/slider02.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={require("../images/slider03.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MyCarousel;