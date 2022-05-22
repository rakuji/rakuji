  import React, { useState } from 'react'
import { GlassMagnifier } from "react-image-magnifiers";

const Product_detail = () => {

  const [count, setCount] = useState(1)

  console.log(count)

  return (
    <div className='container product_detail pb-5'>
      <div className="row">
        <div className="col-6 product_img_container d-flex justify-content-center align-items-center">
          <GlassMagnifier
            className='product_img'
            imageSrc={require("./images/主餐//MB-006裝蒜牛五花飯_s.jpg")}
            imageAlt="Example"
            largeImageSrc={require("./images/主餐//MB-006裝蒜牛五花飯_s.jpg")} // Optional
            magnifierSize="35%"
            magnifierBorderSize={5}
            magnifierBorderColor="rgba(255, 255, 255, .5)"
          />

        </div>
        <div className="col-6 product_info">
          <h1 className='pb-3'>裝蒜牛五花飯</h1>
          <p className='pb-5'>
            使用新鮮的炸蒜片進行調味，與牛五花的油花、肉汁相當班配，與「寶島燒豚飯」相同，肉片堆成小山般的份量十分誘人，牛肉特有的香氣與溏心蛋濃郁的蛋香更是絕配。
          </p>
          <h1 className='pb-5'>
            NT150
          </h1>

          <div className="input-group mb-4 product_counts">
            <button className="btn btn-primary" type="button" onClick={() => {
              if (count >= 2) {
                setCount(count - 1)
              }
            }}>
              <i className="fa-solid fa-minus"></i>
            </button>

            <input type="text" className="form-control text-center" min="1" onChange={e=>setCount(parseInt(e.target.value))} value={count}/>

            <button className="btn btn-primary rounded-end" type="button" onClick={() => { setCount(count + 1) }}>
              <i className="fa-solid fa-plus"></i>
            </button>

            <button className="btn btn-outline-primary d-none d-md-block ms-1 rounded fw-bold border-2 add_cart" type="button"> 加入購物車 </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Product_detail