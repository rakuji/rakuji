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
import { Link } from "react-router-dom";

//圖片
import pic01 from "./pic/pic01.png";
import pic02 from "./pic/pic02.png";
import pic03 from "./pic/pic03.png";
import pic04 from "./pic/pic04.png";
import pic05 from "./pic/pic05.png";

const Home = () => {
  return (
    <Container>
      <Row>
        <Carousel nextIcon aria-hidden="true">
          <Carousel.Item>
            <img className="d-block w-100" src={pic01} alt="pic01" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic01} alt="pic01" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic01} alt="pic01" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Carousel nextIcon aria-hidden="true">
          <Carousel.Item>
            <img className="d-block w-100" src={pic02} alt="pic02" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic02} alt="pic02" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic02} alt="pic02" />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Link to="products">
          <Image className="d-block w-100" src={pic03} alt="pic03"></Image>
        </Link>
      </Row>
      <Row>
        <Link to="/recipes">
          <Image className="d-block w-100" src={pic04} alt="pic04"></Image>
        </Link>
      </Row>
      <Row>
        <Link to="/about">
          <Image className="d-block w-100" src={pic05} alt="pic05"></Image>
        </Link>
      </Row>
    </Container>
  );
};

export default Home;
