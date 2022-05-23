import React from "react";
import "./css/my-login.css"
import "./css/reset.css"


function CouponList() {
    return (
        <div className="my-login-page">
            <header>header</header>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#index">首頁</a></li>
                    <li className="breadcrumb-item"><a href="#">會員管理</a></li>
                    <li className="breadcrumb-item active" aria-current="page">會員個人資料</li>
                </ol>
            </nav>
            <main className="d-flex justify-content-center">

                <aside className="m-3">
                    <div className="form-group ">

                        <div className="card " style={{width: "18rem"}}>

                            <div className="m-3 pl-5">

                                <div className="circle box ">


                                    <img src="/src/image/account/account-1.jpg" className=" p-control" alt="..." />

                                </div>

                            </div>
                            <div className="card-body ">

                                <div className="justify-content-center text-sm-center m-3">
                                    <p className="card-text">Coupons: 2張</p>
                                </div>
                            </div>

                            <ul className="list-group list-group-flush">

                                <li className="list-group-item m-3">
                                    <div className="mb-2">
                                        <span className="text-control ">日期</span>
                                    </div>
                                    <div className=" pt-2">
                                        <img src="/src/image/account/Date.png" alt="" />
                                        <br />
                                    </div>
                                </li>

                                <li className="list-group-item m-3">
                                    <span className="text-control">您的餐點喜好</span>
                                    <div className="ml-4 pt-2">
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
                <article className="m-3">
                    <div className="card fat">
                        <div className="card-body">
                            <nav className="nav nav-pills flex-column flex-sm-row">
                                <a className="flex-sm-fill text-sm-center nav-link " aria-current="page"
                                    href="./client-center.html">會員個人資料</a>
                                <a className="flex-sm-fill text-sm-center nav-link" href="./order-list.html"
                                    target="_self">訂單交易紀錄</a>
                                <a className="flex-sm-fill text-sm-center nav-link active" href="./coupon-list.html"
                                    target="_self">優惠資料紀錄</a>

                            </nav>
                            <br />

                            <form method="POST" className="my-login-validation" novalidate="">
                                <div className="m-3">
                                    未使用
                                </div>
                                <figure className="list-1">
                                    <img src="/src/image/account/coupon.png" alt="" />
                                </figure>
                                <hr />
                                <div className="m-3">
                                    已使用
                                </div>
                                <figure className="list-1">
                                    <img src="/src/image/account/coupon(used).png" alt="" />
                                </figure>
                            </form>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default CouponList;