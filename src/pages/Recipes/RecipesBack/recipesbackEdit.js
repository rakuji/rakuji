import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

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
  console.log(id);

  const [News, setNews] = useState([]);

  //get假資料
  const fetchNews = async () => {
    //向遠端伺服器get資料
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/${id}`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setNews(data);
  };

  console.log(News);
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
          {News.map((v, i) => {

            return (
              <div key={i} className="col-12 col-md-10">
                <div className="row">
                  <div className="col-lg-12">

                    <h5 className="card-title">編輯食譜</h5>
                    <form name="form1" method="post" novalidate onsubmit="" />
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        *標題
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={v.Recipes_Name}
                        
                      />
                      <div className="form-text"></div>
                    </div>
                    <div className="mb-3">
                      <label for="" className="form-label">
                        *照片
                      </label>
                      {/* 選擇照片 */}
                      <form name="avatar_form" onsubmit="return false;">
                        <input type="hidden" id="pic" name="pic" />
                        <br />
                        <img
                          src={require(`../image/${v.Recipes_Picture}`)}
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
                        <label for="timestart" className="form-label">
                          *開始時間
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="timestart"
                          name="timestart"
                        />
                        <div className="form-text"></div>
                        <div className="mb-3">
                          <label for="timeend" className="form-label">
                            *結束時間
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="timeend"
                            name="timeend"
                          />
                          <div className="form-text"></div>
                        </div>
                        <div className="mb-3">
                          <label for="content" className="form-label">
                            *內容
                          </label>
                          <textarea
                            className="form-control"
                            name="content"
                            id="content"
                            cols="30"
                            rows="3"
                          ></textarea>
                          <div className="form-text"></div>
                          <button
                            type="submit"
                            className="btn bu-primary bu"
                            variant="bu"
                          >
                            完成編輯
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>);
          })}

          {/* 列表接資料庫資料 end */}
        </div>
      </div>
    </div>
  );
};
export default recipesbackEdit;