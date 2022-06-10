import Button from "react-bootstrap/Button";
import React from "react";
import Table from "react-bootstrap/Table";

import "./Newslistback.css";

// pages

const Newslistback = () => {
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

      {/* 列表接資料庫資料 */}
      <div className="col d-flex justify-content-center">
        <ta class="table table-striped table-bordered ">
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
            <tr>
              <td>'sid'</td>
              <td>'name'</td>
              <td>'imgid'</td>
              <td>
                <img src="../imgs/['imgid']" alt="" width="120px" />
              </td>
              <td>'timestart'</td>
              <td>'timeend'</td>
              <td>'content'</td>
              <td>
                <a href="/NewslistbackEdit">
                  <i class="fas fa-edit"> 最後處理</i>
                </a>
              </td>
              <td>
                <a href="['sid']">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </ta>
      </div>

      {/* 列表接資料庫資料 end */}
    </Table>
  );
};

export default Newslistback;
