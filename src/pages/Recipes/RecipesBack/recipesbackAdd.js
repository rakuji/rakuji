import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

import "./Newslistback.css";

function RecipesbackAdd() {
  const [Recipes_Name, setRecipes_Name] = useState("");
  const [Recipes_Picture, setRecipes_Picture] = useState("");
  const [RecipesBox_Kcal, setRecipesBox_Kcal] = useState("");
  const [RecipesBox_Time, setRecipesBox_Time] = useState("");
  const [RecipesBox_SeveralCopies, setRecipesBox_SeveralCopies] = useState("");
  const [RecipesClass, setRecipesClass] = useState("");
  const [message, setMessage] = useState("");

  let submitForm = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_URL}/recipes/recipesbackAdd/new`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Recipes_Name: Recipes_Name,
            Recipes_Picture: Recipes_Picture,
            RecipesBox_Kcal: RecipesBox_Kcal,
            RecipesBox_Time: RecipesBox_Time,
            RecipesBox_SeveralCopies: RecipesBox_SeveralCopies,
            RecipesClass: RecipesClass,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setRecipes_Name("");
        setRecipes_Picture("");
        setRecipesBox_Kcal("");
        setRecipesBox_Time("");
        setRecipesBox_SeveralCopies("");
        setRecipesClass("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const name_msg = Recipes_Name.closest('.readd').querySelector('.form-text');
  // const mobile_msg = Recipes_Picture.closest('.readd').querySelector('.form-text');

  function checkForm() {
    let isPass = true; // 有沒有通過檢查
    // name_msg.innerText = '';  //清空訊息
    // mobile_msg.innerText = '';  //清空訊息
    // TODO: 表單資料送出之前, 要做格式檢查
    if (isPass) {
        const fd = new FormData(document.form1);

        fetch('./recipes-add-api.php', {
                method: 'POST',
                body: fd
            }).then(r => r.json())
            .then(obj => {
                console.log(obj);

                if (obj.success) {
                    alert('新增成功');
                    // location.href = 'ab-list.php';
                } else {
                    alert('新增失敗');

                }
            })
    }
}

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

          <div className="col-12 col-md-10 ">
            <div className="row">
              <form className="col-lg-12" method="POST" onSubmit={submitForm}>
                <h5 className="card-title">編輯食譜</h5>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    *標題
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    value={Recipes_Name}
                    placeholder="Recipes_Name"
                    onChange={(e) => setRecipes_Name(e.target.value)}
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
                    value={RecipesBox_Kcal}
                    placeholder="RecipesBox_Kcal"
                    onChange={(e) => setRecipesBox_Kcal(e.target.value)}
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
                    value={RecipesBox_Time}
                    placeholder="RecipesBox_Time"
                    onChange={(e) => setRecipesBox_Time(e.target.value)}
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
                    value={RecipesBox_SeveralCopies}
                    placeholder="RecipesBox_SeveralCopies"
                    onChange={(e) =>
                      setRecipesBox_SeveralCopies(e.target.value)
                    }
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
                    value={RecipesClass}
                    placeholder="RecipesClass"
                    onChange={(e) => setRecipesClass(e.target.value)}
                  ></input>
                  <div className="form-text"></div>
                </div>
                <div className="mb-3">
                  <form name="avatar_form">
                    <label htmlFor="" className="form-label fs-4">
                      *照片
                    </label>
                    <input type="hidden" />
                    <br />
                    <img
                      src=""
                      alt=""
                      id="myimg"
                      width="355px"
                      height="200px"
                    />
                    <br />
                    <button type="button" onclick="avatar.click()">上傳食譜照片</button>
                    <br />

                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      value={Recipes_Picture}
                      placeholder="Recipes_Picture"
                      onChange={(e) => setRecipes_Picture(e.target.value)}
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
                      <button type="submit" className="btn bu-primary bu">
                        完成編輯
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* 列表接資料庫資料 end */}
        </div>
      </div>
    </div>
  );
}
export default RecipesbackAdd;
