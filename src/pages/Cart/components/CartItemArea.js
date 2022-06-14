import React from 'react'
import CartItem from './CartItem';
import { useCart } from '../utils/useCart'

const CartItemArea = () => {

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items, plusOne, minusOne, removeItem } = useCart()

    return (
        <table className={`cart_table table ${cart.isEmpty == true ? "d-none" : ""}`}>
            <thead>
                <tr>
                    <th>商品圖片</th>
                    <th>商品名稱</th>
                    <th>金額</th>
                    <th>數量</th>
                    <th>小計</th>
                    <th>刪除</th>
                </tr>
            </thead>

            <tbody>
                {items.map((v, i) => (
                    <CartItem key={i} id={v.id} picture={v.picture} name={v.name} price={v.price} quantity={v.quantity} itemTotal={v.itemTotal} />
                ))}
            </tbody>

        </table>
    )
}

export default CartItemArea