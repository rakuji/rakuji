// import React from 'react'
import React, { useState } from "react";
import "./css/my-login.css"
import "./css/reset.css"
  

function Register() {
    
    return (
        //JSX
        <>
            <div class="my-login-page">
                <section class="h-100">
                    <div class="container h-100">
                        <div class="row justify-content-md-center h-100">
                            <div class="card-wrapper">

                                <div class="card fat">
                                    <div class="card-body">
                                        <div class="m-title text-center">
                                            <img src={require("../../images/title/signin.png")} />

                                        </div>


                                        <form method="POST" class="my-login-validation" novalidate="">
                                            <div class="form-group ">
                                                <label for="pic">上傳頭貼</label>

                                                <div class="pic-dox"></div>
                                                <input type="file" id="pic" class="" name="pic" value="" required autofocus />


                                            </div>

                                            <div class="form-group">
                                                <label for="a"><span class="star">*</span>姓名</label>
                                                <input id="Name" type="text" class="form-control" name="Name" required data-eye />
                                            </div>

                                            <div class="form-group">
                                                <label for="sex">性別</label>
                                                <select class="form-select form-select-mb " aria-label=".form-select-lg example">

                                                    <option value="1" selected>男</option>
                                                    <option value="2">女</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label for="__">職業</label>
                                                <input id="__" type="password" class="form-control" name="__d" required data-eye />
                                            </div>

                                            <div class="form-group">

                                                <div class="row ">
                                                    <label for=""><span class="star">*</span>出生年月日</label>
                                                    <div class="col-sm-4">
                                                        <select class="form-select form-select-mb "
                                                            aria-label=".form-select-lg example">
                                                            <option value="1" selected>1983</option>
                                                            <option value="2">1984</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm">
                                                        <select class="form-select form-select-mb "
                                                            aria-label=".form-select-lg example">
                                                            <option value="1" selected>3</option>
                                                            <option value="2">4</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm">
                                                        <select class="form-select form-select-mb "
                                                            aria-label=".form-select-lg example">
                                                            <option value="1" selected>10</option>
                                                            <option value="2">11</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for=""><span class="star">*</span>居住縣市</label>
                                                <select class="form-select form-select-mb " aria-label=".form-select-lg example">
                                                    <option value="1" selected>彰化縣</option>
                                                    <option value="2">南投縣</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label for="">居住地址</label>
                                                <input id="" type="" class="form-control" name="" required data-eye />
                                            </div>

                                            <div class="form-group">
                                                <label for="">有無小孩</label>
                                                <select class="form-select form-select-mb " aria-label=".form-select-lg example">
                                                    <option value="1">有</option>
                                                    <option value="2" selected>無</option>
                                                </select>

                                            </div>


                                            <div class="form-group">
                                                <label for="number"><span class="star">*</span>手機號碼</label>

                                                <input type="tel" class="form-control" id="phone" name="phone" placeholder=""
                                                    pattern="[0-9]{10}" required /><br />
                                            </div>

                                            <div class="form-group">
                                                <label for="">
                                                    <h5>通知方式</h5>
                                                </label>
                                                <input type="radio" name="accredit" value="" checked /><span>手機認證</span><br />
                                                <input type="radio" name="accredit" value="" /><span>電子信箱認證</span>

                                                <br />
                                                <br />
                                                <input type="checkbox" />
                                                <span>是的, 我已閱讀並同意<a href="javascript:alert('條款及細則')" target=""><u class="hy-link">條款及細則</u></a>和<a href="javascript:alert('隱私政策')" target=""><u class="hy-link">
                                                    隱私政策</u></a><span class="star">*</span><br />
                                                    <input type="checkbox" />
                                                    <span>是的, 我想收到樂時町電子郵件得到有關優惠和促銷</span>
                                                </span>


                                                <br />

                                                <div class="form-group m-0">
                                                    <button type="submit" class="btn btn-block btn-custom">
                                                        註冊
                                                    </button><br />

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Register

