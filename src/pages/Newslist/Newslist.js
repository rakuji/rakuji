import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
// import { NEWSdata } from "./NEWSdata";

import "./Newslist.css";
// pages
import Carouselg from "../../components/Carousel/Carouselg";
import MyBackTop from "../../components/MyBackTop/MyBackTop";

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

  console.log(News);
  // didMount - 載入資料的時間點
  useEffect(() => {
    // 向伺服器要求get資料
    fetchNews();
  }, []);

  // console.log(date.toLocaleDateString(v.timestart)- (v.timeend))
  return (
    <main >
      <Carouselg />

      {/*  放breadcrumb margin-top 16px 無法加入  */}
      <div className="newsbackground">

      <div className="tt">
        <Breadcrumb />
      </div>
      {/* 動全部card的寬 */}
      <div className="container  col-10  d-flex justify-content-center">
        <div id="list" className="row row-cols-1 row-cols-md-3 g-6 col-12">
          {/* 1  最新消息照片*/}
          <div className="col totle">
            <div className="cardphoto1">
              <img
                src={require("./image/firstpic.png")}
                className="card-img"
                alt="..."
                width="140px"
                height="430px"
              />
              <br />
              <br />
            </div>
            {/*測試是否抓的到照片 <img src="http://localhost/project_rakuji/imgs/4b07d654503a3d3b98e2721adaaada1516c3fed8.png" /> */}
          </div>
          {/* 2 餐點投票 */}
          <div className="col totle">
            <div className="cardphoto2">
              <a href="/Votelist">
                <img
                  src={require("./image/33.jpg")}
                  className="card-img"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h3 className="card-title fs-4">票選料理之王</h3>
                <p className="card-text fs-6">2022/06/06 - 2022/06/26</p>
                <p className="card-content-t fs-5">
                  選出你的料理天菜，投票抽大獎!
                </p>

                {/* 手機版及縮小會跑版 */}
                <Link to="/Votelist" className="">
                  Votelist
                </Link>
              </div>
            </div>
          </div>

          {/* 3 異業合作 待修改 */}
          <div className="col totle">
            <div className="cardphoto2">
              <a href="/Cooperationform">
                <img
                  src={require("./image/00010.png")}
                  className="card-img"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h3 className="card-title fs-4">異業合作</h3>
                <p className="card-text fs-6">2022/01/01 - 2022/12/31</p>
                <p className="card-content-t fs-5">
                  歡迎將您的想法填入表單，將與您聯繫!!
                </p>
                {/* 手機版及縮小會跑版 */}
                <Link to="/Cooperationform" className="">
                  Cooperationform
                </Link>
              </div>
            </div>
          </div>

          {/* 開始接資料庫資料 */}
          {News.map((v, i) => {
     
            return (
              <div className="col totle" key={i}>
                <div className="card66">
                  {/* 抓照片  */}
                  <img
                    // src={require(`${process.env.PHP_APP_API_URL}/project_rakuji/imgs/${v.imgid}`)}
                    src={`http://172.18.103.62/project_rakuji/imgs/${v.imgid}`}
                    className="card-img"
                    alt=""
                  ></img>
                  <div className="card-body">
                    <h3 className="card-title fs-4">{v.name}</h3>

                    {/* 時間顯示"timestart": "2022-05-31T16:00:00.000Z" 不要後面T到Z這串  在後端那隻+dateString:true  */}

                    <p className="card-text fs-6">
                      {v.timestart}- {v.timeend}
                    </p>
                    <p className="card-content-t fs-5">{v.content}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 下面div是接頭 */}
        </div>
      </div>

      <br></br>
      <MyBackTop />
      </div>
          
    </main>
  );
}

export default Newslist;
