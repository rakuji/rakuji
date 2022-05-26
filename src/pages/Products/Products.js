import React, { useEffect ,useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import $ from "jquery"

const Products = () => {
  // 從資料庫取得資料
  const [datas, setDatas] = useState([])
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
    $("#category_buttons button:first-child").attr("id", "active")
  })


  useEffect(() => {


    $("#category_buttons button").click(function () {
      $("#category_buttons button").removeAttr("id")
      $(this).attr("id", "active")
    })
  }, [])



  useEffect(() => {
    gsap.timeline().from(".product_card", {
      duration: 1,
      opacity: 0,
      delay: 1,
      stagger: 0.1,
    });
  }, [datas]);


  //商品加入購物車按鈕(事件阻擋)
  useEffect(() => {
    document.getElementsByClassName("product_card").onclick = (event) => {
      // event.stopPropagation();
    };
  }, []);


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

          <form className="d-flex product_search">
            <input
              className="form-control"
              type="search"
              placeholder="搜尋餐點"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
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
                <button key={i} className="product_category">
                  {v}
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-10 products">
          {datas.map((v, i) => {
            return (

              <div key={i} className="product_container">

                <div className="product_card">
                  <Link to={`/products/product_detail/${v.id}`}>
                    <div className="imageContainer mb-2">
                      {/* <img src={require("./images/maindish/MB-006裝蒜牛五花飯_s.jpg")} alt="" /> */}
                      {/* <img src="/img/products/CH-001綜合寶寶粥.jpg" alt="" /> */}
                      <img src={`/img/products/${v.picture}`} alt="" />
                    </div>
                    <div className="product_card_info">
                      <p className="mb-2">{v.name}</p>
                      <p className="mb-2">NT{v.price}</p>
                      <button id="cart_icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
