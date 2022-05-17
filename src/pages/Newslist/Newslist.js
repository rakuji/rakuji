import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";



// pages

import Breadcrumb from "./Breadcrumb";

const Newslist = () => {
// bunner圖片三張輪播 拿掉左右箭頭及下方三個長方形

  return (
    <main>
    <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={require("./bunner001.png")}
      alt=""
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={require("./bunner001.png")}
      alt=""
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={require("./bunner001.png")}
      alt=""
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 

{/*  放breadcrumb 進入 */}

<Breadcrumb />



<div className="container">
<Row xs={1} md={3} className="g-3">

{/* 3*3的主餐投票 react bootstrap card  列出1-9順序 目前都只能一個 */}
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text style={{fontSize: 14 }}>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </Col>
     
    
  ))}
</Row>

</div>


<br></br>
<div className="container">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text fs-6">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text fs-6">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to="/Votelist" className="nav-link">
        Votelist
              </Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text fs-6">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Link to="/Cooperationform" className="nav-link">
        Cooperationform
              </Link>
      </div>
    </div>
  </div>
  </div>
  
  
  
</div>


<br></br>

    </main>
  );


 
};

export default Newslist;
