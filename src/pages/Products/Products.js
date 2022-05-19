import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Products = () => {
  const category = [
    "全部商品",
    "主食",
    "前菜",
    "湯品",
    "飲品",
    "甜點",
    "副產品",
  ];

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let deg = 0;
  const price_search = () => {
    deg += 180;
    document.getElementById("price_search").style.transition = "0.3s";
    document.getElementById(
      "price_search"
    ).style.transform = `rotate(${deg}deg)`;
  };

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
          <div className="sticky-top">
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
          {products.map((v, i) => {
            return (
              <div className="product_card">
                <Link to="/products/product_detail">
                  <div className="imageContainer mb-2">
                    <img
                      src={require("./images/MB-006裝蒜牛五花飯.jpg")}
                      alt=""
                    />
                  </div>
                </Link>
                <div className="product_card_info">
                  <p className="mb-2">裝蒜牛五花飯</p>
                  <p className="mb-2">NT150</p>
                  <button>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
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
