import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>關於我們</div>
    <div className="container shadow p-3 mb-5 bg-white rounded d-grid gap-3 my-5 px-5">
      <div className="row justify-content-center">
        <div className="col">
          <h2>聯絡我們</h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>請填寫您的聯絡方式</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>姓名</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>選擇項目</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Select aria-label="Default select example">
            <option>一般消費建議</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>主旨</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>留言</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <input type="button" value="送出" className="btn1"></input>
        </div>
      </div>
    </div>
  );
};

export default Contact;
