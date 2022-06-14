import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Recipes/Recipes.css";
import MyBackTop from "../../About/myComponents/MyBackTop";
import Box_Ingredients from "./Box_Ingredients";
import Box_Seasoning from "./Box_Seasoning";
import Box_Cookingsteps from "./Box_Cookingsteps";
import Box_CookingstepsPhone from "./Box_CookingstepsPhone";
import Box_Nutrient from "./Box_Nutrient";
import Box_NutrientPhone from "./Box_NutrientPhone";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

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
      `${process.env.REACT_APP_API_URL}/recipes/box/abcde/${id}`
    );
    const results = await response.json();
    console.log(results);
    setDatas(results);

    ///////////////////////修改瀏覽次數///////////////////////////
    const response2 = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/box/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Recipes_Clicks: results[0].Recipes_Clicks + 1 }),
      }
    );

    //{"Recipes_Clicks":15}
    const results2 = await response2.json();
    ///////////////////////修改瀏覽次數///////////////////////////
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="tt">
        <Breadcrumb />
      </div>
      {datas.length > 0 &&
        datas.map((recipes, i) => {
          const {
            Recipes_Name,
            Recipes_Picture,
            RecipesBox_Time,
            RecipesBox_Kcal,
            RecipesBox_SeveralCopies,
            Recipes_Clicks,
          } = recipes;
          //宣告熱量 = 資料庫內的RecipesBox_Kcal
          let kcal = RecipesBox_Kcal;
          let SeveralCopies = RecipesBox_SeveralCopies;
          let aaaa = kcal / SeveralCopies;

          return (
            <div key={i} className="container p-3 mb-2  text-dar ">
              <div className="container row p-3 mb-2  text-dark">
                <div className="p-3 mb-2 bg-body text-dar RecipesOff">
                  <h3
                    style={{ padding: "0px 20px", margin: "0px -2px" }}
                    className="fs-1 "
                  >
                    {Recipes_Name}
                  </h3>
                  <h3
                    style={{
                      padding: "0px 20px",
                      margin: "-5px 3px",
                      color: "#ccc",
                    }}
                    className="fs-2  "
                  >
                    {kcal}大卡
                  </h3>
                  <div
                    style={{ padding: "20px" }}
                    className="d-flex flex-row text-center "
                  >
                    <div className=" " style={{ margin: "-10px 0px" }}>
                      <ul className="nav flex ">
                        <li className=" ">
                          <a href="#" className="p-0">
                            <i
                              style={{ padding: "5px" }}
                              className="fa-brands fa-facebook "
                            ></i>
                          </a>
                          <a href="#" className="p-0">
                            <i
                              style={{ padding: "5px", color: "red" }}
                              className="fa-brands fa-instagram recipesIg"
                            ></i>
                          </a>
                          <a href="#" className="p-0">
                            <i
                              style={{ padding: "5px", color: "green" }}
                              className="fa-brands fa-line recipesLine"
                            ></i>
                          </a>
                          <a href="#" className="p-0">
                            <i
                              style={{ padding: "5px", color: "red" }}
                              className="fa-brands fa-youtube recipesYoutube"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* ----------------------------------------------------------------------- */}
                  <div className="d-flex ">
                    <div className="col-7 imgtest ">
                      <img
                        className="container"
                        src={require(`../image/${Recipes_Picture}`)}
                        alt=""
                      />
                    </div>

                    <div className=" text-center container col row align-items-end">
                      <div className="">
                        <div className="d-flex row row-cols-3">
                          <div className="1">
                            <div className="RecipesTimetopbox ">
                              <div className="card RecipesImgKcal RecipesTimetopbox">
                                <img
                                  src={require("../image/time.png")}
                                  className="card-img-top"
                                  alt="kacl"
                                />
                              </div>
                              {/* <svg width="100%" height="70">
                          <circle
                            className="RecipesTimeSvg"
                            cx="50%"
                            cy="50%"
                            r="30%"
                          />
                          <line
                            className="RecipesTimeSvgLine"
                            x1="50%"
                            y1="25%"
                            x2="50%"
                            y2="60%"
                          />
                          <line
                            className="RecipesTimeSvgLine"
                            x1="50%"
                            y1="58%"
                            x2="65%"
                            y2="70%"
                          />
                        </svg> */}
                            </div>
                            <div className="bg-body RecipesTimebottombox rounded-bottom border-2 ">
                              <>烹飪時間</>
                              <br />
                              <>{RecipesBox_Time}分鐘</>
                            </div>
                          </div>
                          <div className="2">
                            <div className="RecipesTimetopbox ">
                              <div className="card RecipesImgKcal RecipesTimetopbox">
                                <img
                                  src={require("../image/kacl.png")}
                                  className="card-img-top"
                                  alt="kacl"
                                />
                              </div>
                              {/* <svg width="100%" height="70">
                          <circle
                            className="RecipesTimeSvg"
                            cx="50%"
                            cy="50%"
                            r="30%"
                          />
                          <text className="RecipesTimeSvg" x="35%" y="60%">
                            KCAL
                          </text>
                        </svg> */}
                            </div>
                            <div className="bg-body RecipesTimebottombox rounded-bottom border-2 ">
                              <>1人</>
                              <br />
                              <>{aaaa}大卡</>
                            </div>
                          </div>
                          <div className="3">
                            <div className="RecipesTimetopbox ">
                              <div className="card RecipesImgKcal RecipesTimetopbox">
                                <img
                                  src={require("../image/kacls.png")}
                                  className="card-img-top"
                                  alt="kacl"
                                />
                              </div>

                              {/* <svg width="100%" height="70">
                          <circle
                            className="RecipesTimeSvg"
                            cx="50%"
                            cy="50%"
                            r="30%"
                          />
                        </svg> */}
                            </div>
                            <div className="  RecipesTimebottombox rounded-bottom border-2 ">
                              <>{SeveralCopies}</>
                              <br />
                              <>人份</>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/recipes">
                  <h5 className="RecipesOn  RecipesText">
                    <img src={require("../image/circle.png")}></img>返回列表
                  </h5>
                </Link>
                <div className="p-3 mb-2  text-dar RecipesOn">
                  <div
                    style={{ padding: "5px" }}
                    className="d-flex flex-row text-center "
                  ></div>
                  {/* ----------------------------------------------------------------------- */}
                  <div className="">
                    <div className="col- imgtest ">
                      <img
                        className="container "
                        src={require(`../image/${Recipes_Picture}`)}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3
                        style={{ padding: "0px 20px", margin: "5px 5px" }}
                        className="fs-5 "
                      >
                        <img className="BoxRwdimg" />
                        {Recipes_Name}
                      </h3>
                    </div>
                    <h3
                      style={{
                        padding: "0px 20px",
                        margin: "5px 3px",
                        color: "#ccc",
                      }}
                      className="fs-6  "
                    >
                      {RecipesBox_Kcal}大卡
                    </h3>
                    <div className="d-flex text-center container">
                      <div className="row row-cols-3">
                        <div className="col-4">
                          <div>
                            <div className="RecipesTimetopbox ">
                              <div className="card RecipesImgKcal ">
                                <img
                                  src={require("../image/time.png")}
                                  className="card-img-top"
                                  alt="kacl"
                                />
                              </div>
                              {/* <svg width="100%" height="70">
                          <circle
                            className="RecipesTimeSvg"
                            cx="50%"
                            cy="50%"
                            r="30%"
                          />
                          <line
                            className="RecipesTimeSvgLine"
                            x1="50%"
                            y1="25%"
                            x2="50%"
                            y2="60%"
                          />
                          <line
                            className="RecipesTimeSvgLine"
                            x1="50%"
                            y1="58%"
                            x2="65%"
                            y2="70%"
                          />
                        </svg> */}
                            </div>
                            <div className="bg-body RecipesTimebottombox rounded-bottom border-2 ">
                              <>{RecipesBox_Time}</>
                              <br />
                              <>分鐘</>
                            </div>
                          </div>
                        </div>

                        <div className="col-4 ">
                          <div className="RecipesTimetopbox ">
                            <div className="card RecipesImgKcal ">
                              <img
                                src={require("../image/kacl.png")}
                                className="card-img-top"
                                alt="kacl"
                              />
                            </div>
                            {/* <circle
                          className="RecipesTimeSvg"
                          cx="50%"
                          cy="50%"
                          r="30%"
                        /> */}
                            {/* <text className="RecipesTimeSvg" x="20%" y="55%">
                          KCAL
                        </text> */}
                          </div>
                          <div className="bg-body RecipesTimebottombox rounded-bottom border-2 ">
                            <h6>1人</h6>
                            <>{aaaa}</>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="RecipesTimetopbox ">
                            <div className="card RecipesImgKcal ">
                              <img
                                src={require("../image/kacls.png")}
                                className="card-img-top"
                                alt="kacl"
                              />
                            </div>
                            {/* <canvas
                        id="time"
                        width={55}
                        height={60}
                        style={{ border: "1px solid #ccc" }}
                      ></canvas> */}
                          </div>
                          <div className="bg-body RecipesTimebottombox rounded-bottom border-2 ">
                            <>{SeveralCopies}</>
                            <br />
                            <>人份</>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 mb-2 nav RecipesOff  ">
                  <div className="col-3 container ">
                    <div className="text-center container">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText">
                        食材
                      </h5>
                    </div>
                    <Box_Ingredients />
                  </div>
                  <svg className="col-2 ">
                    <g
                      stroke="#58C2DD"
                      strokeWidth="3"
                      style={{ fill: "#ccc" }}
                    >
                      <line x1="50%" y1="0" x2="50%" y2="85%" />
                    </g>
                  </svg>

                  <div className=" col-3  container ">
                    <div className="text-center container">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText">
                        調味料
                      </h5>
                    </div>
                    <Box_Seasoning />
                  </div>
                </div>
                <div className="p-3 mb-2 nav RecipesOn  ">
                  <div className="col-12 container ">
                    <div className="text-center ">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText">
                        食材
                      </h5>
                    </div>
                    <Box_Ingredients />
                  </div>

                  <div className="col-12 container ">
                    <div className="text-center ">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText">
                        調味料
                      </h5>
                    </div>
                    <Box_Seasoning />
                  </div>
                </div>
                <div className="p-3 mb-2  text-dar container row RecipesOff">
                  <div className="text-center container">
                    <h5 className="RecipesText fw-bold RecipesStepText">
                      料理步驟
                    </h5>
                  </div>
                  <div className="row justify-content-center"></div>
                </div>
                <div className="row justify-content-center RecipesOff">
                  <Box_Cookingsteps />
                </div>
                <div className="p-3 mb-2 nav RecipesOn  ">
                  <div className="col-12 container ">
                    <div className="text-center ">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText">
                        料理步驟
                      </h5>
                    </div>
                    <Box_CookingstepsPhone />
                  </div>
                </div>

                <div className="p-3 mb-2  text-dar container row RecipesOff">
                  <div className="text-center container ">
                    <h5 className="RecipesText fw-bold RecipesStepText">
                      營養成分
                    </h5>
                  </div>
                  <div className="row nav container  ">
                    <Box_Nutrient />
                  </div>
                </div>

                <div className="p-3 mb-2 nav RecipesOn  ">
                  <div className="col-12 container ">
                    <div className="text-center ">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText">
                        營養成分
                      </h5>
                    </div>
                    <div className="  container  ">
                      <Box_NutrientPhone />
                    </div>
                  </div>
                </div>
                <div className="p-3 mb-2  text-dar container row RecipesOff">
                  <div className="text-center container ">
                    <h5 className="RecipesText fw-bold RecipesStepText"></h5>
                  </div>
                </div>
                <div className="p-3 mb-2 text-dar container RecipesOn">
                  <div className="container ">
                    <div className="text-center ">
                      <h5 className="RecipesText fw-bold RecipesIngredientsText"></h5>
                    </div>
                  </div>
                  <div className="row"></div>
                </div>
                <div className="p-3 mb-2  text-dar container row RecipesOff">
                  <div>推薦店內菜單</div>

                  <div className=" col row">
                    <div className="RecipesSearchBoxCardAll col">
                      <div className="RecipesSearchBoxCard ">
                        <img
                          src={require("../image/00001.jpg")}
                          className="card-img-top"
                          alt="日式唐揚炸雞"
                        />
                        <div className="card-body">
                          <p className="card-text h6">
                            <img className="Boximg" />
                            日式唐揚炸雞
                          </p>
                          <p className="card-text h6">瀏覽次數:65,535次</p>
                          <Link to="/recipes/box">
                            <button className=" RecipesLookButton" id="">
                              查看
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="RecipesSearchBoxCardAll col">
                      <div className="RecipesSearchBoxCard ">
                        <img
                          src={require("../image/00001.jpg")}
                          className="card-img-top"
                          alt="日式唐揚炸雞"
                        />
                        <div className="card-body">
                          <p className="card-text h6">
                            <img className="Boximg" />
                            日式唐揚炸雞
                          </p>
                          <p className="card-text h6">瀏覽次數:65,535次</p>
                          <Link to="/recipes/box">
                            <button className=" RecipesLookButton" id="">
                              查看
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="RecipesSearchBoxCardAll col">
                      <div className="RecipesSearchBoxCard ">
                        <img
                          src={require("../image/00001.jpg")}
                          className="card-img-top"
                          alt="日式唐揚炸雞"
                        />
                        <div className="card-body">
                          <p className="card-text h6">
                            <img className="Boximg" />
                            日式唐揚炸雞
                          </p>
                          <p className="card-text h6">瀏覽次數:65,535次</p>
                          <Link to="/recipes/box">
                            <button className=" RecipesLookButton" id="">
                              查看
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="RecipesSearchBoxCardAll col">
                      <div className="RecipesSearchBoxCard ">
                        <img
                          src={require("../image/00001.jpg")}
                          className="card-img-top"
                          alt="日式唐揚炸雞"
                        />
                        <div className="card-body">
                          <p className="card-text h6">
                            <img className="Boximg" />
                            日式唐揚炸雞
                          </p>
                          <p className="card-text h6">瀏覽次數:65,535次</p>
                          <Link to="/recipes/box">
                            <button className=" RecipesLookButton" id="">
                              查看
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 mb-2 text-dar container RecipesOn nav">
                  <div>推薦店內菜單</div>

                  <div className="col row ">
                    <div className="col-6 text-center">
                      <img
                        src={require("../image/00001.jpg")}
                        className="card-img-top"
                        alt="日式唐揚炸雞"
                      />
                      <p className="card-text h6 ">日式唐揚炸雞</p>
                      <p className="card-text h6 ">NT150</p>
                      <div className="">
                        <Link to="/recipes/box">
                          <button className=" RecipesLookButton2" id="">
                            購買
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-6 text-center">
                      <img
                        src={require("../image/00001.jpg")}
                        className="card-img-top"
                        alt="日式唐揚炸雞"
                      />
                      <p className="card-text h6 ">日式唐揚炸雞</p>
                      <p className="card-text h6 ">NT150</p>
                      <div className="">
                        <Link to="/recipes/box">
                          <button className=" RecipesLookButton2" id="">
                            購買
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <MyBackTop />
    </>
  );
}

export default Box;
