import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import "./Newslistback.css";

// pages

function Newslistback() {
  const [News, setNews] = useState([]);

  //get假資料
  const fetchNews = async () => {
    //向遠端伺服器get資料
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/latest_news`
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

const dele = async (sid) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/latest_news/` + sid ,{method: 'delete'}
  );
  const data = await response.json();
  //  刪除畫面上的
  setNews(News.filter((v, i) => v.sid !==sid ))
 


}

  return (


    <Table className="col-12 col-md-10 container">
      <div
        className="col d-flex justify-content-center"
        style={{ fontSize: 22 }}
      >
        最新消息後台管理系統
      </div>
      <div className="col d-flex justify-content-center">
        <Button className="bu" variant="bu" href="/Newslistback">
          消息列表
        </Button>
        <Button className="bu" variant="" href="/NewslistbackAdd">
          新增消息
        </Button>
      </div>
      <div className="card-body">
      {/* 列表接資料庫資料 */}
      {News.map((v, i) => {
        {
          /* console.log(v)
            console.log(v.imgid) */
        }
        return (
          <div className="col d-flex justify-content-center">
            <ta className="table table-striped table-bordered ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">標題</th>
                  <th scope="col">照片亂碼名</th>
                  <th scope="col">照片</th>
                  <th scope="col">開始時間</th>
                  <th scope="col">結束時間</th>
                  <th scope="col">內容</th>
                  <th scope="col">修改</th>
                  <th scope="col">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr key={i}>
                  <td>{v.sid}</td>
                  <td>{v.name}</td>
                  <td>{v.imgid}</td>
                  <td>
                    {/* 存取位置要修改 */}
                    <img
                      src={`http://localhost/project_rakuji/imgs/${v.imgid}`}
                      alt=""
                      width="120px"
                    />
                  </td>
                  <td> {v.timestart}</td>
                  <td>{v.timeend}</td>
                  <td>{v.content}</td>
                  <td>
                    <a href="/NewslistbackEdit">
                      <i className="fas fa-edit"></i>
                    </a>
                  </td>
                  <td>
                   
                      <button className="fas fa-trash-alt" onClick={()=>{dele(v.sid)}}></button>
                   
                  </td>
                </tr>
              </tbody>
            </ta>
          </div>
        );
      })}
    </div>
    
      {/* 列表接資料庫資料 end */}
    </Table>
  );
}

export default Newslistback;
