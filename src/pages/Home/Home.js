import React from "react";
import {
  Form,
  Col,
  Button,
  Row,
  Container,
  Image,
  Carousel,
} from "react-bootstrap";
import "./Home.css";
import pic01 from "./pic/pic01.png";

const Home = () => {
  return (
    <Container>
      <Row>
        <Carousel nextIcon  aria-hidden="true" >
          <Carousel.Item >
            <img className="d-block w-100"  src={pic01} alt="pic01" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic01} alt="pic01" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic01} alt="pic01" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
