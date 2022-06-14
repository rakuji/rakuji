import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
// 需安裝套件 及更改照片

function Carousel_g() {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require("./slider01.png")}
            alt="First adada"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require("./slider02.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={require("./slider03.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousel_g;
