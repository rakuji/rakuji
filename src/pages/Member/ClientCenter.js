import React from "react";
import "./css/my-login.css"
import "./css/reset.css"


function ClientCenter() {
    return (

        <body class="my-login-page">
            <header>header</header>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#index">首頁</a></li>
                    <li class="breadcrumb-item"><a href="#">會員管理</a></li>
                    <li class="breadcrumb-item active" aria-current="page">會員個人資料</li>
                </ol>
            </nav>
            <main>
                <aside class="m-3">
                    <div class="form-group ">

                        <div class="card" style="width: 18rem;">

                            <div class="m-3 pl-5">

                                <div class="circle box ">


                                    <img src="/src/image/account/account-1.jpg" class=" p-control" alt="..." />

                                </div>

                            </div>

                            <div class="card-body ">

                                <div class="justify-content-center text-sm-center m-3">
                                    <p class="card-text">Coupons: 2張</p>
                                </div>
                            </div>


                            <ul class="list-group list-group-flush">

                                <li class="list-group-item m-3">
                                    <div class="mb-2">
                                        <span class="text-control ">日期</span>
                                    </div>
                                    <div class=" pt-2">
                                        <img src="/src/image/account/Date.png" alt="" />
                                        <br />
                                    </div>
                                </li>

                                <li class="list-group-item m-3">
                                    <span class="text-control">您的餐點喜好</span>
                                    <div class="ml-4 pt-2">
                                        <img src="/src/image/account/A.png" alt="" />
                                        黃金豬排丼飯<br />
                                        <img src="/src/image/account/B.png" alt="" />
                                        可樂餅<br />
                                        <img src="/src/image/account/C.png" alt="" />
                                        烤鮭魚蘿蔔味增湯<br />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <article>
                    <div class="card fat">
                        <div class="card-body">

                            <nav class="nav nav-pills flex-column flex-sm-row">
                                <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page"
                                    href="./client-center.html">會員個人資料</a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="./order-list.html"
                                    target="_self">訂單交易紀錄</a>
                                <a class="flex-sm-fill text-sm-center nav-link" href="./coupon-list.html"
                                    target="_self">優惠資料紀錄</a>

                            </nav>
                            <br />

                            <form method="POST" class="my-login-validation" novalidate="">

                                <div class="form-group">
                                    <label for="a">姓名</label>
                                    <input id="Name" type="text" class="form-control" name="Name" value="吳建凡" disabled />
                                </div>

                                <div class="form-group">
                                    <label for="sex">性別</label>
                                    <input id="sex" type="text" class="form-control" name="sex" value="男" disabled />

                                </div>

                                <div class="form-group">
                                    <label for="__">職業</label>
                                    <input id="__" type="text" class="form-control" name="__d" value="工程師" disabled />
                                </div>

                                <div class="form-group">
                                    <label for="">出生年月日</label>
                                    <input id="" type="text" class="form-control" name="" value="1983-03-10" disabled />
                                </div>

                                <div class="form-group">
                                    <label for="">居住縣市</label>
                                    <input id="" type="text" class="form-control" name="" value="彰化縣" disabled />
                                </div>

                                <div class="form-group">
                                    <label for="">居住地址</label>
                                    <input id="" type="text" class="form-control" name="" value="伸港鄉埤墘一路13號" disabled />
                                </div>

                                <div class="form-group">
                                    <label for="">子嗣</label>
                                    <input id="" type="text" class="form-control" name="" value="有小孩" disabled />

                                </div>

                                <div class="form-group">
                                    <label for="number">手機號碼</label>
                                    <input type="tel" class="form-control" id="phone" name="phone" value="0912479060" disabled />
                                </div>
                                <div class="form-group">
                                    <label for="password">修改密碼</label>
                                    <input type="password" class="form-control" id="password" name="password" value="aaaaaaaaaa"
                                        disabled /><br />
                                </div>

                                <br />
                                <div class="row form-group  g-3">
                                    <div class="col-sm-5">
                                        <button type="submit" class="btn btn-block btn-custom ">
                                            修改
                                        </button>
                                    </div>
                                    <div class="col-sm-5">

                                        <button type="submit" class="btn btn-block btn-danger">
                                            取消
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
            </main>
        </body>
    )
};

export default ClientCenter