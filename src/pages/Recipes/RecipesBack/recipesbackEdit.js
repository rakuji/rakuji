import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import RecipesbackEditSeasoning from "./RecipesbackEditSeasoning";
import RecipesbackEditNutrient from "./RecipesbackEditNutrient";
import RecipesbackEditCookingsteps from "./RecipesbackEditCookingsteps";
import RecipesbackEditIngredients from "./RecipesbackEditIngredients";

import "./Newslistback.css";

const recipesbackEdit = () => {
  //先取得網址字串，假設此頁網址為「http://localhost:3000/recipes/id=1」
  const url = window.location.href;
  //之後去分割字串把分割後的字串放進陣列中
  const ary1 = url.split("=");
  //此時ary1裡的內容為：
  // console.log(ary1);
  //ary1[0] = "http://localhost:3000/recipes/id"，ary2[1] = '1'

  //取得id值

  const id = ary1[1];
  // console.log(id);

  const [News, setNews] = useState([]);

  //get假資料
  const fetchNews = async () => {
    //向遠端伺服器get資料
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/recipesbackEdit/${id}`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setNews(data);
    // console.log(data); ///////////////////////修改瀏覽次數///////////////////////////
    const response2 = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/box/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Recipes_Clicks: data[0].Recipes_Clicks }),
      }
    );

    //{"Recipes_Clicks":15}
    const results2 = await response2.json();
    ///////////////////////修改瀏覽次數///////////////////////////
  };
  // console.log(News);
  // didMount - 載入資料的時間點
  useEffect(() => {
    // 向伺服器要求get資料
    fetchNews();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 ">
          <div
            className="col d-flex justify-content-center"
            style={{ fontSize: 22 }}
          >
            創意食譜後台管理系統
          </div>
          <div className="col d-flex justify-content-center">
            <Button className="bu" variant="bu" href="/recipesback">
              食譜列表
            </Button>
            <Button className="bu" variant="" href="/recipesbackAdd">
              新增食譜
            </Button>
          </div>

          {/* 列表接資料庫資料 */}
          {News.length > 0 &&
            News.map((recipes, i) => {
              const submit = (e) => {};
              const {
                Recipes_Name,
                Recipes_Picture,
                RecipesBox_Time,
                RecipesBox_Kcal,
                RecipesBox_SeveralCopies,
                RecipesClass,
              } = recipes;
              return (
                <div key={i} className="col-12 col-md-10 ">
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="card-title">編輯食譜</h5>
                      <form name="form1" method="post" />
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          *標題
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Recipes_Name"
                          name="Recipes_Name"
                          defaultValue={Recipes_Name}
                        />
                        <div className="form-text"></div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          *熱量
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          defaultValue={RecipesBox_Kcal}
                        ></input>
                        <div className="form-text"></div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          *烹飪時間
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          defaultValue={RecipesBox_Time}
                        ></input>
                        <div className="form-text"></div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          *食譜幾人份
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          defaultValue={RecipesBox_SeveralCopies}
                        ></input>
                        <div className="form-text"></div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          *食譜類別
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          defaultValue={RecipesClass}
                        ></input>
                        <div className="form-text"></div>
                      </div>
                      <div className="mb-3">
                        {/* 選擇照片 */}
                        <form name="avatar_form">
                          <label htmlFor="" className="form-label fs-4">
                            *照片
                          </label>
                          <input type="hidden" id="pic" name="pic" />
                          <br />
                          <img
                            src={require(`../image/${Recipes_Picture}`)}
                            alt=""
                            id="myimg"
                            width="355px"
                            height="200px"
                          />
                          <br />
                          <br />

                          <input
                            type="file"
                            id="imgid"
                            name="imgid"
                            accept="image/jpeg,image/png"
                          />
                        </form>

                        {/* 選擇照片 */}

                        <div className="mb-3">
                          <div className="mb-3">
                            <div className="text-center container ">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                食材
                              </h5>
                            </div>
                            <RecipesbackEditIngredients />
                            <div className="text-center container ">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                調味料
                              </h5>
                            </div>

                            <RecipesbackEditSeasoning />
                            <div className="text-center container ">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                營養成分
                              </h5>
                            </div>
                            <RecipesbackEditNutrient />
                            <div className="text-center container">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                料理步驟
                              </h5>
                            </div>
                            <RecipesbackEditCookingsteps />

                            <div className="form-text"></div>
                            <button
                              type="submit"
                              className="btn bu-primary bu"
                              onClick={submit}
                            >
                              完成編輯
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* 列表接資料庫資料 end */}
        </div>
      </div>
    </div>
  );
};
export default recipesbackEdit;
