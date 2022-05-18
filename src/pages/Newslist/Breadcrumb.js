import React,{Component} from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./Breadcrumb.css";


class BreadcrumbComponent extends Component {
  render() {
    return (
      <div class="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/Home">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="/Newslist">最新消息</Breadcrumb.Item>
          {/* <Breadcrumb.Item active>Shoes</Breadcrumb.Item> */}
        </Breadcrumb>        
      </div>
    )
  }
}
export default BreadcrumbComponent;
