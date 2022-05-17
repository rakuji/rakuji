import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Newslist = () => {
// bunner圖片三張輪播 拿掉左右箭頭及下方三個長方形
// 放breadcrumb 進入
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
<div className="container" position-sticky>

    <div style={{ minHeight: " calc(100vh - 86px - 308px) " } }>最新消息 放麵包屑</div>
    </div>

<div>首頁分隔線</div>

<div className="container">
<Row xs={1} md={3} className="g-3">

{/* 順序問題 */}
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

<div>首頁分隔線</div>
<div className="container" position-sticky>

<Form  style={{ width: 900 }} >

  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

<div>首頁分隔線</div>
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
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text fs-6">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  </div>
  
  
  
</div>


<div> 000</div>

    </main>
  );


 
};

export default Newslist;
