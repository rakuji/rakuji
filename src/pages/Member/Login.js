import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./css/my-login.css"
import "./css/reset.css"


function Login() {
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

                                    <form method="POST" class="my-login-validation" novalidate="">
                                        <div class="form-group">
                                            <label for="email">會員帳號</label>
                                            <input id="email" type="email" class="form-control" name="email" value="" required autofocus />
                                            <div class="invalid-feedback">
                                                無效的電子信箱
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="password">會員密碼
                                                <a href="forgot.html" class="float-right">
                                                    忘記密碼?
                                                </a>
                                            </label>
                                            <input id="password" type="password" class="form-control" name="password" required data-eye />
                                            <div class="invalid-feedback">
                                                密碼已存在
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="custom-checkbox custom-control">
                                                <input type="checkbox" name="remember" id="remember" class="custom-control-input" />
                                                <label for="remember" class="custom-control-label">記住我</label>
                                            </div>
                                        </div>

                                        <div class="form-group m-0">
                                            <button type="submit" class="btn btn-block btn-custom">
                                                登入
                                            </button><br />
                                            <p class="align">其他方式登入</p>

                                            <button type="submit" class="btn btn-danger btn-block">
                                                使用GOOGLE登入
                                            </button>
                                            <button type="submit" class="btn btn-primary btn-block">
                                                使用Facebook登入
                                            </button>
                                        </div>
                                        <div class="mt-4 text-center">
                                            還沒有會員? <Link to="Register">註冊</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="footer">
                                Copyright &copy; 2022  &mdash; RAKUJI樂時町洋食館

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>

    )
};

export default Login
