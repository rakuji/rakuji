import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import $ from "jquery";
import { useCart } from "../pages/Cart/utils/useCart";
import Swal from "sweetalert2";

function Nav(props) {
  const { auth } = props;
  const { cart } = useCart();

  const history = useHistory();
  // console.log(cart.totalItems)

  useEffect(() => {
    if (cart.totalItems == 0) {
      $(".cart_totalItems").hide();
    } else {
      $(".cart_totalItems").show();
    }
  }, [cart]);

  useEffect(() => {
    $("#navclose").hide();

    var myCollapsible = document.getElementById("navbarSupportedContent");
    myCollapsible.addEventListener("hide.bs.collapse", function () {
      $("#navclose").hide();
      $("#navopen").show();
    });

    var myCollapsible = document.getElementById("navbarSupportedContent");
    myCollapsible.addEventListener("show.bs.collapse", function () {
      $("#navclose").show();
      $("#navopen").hide();
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}

        <div className="logo">
          <Link to="/" className="navbar-brand">
            <img src={require("../images/logo_color_row.png")} alt="" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i id="navopen" className="fa-solid fa-bars"></i>
          <i id="navclose" className="fa-regular fa-circle-xmark"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                關於我們
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newslist" className="nav-link">
                最新消息
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                餐點列表
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">
                線上訂位
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">
                創意食譜
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">
                門市資訊
              </Link>
            </li>
          </ul>
          {/* 按鈕區 */}
          <div>
            <div
              className="position-relative d-inline me-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (auth) {
                  history.push("/cart");
                } else {
                  Swal.fire({
                    icon: "warning",
                    title: "請先登入會員",
                    showCancelButton: true,
                    confirmButtonText: "登入",
                    cancelButtonText: "取消",
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      history.push("/member/login");
                    }
                  });
                }
              }}
            >
              <span
                className="iconify"
                data-icon="eva:shopping-cart-outline"
              ></span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart_totalItems">
                {cart.totalItems}
              </span>
            </div>
            <Link to="/member/login">
              <button type="button" className="btn mx-2">
                {auth ? "登出" : "登入/註冊"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
