import React from "react";
import "./css/my-login.css";
import "./css/reset.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [Memail, setMemail] = useState("");
  const [Mpassword, setMpassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const a = { Memail: Memail, Mpassword: Mpassword };
  const history = useHistory();
  const sendData = async () => {
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(a),
      });
      const results = await response.json();
      console.log(results);
      if (results.ok === false) {
        toast.error("註冊信箱帳號重複!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("註冊成功!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (e) => {
    if (Memail === "") {
      toast.error("請輸入信箱帳號!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (Mpassword === "") {
      toast.error("請輸入密碼!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (Mpassword !== rePassword) {
      toast.error("兩次密碼輸入不一致!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    e.preventDefault();
    sendData();
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
              <br />
              <div class="card fat">
                <div class="card-body">
                  <Form class="justify-content-center">
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
                        onChange={(e) => {
                          setMemail(e.target.value);
                        }}
                      />
                      <br />
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
                        onChange={(e) => {
                          setMpassword(e.target.value);
                        }}
                      />
                      <br />
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
                        onChange={(e) => {
                          setRePassword(e.target.value);
                        }}
                      />
                    </div>

                    <br />

                    <div class="form-group m-0 text-center">
                      <button
                        type="submit"
                        class="btn btn-block btn-custom"
                        onClick={submit}
                      >
                        註冊
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
                      <br />
                      {/* <p class="align">其他方式註冊</p> */}

                      {/* <button type="submit" class="btn btn-danger btn-block"> */}
                      {/* 使用GOOGLE註冊 */}
                      {/* </button> */}
                      {/* <button type="submit" class="btn btn-primary btn-block"> */}
                      {/* 使用Facebook註冊 */}
                      {/* </button> */}
                    </div>
                    <br />
                    <br />
                    <div class="mt-4 text-center">
                      已經有會員?
                      <Link to="/Login">登入</Link>
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
