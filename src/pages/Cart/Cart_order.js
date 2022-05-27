import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Cart_order = () => {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');






    return (
        <div className='container mb-5'>
            
            
            <Stepper activeStep={1}>
                <Step label="填寫聯絡資訊" />
                <Step label="填寫付款資訊" />
                <Step label="完成訂單" />
            </Stepper>


            <div className="row">

                <div className="col-8">
                    <h3>付款資訊</h3>

                    <div id="PaymentForm">
                        <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focus}
                        />
                        <form className="cart-creditcard-form mt-5">

                            <div className="row">
                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">請輸入信用卡卡號:</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="tel"
                                        name="number"
                                        placeholder="Card Number"
                                        maxlength="16"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>


                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">持卡人姓名</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>

                            </div>


                            <div className="row mt-3">
                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">有效月/年</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        value={expiry}
                                        maxLength="5"
                                        onChange={e => setExpiry(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>

                                <div className='col-6'>
                                    <label className='form-label' htmlFor="">驗證碼</label>
                                    <input
                                        className="cart-creditcard-input form-control"
                                        type="tel"
                                        name="cvc"
                                        maxLength="3"
                                        placeholder="CVC"
                                        value={cvc}
                                        onChange={e => setCvc(e.target.value)}
                                        onFocus={e => setFocus(e.target.name)}
                                    ></input>
                                </div>

                            </div>








                        </form>
                    </div>






                </div>


                {/* check_area */}
                <div className="col-4">
                    <div className='checkarea'>

                        <div className='my-4'>
                            <p>小計</p>
                            <p>$600元</p>
                        </div>


                        <div className='my-4'>
                            <p>折扣優惠</p>
                            <p>$600元</p>
                        </div>

                        <div className='my-4'>
                            <p>運費</p>
                            <p>$600元</p>
                        </div>

                        <div className='my-4'>
                            <p>總計</p>
                            <p>$600元</p>
                        </div>

                        <Link to="/cart/cart_info/cart_order/cart_confirm">
                            <button className="next_page my-2">確認付款</button>
                        </Link>

                        <Link to="/cart/cart_info">
                            <button className="last_page my-2">上一步</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart_order


