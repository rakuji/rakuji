/* eslint-disable jsx-a11y/alt-text */
// import React from 'react'
import React, { useState } from "react";
import "./css/my-login.css";
import "./css/reset.css";
import { Form, Row, Col } from "react-bootstrap";
import BootstrapDatePicker from "../../components/BootstrapDatePicker";


function Register() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    //JSX
    <>
      <body class="my-login-page">
        <section class="h-100">
          <div class="container h-100">
            <div class="row justify-content-md-center h-100">
              <div class="card-wrapper">
                <div class="card fat">
                  <div class="card-body">
                    <div class="m-title text-center">
                      <img src={require("../../images/title/signin.png")} />
                    </div>

                    <Form>
                      <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            <span class="star">*</span>輸入註冊信箱
                          </Form.Label>
                          <Form.Control type="email" placeholder="" />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>
                            <span class="star">*</span>輸入註冊密碼
                          </Form.Label>
                          <Form.Control type="password" placeholder="" />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>
                            <span class="star">*</span>再次輸入密碼
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder=""
                            name="confirmPassword"
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="mb-3">上傳大頭照</Form.Group>
                      </Row>
                      <Row>
                        <input type="file" onChange={handleChange} />
                        <img src={file} />
                      </Row>
                      <br />

                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput"
                        >
                          <Form.Label>
                            <span class="star">*</span>姓名
                          </Form.Label>
                          <input
                            type="subject"
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder=""
                          ></input>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-1">性別</Form.Group>
                      </Row>
                      <Row className="mb-3 p-2">
                        <Form.Select className="form-control">
                          <option value="男">男</option>
                          <option value="女">女</option>
                        </Form.Select>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput"
                        >
                          <Form.Label>職業</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            name=""
                            placeholder=""
                          ></input>
                        </Form.Group>
                      </Row>
                      <Row>
                        <BootstrapDatePicker />
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput"
                        >
                          <Form.Label>居住縣市</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            name=""
                            placeholder=""
                          ></input>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput"
                        >
                          <Form.Label>居住地址</Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            name=""
                            placeholder=""
                          ></input>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-1">有無小孩</Form.Group>
                      </Row>
                      <Row className="mb-3 p-2">
                        <Form.Select className="form-control">
                          <option value="無">無</option>
                          <option value="有">有</option>
                        </Form.Select>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput"
                        >
                          <Form.Label>
                            <span class="star">*</span>手機電話
                          </Form.Label>
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            name=""
                            placeholder=""
                          ></input>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <button type="submit" value="送出" className="btn1">
                            註冊
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Register;
