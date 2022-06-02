import React from "react";
import "./css/my-login.css";
import "./css/reset.css";
// import Feedback from "react-bootstrap/esm/Feedback";
import { Form } from 'react-bootstrap';
import { useState } from "react";


function Signup() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <body class="my-login-page">
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-md-center h-100">
            <div class="card-wrapper">
              <div class="brand">
                <img src={require("../../images/logo/logo_color_login.png")} />
              </div>
              <div class="card fat">
                <div class="card-body">
                  <Form noValidate validated={validated} class="my-login-validation" novalidate="">
                    <div class="form-group">
                      <label for="email">
                        <span class="star">*</span>輸入註冊信箱{" "}
                      </label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        required
                        autofocus
                      />
                      <div class="invalid-feedback">電子信已被使用</div>
                    </div>
                    <div class="form-group">
                      <label for="password">
                        <span class="star">*</span>輸入註冊密碼
                      </label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        required
                        data-eye
                      />
                      <div class="invalid-feedback"> 密碼已存在 </div>
                    </div>
                    <div class="form-group">
                      <label for="password">
                        <span class="star">*</span>再次輸入密碼
                      </label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        required
                        data-eye
                      />
                      <div class="invalid-feedback"> 密碼不一致 </div>
                    </div>

                    <br />

                    <div class="form-group m-0">
                      <button type="submit" class="btn btn-block btn-custom">
                        註冊
                      </button>
                      <br />
                      <p class="align">其他方式註冊</p>

                      <button type="submit" class="btn btn-danger btn-block">
                        使用GOOGLE註冊
                      </button>
                      <button type="submit" class="btn btn-primary btn-block">
                        使用Facebook註冊
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      已經有會員?
                      <a href="register.html">登入</a>
                    </div>
                  </Form>
                </div>
              </div>
              <div class="footer">
                Copyright &copy; 2022 &mdash; RAKUJI樂時町洋食館
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Signup;
