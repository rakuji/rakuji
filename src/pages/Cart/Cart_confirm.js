import React from 'react'
import { Link } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';
import { Accordion } from 'react-bootstrap';

const Cart_confirm = () => {

    // 購物車筆數
    const cart_items = [1, 2, 3, 4, 5];


    return (
        <div className='container mb-5 cart_confirm'>
            <Stepper activeStep={2}>
                <Step label="填寫聯絡資訊" />
                <Step label="填寫付款資訊" />
                <Step label="完成訂單" />

            </Stepper>

            <div className="row mb-3 order_success">
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <i class="fa-solid fa-check me-2"></i>
                    <h3>訂購成功</h3>
                </div>
                <div className='d-flex justify-content-center'>
                    <p>訂單編號:001</p>
                </div>
            </div>


            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>訂單摘要</Accordion.Header>
                    <Accordion.Body>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>商品圖片</th>
                                    <th>商品名稱</th>
                                    <th>金額</th>
                                    <th>數量</th>
                                    <th>小計</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart_items.map((v, i) => {

                                    return (
                                        <tr key={i} className='cart_items'>
                                            <td>
                                                <div className="img_container">
                                                    {/* <img
                                                        src={require("../Products/images/maindish/MB-006裝蒜牛五花飯_s.jpg")}
                                                        alt=""
                                                    /> */}
                                                </div>

                                            </td>
                                            <td>裝蒜牛五花飯</td>
                                            <td>$120</td>
                                            <td>1</td>
                                            <td>$120</td>
                                        </tr>)
                                })}


                            </tbody>

                        </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="row mt-5">

                {/* info */}
                <div className="col-6">
                    <h3>訂單資訊</h3>
                    <hr />

                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂單日期:</p>
                        <p>2022/05/24</p>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人姓名:</p>
                        <p>王曉明</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人電話:</p>
                        <p>0912345678</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人信箱:</p>
                        <p>test@gmail.com</p>

                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>外送地址:</p>
                        <p>高雄市前金區</p>

                    </div>

                </div>


                {/* check_area */}
                <div className="col-6">

                    <div className='checkarea'>

                        <div className='my-4'>
                            <p>小計</p>
                            <p>$600元</p>
                        </div>


                        <div className='my-4'>
                            <p>折扣優惠</p>
                            <p>$600元</p>
                        </div>

                        <div className='my-4'>
                            <p>運費</p>
                            <p>$600元</p>
                        </div>

                        <div className='my-4'>
                            <p>總計</p>
                            <p>$600元</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <Link to="/">
                    <button className="cart_confirm_btn my-4">回首頁</button>
                </Link>
            </div>

        </div>
    )
}

export default Cart_confirm