import React, { useState } from "react";

const Product_comment = ({ member_name, contents, rating ,created_at}) => {
  //留言內容
  const [comments, setComments] = useState("");

  const solid_star = "★";
  const hollow_star = "☆";
  const total_star = [];

  for (let i = 1; i <= rating; i++) {
    total_star.push(solid_star);
  }
  
  for (let i = 1; i <= 5 - rating; i++) {
    total_star.push(hollow_star);
  }

  console.log(rating);

  return (
    <div className="comments_msg d-flex mb-3">
      <div className="avatar_container">
        <div className="avatar me-3">
          <img src={require("../images/user.jpg")} alt="" />
        </div>
      </div>

      <div className="info">
        <div>{member_name}</div>
        <div className="star_rating">
          <ul>
            {total_star.map((v,i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
        <div className="comment_time mb-3">{created_at}</div>
        <div>{contents}</div>
      </div>
    </div>
  );
};

export default Product_comment;
