import React from "react";
import "./css/my-login.css";
import "./css/reset.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";


function Signup() {
  const [Memail, setMemail] = useState("");
  const [Mpassword, setMpassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const a ={Memail:Memail,Mpassword:Mpassword}
  const history =useHistory()
  const sendData = async()=>{
    try {
      const response = await fetch('http://localhost:7000/account',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(a)})
      const results = await response.json()
      console.log(results);
      if(results.ok===false){
        alert("信箱帳號重複")
      }else{
        alert('註冊成功')
        history.push('/login')

      }
    } catch (error) {
      console.log(error);
    }
  }

  const submit = (e) => {
    if (Memail === "") {
         alert("請輸入信箱帳號!");
       } else if (Mpassword === "") {
         alert("請輸入密碼!");
       } else if (Mpassword !== rePassword) {
         alert("兩次密碼輸入不一致!");
         }


    e.preventDefault()
    sendData()
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
                  <Form noValidate class="my-login-validation" >
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
                        onChange={(e) => {
                          setMpassword(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setRePassword(e.target.value);
                        }}
                      />
                      <div class="invalid-feedback"> 密碼不一致 </div>
                    </div>

                    <br />

                    <div class="form-group m-0">
                      <button
                        type="submit"
                        class="btn btn-block btn-custom"
                        onClick={submit}
                      >
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
