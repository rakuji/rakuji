import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useCart } from '../utils/useCart'

const CartItem = ({ id, picture, name, price, quantity, itemTotal }) => {

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
        Swal.fire({
          title: '確定要刪除商品?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確定',
          cancelButtonText: '取消',
        }).then((result) => {
          if (result.isConfirmed) {
            removeItem(id)
            Swal.fire({
              icon: 'success',
              title: '商品已刪除成功!',
            })
          }
        })
      }}></i></td>
    </tr>
  )
}

export default CartItem