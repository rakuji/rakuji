import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


import "./Newslistback.css";

// pages

function recipesback() {
  const [News, setNews] = useState([]);

  //get假資料
  const fetchNews = async () => {
    //向遠端伺服器get資料
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes`
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

  const dele = async (Recipes_ID) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/recipes/` + Recipes_ID, { method: 'delete' }
    );
    const data = await response.json();
    //  刪除畫面上的
    setNews(News.filter((v, i) => v.Recipes_ID !== Recipes_ID))



  }

  return (


    <div className="col-12 col-md-10 container">
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
      <div className="card-body">
        {/* 列表接資料庫資料 */}

        <div className="col d-flex justify-content-center">
          <div class="table table-striped table-bordered ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">標題</th>
                <th scope="col">照片</th>
                <th scope="col">修改</th>
                <th scope="col">刪除</th>
              </tr>
              {News.map((v, i) => {

                return (
                  <tr key={i}>
                    <td>{v.Recipes_ID}</td>
                    <td>{v.Recipes_Name}</td>
                    <td>
                      {/* 存取位置要修改 */}
                      <img
                        src={require(`../image/${v.Recipes_Picture}`)}
                        alt=""
                        width="120px"
                      />
                    </td>
                    <td>
                      <Link to={`/recipesbackEdit/id=${v.Recipes_ID}`}>
                        <a >
                          <i class="fas fa-edit"></i>
                        </a>
                      </Link>

                    </td>
                    <td>

                      <button className="fas fa-trash-alt" onClick={() => { dele(v.Recipes_ID) }}></button>

                    </td>
                  </tr>
                );
              })}
            </thead>
            <tbody>

            </tbody>
          </div>
        </div>


      </div>

      {/* 列表接資料庫資料 end */}
    </div >
  );
}

export default recipesback;