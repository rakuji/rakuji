import React,{Component} from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./Breadcrumb.css";


class BreadcrumbComponent extends Component {
  render() {
    return (
      <div className="container col-8" id="break">
        <Breadcrumb>
          <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="/Newslist">最新消息</Breadcrumb.Item>
          {/* <Breadcrumb .Item href="/Votelist">選出你的天菜</Breadcrumb> */}
        </Breadcrumb>        
      </div>
    )
  }
}
export default BreadcrumbComponent;
