import React, { Component, useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../Newslist/Breadcrumb.css";

class BreadcrumbComponent extends Component {
  render() {
    return (
      <div class="container col-8">
        <Breadcrumb>
          <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="/recipes">創意食譜</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default BreadcrumbComponent;
