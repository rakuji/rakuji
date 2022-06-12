import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// pages
import MyBackTop from "../../About/myComponents/MyBackTop";

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

      <div className="tt">
        <Breadcrumb />
      </div>      
        <div className="container">
        <div className="col"></div>

        <Form
          style={{}}
          className="container , block"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <img className="sixyellow" src={titleP} alt="" />
          <Form.Label className="client fs-1">商家聯絡資料</Form.Label>
          <br></br>

          <br></br>
          <Form.Label className="fs-4">合作主旨</Form.Label>
          {/* 想改只有紅色外框提示 
          https://react-bootstrap-v3.netlify.app/components/forms/?
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
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mb-3"
            controlId="validationCustom01"
          >
            <Form.Label>公司單位/名稱</Form.Label>
            <Form.Control
              input-type="text"
              // 手打字看驗證

              pattern="^[\u4E00-\u9FA5]{2,14}$"
              required
            />
            <Form.Text className="text-muted">資展國際股份有限公司</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>聯絡人姓名</Form.Label>
            <Form.Control
              input-type="text"
              // 手打名字看驗證
              pattern="^[\u4E00-\u9FA5]{2,4}$"
              required
            />
            <Form.Text className="text-muted">王小銘</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>聯絡人手機</Form.Label>
            {/* input-type 設定手機號碼輸入的格式 */}
            <Form.Control
              input-type="Number"
              // 手打電話號碼看驗證
              maxlength="12"
              pattern="09\d{2}-\d{3}-\d{3}"
              required
              defaultValue=""
            />
            <Form.Text className="text-muted">
              0901-234-567 請依照正確格式輸入
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label>聯絡人電話</Form.Label>
            {/* input-type 設定電話號碼格式 \d{3,4} 3或4碼都可以  */}
            <Form.Control
              input-type="Number"
              // 手打電話號碼看驗證
              maxlength="12"
              pattern="0\d{1}-\d{4}-\d{3,4}"
              required
              defaultValue=""
            />
            <Form.Text className="text-muted">
              07-2901-234x 請依照正確格式輸入 最後一碼可忽略
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>電子郵件</Form.Label>
            <Form.Control
              input-type="Email"
              // 信箱驗證發表要注意   手打gmail.com信箱 之後補上 複製kcg.gov.tw展現
              pattern="[a-zA-Z0-9]{3,15}@[a-zA-Z0-9]+\.[a-zA-Z0-9]{3,15}\.?t?w?"
              required
            />
            <Form.Text className="text-muted">xxxxxx@gmail.com</Form.Text>
          </Form.Group>
          {/* 合作內容字數minLength才可以限制  */}
          <Form.Group className="mb-3" controlId="validationCustom06">
            <Form.Label>合作內容</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              as="textarea"
              rows={6}
              minLength={10}
              required
            />
          </Form.Group>
          {/* 按下去是否字的顏色不要變成黑色 維持白色 */}
          <Button 
          className="bu" 
          variant=" primary , d-block , mx-auto " 
          type="submit">
            送出
          </Button>
        </Form>
        <br></br>
        <MyBackTop/>

        <br></br>
      </div>
    </>
  );
}

export default Cooperationform;
