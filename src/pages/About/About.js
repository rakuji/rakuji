import React from "react";

import "./aboutStore.css";
import MyBreadcrumb from "./myComponents/MyBreadcrumb";
import MyCarousel from "./myComponents/MyCarousel";
import MyBackTop from "../../components/MyBackTop/MyBackTop";
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    const selArea = document.querySelector("#select1");
    const selShop = document.querySelector("#select2 ");
    const ifrAddress = document.querySelector("#iframe1");

    //IIFE:立即呼叫函式表達式(載入頁面時立即執行)
    (async function loadData() {
      // fetch回傳JASON陣列(參見參見rakuji_backend專案:routes/shopMap.js)
      const responseArea = await fetch("/shopmap/area");
      // 將JASON陣列轉成物件陣列(JSAON-->object)
      const areas = await responseArea.json();
      // 更新selArea
      renderArea(areas);

      const area_id = selArea.options[selArea.selectedIndex].value;
      const responseShop = await fetch(`/shopmap/shop?area_id=${area_id}`);
      const shops = await responseShop.json();
      renderShop(shops);

      const shop_id = selShop.options[selShop.selectedIndex].value;
      const responseAddress = await fetch(`/shopmap/address?shop_id=${shop_id}`);
      const address = await responseAddress.json();
      renderAddress(address);
    })();

    selArea.addEventListener("change", async () => {
      const area_id = selArea.options[selArea.selectedIndex].value;
      const responseShop = await fetch(`/shopmap/shop?area_id=${area_id}`);
      const shops = await responseShop.json();
      renderShop(shops);

      const shop_id = selShop.options[selShop.selectedIndex].value;
      const responseAddress = await fetch(`/shopmap/address?shop_id=${shop_id}`);
      const address = await responseAddress.json();
      renderAddress(address);
    });

    selShop.addEventListener("change", async () => {
      const shop_id = selShop.options[selShop.selectedIndex].value;
      const responseAddress = await fetch(`/shopmap/address?shop_id=${shop_id}`);
      const address = await responseAddress.json();
      renderAddress(address);
    });

    //顯示區域資料:selArea(datas:物件陣列)
    function renderArea(datas) {
      datas.forEach((item) => {
        const { area_id, area_name } = item;
        //加入選項
        const opt = new Option(area_name, area_id);
        selArea.options.add(opt);
      });
    }

    //顯示門市的資料:selShop(datas:物件陣列)
    function renderShop(datas) {
      //只留selShop中的第一個選項，其他刪除
      let selShop_len = selShop.length
      for(let i=1; i<selShop_len; i++){
        selShop.remove(1);
      }
      datas.forEach((item) => {
        const { shop_id, shop_name } = item;
        //加入選項
        const opt = new Option(shop_name, shop_id);
        selShop.options.add(opt);
      });
    }

    // 顯示門市地圖: ifrAddress(datas:物件陣列)
    function renderAddress(datas) {
      
      datas.forEach((item) => {
        const {shop_address} = item;
        console.log(shop_address);
        ifrAddress.src = "https://maps.google.com?output=embed&q=" + shop_address;
        console.log(ifrAddress.src);
      });
    }
  },[])

  return (
    <>
      <div>
        <MyCarousel/>
      </div>
      <div className="bg">
        <div className="container">
          <MyBreadcrumb nav="關於我們" navlink="/about" />
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
              <select id="select1" className="form-select" aria-label="Default select example">
                <option selected>請先選擇區域</option>
              </select>
              <select id="select2" className="form-select" aria-label="Default select example">
                <option selected>再選擇分店</option>
              </select>
            </div>
            <div className="col-12 col-md-8 mapQuery">
              <iframe title="高雄左營店" id="iframe1"
                src="https://maps.google.com?output=embed&q=高雄市左營區文守路１９６號"
                frameborder="0"
              ></iframe>
            </div>

          </div>
        </section>
        <MyBackTop/>
        </div>
      </div>
    </>
  );
};

export default About;
