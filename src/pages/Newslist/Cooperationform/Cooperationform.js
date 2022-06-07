import React, { useState } from "react";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// pages
import "../Cooperationform/Cooperationform.css";

import Breadcrumb from "../Breadcrumb";

import titleP from "../image/titleP.png";

function Cooperationform() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <img
        src={require("../image/002.png")}
        width="100%"
        height="100%"
        className="d-block  mx-auto"
        alt="..."
      />

      {/* 麵包屑製作問題 */}

      <Breadcrumb />
      <div className="container">
        <div className="col"></div>

        <Form style={{}} className="container , block">
          <img className="sixyellow" src={titleP} alt="" />
          <Form.Label className="client fs-1">商家聯絡資料</Form.Label>
          <br></br>
          <Form.Label className="fs-6">2022/12/56 - 2022/12/56</Form.Label>
          <br></br>
          <Form.Label className="fs-4">合作主旨</Form.Label>
          {/* 想改紅色外框提示 
                  表格存入資料庫 */}

          <Form.Check
            required
            type="radio"
            label="異業合作"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="廣告/宣傳"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type="radio"
            label="分店拓展"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
          <Form.Check
            type="radio"
            label="其他"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
          {/* 打CODE 設定表單 */}

          <Form.Label></Form.Label>
          

          <Form.Group
            hasValidation
            className="mb-3"
            controlId="validationCustom02"
          >
            <Form.Label>公司單位/名稱</Form.Label>
            <Form.Control
              input-type="text"
              pattern="^[\u4E00-\u9FA5]{2,14}$"
              required
            />
            <Form.Text className="text-muted">資展國際股份有限公司</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>聯絡人姓名</Form.Label>
            <Form.Control
              input-type="text"
              pattern="^[\u4E00-\u9FA5]{2,4}$"
              required
            />
            <Form.Text className="text-muted">王小銘</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label>聯絡人手機</Form.Label>
            {/* input-type 設定手機號碼輸入的格式 */}
            <Form.Control
              input-type="Number"
              maxlength="12"
              pattern="09\d{2}-\d{3}-\d{3}"
              required
              defaultValue=""
            />
            <Form.Text className="text-muted">
              0901-234-567 請依照正確格式輸入
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>聯絡人電話</Form.Label>
            {/* input-type 設定電話號碼格式 \d{3,4} 3或4碼都可以  */}
            <Form.Control
              input-type="Number"
              maxlength="12"
              pattern="0\d{1}-\d{4}-\d{3,4}"
              required
              defaultValue=""
            />
            <Form.Text className="text-muted">
              07-2901-234x 請依照正確格式輸入 最後一碼可忽略
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>電子郵件</Form.Label>
            <Form.Control
              input-type="Email"
              required
              // 信箱驗證發表要注意 多.也會送出   kcg.gov.tw /gmail.com
              pattern="[a-zA-Z0-9]{3,15}@[a-zA-Z0-9]+\.[a-zA-Z]{2,}+\.[a-zA-Z]"
            />
            <Form.Text className="text-muted">xxxxxx@gmail.com</Form.Text>
          </Form.Group>

          {/* 合作內容字數無法限制 可能是as的原因 */}
          <Form.Group className="mb-3" controlId="">
            <Form.Label>合作內容</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              as="textarea"
              rows={6}
              required
            />
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
      </div>

      <div>TEST</div>
           {/* 想把 icon拿掉 只留下紅色外框提示  validated
          https://react-bootstrap-v3.netlify.app/components/forms/?
          表格存入資料庫 */}
      <Form noValidate validated={validated}  onSubmit={handleSubmit}  >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01" >
            <Form.Label>公司單位/名稱</Form.Label>
            <Form.Control
              required
              type="text"
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

       

        <Form.Group controlId="formValidationError1" validationState="error">
        <Form.Label>Input with error</Form.Label>
    <Form.Control type="text" required/>
  </Form.Group>

        </Row>
 



        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}

export default Cooperationform;
