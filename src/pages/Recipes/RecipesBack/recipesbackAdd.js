import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";


import "./Newslistback.css";

function recipesbackAdd(){
  const [Recipes_Name, setRecipes_Name] = useState("");
  const [Recipes_Picture, setRecipes_Picture] = useState("");
  const [RecipesBox_Kcal, setRecipesBox_Kcal] = useState("");
  const [RecipesBox_Time, setRecipesBox_Time] = useState("");
  const [RecipesBox_SeveralCopies, setRecipesBox_SeveralCopies] = useState("");
  const [RecipesClass, setRecipesClass] = useState("");

    // 上傳檔案
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    };

    const submitForm = () => {
      axios
        .post("http://localhost:3001/recipesbackAdd", {
          Recipes_Name: Recipes_Name,
          Recipes_Picture: Recipes_Name,
          RecipesBox_Kcal: Recipes_Name,
          RecipesBox_Time: Recipes_Name,
          RecipesBox_SeveralCopies: Recipes_Name,
          RecipesClass: Recipes_Name,
        })
        .then(() => {
          alert("成功新增食譜");
        });
    };

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

          <div  className="col-12 col-md-10 ">
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
                          defaultValue=""
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
                          defaultValue=""
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
                          defaultValue=""
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
                          defaultValue=""
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
                          defaultValue=""
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
                            src=""
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
                            {/* <RecipesbackEditIngredients /> */}
                            <div className="text-center container ">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                調味料
                              </h5>
                            </div>

                            {/* <RecipesbackEditSeasoning /> */}
                            <div className="text-center container ">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                營養成分
                              </h5>
                            </div>
                            {/* <RecipesbackEditNutrient /> */}
                            <div className="text-center container">
                              <h5 className="RecipesText fw-bold RecipesStepText">
                                料理步驟
                              </h5>
                            </div>
                            {/* <RecipesbackEditCookingsteps /> */}

                            <div className="form-text"></div>
                            <button
                              type="submit"
                              className="btn bu-primary bu"
                              onClick=""
                            >
                              完成編輯
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          {/* 列表接資料庫資料 end */}
        </div>
      </div>
    </div>
  );
};
export default recipesbackAdd;
