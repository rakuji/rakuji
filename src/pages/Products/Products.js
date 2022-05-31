import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";
import $ from "jquery"
import { Modal, Button } from 'react-bootstrap'
import { useCart } from '../Cart/utils/useCart'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// 商品範例
// import datas from './data/products.json'

const Products = (props) => {
  // 從資料庫取得資料
  const [datas, setDatas] = useState([])
  // 選單列狀態
  const [categoryIndex, setCatetoryIndex] = useState(0)

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    const results = await response.json();
    setDatas(results);
  }
  useEffect(() => {
    fetchData();
  }, [])

  const category = [
    "全部商品",
    "主食",
    "前菜",
    "湯品",
    "飲品",
    "甜點",
    "副產品",
  ];

  let deg = 0;
  const price_search = () => {
    deg += 180;
    document.getElementById("price_search").style.transition = "0.3s";
    document.getElementById(
      "price_search"
    ).style.transform = `rotate(${deg}deg)`;
  };

  useEffect(() => {
    $(`#category_buttons button[id=${categoryIndex}]`).attr("id", "active")
  })

  useEffect(() => {

    $("#category_buttons button").click(function () {
      $("#category_buttons button").removeAttr("id")
      $(this).attr("id", "active")
    })
  }, [])

  useEffect(() => {
    gsap.timeline({ onComplete: () => gsap.set(".product_card", { clearProps: true }) }).from(".product_card", {
      duration: 1,
      opacity: 0,
      delay: 0,
      stagger: 0.1,
    });
  }, [categoryIndex, datas]);


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
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>餐點列表</div>
    <div className="container">
      <div className="row mb-3">
        <div className="col-2"></div>
        <div className="col-10 srarch_bar d-flex justify-content-between">
          <div
            className="price_search d-flex justify-content-center align-items-center"
            onClick={price_search}
          >
            <p className="mb-0 me-2">價錢</p>
            <div>
              <i id="price_search" className="fa-solid fa-arrow-down"></i>
            </div>
          </div>

          {/* 產品搜尋 */}
          <form className="d-flex product_search">
            <input
              className="form-control"
              type="search"
              placeholder="搜尋餐點"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

        </div>
      </div>

      <div className="row">
        <div className="col-2 product_category_aside">
          <div className="sticky-top" id="category_buttons">
            {category.map((v, i) => {
              return (
                <button key={i} id={i} className="product_category" onClick={() => setCatetoryIndex(i)}>
                  {v}
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-10 products">
          {datas.filter((v, i) => {
            if (categoryIndex === 0) return true

            return v.category === category[categoryIndex]
          }).map((v, i) => {
            return (
              <div key={i} className="product_container">
                <Link to={`/products/product_detail/${v.id}`}>
                  <div className="product_card">
                    <div className="imageContainer mb-2">
                      {/* <img src={require("./images/maindish/MB-006裝蒜牛五花飯_s.jpg")} alt="" /> */}
                      {/* <img src="/img/products/CH-001綜合寶寶粥.jpg" alt="" /> */}
                      <img src={`/img/products/${v.picture}`} alt="" />
                    </div>
                    <div className="product_card_info">
                      <p className="mb-2">{v.name}</p>
                      <p className="mb-2">NT{v.price}</p>
                      <button id="cart_icon" onClick={(e) => {
                        console.log(v)
                        // 事件阻擋
                        e.preventDefault()
                        // 商品原本無數量屬性(quantity)，要先加上
                        const item = { ...v, quantity: 1 }
                        console.log(item)
                        // 注意: 重覆加入會自動+1產品數量
                        addItem(item)
                        // 呈現跳出對話盒
                        // showModal(v.name) //react-bootstrap modal
                        Swal.fire({
                          icon: 'success',
                          title: '商品已加入購物車',
                          timer: 1500,
                          timerProgressBar: true,
                          showCancelButton: false, // There won't be any cancel button
                          showConfirmButton: false // There won't be any confirm button
                        })
                      }}>
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </Link>

              </div>
            );
          })}
        </div>
      </div>

      {messageModal}

    </div >
  );
};

export default withRouter(Products);
