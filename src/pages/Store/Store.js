import React from 'react'

const Store = () => {
  return (
<<<<<<< Updated upstream
    <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>門市資訊</div>
  )
}
=======
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>門市資訊</div>
    <>
      <MyCarousel />
      <div class="bg">
        <div class="container">
          <MyBreadcrumb nav="門市資訊" navlink="/store" location="123"/>
          {/* SHOPS圖片  */}
          <div class="row justify-content-center pageTitleImg">
            <div class="col-4">
              <img src={require("../About/images/pageTitleshops.png")} class="img-fluid" alt="門市資訊" />
            </div>
          </div>
          {/* 門市區域按鈕 */}
          <div class="row justify-content-center areaBtns">
            <div class="col-12 col-md-10 col-md-8 d-flex justify-content-around">
              <button type="button" className="btn myBtn ">北北基</button>
              <button type="button" className="btn myBtn ">桃竹苗</button>
              <button type="button" className="btn myBtn ">中彰投</button>
              <button type="button" className="btn myBtn ">雲嘉南</button>
              <button type="button" className="btn myBtn ">高屏</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
>>>>>>> Stashed changes

export default Store