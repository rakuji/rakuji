import React from 'react'

import { useCart } from '../utils/useCart'

const CartItem = ({id,picture,name,price,quantity,itemTotal}) => {

  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()

  return (
    <tr className='cart_items'>
      <td>
        <div className="img_container">
          <img
            src={`/img/products/${picture}`}
            alt=""
          />
        </div>

      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td><div className="btn-group mr-2" role="group">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            minusOne(id)
          }}
        >
          -
        </button>
        <button type="button" className="btn btn-light">
          {quantity}
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            plusOne(id)
          }}
        >
          +
        </button>
      </div></td>
      <td>${itemTotal}</td>
      <td><i className="fa-solid fa-trash-can cart_trush_btn" onClick={() => {
        removeItem(id)
      }}></i></td>
    </tr>
  )
}

export default CartItem