import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import CartCheckAreaInfo from './components/CartCheckAreaInfo';
import { useLocation } from 'react-router'
import { Modal, Button } from 'react-bootstrap'
import { useCart } from './utils/useCart'

const Cart_order = () => {

    const [number, setNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items,clearCart } = useCart()

    // 取出資料來
    const { address, email, name, phone } = JSON.parse(localStorage.getItem("cart_info"))

    const couponPrice = localStorage.getItem("couponPrice")
    const cartTotalPrice = cart.cartTotal - couponPrice
    const totalItems = cart.totalItems
    const cartTotal = cart.cartTotal
    const orderNumber = Math.floor(Math.random() * 888 ); // 訂單編號

    console.log(name) //姓名
    console.log(phone) //手機 
    console.log(email) //信箱
    console.log(address) //外送地址
    console.log(cart) //商品物件
    console.log(items) //商品明細
    console.log(totalItems) //商品數量
    console.log(cartTotal) //商品小計
    console.log(couponPrice) //優惠折扣金額
    console.log(cartTotalPrice) //商品總計
    console.log(orderNumber) //訂單編號



    //送資料到資料庫
    const testSendData = () => {

        fetch(`${process.env.REACT_APP_API_URL}/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                phone,
                email,
                address,
                items,
                totalItems,
                cartTotal,
                couponPrice,
                cartTotalPrice,
                orderNumber
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }




    //送出訂單後要處理的事
    const cartStorageClear = () => {


        // sendCartData();
        // clearCart();
        // localStorage.clear();
    }

    //訂單日期
    // const [orederCreateAt, setOrederCreateAt] = useState("")

    // const setOrderDate = ()=>{
    //     let d = new Date();
    //     console.log(d)
    // }


    // 對話盒使用
    const [show, setShow] = useState(false)


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const messageModal = (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>提示訊息</Modal.Title>
            </Modal.Header>
            <Modal.Body>確認要送出訂單嗎?</Modal.Body>
            <Modal.Footer>

                <Link to={"/cart/cart_info/cart_order/cart_confirm"}>
                    <Button variant="primary" onClick={cartStorageClear}>
                        確定
                    </Button>
                </Link>

                <Button variant="secondary" onClick={handleClose}>
                    取消
                </Button>
            </Modal.Footer>
        </Modal>
    )



    return (
        <div className='container mb-5'>


            <Stepper activeStep={1}>
                <Step label="填寫聯絡資訊" />
                <Step label="填寫付款資訊" />
                <Step label="完成訂單" />
            </Stepper>


            <div className="row">

                <div className="col-8">
                    <h3>付款資訊</h3>

                    <div id="PaymentForm">
                        <Cards
                            number={number}
                            name={cardName}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focus}
                        />
                        <form className="cart-creditcard-form mt-5">

                            <div className="row">
                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">請輸入信用卡卡號:</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="tel"
                                        name="number"
                                        placeholder="Card Number"
                                        maxLength="16"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>


                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">持卡人姓名</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={cardName}
                                        onChange={e => setCardName(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>

                            </div>


                            <div className="row mt-3">
                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">有效月/年</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        value={expiry}
                                        maxLength="5"
                                        onChange={e => setExpiry(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>

                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">驗證碼</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="tel"
                                        name="cvc"
                                        maxLength="3"
                                        placeholder="CVC"
                                        value={cvc}
                                        onChange={e => setCvc(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>


                {/* check_area */}
                <div className="col-4">
                    <div className='checkarea'>
                        <CartCheckAreaInfo />

                        {/* <Link to={"/cart/cart_info/cart_order/cart_confirm"}>
                            <button className="next_page my-2">確認付款</button>
                        </Link> */}

                        <button className="next_page my-2" onClick={() => { handleShow() }}>確認付款</button>

                        <Link to={"/cart/cart_info"}>
                            <button className="last_page my-2">上一步</button>
                        </Link>

                        <button className='next_page' onClick={testSendData}>測試按鈕</button>
                    </div>
                </div>



                {messageModal}
            </div>

        </div >
    )
}

export default Cart_order


