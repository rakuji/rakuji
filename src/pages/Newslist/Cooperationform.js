import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


// pages

import Breadcrumb from "./Breadcrumb";

const Cooperationform = () => {
// bunner圖片三張輪播 拿掉左右箭頭及下方三個長方形

  return (
    <main>
   
<div className="container" position-sticky>

{/*  放breadcrumb 進入 */}

<Breadcrumb />

    <div >最新消息 放麵包屑</div>
    </div>

<div className="container" position-sticky>
<br></br>

<Form  style={{ width: 900 }} >

  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>


    </main>
  );


 
};

export default Cooperationform;
