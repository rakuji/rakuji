import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="shadow p-3 mb-5 bg-white rounded d-grid gap-3 my-5 px-5">
      <Row className="justify-content-center">
        <Col>
          <h2>聯絡我們</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>請填寫您的聯絡方式</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>姓名</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>選擇項目</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>一般消費建議</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>主旨</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>留言</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <input type="button" value="送出" className="btn1"></input>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
