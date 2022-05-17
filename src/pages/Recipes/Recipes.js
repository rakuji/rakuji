import React from "react";
import { Link } from "react-router-dom";
const Recipes = () => {
  return (
    <>
      <div className="nav-item" style={{padding:"100px"}}>
        <Link to="/recipes/box" >
          日式唐揚炸雞
        </Link>
      </div>
    </>
  );
};

export default Recipes;
