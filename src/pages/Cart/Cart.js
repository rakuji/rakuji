import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import CartItemArea from './components/CartItemArea';
import $ from "jquery"
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import { useCart } from './utils/useCart'


const Cart = (props) => {

    const [coupon, setCoupon] = useState(0)
    const [couponPrice, setCouponPrice] = useState(0)
    const [couponMsg, setCouponMsg] = useState("")


    const couponhandler = () => {

        switch (coupon) {
            case "VIP666":
                setCouponMsg("成功套用優惠碼，已折抵100元!")
                setCouponPrice(100)
                // handleShow()
                Swal.fire({
                    icon: 'success',
                    title: '成功套用優惠碼，已折抵100元!',
                })
                break;
            case "HAPPY888":
                setCouponMsg("成功套用優惠碼，已折抵50元!")
                setCouponPrice(50)
                Swal.fire({
                    icon: 'success',
                    title: '成功套用優惠碼，已折抵50元!',
                })
                break;
            case "RAKUJIISGOOD":
                setCouponMsg("成功套用優惠碼，已折抵30元!")
                setCouponPrice(30)
                Swal.fire({
                    icon: 'success',
                    title: '成功套用優惠碼，已折抵30元!',
                })
                break;
            default:
                setCouponMsg("請輸入正確的優惠碼!")
                setCouponPrice(0)
                Swal.fire({
                    icon: 'warning',
                    title: '請輸入正確的優惠碼!',
                })
        }
    }

    localStorage.setItem("couponPrice", couponPrice)


    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items, plusOne, minusOne, removeItem } = useCart()

    console.log(cart)


    // 對話盒使用
    const [show, setShow] = useState(false)


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const messageModal = (
        <Modal show={show} onHide={handleClose} keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>套用優惠碼訊息</Modal.Title>
            </Modal.Header>
            <Modal.Body>{couponMsg}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    確定
                </Button>
            </Modal.Footer>
        </Modal>
    )

    return (
        <div className='container' style={{ minHeight: " calc(100vh - 86px - 308px)" }}>


            <h3>購物車</h3>
            <CartItemArea />

            <div className="row justify-content-end">

                <div className="col-3 cart_checkarea me-5">

                    <form className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="請輸入優惠碼" aria-label="Recipient's username" aria-describedby="button-coupon" required="" onChange={(e) => {
                            setCoupon(e.target.value)
                        }} />
                        <button type="button" className="btn btn-right fz-0" id="button-coupon" onClick={couponhandler}> 套用優惠碼 </button>
                    </form>


                    <div className='quantity my-3'>
                        <p>數量</p>
                        <p>共{cart.totalItems}件</p>
                    </div>

                    <div className='price my-3'>
                        <p>小計</p>
                        <p>${cart.cartTotal}</p>
                    </div>

                    <div className='price my-3'>
                        <p>優惠折扣</p>
                        <p>$-{couponPrice}</p>
                    </div>

                    <hr />

                    <div className='price my-3'>
                        <p>總計</p>
                        <b className='cart_total_price'>${(cart.cartTotal - couponPrice <= 0) ? 0 : (cart.cartTotal - couponPrice)}</b>
                    </div>

                    <Link to="/cart/cart_info">
                        <button className="go_check my-4">前往結帳</button>
                    </Link>

                </div>
            </div>
            {messageModal}
        </div >

    )
}

export default Cart