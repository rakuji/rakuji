import React,{Component} from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'


class BreadcrumbComponent extends Component {
  render() {
    return (
      <div class="container">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>Shoes</Breadcrumb.Item>
        </Breadcrumb>        
      </div>
    )
  }
}
export default BreadcrumbComponent;