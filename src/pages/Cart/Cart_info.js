import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import CartCheckAreaInfo from './components/CartCheckAreaInfo';
import { Link } from 'react-router-dom';


const Cart_info = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")




    let cart_info = { name, phone, email, address }
    localStorage.setItem("cart_info", JSON.stringify(cart_info))


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
                        <label htmlFor="name" className="form-label">姓名</label>
                        <input id='name' type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="phone" className="form-label">手機</label>
                        <input id='phone' type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">信箱</label>
                        <input id='email' type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="address" className="form-label">外送地址</label>
                        <input id='address' type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />

                    </div>

                </div>


                {/* check_area */}
                <div className="col-4">
                    <div className='checkarea'>
                        <CartCheckAreaInfo />

                        <Link to={"/cart/cart_info/cart_order"}>
                            <button className="next_page my-2">下一步</button>
                        </Link>

                        <Link to={"/cart"}>
                            <button className="last_page my-2">上一步</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart_info