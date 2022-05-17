import React from "react";
import {renderRoutes} from "react-router-config";
import routes from "./routes";

const Breadcrumb =()=>{
  
    return <div className="container ">
    {renderRoutes(routes)}
    </div>;
  
}
export default Breadcrumb;
