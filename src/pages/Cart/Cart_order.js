import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import CartCheckAreaInfo from './components/CartCheckAreaInfo';
import { useLocation } from 'react-router'
import { Modal, Button } from 'react-bootstrap'
import { useCart } from './utils/useCart'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart_order = () => {
    const history = useHistory()

    const [number, setNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items } = useCart()

    // 取出資料來
    if (localStorage.getItem("cart_info")) {
        var { address, email, name, phone } = JSON.parse(localStorage.getItem("cart_info"))
    }

    const couponPrice = parseInt(localStorage.getItem("couponPrice"))
    const cartTotalPrice = (cart.cartTotal - couponPrice <= 0) ? 0 : (cart.cartTotal - couponPrice)
    console.log(cartTotalPrice)
    const totalItems = cart.totalItems
    const cartTotal = cart.cartTotal


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


    const [orderid, setOrderid] = useState()
    localStorage.setItem("orderid", orderid) //將訂單編號存到localstorage

    //送資料到資料庫
    const sendData = async () => {

        await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
            method: 'POST',
            headers: { 
                Accept:'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                phone,
                email,
                address,
                items,
                totalItems,
                cartTotal,
                couponPrice,
                cartTotalPrice
            }),
        })
            .then(res => res.json())
            // .then(data => setOrderid(data))
            .then(data => localStorage.setItem("orderid", data))
            // .then(data => console.log(data))
    }

    console.log(orderid)


    // 對話盒使用
    const [show, setShow] = useState(false)


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    // const messageModal = (
    //     <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    //         <Modal.Header closeButton>
    //             <Modal.Title>提示訊息</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>確認要送出訂單嗎?</Modal.Body>
    //         <Modal.Footer>

    //             <Link to={"/cart/cart_info/cart_order/cart_confirm"}>
    //                 <Button variant="primary" onClick={sendCartData}>
    //                     確定
    //                 </Button>
    //             </Link>

    //             <Button variant="secondary" onClick={handleClose}>
    //                 取消
    //             </Button>
    //         </Modal.Footer>
    //     </Modal>
    // )



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
                    <div className='checkarea mt-5'>
                        <CartCheckAreaInfo />

                        {/* <Link to={"/cart/cart_info/cart_order/cart_confirm"}>
                            <button className="next_page my-2">確認付款</button>
                        </Link> */}

                        <button className="next_page my-2 sweet_btn" onClick={() => {
                            // sendData(); //送出資料
                            
                            Swal.fire({
                                title: '確定要送出訂單?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: '確定',
                                // confirmButtonText: '測試按鈕',
                                cancelButtonText: '取消',
                            }).then((result) => {
                                if (result.isConfirmed) {

                                    //送出訂單後要處理的事
                                    sendData(); //送出資料
                                    localStorage.removeItem('couponPrice'); //清除優惠折扣
                                    localStorage.removeItem('cart_info'); //清除訂購資訊
                                    // window.location.href = `/cart/cart_info/cart_order/cart_confirm` 
                                    history.push('/cart/cart_info/cart_order/cart_confirm') //跳轉頁面

                                    Swal.fire({
                                        icon: 'success',
                                        title: '訂單已送出!'
                                    })
                                }
                            })
                        }}>確認付款</button>

                        <Link to={"/cart/cart_info"}>
                            <button className="last_page my-2">上一步</button>
                        </Link>

                        {/* 傳後端測試用 */}
                        {/* <Link to={"/cart/cart_info/cart_order/cart_confirm"}>
                            <button className="next_page my-2" onClick={sendCartData}>測試按鈕</button>
                        </Link> */}

                        {/* <button className="next_page my-2" onClick={()=>{window.location.href = `/cart/cart_info/cart_order/cart_confirm`}}>測試按鈕</button> */}
                    </div>
                </div>



                {/* {messageModal} */}
            </div>

        </div >
    )
}

export default Cart_order


