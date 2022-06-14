import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Recipes/Recipes.css";
import MyBackTop from "../../About/myComponents/MyBackTop";
import Box_Ingredients from "./Box_Ingredients";

function Box() {
  //先取得網址字串，假設此頁網址為「http://localhost:3000/recipes/id=1」
  const url = window.location.href;
  //之後去分割字串把分割後的字串放進陣列中
  const ary1 = url.split("=");
  //此時ary1裡的內容為：
  // console.log(ary1);
  //ary1[0] = "http://localhost:3000/recipes/id"，ary2[1] = '1'

  //取得id值
  const id = ary1[1];

  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/Box_Cookingsteps/abcef/${id}`
    );
    const results = await response.json();
    setDatas(results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {datas.length > 0 &&
        datas.map((recipes, i) => {
          const {
            RecipesBoxCooking,
            RecipesBoxCooking_text,
          } = recipes;
          return (
            <div key={i} className="nav RecipesIngredientsBorder">
              <h6 className="RecipesText fs-2 fw-bold ">{RecipesBoxCooking}</h6>
              <h6 className="RecipesIngredients col-10">{RecipesBoxCooking_text}</h6>
            </div>

          );
        })}
    </>
  );
}


export default Box;
