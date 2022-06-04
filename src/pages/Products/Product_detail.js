import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlassMagnifier } from "react-image-magnifiers";
import { useCart } from '../Cart/utils/useCart'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// import products from './data/products.json'

const Product_detail = (props) => {

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
    picture: 'https://i.imgur.com/1GrakTl.jpg',
    name: '',
    price: 0,
    categroy: '',
    introduction: ''
  })

  //取得url productId
  const params = useParams()


  useEffect(() => {
    // 取得json檔
    const item = datas.find((v) => String(v.id) === params.productId)

    if (item) {
      setProduct(item)
    }
  }, [datas])



  //商品數量
  const [count, setCount] = useState(1)


  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  const [productName, setProductName] = useState('')

  const { addItem } = useCart()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName('產品：' + name + '已成功加入購物車')
    handleShow()
  }

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            // 導向購物車頁面
            props.history.push('/cart')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )


  return (
    <div className='container product_detail pb-5'>
      <div className="row">

        {/* 商品圖片 */}
        <div className="col-6 product_img d-flex justify-content-center align-items-center">


          <div className='product_img_container'>
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

        {/* 商品資訊 */}
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

            <button className="btn btn-outline-primary d-none d-md-block ms-1 rounded fw-bold border-2 add_cart ms-3" type="button" onClick={() => {
              console.log(product)
              // 商品原本無數量屬性(quantity)，要先加上
              const item = { ...product, quantity: count }
              console.log(item)
              // 注意: 重覆加入會自動+1產品數量
              addItem(item)
              // 呈現跳出對話盒
              // showModal(product.name)
              Swal.fire({
                icon: 'success',
                title: '商品已加入購物車',
                timer: 1500,
                timerProgressBar: true,
                showCancelButton: false, // There won't be any cancel button
                showConfirmButton: false // There won't be any confirm button
              })
            }}> 加入購物車 </button>
          </div>
        </div>
      </div>

      {messageModal}


    </div>
  )
}

export default Product_detail