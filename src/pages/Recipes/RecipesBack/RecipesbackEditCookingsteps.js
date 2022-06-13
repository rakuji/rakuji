import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import "./Newslistback.css";

const RecipesbackEditSeasoning = () => {
  //先取得網址字串，假設此頁網址為「http://localhost:3000/recipes/id=1」
  const url = window.location.href;
  //之後去分割字串把分割後的字串放進陣列中
  const ary1 = url.split("=");
  //此時ary1裡的內容為：
  // console.log(ary1);
  //ary1[0] = "http://localhost:3000/recipes/id"，ary2[1] = '1'

  //取得id值

  const id = ary1[1];
  console.log(id);

  const [News, setNews] = useState([]);

  //get假資料
  const fetchNews = async () => {
    //向遠端伺服器get資料
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/Box_Cookingsteps/abcef/${id}`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setNews(data);
    console.log(data);
  };
  console.log(News);
  // didMount - 載入資料的時間點
  useEffect(() => {
    // 向伺服器要求get資料
    fetchNews();
  }, []);
  let a = 1;
  return (
    <>
      {/* 列表接資料庫資料 */}
      {News.length > 0 &&
        News.map((recipes, i) => {
          const { RecipesBoxCooking, RecipesBoxCooking_text } = recipes;
          return (
            <div key={i} className="">
              <div>
                <label htmlFor="name" className="form-label">
                  *料理步驟{a++}
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  cols="30"
                  rows="3"
                  id="RecipesBoxCooking_text"
                  name="RecipesBoxCooking_text"
                  defaultValue={RecipesBoxCooking_text}
                />
              </div>
            </div>
          );
        })}

      {/* 列表接資料庫資料 end */}
    </>
  );
};
export default RecipesbackEditSeasoning;
