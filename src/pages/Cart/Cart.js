import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

import { useCart } from '../../utils/useCart'


const Cart = () => {

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items, plusOne, minusOne, removeItem } = useCart()

    // 購物車筆數
    // const cart_items = [1, 2, 3, 4, 5];



    return (
        <div className='container'>


            <h3>購物車</h3>
            <table className='table'>
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
                    {items.map((v, i) => {

                        return (
                            <tr key={i} className='cart_items'>
                                <td>
                                    <div className="img_container">
                                        <img
                                            src="/img/products/MB-006裝蒜牛五花飯_s.jpg"
                                            alt=""
                                        />
                                    </div>

                                </td>
                                <td>{v.name}</td>
                                <td>${v.price}</td>
                                <td><div className="btn-group mr-2" role="group">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => {
                                            minusOne(v.id)
                                        }}
                                    >
                                        -
                                    </button>
                                    <button type="button" className="btn btn-light">
                                        {v.quantity}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => {
                                            plusOne(v.id)
                                        }}
                                    >
                                        +
                                    </button>
                                </div></td>
                                <td>${v.itemTotal}</td>
                                <td><i className="fa-solid fa-trash-can" onClick={() => {
                                    removeItem(v.id)
                                }}></i></td>
                            </tr>)
                    })}


                </tbody>

            </table>

            <div className="row justify-content-end">

                <div className="col-3 cart_checkarea me-5">
                    <div className='quantity my-4'>
                        <p>商品數量</p>
                        <p>共5件</p>
                    </div>

                    <div className='price my-4'>
                        <p>商品總計</p>
                        <p>$600元</p>
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