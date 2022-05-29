import React, { useState } from 'react'
import { useCart } from '../utils/useCart'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'


const CartCheckArea = () => {
    let couponPrice = localStorage.getItem("couponPrice")

    const location = useLocation()
    console.log(location.pathname)

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart } = useCart()

    //deliveryfee 
    const [deliveryfee, setDeliveryfee] = useState(100)

    return (
        <div className='checkarea'>

            <div className='my-4'>
                <p>小計</p>
                <p>${cart.cartTotal}元</p>
            </div>


            <div className='my-4'>
                <p>運費</p>
                <p>${deliveryfee}元</p>
            </div>

            <div className='my-4'>
                <p>優惠折扣</p>
                <p>-${couponPrice}元</p>
            </div>


            <div className='my-4'>
                <p>總計</p>
                <p>${cart.cartTotal + deliveryfee - couponPrice }元</p>
            </div>

            <Link to={(location.pathname === "/cart/cart_info") ? "/cart/cart_info/cart_order" : "/cart/cart_info/cart_order/cart_confirm"}>
                <button className="next_page my-2">下一步</button>
            </Link>

            <Link to={(location.pathname === "/cart/cart_info") ? "/cart" : "/cart/cart_info"}>
                <button className="last_page my-2">上一步</button>
            </Link>
        </div>
    )
}

export default CartCheckArea