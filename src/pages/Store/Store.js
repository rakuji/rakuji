import React, { useState,useEffect } from "react";

import "../About/aboutStore.css";
import MyBreadcrumb from "../About/myComponents/MyBreadcrumb";
import MyCarousel from "../About/myComponents/MyCarousel";
import MyShopList from "../About/myComponents/MyShopList";
import MyBackTop from "../About/myComponents/MyBackTop";

const Store = () => {
  const [shopsArray, setShopsArray ] = useState([])

  // (async function fetchData() {
  //     // fetch回傳JASON陣列(參見參見rakuji_backend專案:routes/shopMap.js)
  //     const responseShops = await fetch("/shopLists");
  //     // 將JASON陣列轉成物件陣列(JSAON-->object)
  //     const shops = await responseShops.json();
  //     console.log(shops);
  //     setshopsArray(shops);
  // })();
  const fetchData = async () => {
      // fetch回傳JASON陣列(參見rakuji_backend專案:routes/shopLists.js)
      const responseShops = await fetch("/shopLists");
      // 將JASON陣列轉成物件陣列(JSAON-->object)
      const shops = await responseShops.json();
      // console.log(shops);
      setShopsArray(shops);
  }

  useEffect(()=>{
      fetchData();
  },[shopsArray])
 

  return (
    <>
      {/* 輪播 */}
      <MyCarousel />
      {/* 背景圖 */}
      <div className="bg">
        <div className="container">
          {/* 麵包屑 */}
          <MyBreadcrumb nav="門市資訊" navlink="/store"/>
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
          {
                shopsArray.map((v,i) => {
                  const {area_name,shop_id,shop_name,shop_address,shop_tel,day_content,night_content,info_detail,info_traffic,info_parking} = v;
                  return (
                    <div>
                      <MyShopList 
                        shopid={shop_id}
                        area={area_name}
                        name={shop_name}
                        address={shop_address}
                        tel={shop_tel}
                        day={day_content}
                        night={night_content}
                        detail={info_detail}
                        traffic={info_traffic}
                        parking={info_parking}
                      />  
                    </div>
                  )
                })
          }
          {/* 回最上層 */}
          <MyBackTop />
        </div>
      </div>
    </>
  );
};

export default Store;
