import React,{useState} from 'react'
import { useCart } from '../utils/useCart'

const CartCheckAreaInfo = () => {

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart } = useCart()

    let couponPrice = localStorage.getItem("couponPrice")

    //deliveryfee 
    // const [deliveryfee, setDeliveryfee] = useState(100)


    return (
        <>
            <div className='my-4'>
                <p>小計</p>
                <p>${cart.cartTotal}元</p>
            </div>


            {/* <div className='my-4'>
                <p>運費</p>
                <p>${deliveryfee}元</p>
            </div> */}

            <div className='my-4'>
                <p>優惠折扣</p>
                <p>-${couponPrice}元</p>
            </div>


            <div className='my-4'>
                <p>總計</p>
                {/* <p>${cart.cartTotal + deliveryfee - couponPrice}元</p> */}
                <b className='cart_total_price'>${(cart.cartTotal - couponPrice <= 0) ? 0 : (cart.cartTotal - couponPrice)}元</b>
            </div>
        </>

    )
}

export default CartCheckAreaInfo