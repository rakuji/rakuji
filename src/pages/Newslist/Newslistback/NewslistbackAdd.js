import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "./Newslistback.css";

function NewslistbackAdd() {
  const [name, setName] = useState("");
  const [imgid, setimgid] = useState("");
  const [timestart, settimestart] = useState("");
  const [timeend, settimeend] = useState("");
  const [content, setcontent] = useState("");

  // 上傳檔案
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const submitForm = () => {
    axios
      .post("http://localhost:3001/latest_news", {
        name: name,
        imgid: imgid,
        timestart: timestart,
        timeend: timeend,
        content: content,
      })
      .then(() => {
        alert("成功新增消息");
      });
  };

  // const NewslistbackAdd = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 ">
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
          <div className="col-12 col-md-10">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="card-title">新增消息</h5>
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
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <div className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label for="" className="form-label">
                    *照片
                  </label>
                  {/* 預覽 */}
                  <form name="avatar_form" onsubmit="return false;">
                    <input type="hidden" id="pic" name="pic" />
                    <br />
                    <img
                      src=""
                      alt=""
                      id="myimg"
                      width="355px"
                      height="200px"
                    />
                  </form>
                  {/* 選擇照片 */}
                  <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>上傳照片</Form.Label>
                      <Form.Control type="file"   onChange={(event) => {
                        setimgid(event.target.value);
                      }}/>
                    </Form.Group>
                  </Form>
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
                      onChange={(event) => {
                        settimestart(event.target.value);
                      }}
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
                        onChange={(event) => {
                          settimeend(event.target.value);
                        }}
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
                        onChange={(event) => {
                          setcontent(event.target.value);
                        }}
                      ></textarea>
                      <div className="form-text"></div>
                      <button
                        type="submit"
                        className="btn bu-primary bu"
                        variant="bu"
                        onClick={submitForm}
                      >
                        新增
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
}
export default NewslistbackAdd;
