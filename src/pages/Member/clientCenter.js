import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./css/my-login.css"
// import "./css/reset.css"
import _ from 'lodash'

// import { Row } from "bootstrap"s

const myYear = ""
const myMonth = ""
// const sesStorage = sessionStorage

function ClientCenter(props) {
    const { auth } = props;
    const sesStorage  = sessionStorage;
    const history = useHistory();
    
    if( !sesStorage['memail'] || !auth){
        history.push('/member/login');
    }
    // **********************************************************************************
    // 呈現yearAndMonth
    const now = new Date()
    // 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
    const nowY = myYear ? myYear : now.getFullYear()
    // nowM =1-12
    const nowM = myMonth ? myMonth : now.getMonth() + 1 //注意回傳為 0~11
    // 呈現標題
    const weekDayList = ['日', '一', '二', '三', '四', '五', '六']
    // 本月有幾天
    // (上個月的最後一天是幾號)
    const days = new Date(nowY, nowM, 0).getDate()
    // 這個月的第一天是星期幾(0-6) (月份為0-11)
    const firstDay = new Date(nowY, nowM - 1, 1).getDay()
    // 本月所有日期的陣列資料
    const daysDataArray = []
    // 補前面的空白資料
    for (let i = 0; i < firstDay; i++) {
        daysDataArray.push('')
    }
    // 加入本月所有的日期資料
    for (let i = 0; i < days; i++) {
        daysDataArray.push(i + 1)
    }
    // 準備要呈現在網頁上
    const daysDisplayArray = _.chunk(daysDataArray, 7)
    // ************************************************************************

    return (

        <div className="container">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"> <Link to="/">首頁</Link></li>
                    {/* <li className="breadcrumb-item"><a href="#index">會員管理</a></li> */}
                    <li className="breadcrumb-item active" aria-current="page">會員中心: {sesStorage['memail']}</li>
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
                                        <span>日期</span>
                                    </div>
                                    <div className="">
                                        <h2 id="yearAndMonth" className="text-center fs-3">{nowY + '/' + nowM}</h2>
                                        <div className="table-responsive-md ">
                                            <table className="table">
                                                <thead id="title">
                                                    <tr>
                                                        {weekDayList.map(function (v, i) {
                                                            return <th key={i}>{v}</th>
                                                        })}
                                                    </tr>
                                                </thead>
                                                <tbody id="data" className="table-bordered">
                                                    {daysDisplayArray.map((v, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                {v.map((item, idx) => (
                                                                    <td key={idx}>{item}</td>
                                                                ))}
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                    </div>
                                </li>
                                <li className="list-group-item m-3">
                                    <span className="text-control">您的餐點喜好</span>
                                    <div className="ml-4 pt-2">
                                        <img src={require('./images/account/A.png')} alt="bg" />
                                        黃金豬排丼飯<br />
                                        <img src={require('./images/account/B.png')} alt="" />
                                        可樂餅<br />
                                        <img src={require('./images/account/C.png')} alt="" />
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
                                                    <label htmlFor="vocation">職業</label>
                                                    <input id="vocation" type="text" className="form-control" name="vocation" value="工程師" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="birthday">出生年月日</label>
                                                    <input id="birthday" type="text" className="form-control" name="birthday" value="1983-03-10" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="city">居住縣市</label>
                                                    <input id="city" type="text" className="form-control" name="city" value="彰化縣" disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">居住地址</label>
                                                    <input id="" type="text" className="form-control" name="" value="伸港鄉埤墘一路13號" disabled />
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
                                               
                                                <div className="table-responsive">
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
                                                                <td><img src={require("http://picsum.photos/50/50?random=10")} alt="" /></td>
                                                                <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                                <td>120$x5<br />120$x5</td>
                                                                <td>0$</td>

                                                                <td>1200$</td>
                                                                <td>2022-03-14</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">002</th>
                                                                <td><img src={require("http://picsum.photos/50/50?random=10")} alt="" /></td>
                                                                <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                                <td>120$x5<br />120$x5</td>
                                                                <td>100$</td>

                                                                <td>1200$</td>
                                                                <td>2022-03-14</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">003</th>
                                                                <td><img src={require("http://picsum.photos/50/50?random=10")} alt="" /></td>
                                                                <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                                <td>120$x5<br />120$x5</td>
                                                                <td>100$</td>
                                                                <td>1200$</td>
                                                                <td>2022-03-14</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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
                                                        <img src={require('./images/account/Rectangle(unused).png')}
                                                            className="card-img-top w-100" alt="coupon" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">生日折扣碼:</h6>
                                                            <input className="a1 w-100" type="text" value=" HBD520" id="myInput" />
                                                        </div>
                                                    </div>

                                                    <div className="card col-12 col-md-5">
                                                        <img src={require('./images/account/Rectangle(unused).png')}
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
                                                        <img src={require('./images/account/Rectangle(used).png')}
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