import React, { useState,useEffect } from "react";

import "../About/aboutStore.css";
import MyBreadcrumb from "../About/myComponents/MyBreadcrumb";
import MyCarousel from "../About/myComponents/MyCarousel";
import MyShopList from "../About/myComponents/MyShopList";
import MyBackTop from "../About/myComponents/MyBackTop";

const Store = () => {
  const [shopsArray, setShopsArray ] = useState([])
  const [firstArray, setFirstArray ] = useState([])
  
  const fetchDatas = async () => {
      // 找出所有門市列表: fetch回傳JASON陣列(參見rakuji_backend專案:routes/shopLists.js)
      const responseShops = await fetch("/shopLists");
      // 將JASON陣列轉成物件陣列(JSAON-->object)
      const shops = await responseShops.json();
      // console.log(shops);
      setShopsArray(shops);
      // 找出各區域的第一家門市(shop_id最小者)
      const resFirstShop = await fetch("/shopLists/firstShop");
      const firstShop = await resFirstShop.json();
      //  console.log(firstShop);
      setFirstArray(firstShop);
  }

  useEffect(()=>{
      fetchDatas();
    },[])
  //},[shopsArray,firstArray])

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
            <img src={require("../About/images/pageTitleAbout.png")} className="img-fluid my" alt="門市資訊" />
          </div>
          {/* 門市區域按鈕 */}
          <div className="d-flex justify-content-around areaBtns">
            { firstArray.map((v,i) => {
                const {shop_id,area_name} = v;
                return(
                  <>
                  {/* <button type="button" className="btn myBtn" onClick={getScrollElement(shop_id)}>{area_name}</button> */}
                  <button type="button" className="btn myBtn "><a href={"#"+shop_id}>{area_name}</a></button>
                  </>
                )
            })}
          </div>

          {/* 門市資料列 */}
          <div className="shopListGroup">
          {   shopsArray.map((v,i) => {
                const {area_name,shop_id,shop_name,shop_address,shop_tel,day_content,night_content,info_detail,info_traffic,info_parking} = v;
                return (
                    <MyShopList 
                      key={shop_id}
                      shopid={shop_id}
                      area={area_name}
                      name={shop_name}
                      address={shop_address}
                      tel={shop_tel}
                      day={day_content}
                      night={night_content}
                      detail={info_detail}
                      traffic={info_traffic}
                      parking={info_parking}/>    
                      )
              })
          }
          </div>
          {/* 回最上層 */}
          <MyBackTop />
        </div>
      </div>
    </>
  );
};

export default Store;
