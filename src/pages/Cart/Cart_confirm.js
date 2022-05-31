import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';
import { Accordion } from 'react-bootstrap';
import { useCart } from './utils/useCart';
import CartCheckAreaInfo from './components/CartCheckAreaInfo';
import moment from 'moment';

const Cart_confirm = () => {

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items, clearCart } = useCart()
    // console.log(items)

    //取出訂單編號
    const orderid = localStorage.getItem("orderid")

    // 從資料庫取得資料(未篩選過)
    const [orderDatas, setOrderDatas] = useState([])
    const [orderDetailDatas, setOrderDetailDatas] = useState([])

    // 訂單聯絡資訊(篩選過後)
    // const [mdfk,setMdfk] = useState({})

    // -------------------------測試區--------------------------------------------------
    // console.log(orderid)

    console.log(orderDatas)
    const order_info = orderDatas.find((v, i) => v.sid == orderid) //訂單聯絡資訊
    console.log(order_info)
    console.log(order_info?.sid)

    // console.log(orderDetailDatas)
    const order_items = orderDetailDatas.filter((v, i) => v.order_id == orderid) //訂單商品明細
    // console.log(order_items)

    // --------------------------------------------------------------------------------




    //查詢訂單聯絡資訊
    const fetchOrderData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/order`);
        const results = await response.json();
        setOrderDatas(results);
    }

    //查詢訂單商品明細
    const fetchOrderDetailData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/orderdetail`);
        const results = await response.json();
        setOrderDetailDatas(results);
    }

    useEffect(() => {
        clearCart(); //清除購物車
        fetchOrderData();
        fetchOrderDetailData();
    }, [])



    return (
        <div className='container mb-5 cart_confirm'>
            <Stepper activeStep={2}>
                <Step label="填寫聯絡資訊" />
                <Step label="填寫付款資訊" />
                <Step label="完成訂單" />

            </Stepper>

            <div className="row order_success">
                <div className='d-flex justify-content-center align-items-center my-2'>
                    <i className="fa-solid fa-check me-2"></i>
                    <h3>訂購成功</h3>
                </div>
                <div className='d-flex justify-content-center my-2'>
                    <p>餐點將於10～15分鐘外送到府，敬請耐心等候，感謝您的購買!</p>
                </div>
                <div className='mb-2 ms-1'>
                    <p>訂單編號:{orderid}</p>
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
                                {order_items.map((v, i) => {

                                    return (
                                        <tr key={i} className='cart_items'>
                                            <td>
                                                <div className="img_container">
                                                    <img
                                                        src={`/img/products/${v.picture}`}
                                                        alt=""
                                                    />
                                                </div>

                                            </td>
                                            <td>{v.name}</td>
                                            <td>${v.price}</td>
                                            <td>{v.quantity}</td>
                                            <td>${v.price * v.quantity}</td>
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
                        <p>{moment(order_info?.created_at).format("YYYY-MM-DD kk:mm:ss")}</p>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人姓名:</p>
                        <p>{order_info?.name}</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人電話:</p>
                        <p>{order_info?.phone}</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人信箱:</p>
                        <p>{order_info?.email}</p>

                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>外送地址:</p>
                        <p>{order_info?.address}</p>

                    </div>

                </div>


                {/* check_area */}
                <div className="col-6">

                    <div className='checkarea mt-5'>

                        {/* <CartCheckAreaInfo cartTotal={order_info.cartTotal} couponPrice={order_info.couponPrice} cartTotalPrice={order_info.cartTotalPrice}/> */}

                        <div className='my-4'>
                            <p>小計</p>
                            <p>${order_info?.cartTotal}元</p>
                        </div>

                        <div className='my-4'>
                            <p>優惠折扣</p>
                            <p>-${order_info?.couponPrice}元</p>
                        </div>


                        <div className='my-4'>
                            <p>總計</p>
                            <p>${order_info?.cartTotalPrice}元</p>
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