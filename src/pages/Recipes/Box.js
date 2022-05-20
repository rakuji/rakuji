import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Box() {
  return (
    <>
      <div className="container p-3 mb-2  text-dar ">
        <div className="container row p-3 mb-2  text-dark">
          <div className="p-3 mb-2 bg-body text-dar RecipesOff">
            <h3
              style={{ padding: "0px 20px", margin: "0px -2px" }}
              className="fs-1 "
            >
              日式唐揚炸雞
            </h3>
            <h3
              style={{ padding: "0px 20px", margin: "-5px 3px", color: "#ccc" }}
              className="fs-2  "
            >
              759.1大卡
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
              <div className="col-7 avatar ">
                <img
                  className="container"
                  src={require("./image/00001.jpg")}
                  alt=""
                />
              </div>

              <div className=" text-center container col-5 row align-items-end">
                <div className="">
                  <div className="d-flex row row-cols-3">
                    <div className="1">
                      <div className="RecipesTimetopbox ">
                        <div className="card RecipesImgKcal RecipesTimetopbox">
                          <img
                            src={require("./image/time.png")}
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
                        <br />
                        <h7>0分鐘</h7>
                      </div>
                    </div>
                    <div className="2">
                      <div className="RecipesTimetopbox ">
                        <div className="card RecipesImgKcal RecipesTimetopbox">
                          <img
                            src={require("./image/kacl.png")}
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
                        <h7>1人份</h7>
                        <br />
                        <h7>190大卡</h7>
                      </div>
                    </div>
                    <div className="3">
                      <div className="RecipesTimetopbox ">
                        <div className="card RecipesImgKcal RecipesTimetopbox">
                          <img
                            src={require("./image/kacls.png")}
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
                        <br />
                        <h7>4人份</h7>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 mb-2  text-dar RecipesOn">
            <div
              style={{ padding: "5px" }}
              className="d-flex flex-row text-center "
            ></div>
            {/* ----------------------------------------------------------------------- */}
            <div className="">
              <div className="col- avatar ">
                <img
                  className="container"
                  src={require("./image/00001.jpg")}
                  alt=""
                />
              </div>
              <div>
                <h3
                  style={{ padding: "0px 20px", margin: "5px 5px" }}
                  className="fs-5 "
                >
                  <img className="BoxRwdimg" />
                  日式唐揚炸雞
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
                759.1大卡
              </h3>
              <div className="d-flex text-center container">
                <div className="row row-cols-3">
                  <div className="col">
                    <div>
                      <div className="RecipesTimetopbox ">
                        <div className="card RecipesImgKcal ">
                          <img
                            src={require("./image/time.png")}
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
                        <br />
                        <h7>0分鐘</h7>
                      </div>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="RecipesTimetopbox ">
                      <div className="card RecipesImgKcal ">
                        <img
                          src={require("./image/kacl.png")}
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
                      <h7>1人份</h7>
                      <br />
                      <h7>89大卡</h7>
                    </div>
                  </div>
                  <div className="col">
                    <div className="RecipesTimetopbox ">
                      <div className="card RecipesImgKcal ">
                        <img
                          src={require("./image/kacls.png")}
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
                      <br />
                      <h7>4人份</h7>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 mb-2 nav   ">
            <div className="col-3 container ">
              <div className="text-center container">
                <h5 className="RecipesText fw-bold RecipesIngredientsText">
                  食材
                </h5>
              </div>
              <div className="nav RecipesIngredientsBorder">
                <h6 className=" col">雞腿肉</h6>
                <h6>600g</h6>
              </div>
              <div className="nav RecipesIngredientsBorder">
                <h6 className=" col">麵粉</h6>
                <h6>200g</h6>
              </div>
              <div className="nav RecipesIngredientsBorder">
                <h6 className=" col">水</h6>
                <h6>10g</h6>
              </div>
              <div className="nav RecipesIngredientsBorder">
                <h6 className=" col">油</h6>
                <h6>200g</h6>
              </div>
            </div>
            <svg className="col-2 ">
              <g stroke="#58C2DD" stroke-width="3" style={{ fill: "#ccc" }}>
                <line x1="50%" y1="0" x2="50%" y2="85%" />
              </g>
            </svg>

            <div className=" col-3  container ">
              <div className="text-center container">
                <h5 className="RecipesText fw-bold RecipesIngredientsText">
                  調味料
                </h5>
              </div>
              <div className="nav RecipesIngredientsBorder  ">
                <h6 className=" col ">砂糖</h6>
                <h6>20g</h6>
              </div>
              <div className="nav RecipesIngredientsBorder">
                <h6 className=" col">醬油</h6>
                <h6>10g</h6>
              </div>
              <div className="nav RecipesIngredientsBorder">
                <h6 className=" col">胡椒粉</h6>
                <h6>5g</h6>
              </div>
            </div>
          </div>
          <div className="p-3 mb-2  text-dar">
            <div className="text-center container">
              <h5 className="RecipesText fw-bold RecipesStepText">料理步驟</h5>
            </div>
            <div className="nav RecipesIngredientsBorder col-6 ">
                <h6 className="col-1 RecipesText fs-2 fw-bold">1</h6>
                <h6 className="RecipesIngredients">將雞腿肉切成小塊</h6>
              </div>
          </div>
          <div className="p-3 mb-2 bg-info text-dar"></div>
          <div className="p-3 mb-2 bg-info text-dar"></div>
          <div className="p-3 mb-2 bg-info text-dar"></div>
        </div>
      </div>
    </>
  );
}

export default Box;
