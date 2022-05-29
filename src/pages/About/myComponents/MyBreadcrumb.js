import React from "react";
import { Link } from "react-router-dom";

// import "../aboutStore.css";

const MyBreadcrumb = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">首頁</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to={props.navlink}>{props.nav}</Link>
        </li>
        <li className="breadcrumb-item  active" aria-current="page">
          {props.location}
        </li>
      </ol>
    </nav>
  );
};

export default MyBreadcrumb;
 
