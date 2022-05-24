import React from "react";

import { Link } from "react-router-dom";

import "./Newslist.css";
import Carousel_g from "../../components/Carousel/Carousel_g";

// pages
// import Carousel from "react-bootstrap/Carousel";

import Breadcrumb from "./Breadcrumb";

const Newslist = () => {
  // bunner圖片三張輪播 拿掉左右箭頭及下方三個長方形 圖片寫死 有時會動有時不會

  return (
    <main>
      <Carousel_g />

      {/*  放breadcrumb 顏色修改 第三個畫面更新 */}
      <Breadcrumb />
      {/* 動全部card的寬 */}
      <div className="container  col-10">

        <div id="list" className="row row-cols-1 row-cols-md-3 g-6 col-12">
            {/* 1 */}
              <div className="col">
            <div className="card1">
                  <img
                    src={require("./firstpic.png")}
                    className="card-img-top "
                    alt="..."
                    width="180px"
                    height="370px"
                  />

                  <br />
                  <br />
                </div>
            </div>
            {/* 2  圖片文字可以連結到Votelist */}
            <div className="col">
              <div className="card">  
                <img
                  src={require("./00001.png")}
                  className="card-img-top"
                  alt="..."
                />  
                <div className="card-body">
                  <h3 className="card-title fs-4">樂時町年末同樂會</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    年末開心情!!!慰勞一整年的辛苦!來樂時町享用套餐吧!
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col">
              <div className="card">
                <a href="/Newslist/Votelist">
                  <img
                    src={require("./00002.png")}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title fs-4">票選料理之王</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    選出你的料理天菜，投票抽大獎!
                  </p>

                  {/* 手機版及縮小會跑版 */}
                  <Link to="/Newslist/Votelist" className="">
                    Votelist
                  </Link>
                </div>
              </div>
            </div>

          {/* ˋ4 */}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00003.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">前程似錦</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    樂食町與您一同慶祝畢業，同桌每人皆享有甜品!
                  </p>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00004.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">端午特別優惠</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    來店點節慶套餐，享特殊優惠!
                  </p>
                  <br></br>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00005.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">慶祝母親節</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    帶媽媽一同慶祝，同桌享有88折優惠!
                  </p>
                  <br></br>
                </div>
              </div>
            </div>

          {/* 7 */}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00006.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">生日壽星</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    生日壽星，同桌享有88折優惠!
                    <br></br>
                    <br></br>

                  </p>
                </div>
              </div>
            </div>
            {/* 8 照片失真要換*/}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00007.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">食品認證</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    樂食町各項產品皆有通過食品認證，請安心享用!
                  </p>
                </div>
              </div>
            </div>
            {/* 9 照片失真要換*/}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00008.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">會員限定</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    加入樂食町會員，獲得第一手訊息及優惠方案!
                  </p>
                </div>
              </div>
            </div>

          {/* 10 照片失真要換*/}
            <div className="col">
              <div className="card">
                <img
                  src={require("./00009.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title fs-4">人才招募</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    加入樂食町家族，讓我們一同成長!!
                  </p>
                  <br></br>

                </div>
              </div>
            </div>
            {/* 11 照片失真要換*/}
            <div className="col">
              <div className="card">
                <a href="/Newslist/Cooperationform">
                  <img
                    src={require("./00010.png")}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <h3 className="card-title fs-4">異業合作</h3>
                  <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                  <p className="card-content fs-5">
                    歡迎將您的想法填入表單，將與您聯繫!!
                  </p>
                  {/* 手機版及縮小會跑版 */}
                  <Link to="/Newslist/Cooperationform" className="">
                    Cooperationform
                  </Link>
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
