import React from "react";
import { Link } from "react-router-dom";
import IconBacktop from "../images/icon_backTop.svg"


import "../aboutStore.css";

const MyBackTop = () => {
    return(
        <div className="backTop d-flex justify-content-evenly">
            <img src={IconBacktop}  />
            <div><a href="#top">回最上層</a></div>
        </div>
    );
}
export default MyBackTop;