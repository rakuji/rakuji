import React from "react";
import "./css/my-login.css"
import "./css/reset.css"


function CouponList() {
    return (
        <div className="my-login-page">


<main className="d-flex justify-content-center">
                <aside className="m-3 ">
                    <div className="">
                        <div className="card" style={{ width: "18rem" }}>

                            {/* 大頭照 */}
                            <div className="d-flex">
                                <div className="justify-content-center text-center ">
                                    <div className="avatar"></div>
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

                        </div>
                    </div>
                </aside>
                <article className="m-3">
                    <div className="card fat">
                        <div className="card-body">
                            <nav className="nav nav-pills flex">
                                <a className="flex-sm-fill text-sm-center nav-link" aria-current="page"
                                    href="./ClientCenter">會員個人資料</a>
                                <a className="flex-sm-fill text-sm-center nav-link" href="./OrderList"
                                    target="_self">訂單交易紀錄</a>
                                <a className="flex-sm-fill text-sm-center nav-link active" href="./CouponList"
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