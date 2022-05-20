import React  from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Cooperationform.css";

// pages

import Breadcrumb from "./Breadcrumb";

const Cooperationform = () => {
  return (
    <main>
      {/* test */}

      {/* test */}
      {/* 麵包屑製作問題 */}

      <Breadcrumb />
      <div className="container">
        <div className="col">
          {/* <div className="" width="18rem;"> */}
          <img
            src={require("./002.png")}
            width="80%"
            height="80%"
            className="d-block  mx-auto"
            alt="..."
          />
        </div>
      </div>
      {/* </div> */}

      <Form style={{  }} className="container   , block">
        <Form.Label className="fs-1">商家聯絡資料</Form.Label>
        <br></br>
        <Form.Label className="fs-6">2022/12/56 - 2022/12/56</Form.Label>
        <br></br>
        <Form.Label className="fs-4">合作主旨</Form.Label>
        {/* radio 其他這邊待修正 */}
        <div>
          <input type="radio" value="1" />
          異業合作
        </div>
        <div>
          <input type="radio" value="2" />
          廣告/宣傳
        </div>{" "}
        <div>
          <input type="radio" value="3" />
          分店拓展
        </div>{" "}
        <div>
          <input type="radio" value="4" />
          其他請簡述
          <Form.Group className="mb-3," controlId="">
            <Form.Label></Form.Label>
            <Form.Control type="" placeholder="" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>公司單位/名稱</Form.Label>
          <Form.Control type="" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>聯絡人姓名</Form.Label>
          <Form.Control type="" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>聯絡人電話</Form.Label>
          <Form.Control type="" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>合作內容簡述</Form.Label>
          <Form.Control type="" placeholder="" as="textarea" rows={6} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary , d-block , mx-auto " type="submit">
          送出
        </Button>
      </Form>
<br></br>
      <button className="d-block , mx-auto " alt="...">
        icon回上一頁
      </button>
      <br></br>

    </main>
  );
};

export default Cooperationform;
