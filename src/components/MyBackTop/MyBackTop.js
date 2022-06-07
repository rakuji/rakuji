import React from "react";
import IconBacktop from "./icon_backTop.svg"
// import "./"
import "./MyBackTop.css";

const MyBackTop = () => {
    return(
        <div className="backTop d-flex justify-content-evenly">
            <img src={IconBacktop} alt=""/>
            <div><a href="#top">回最上層</a></div>
        </div>
    );
}
export default MyBackTop;

