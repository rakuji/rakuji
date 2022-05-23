import React from 'react'
import "./style.css";

const Cart = () => {
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
                    <tr className='cart_items'>
                        <td>
                            <div className="img_container">
                                <img
                                    src={require("../Products/images/maindish/MB-006裝蒜牛五花飯_s.jpg")}
                                    alt=""
                                />
                            </div>

                        </td>
                        <td>裝蒜牛五花飯</td>
                        <td>$120</td>
                        <td>1</td>
                        <td>$120</td>
                        <td><i class="fa-solid fa-trash-can"></i></td>
                    </tr>
                </tbody>

            </table>

        </div >

    )
}

export default Cart