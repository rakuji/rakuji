import React from "react";
import "./css/my-login.css"
import "./css/reset.css"

function ClientCenter() {
    return (

        <div className="my-login-page">
            <div>header</div>
            <nav ariaLabel="breadcrumb">

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#index">首頁</a></li>
                    <li className="breadcrumb-item"><a href="#">會員管理</a></li>
                    <li className="breadcrumb-item active" aria-current="page">會員個人資料</li>
                </ol>
            </nav>
            <main className="d-flex justify-content-center">
                <aside className="m-3 ">
                    <div className="">
                        <div className="card" style={{ width: "18rem" }}>

                            {/* 大頭照 */}
                            <div className="d-flex">
                                <div className="justify-content-center text-center ">
                                    123
                                    <div className="avatar">123</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className=" m-3">
                                    <p className="card-text">Coupons: 2張</p>
                                </div>
                            </div>


                            <ul className="list-group list-group-flush">
                                <li className="list-group-item m-3">
                                    <span className="">您的餐點喜好</span>
                                    <div className="ml-4 pt-2">

                                        <img src={require("../../images/account/A.png")} />
                                        黃金豬排丼飯<br />
                                        <img src={require("../../images/account/B.png")} />
                                        可樂餅<br />
                                        <img src={require("../../images/account/C.png")} />
                                        烤鮭魚蘿蔔味增湯<br />
                                    </div>
                                </li>

                            </ul>
                            <nav className="nav nav-pills flex-column flex-sm-column">
                                <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page"
                                    href="./client-center.html">會員個人資料</a>
                                <a className="flex-sm-fill text-sm-center nav-link" href="./order-list.html"
                                    target="_self">訂單交易紀錄</a>
                                <a className="flex-sm-fill text-sm-center nav-link" href="./coupon-list.html"
                                    target="_self">優惠資料紀錄</a>

                            </nav>
                        </div>
                    </div>
                </aside>
                <article className="m-3">
                    <div className="card fat">
                        <div className="card-body">

                            <br />

                            <form method="POST" className="my-login-validation" noValidate="">

                                <div className="form-group">
                                    <label htmlFor="a">姓名</label>
                                    <input id="Name" type="text" className="form-control" name="Name" value="吳建凡" disabled />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sex">性別</label>
                                    <input id="sex" type="text" className="form-control" name="sex" value="男" disabled />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="__">職業</label>
                                    <input id="__" type="text" className="form-control" name="__d" value="工程師" disabled />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">出生年月日</label>
                                    <input type="text" className="form-control" name="" value="1983-03-10" disabled />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">居住縣市</label>
                                    <input type="text" className="form-control" name="" value="彰化縣" disabled />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">居住地址</label>
                                    <input type="text" className="form-control" name="" value="伸港鄉埤墘一路13號" disabled />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">子嗣</label>
                                    <input type="text" className="form-control" name="" value="有小孩" disabled />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="number">手機號碼</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" value="0912479060" disabled />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">修改密碼</label>
                                    <input type="password" className="form-control" id="password" name="password" value="aaaaaaaaaa"
                                        disabled /><br />
                                </div>

                                <br />
                                <div className="row form-group  g-3">
                                    <div className="col-sm-5">
                                        <button type="submit" className="btn btn-block btn-custom ">
                                            修改
                                        </button>
                                    </div>
                                    <div className="col-sm-5">

                                        <button type="submit" className="btn btn-block btn-danger">
                                            取消
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
};

export default ClientCenter