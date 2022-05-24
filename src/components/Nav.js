import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import $ from 'jquery'

function Nav() {

  useEffect(() => {

    $("#navclose").hide()

    var myCollapsible = document.getElementById('navbarSupportedContent')
    myCollapsible.addEventListener('hide.bs.collapse', function () {
      $("#navclose").hide();
      $("#navopen").show();
    })

    var myCollapsible = document.getElementById('navbarSupportedContent')
    myCollapsible.addEventListener('show.bs.collapse', function () {
      $("#navclose").show();
      $("#navopen").hide();
    })

  }, [])


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
            <Link to="/cart">
              <span className="iconify" data-icon="eva:shopping-cart-outline"></span>
            </Link>

            <button type="button" className="btn mx-2">
              登入/註冊
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;