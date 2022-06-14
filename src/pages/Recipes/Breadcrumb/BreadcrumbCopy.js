import React, { Component, useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Breadcrumb.css";
import "../Recipes/Recipes.css";

class BreadcrumbComponent extends Component {
  render() {
    return (
      <div className="container col-8 RecipesOff" id="break">
        <Breadcrumb>
          <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
          <Breadcrumb.Item ></Breadcrumb.Item>
          <h6 >創意食譜</h6>
        </Breadcrumb>
      </div>
    );
  }
}
export default BreadcrumbComponent;
