import React from "react";

import { Link } from "react-router-dom";



// pages

import Breadcrumb from "./Breadcrumb";

const Newslist = () => {
  // bunner圖片三張輪播 拿掉左右箭頭及下方三個長方形 圖片寫死

  return (
    <main>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" >
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={require("./bunner001.png")}
              width="1440px"
              className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item " data-bs-interval="3000">
            <img src={require("./bunner001.png")}
              width="1440px"
              className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item " data-bs-interval="3000">
            <img src={require("./bunner001.png")}
              width="1440px"
              className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>


      {/*  放breadcrumb 進入 顏色修改 */}

      <Breadcrumb />


      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* 1 */}
          <div className="col">
            <img src={require("./firstpic.png")} className="card-img-top" alt="..." width="250px" height="370px" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         

          </div>
          {/* 2 */}
          <div className="col">
            <div className="card">
              <img src={require("./00001.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">樂時町年末同樂會</h5>
                <p className="card-text fs-6">年末開心情!!!慰勞一整年的辛苦來樂時町點套餐，飲料讓你免費喝!!!</p>
                <Link to="/Votelist" className="nav-link">
                  Votelist
                </Link>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col">
            <div className="card">
              <img src={require("./00002.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">票選料理之王</h5>
                <p className="card-text fs-6">選出你的料理天菜，投票抽大獎</p>
                <Link to="/Cooperationform" className="nav-link">
                  Cooperationform
                </Link>
              </div>
            </div>
          </div>
          {/* ˋ4 */}
          <div className="col">
            <div className="card">
              <img src={require("./00003.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">前程似錦</h5>
                <p className="card-text fs-6">樂食町與您一同慶祝畢業，同桌每人皆享有甜品</p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="col">
            <div className="card">
              <img src={require("./00004.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">端午特別優惠</h5>
                <p className="card-text fs-6">來店點節慶套餐，享特殊優惠。</p>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="col">
            <div className="card">
              <img src={require("./00005.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">慶祝母親節</h5>
                <p className="card-text fs-6">帶媽媽一同慶祝，同桌享有88折優惠 </p>
              </div>
            </div>
          </div>
          {/* 7 */}
          <div className="col">
            <div className="card">
              <img src={require("./00006.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">生日壽星</h5>
                <p className="card-text fs-6">生日壽星，同桌享有88折優惠</p>
              </div>
            </div>
          </div>
          {/* 8 照片失真要換*/}
          <div className="col">
            <div className="card">
              <img src={require("./00007.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">食品認證</h5>
                <p className="card-text fs-6">樂食町各項產品皆有通過食品認證，請安心享用!</p>
              </div>
            </div>
          </div>
          {/* 9 照片失真要換*/}
          <div className="col">
            <div className="card">
              <img src={require("./00008.png")} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" >會員限定</h5>
                <p className="card-text fs-6">加入樂食町會員，獲得第一手訊息及優惠方案</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <br></br>

    </main>
  );



};

export default Newslist;
