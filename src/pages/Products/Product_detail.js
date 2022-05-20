import React from 'react'
import { GlassMagnifier } from "react-image-magnifiers";

const Product_detail = () => {
  return (
    <div className='container product_detail'>
      <div className="row">
        <div className="col-6 product_img d-flex justify-content-center align-items-center">
          <GlassMagnifier
            className='imageContainer'
            imageSrc={require("./images/主餐//MB-006裝蒜牛五花飯_s.jpg")}
            imageAlt="Example"
            largeImageSrc={require("./images/主餐//MB-006裝蒜牛五花飯_s.jpg")} // Optional
            magnifierSize="35%"
            magnifierBorderSize="5"
            magnifierBorderColor="rgba(255, 255, 255, .5)"
          />

        </div>
        <div className="col-6 product_info">
          <h1>裝蒜牛五花飯</h1>
          <p>
            使用新鮮的炸蒜片進行調味，與牛五花的油花、肉汁相當班配，與「寶島燒豚飯」相同，肉片堆成小山般的份量十分誘人，牛肉特有的香氣與溏心蛋濃郁的蛋香更是絕配。
          </p>
          <h1>
            NT150
          </h1>
        </div>
      </div>


    </div>
  )
}

export default Product_detail