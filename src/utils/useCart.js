import React, { useReducer, useContext, createContext, useEffect } from 'react'
import { reducer, init } from './cartReducer'
import useLocalStorage from './useLocalstorage'

const CartContext = createContext(null)

// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

// item = {
//   id: '',
//   quantity: 0,
//   name: '',
//   price: 0,
// }

export const CartProvider = ({
  children,
  initialCartItems = [],
  localStorageKey = 'cart',
}) => {
  // if localStorage has value with this key then use it to initialCartItems
  let items = initialCartItems

  if (!items.length) {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(localStorageKey)
      // Parse stored json or if none return initialValue
      items = item ? JSON.parse(item) : []
    } catch (error) {
      items = []
      console.log(error)
    }
  }

  // init state
  const [state, dispatch] = useReducer(reducer, items, init)

  // init setValue(localstoage)
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items)

  // when state.items change -> change localstorage value
  useEffect(() => {
    if (JSON.stringify(state.items) !== storedValue) {
      setValue(state.items)
    }
  }, [state])

  /**
   * 加入新項目(quantity:1)，重覆項目 quantity: quantity + 1
   * @param  {Object} item
   * @returns {void}
   */
  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    })
  }

  /**
   * 給定一id值，將這商品移出陣列中
   * @param {string} id
   * @returns {void}
   */
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id,
      },
    })
  }

  /**
   * 給定一item物件，依照id尋找後更新其中的屬性值
   * @param {Object} item
   * @returns {void}
   */
  const updateItem = (item) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    })
  }

  /**
   * 清空整個購物車
   * @returns {void}}
   */
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  /**
   * 給定一id值，回傳是否存在於購物車中
   * @param {string} id
   * @returns {boolean}
   */
  const isInCart = (id) => {
    return state.items.some((item) => item.id === id)
  }

  /**
   * 給定一id值，有尋找到商品時，設定quantity: quantity + 1
   * @param {string} id
   * @returns {void}
   */
  const plusOne = (id) => {
    return dispatch({
      type: 'PLUS_ONE',
      payload: {
        id,
      },
    })
  }

  /**
   * 給定一id值，有尋找到商品時，設定quantity: quantity - 1，但 quantity 最小值為1
   * @param {string} id
   * @returns {void}
   */
  const minusOne = (id) => {
    return dispatch({
      type: 'MINUS_ONE',
      payload: {
        id,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        items: state.items,
        addItem,
        removeItem,
        updateItem,
        clearCart,
        isInCart,
        plusOne,
        minusOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
