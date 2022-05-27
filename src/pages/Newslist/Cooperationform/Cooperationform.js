import React ,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Cooperationform/Cooperationform.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
// pages

import Breadcrumb from "../Breadcrumb";

import titleP from "../image/titleP.png";


function  Cooperationform  ()  {
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
        {/* radio 其他這邊待修正 */}

        <Form.Check
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
      </div>  

      <div>TEST</div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>公司單位/名稱</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="資展國際股份有限公司"
            defaultValue=""
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>聯絡人姓名</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="王大雄 "
            defaultValue=""
          />
          <Form.Control.Feedback></Form.Control.Feedback>         
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="Email"
            placeholder="xxxxxx@gmail.com "
            defaultValue=""
          />
             <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback></Form.Control.Feedback>         
        </Form.Group>











        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  );
};

export default Cooperationform;
