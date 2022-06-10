import React, { Component, useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../Newslist/Breadcrumb.css";

function BreadcrumbComponent() {
  //先取得網址字串，假設此頁網址為「http://localhost:3000/recipes/id=1」
  const url = window.location.href;
  // //之後去分割字串把分割後的字串放進陣列中
  const ary1 = url.split("=");
  // //此時ary1裡的內容為：
  // console.log(ary1);
  // //ary1[0] = "http://localhost:3000/recipes/id"，ary2[1] = '1'

  //取得id值
  const id = ary1[1];
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/box/abcde/${id}`
    );
    const results = await response.json();
    setDatas(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container col-8">
      <Breadcrumb>
        <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
        <Breadcrumb.Item href="/recipes">創意食譜</Breadcrumb.Item>
        <Breadcrumb.Item ></Breadcrumb.Item>

        {datas.length > 0 &&
          datas.map((recipes, i) => {
            const { Recipes_Name } = recipes;
            console.log(Recipes_Name);

            return (
              <div key={i}>
                <h6>{Recipes_Name}</h6>
              </div>
            );
          })}
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComponent;
