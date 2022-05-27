import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import CartItemArea from './components/CartItemArea';


import { useCart } from '../../utils/useCart'


const Cart = () => {

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items, plusOne, minusOne, removeItem } = useCart()




    return (
        <div className='container'>


            <h3>購物車</h3>
            <CartItemArea/>

            <div className="row justify-content-end">

                <div className="col-3 cart_checkarea me-5">
                    <div className='quantity my-4'>
                        <p>商品數量</p>
                        <p>共{cart.totalItems}件</p>
                    </div>

                    <div className='price my-4'>
                        <p>商品總計</p>
                        <p>${cart.cartTotal}元</p>
                    </div>

                    <Link to="/cart/cart_info">
                        <button className="go_check my-4">前往結帳</button>
                    </Link>

                </div>
            </div>

        </div >

    )
}

export default Cart