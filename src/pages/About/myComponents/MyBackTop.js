import React from "react";
import { Link } from "react-router-dom";
import IconBacktop from "../images/icon_backTop.svg";

import "../aboutStore.css";

const MyBackTop = () => {
  return (
    <a href="#top">
      <div className="backTop d-flex justify-content-evenly">
        <img src={IconBacktop} />
        <div>回最上層</div>
      </div>
    </a>
  );
};
export default MyBackTop;
