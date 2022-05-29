import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';
import { Accordion } from 'react-bootstrap';
import { useCart } from './utils/useCart';

const Cart_confirm = () => {

    // 使用hooks 解出所需的狀態與函式(自context)
    const { cart, items} = useCart()
    console.log(items)

    // discount
    const [discount, setDiscount] = useState(600)

    //deliveryfee 
    const [deliveryfee, setDeliveryfee] = useState(100)

    const{address,email,name,phone} = JSON.parse(localStorage.getItem("cart_info"))

    

    return (
        <div className='container mb-5 cart_confirm'>
            <Stepper activeStep={2}>
                <Step label="填寫聯絡資訊" />
                <Step label="填寫付款資訊" />
                <Step label="完成訂單" />

            </Stepper>

            <div className="row mb-3 order_success">
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <i class="fa-solid fa-check me-2"></i>
                    <h3>訂購成功</h3>
                </div>
                <div className='d-flex justify-content-center'>
                    <p>訂單編號:001</p>
                </div>
            </div>


            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>訂單摘要</Accordion.Header>
                    <Accordion.Body>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>商品圖片</th>
                                    <th>商品名稱</th>
                                    <th>金額</th>
                                    <th>數量</th>
                                    <th>小計</th>
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((v, i) => {

                                    return (
                                        <tr key={i} className='cart_items'>
                                            <td>
                                                <div className="img_container">
                                                    <img
                                                        src={`/img/products/${v.picture}`}
                                                        alt=""
                                                    />
                                                </div>

                                            </td>
                                            <td>{v.name}</td>
                                            <td>${v.price}</td>
                                            <td>{v.quantity}</td>
                                            <td>${v.itemTotal}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="row mt-5">

                {/* info */}
                <div className="col-6">
                    <h3>訂單資訊</h3>
                    <hr />

                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂單日期:</p>
                        <p>{2022/05/24}</p>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人姓名:</p>
                        <p>{name}</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人電話:</p>
                        <p>{phone}</p>
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>訂購人信箱:</p>
                        <p>{email}</p>

                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                        <p>外送地址:</p>
                        <p>{address}</p>

                    </div>

                </div>


                {/* check_area */}
                <div className="col-6">

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
                            <p>折扣優惠</p>
                            <p>-${discount}元</p>
                        </div>

                        <div className='my-4'>
                            <p>總計</p>
                            <p>${cart.cartTotal - discount + deliveryfee}元</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <Link to="/">
                    <button className="cart_confirm_btn my-4">回首頁</button>
                </Link>
            </div>

        </div>
    )
}

export default Cart_confirm