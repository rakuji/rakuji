import React from 'react'
import { Link } from 'react-router-dom';
import { Stepper, Step } from 'react-form-stepper';

const Cart_info = () => {
    return (
        <div className='container mb-5'>

            <Stepper activeStep={0}>
                <Step label="填寫聯絡資訊" />
                <Step label="填寫付款資訊" />
                <Step label="完成訂單" />
            </Stepper>


            <div className="row cart_info">

                {/* info */}
                <div className="col-8">
                    <h3>聯絡資訊</h3>
                    <hr />

                    <div className='mb-3'>
                        <label htmlFor="name" class="form-label">姓名</label>
                        <input id='name' type="text" class="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="phone" class="form-label">手機</label>
                        <input id='phone' type="text" class="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" class="form-label">信箱</label>
                        <input id='email' type="text" class="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="address" class="form-label">外送地址</label>
                        <input id='address' type="text" class="form-control" />

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

                        <Link to="/cart/cart_info/cart_order">
                            <button className="next_page my-2">下一步</button>
                        </Link>

                        <Link to="/cart">
                            <button className="last_page my-2">上一步</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart_info