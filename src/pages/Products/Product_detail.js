import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlassMagnifier } from "react-image-magnifiers";
import { useCart } from '../../utils/useCart'

// import products from './data/products.json'

const Product_detail = () => {

  // 從資料庫取得資料
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    const results = await response.json();
    setDatas(results);
    // console.log(results)

  }
  useEffect(() => {
    fetchData();
  }, [])


  // 取得:id資料
  const [product, setProduct] = useState({
    id: 0,
    picture:'https://i.imgur.com/1GrakTl.jpg',
    name: '',
    price: 0,
    categroy: '',
    introduction:''
  })

  //取得url productId
  const params = useParams()


  useEffect(() => {
    // 取得json檔
    const item = datas.find((v) => String(v.id) === params.productId)

    if(item){
      setProduct(item)
    }
  }, [datas])




  //商品數量
  const [count, setCount] = useState(1)


  return (
    <div className='container product_detail pb-5'>
      <div className="row">
        <div className="col-6 product_img_container d-flex justify-content-center align-items-center">


          <div className='product_img'>
            <img src={`/img/products/${product.picture}`} alt="" />
          </div>

          {/* <GlassMagnifier
            className='product_img'
            imageSrc={`/img/products/${product.picture}`}
            imageAlt="Example"
            largeImageSrc={`/img/products/${product.picture}`} // Optional
            magnifierSize="35%"
            magnifierBorderSize={5}
            magnifierBorderColor="rgba(255, 255, 255, .5)"
          /> */}

        </div>
        <div className="col-6 product_info">
          <h1 className='pb-3'>{product.name}</h1>
          <p className='pb-5'>{product.introduction}</p>
          <h1 className='pb-5'>NT{product.price}</h1>

          <div className="input-group mb-4 product_counts">
            <button className="btn btn-primary" type="button" onClick={() => {
              if (count >= 2) {
                setCount(count - 1)
              }
            }}>
              <i className="fa-solid fa-minus"></i>
            </button>

            <input type="text" className="form-control text-center" min="1" onChange={e => setCount(parseInt(e.target.value))} value={count} />

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