import React from "react";

import "../About/aboutStore.css";
import MyBreadcrumb from "../About/myComponents/MyBreadcrumb";
import MyCarousel from "../About/myComponents/MyCarousel";
import MyShopList from "../About/myComponents/MyShopList";
import MyBackTop from "../About/myComponents/MyBackTop";

const Store = () => {
  return (
    <>
      {/* 輪播 */}
      <MyCarousel />
      {/* 背景圖 */}
      <div className="bg">
        <div className="container">
          {/* 麵包屑 */}
          <MyBreadcrumb nav="門市資訊" navlink="/store" location="123"/>
          {/* SHOPS圖片  */}
          <div className="d-flex justify-content-center pageTitleImg">
            <img src={require("../About/images/pageTitleShops.png")} className="img-fluid" alt="門市資訊" />
          </div>
          {/* 門市區域按鈕 */}
          <div className="d-flex justify-content-around areaBtns">
            <button type="button" className="btn myBtn ">北北基</button>
            <button type="button" className="btn myBtn ">桃竹苗</button>
            <button type="button" className="btn myBtn ">中彰投</button>
            <button type="button" className="btn myBtn ">雲嘉南</button>
            <button type="button" className="btn myBtn ">高屏</button>
          </div>
          {/* 門市資料列 */}
          <MyShopList listName="高雄左營店"/>
          {/* 回最上層 */}
          <MyBackTop />
        </div>
      </div>
    </>
  );
};

export default Store;
