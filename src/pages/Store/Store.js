import React, { useEffect } from "react";
import $ from "jquery";

import "../About/aboutStore.css";
import MyBreadcrumb from "../About/myComponents/MyBreadcrumb";
import MyCarousel from "../About/myComponents/MyCarousel";
import MyShopList from "../About/myComponents/MyShopList";
import MyBackTop from "../About/myComponents/MyBackTop";

const Store = () => {
  const storeArray = ["北北基", "桃竹苗", "中彰投", "雲嘉南", "高屏"];

  useEffect(() => {
    $("#storeArray_buttons button:first-child").attr("id", "active");
  });

  useEffect(() => {
    $("#storeArray_buttons button").click(function () {
      $("#storeArray_buttons button").removeAttr("id");
      $(this).attr("id", "active");
    });
  }, []);
  return (
    <>
      {/* 輪播 */}
      <MyCarousel />
      {/* 背景圖 */}
      <div className="">
        <div className="container">
          {/* 麵包屑 */}
          <MyBreadcrumb nav="門市資訊" navlink="/store" location="123" />
          {/* SHOPS圖片  */}
          <div className="d-flex justify-content-center pageTitleImg">
            <img
              src={require("../About/images/pageTitleshops.png")}
              className="img-fluid"
              alt="門市資訊"
            />
          </div>
          {/* 門市區域按鈕 */}
          <div className="d-flex justify-content-around areaBtns">

            <div className=" container ">
              <div className="row myBtn2" id="storeArray_buttons">
                {storeArray.map((v, i) => {
                  return (
                    <button key={i} className="col">
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>
            
          </div>
          {/* 門市資料列 */}
          <MyShopList branch="高雄左營店" />
          {/* 回最上層 */}
          <MyBackTop />
        </div>
      </div>
    </>
  );
};

export default Store;
