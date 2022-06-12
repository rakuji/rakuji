import React from "react";
import { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import "./Contact.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  
  const history = useHistory();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select1, setSelect1] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    axios
      .post("http://localhost:3001/contact", {
        name: name,
        email: email,
        select1: select1,
        subject: subject,
        message: message,
      })
      .then(() => {
        toast.success("成功發送表單!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("成功發送表單");
        history.push("/");
        // alert("成功發送表單");
      });
      
  };

  return (
    <Container
      id="contentus"
      className="shadow p-3 mb-5 bg-white rounded d-grid gap-3 my-5 px-5"
    >
      <Form>
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
              <label>姓名</label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                placeholder="姓名"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              ></input>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="xxxxxx@com"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
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
            <Form.Select
              type="select"
              id="select"
              name="select"
              value={select1}
              placeholder=""
              onChange={(event) => {
                setSelect1(event.target.value);
              }}
            >
              <option value="一般消費建議">一般消費建議</option>
              <option value="餐點回饋">餐點回饋</option>
              <option value="客訴">客訴</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>主旨</Form.Label>
              <input
                type="subject"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="主旨"
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
              ></input>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>留言</Form.Label>
              <textarea
                type="meessage"
                className="form-control"
                id="message"
                name="message"
                placeholder="內文"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <button
              type="button"
              value="送出"
              className="btn1"
              onClick={submitForm}
            >
              送出
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Contact;
