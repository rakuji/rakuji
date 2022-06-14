import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import $ from 'jquery';
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
    const [memberInfo, setMemberInfo] = useState([]);
    
    if( !sesStorage['memail'] || !auth){
        history.push('/member/login');
    }

    // 向 localhost:3001/members/email 請求會員相關資料(by query string 'memail')
    const fetchDatas = async ()=> {
         // 1) 請求會員基本資料:
        const resMemberData = await fetch(`${process.env.REACT_APP_API_URL}/members/email?memail=${sesStorage['memail']}`);
        const memberData = await resMemberData.json();
        // console.log(memberData);
        setMemberInfo(memberData);
        
    }


   

    useEffect(()=>{
        $("#submitMemberInfo").click((e) => {
            e.preventDefault();
            // console.log("Click修改鈕");
            const form = document.getElementById('formMemberInfo');
            console.log(form);
            const formData =  new FormData(form);
            console.log(formData);
      
            fetch(`${process.env.REACT_APP_API_URL}/members/email?memail=${sesStorage['memail']}`,{
                method:"put",
                body:formData
            }).then(response=>{
                // console.log(response);
                // 將'response'(Json陣列)轉為'物件'並回傳給'data'
                return response.json();
            }).then(data=>{
                // console.log(data);
                if (data.ok){
                    alert(`${sesStorage['memail']} 資料修改成功!`)
                  //  fetchDatas();  
                } else {
                    alert(`${sesStorage['memail']} 資料修改失敗!`);
                }
            })
        })
    },[])
    
    

    useEffect(()=>{
        fetchDatas();      
    },[])

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
                                            <button className="nav-link active" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                                aria-selected="true" >會員個人資料</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="order-tab" data-bs-toggle="tab"
                                                data-bs-target="#order" type="button" role="tab" aria-controls="order"
                                                aria-selected="false">訂單交易紀錄</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link " id="coupon-tab" data-bs-toggle="tab"
                                                data-bs-target="#coupon" type="button" role="tab" aria-controls="coupon"
                                                aria-selected="false">優惠資料紀錄</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-5" id="pills-tabContent">
                                        {/* <!-- profile --> */}
                                        <div className="tab-pane fade show active" id="profile" role="tabpanel"
                                            aria-labelledby="profile-tab">

                                            <form id="formMemberInfo" name="formMemberInfo" className="my-login-validation" noValidate="">
                                           
                                            {   memberInfo.map((v,i)=>{
                                                    const {Mname,Msex,Mvocation,Mbirthday,Mcity,Maddress,Mchild,Mphone,Mpassword} = v;
                                                    return(
                                                        <>
                                                            <div className="form-group">
                                                            <label htmlFor="a">姓名</label>
                                                            <input id="name" type="text" className="form-control minfo" name="name" defaultValue={Mname} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="sex">性別</label>
                                                                <input id="sex" type="text" className="form-control minfo" name="sex" defaultValue={Msex} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="vocation">職業</label>
                                                                <input id="vocation" type="text" className="form-control minfo" name="vocation" defaultValue={Mvocation} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="birthday">出生年月日</label>
                                                                <input id="birthday" type="text" className="form-control minfo" name="birthday" defaultValue={Mbirthday.substring(0,10)} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="city">居住縣市</label>
                                                                <input id="city" type="text" className="form-control minfo" name="city" defaultValue={Mcity} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">居住地址</label>
                                                                <input id="address" type="text" className="form-control minfo" name="address" defaultValue={Maddress} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="child">子嗣</label>
                                                                <input id="child" type="text" className="form-control minfo" name="child" defaultValue={Mchild} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">手機號碼</label>
                                                                <input id="phone" type="text" className="form-control minfo" name="phone" defaultValue={Mphone} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="password">修改密碼</label>
                                                                <input type="password" className="form-control minfo" id="password"  name="password" defaultValue={Mpassword} /><br />
                                                            </div>
                                                        </>
                                                    )
                                            })}
                                                
                                                <br />
                                                <div className="row form-group  g-3">
                                                    <div className="col-sm-6">
                                                        <button type="submit" id="submitMemberInfo" className="btn btn-block btn-custom">修改</button>
                                                        
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <button type="reset" className="btn btn-block btn-danger" >取消</button>
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
                                                                {/* <th scope="col">商品圖片</th> */}
                                                                <th scope="col">商品名稱</th>
                                                                <th scope="col">金額</th>
                                                                <th scope="col">數量</th>
                                                                <th scope="col">合計</th>
                                                                <th scope="col">日期</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">001</th>
                                                                {/* <td><img src={require("http://picsum.photos/50/50?random=10")} alt="" /></td> */}
                                                                <td>裝蒜牛五花飯<br />文青花魚飯</td>
                                                                <td>$330<br />$319</td>
                                                                <td>1<br />1</td>
                                                                <td>$649</td>
                                                                <td>2021-03-14</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">001</th>
                                                                {/* <td><img src={require("http://picsum.photos/50/50?random=10")} alt="" /></td> */}
                                                                <td>漢堡排<br />唐揚雞歐姆蛋咖哩飯</td>
                                                                <td>$250<br />$199</td>
                                                                <td>1<br />1</td>
                                                                <td>$449</td>
                                                                <td>2021-9-14</td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </form>
                                        </div>

                                        {/* <!-- coupon --> */}
                                        <div className="tab-pane fade show " id="coupon" role="tabpanel"
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
                                                            <input className="a1 w-100" type="text" value=" HBD520" id="myInput1" />
                                                        </div>
                                                    </div>

                                                    <div className="card col-12 col-md-5">
                                                        <img src={require('./images/account/Rectangle(unused).png')}
                                                            className="card-img-top w-100" alt="coupon" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">情人節折扣碼:</h6>
                                                            <input className="a1 w-100" type="text" value="Lover1798" id="myInput2" />
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
                                                                id="myInput3" />
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