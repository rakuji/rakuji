import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a className="navbar-brand" href="#">
            <img src={require("../image/logo_color_row.png")} alt="" />
          </a>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                關於我們
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                餐點列表
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                線上訂位
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                創意食譜
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                門市資訊
              </a>
            </li>
          </ul>
          {/* 按鈕區 */}
          <div>
            <span className="iconify" data-icon="eva:shopping-cart-outline"></span>
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
