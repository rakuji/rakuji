import React from "react";

import "./aboutStore.css";
import MyBreadcrumb from "./myComponents/MyBreadcrumb";
import MyCarousel from "./myComponents/MyCarousel";

const About = () => {
  return (
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>關於我們</div>
    <>
      <MyCarousel/>
      <div className="bg">
        <div className="container">
          <MyBreadcrumb nav="關於我們" navlink="/about" location="123"/>
        {/* ABOUT圖片  */}
        <div className="row justify-content-center pageTitleImg">
          <div className="col-4">
            <img src={require("./images/pageTitleAbout.png")} className="img-fluid" alt="關於我們" />
          </div>
        </div>
        {/* 樂物語圖片 */}
        <section>
          <div className="row justify-content-start">
            <div className="col-4 col-md-4 col-lg-2">
              <img
                src={require("./images/rakujiStory.png")}
                className="img-fluid"
                alt="樂物語"
              />
            </div>
          </div>
          <p className="about">
            2012年初夏, 高雄左營, 幾位對日式家庭料理有著熱忱的年輕人,
            在這裡創立了第一家樂時町洋食屋(Rakuji House)。
          </p>
          <p className="about">
            2022年初夏,
            樂時町已將這份熱忱擴展到其他縣市。樂時町期待與您相約下一個十年。
          </p>
          <div className="row">
            <div className="col-6">
              <img src={require("./images/story-1.png")} className="img-fluid about" alt="" />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("./images/story-2.png")}
                    className="img-fluid about"
                    alt=""
                  />
                </div>
                <div className="col-12">
                  <img
                    src={require("./images/story-3.png")}
                    className="img-fluid about"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 時食饗 */}
        <section>
          <div className="row justify-content-start">
            <div className="col-4 col-md-4 col-lg-2">
              <img
                src={require("./images/rakujiStyle.png")}
                className="img-fluid"
                alt="時食饗"
              />
            </div>
          </div>
          <p className="about">
            明治維新後，西洋飲食文化與各種文明一同傳入日本，和洋文化融合，料理更創造出全新「食」的世界，也是日本現代飲食文化的源頭。「樂時町」—以新鮮出發，日式三菜一湯的飲食文化融合台灣一年四季、符合當季時令的農特產，均衡地獲取營養，滿足一家老少口味的多樣選擇，
            拉近全家人的美味關係。
          </p>
          <div className="row">
            <div className="col-12">
              <img src={require("./images/style-1.png")} className="img-fluid about" alt="" />
            </div>
            <div className="col-12">
              <img src={require("./images/style-2.png")} className="img-fluid about" alt="" />
            </div>
          </div>
        </section>
        {/* 町尋路 */}
        <section>
          <div className="row justify-content-start">
            <div className="col-4 col-md-4 col-lg-2">
              <img
                src={require("./images/rakujiMap.png")}
                className="img-fluid"
                alt="町尋路"
              />
            </div>
          </div>
          <p className="about">
            尋找樂時町門市:<br />樂時町已在全台各地擁有多家門市，服務各地喜愛日式家庭料理的人們，歡迎您造訪我們一起享受歡樂時光。
          </p>
          <div className="row mapFrame">
            <div className="col-12 col-md-4 mapQuery">
              <select className="form-select" aria-label="Default select example">
                <option selected>請先選擇區域</option>
                <option value="1">北北基</option>
                <option value="2">桃竹苗</option>
                <option value="3">中彰投</option>
                <option value="3">雲嘉南</option>
                <option value="3">高屏</option>
              </select>
              <select className="form-select" aria-label="Default select example">
                <option selected>再選擇分店</option>
                <option value="1">高雄左營店</option>
                <option value="2">高雄前金店</option>
                <option value="3">高雄駁二店</option>
                <option value="3">高雄鳳山店</option>
                <option value="3">屏東站前店</option>
              </select>
            </div>
            <div className="col-12 col-md-8 mapQuery">
              <iframe title="高雄左營店"
                src="https://maps.google.com?output=embed&q=高雄市左營區文守路１９６號"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
};

export default About;
