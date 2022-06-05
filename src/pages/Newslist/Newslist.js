import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
// import { NEWSdata } from "./NEWSdata";

import "./Newslist.css";
// pages
import Carouselg from "../../components/Carousel/Carouselg";

function Newslist() {
  // console.log(NEWSdata);
  const [News, setNews] = useState([]);

  //get假資料
  const fetchNews = async () => {
    //向遠端伺服器get資料
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/latest_news`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setNews(data);
  };

  console.log(News)
  // didMount - 載入資料的時間點
  useEffect(() => {
    // 向伺服器要求get資料
    fetchNews();
  }, []);

  // console.log(date.toLocaleDateString(v.timestart)- (v.timeend))
  return (
    <main>
      <Carouselg />

      {/*  放breadcrumb 顏色修改 第三個畫面更新 */}
      <Breadcrumb />

      {/* 動全部card的寬 */}
      <div className="container  col-10  d-flex justify-content-center">
        <div id="list" className="row row-cols-1 row-cols-md-3 g-6 col-12">
          {/* 1  最新消息照片*/}
          <div className="col">
            <div className="card1">
              <img
                src={require("./image/firstpic.png")}
                className="card-img-top "
                alt="..."
                width="180px"
                height="370px"
              />

              <br />
              <br />
            </div>
          </div>
          {News.map((v, i) => {
            return (
              <div className="col" key={i}>
                <div className="card ">
                  {/* 照片抓資料庫無法顯示 img 會全白 src只有數字.png */}
                  <src className="card-img-top" alt="" >
                  {v.imgid}
                  </src>
                  <div className="card-body">
                    <h3 className="card-title fs-4">{v.name}</h3>

                    {/* 時間顯示"timestart": "2022-05-31T16:00:00.000Z" 不要後面T到Z這串  在後端那隻+dateString:true  */}

                    <p className="card-text fs-6">
                      {v.timestart}- {v.timeend}
                    </p>
                    <p className="card-content fs-5">{v.content}</p>
                    
                  </div>
                </div>
              </div>
            );
          })}
          {/* test end */}
          {/* 2  圖片文字可以連結到Votelist */}
          <div className="col">
            <div className="card">
              <img
                src={require("./image/00001.png")}
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
              <a href="/Votelist">
                <img
                  src={require("./image/00002.png")}
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
                <Link to="/Votelist" className="">
                  Votelist
                </Link>
              </div>
            </div>
          </div>
          {/* ˋ4 */}
          <div className="col">
            <div className="card">
              <img
                src={require("./image/00003.png")}
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
                src={require("./image/00004.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title fs-4">端午特別優惠</h3>
                <p className="card-text fs-6">2022/12/56 - 2022/12/56</p>
                <p className="card-content fs-5">來店點節慶套餐，享特殊優惠!</p>
                <br></br>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="col">
            <div className="card">
              <img
                src={require("./image/00005.png")}
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
                src={require("./image/00006.png")}
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
                src={require("./image/00007.png")}
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
                src={require("./image/00008.png")}
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
                src={require("./image/00009.png")}
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
              <a href="/Cooperationform">
                <img
                  src={require("./image/00010.png")}
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
                <Link to="/Cooperationform" className="">
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
}

export default Newslist;
