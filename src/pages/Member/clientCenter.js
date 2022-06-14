import React from "react";
import "./css/my-login.css"
import "./css/reset.css"

// import { Row } from "bootstrap"s

function ClientCenter() {

    return (

        <div className="container">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#index">首頁</a></li>
                    <li className="breadcrumb-item"><a href="#">會員管理</a></li>
                    <li className="breadcrumb-item active" aria-current="page">會員個人資料</li>
                </ol>
            </nav>

            <div className="row">

                <div className="col-12 col-md-4">
                    <div className="form-group">
                        <div className="card">
                            <div className="m-3 d-flex justify-content-center">
                                <figure className="avatar mx-auto rounded-circle overflow-hidden">
                                    <img className="cover-fit" src="https://picsum.photos/200" alt="" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="justify-content-center text-sm-center">
                                    <p className="card-text">Coupons: 2張</p>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item m-3">
                                    <div className="mb-2">
                                        <span className="text-control">日期</span>
                                    </div>
                                    <div className="pt-2">
                                        <img src={require('../../images/account/Date.png')} alt="" className="w-100" />
                                        <br />
                                    </div>
                                </li>
                                <li className="list-group-item m-3">
                                    <span className="text-control">您的餐點喜好</span>
                                    <div className="ml-4 pt-2">
                                        <img src={require('../../images/account/A.png')} alt="bg" />
                                        黃金豬排丼飯<br />
                                        <img src={require('../../images/account/B.png')} alt="" />
                                        可樂餅<br />
                                        <img src={require('../../images/account/C.png')} alt="" />
                                        烤鮭魚蘿蔔味增湯<br />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-8 ">
                    <div className="card fat">
                        <div className="card-body">
                            <div className="container">
                                <div className="exTab3">

                                    <ul className="nav nav-pills justify-content-center" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link a" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                                aria-selected="true">會員個人資料</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="order-tab" data-bs-toggle="tab"
                                                data-bs-target="#order" type="button" role="tab" aria-controls="order"
                                                aria-selected="false">訂單交易紀錄</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="coupon-tab" data-bs-toggle="tab"
                                                data-bs-target="#coupon" type="button" role="tab" aria-controls="coupon"
                                                aria-selected="false">優惠資料紀錄</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-5" id="pills-tabContent">
                                        {/* <!-- profile --> */}
                                        <div className="tab-pane fade show " id="profile" role="tabpanel"
                                            aria-labelledby="profile-tab">

                                            <form method="POST" className="my-login-validation" noValidate="">

                                                <div className="form-group">
                                                    <label htmlFor="a">姓名</label>
                                                    <input id="Name" type="text" className="form-control" name="Name"
                                                        value="吳建凡" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="sex">性別</label>
                                                    <input id="sex" type="text" className="form-control" name="sex" value="男"
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="__">職業</label>
                                                    <input id="__" type="text" className="form-control" name="__d" value="工程師"
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">出生年月日</label>
                                                    <input id="" type="text" className="form-control" name="" value="1983-03-10"
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">居住縣市</label>
                                                    <input id="" type="text" className="form-control" name="" value="彰化縣"
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">居住地址</label>
                                                    <input id="" type="text" className="form-control" name="" value="伸港鄉埤墘一路13號"
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">子嗣</label>
                                                    <input id="" type="text" className="form-control" name="" value="有小孩"
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="number">手機號碼</label>
                                                    <input type="tel" className="form-control" id="phone" name="phone"
                                                        value="0912479060" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">修改密碼</label>
                                                    <input type="password" className="form-control" id="password"
                                                        name="password" value="aaaaaaaaaa" disabled /><br />
                                                </div>
                                                <br />
                                                <div className="row form-group  g-3">
                                                    <div className="col-sm-6">
                                                        <button type="submit" className="btn btn-block btn-custom ">修改</button>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <button type="submit" className="btn btn-block btn-danger">取消</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        {/* <!-- order --> */}
                                        <div className="tab-pane fade show " id="order" role="tabpanel"
                                            aria-labelledby="order-tab">
                                            <form method="POST" className="my-login-validation " noValidate="">

                                                <table className="table " style={{ textAlign: "center" }}>
                                                    <thead className="line">
                                                        <tr className="text-color">
                                                            <th scope="col b1">訂單編號</th>
                                                            <th scope="col">商品圖片</th>
                                                            <th scope="col">商品名稱</th>
                                                            <th scope="col">金額</th>
                                                            <th scope="col">運費</th>

                                                            <th scope="col">合計</th>
                                                            <th scope="col">日期</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">001</th>
                                                            <td><img src="http://picsum.photos/50/50?random=10" alt="" /></td>
                                                            <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                            <td>120$x5<br />120$x5</td>
                                                            <td>0$</td>

                                                            <td>1200$</td>
                                                            <td>2022-03-14</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">002</th>
                                                            <td><img src="" alt="" /></td>
                                                            <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                            <td>120$x5<br />120$x5</td>
                                                            <td>100$</td>

                                                            <td>1200$</td>
                                                            <td>2022-03-14</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">003</th>
                                                            <td><img src="" alt="" /></td>
                                                            <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                            <td>120$x5<br />120$x5</td>
                                                            <td>100$</td>
                                                            <td>1200$</td>
                                                            <td>2022-03-14</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </form>
                                        </div>

                                        {/* <!-- coupon --> */}
                                        <div className="tab-pane fade show active" id="coupon" role="tabpanel"
                                            aria-labelledby="coupon-tab" noValidate="">
                                            <form method="POST" className="my-login-validation">
                                                <div className="row">
                                                    <div className="coupon-title">
                                                        <h4>未使用</h4>
                                                    </div>
                                                    <div className="card col-12 col-md-5">
                                                        <img src={require('../../images/account/Rectangle(unused).png')}
                                                            className="card-img-top w-100" alt="coupon" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">生日折扣碼:</h6>
                                                            <input className="a1 w-100" type="text" value=" HBD520" id="myInput" />
                                                        </div>
                                                    </div>

                                                    <div className="card col-12 col-md-5">
                                                        <img src={require('../../images/account/Rectangle(unused).png')}
                                                            className="card-img-top w-100" alt="coupon" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">情人節折扣碼:</h6>
                                                            <input className="a1 w-100" type="text" value="Lover1798" id="myInput" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <hr />
                                                    </div>

                                                    <div className="coupon-title">
                                                        <h4>已使用</h4>
                                                    </div>
                                                    <div className="card col-12 col-md-5">
                                                        <img src={require('../../images/account/Rectangle(used).png')}
                                                            className="card-img-top w-100" alt="coupon" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">首購折扣碼:</h6>
                                                            <input className="a1 w-100" type="text" value=" Frist1001"
                                                                id="myInput" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default ClientCenter