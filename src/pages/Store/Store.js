import React from "react";

import "../About/aboutStore.css";
import MyBreadcrumb from "../About/myComponents/MyBreadcrumb";
import MyCarousel from "../About/myComponents/MyCarousel";

const Store = () => {
  return (
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>門市資訊</div>
    <>
      <MyCarousel />
      <div class="bg">
        <div class="container">
          <MyBreadcrumb location="門市資訊" />
        </div>
      </div>
    </>
  );
};

export default Store;
