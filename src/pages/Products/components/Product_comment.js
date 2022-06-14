import React, { useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";

const Product_comment = ({
  id,
  member_id,
  member_name,
  contents,
  rating,
  created_at,
  fetchCommentsData,
  loginMemberId
}) => {
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

  // console.log(rating);

  //送id到資料庫刪除
  const sendData = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
      method: "DELETE",
    });
    fetchCommentsData();
  };

  return (
    <div className="comments_msg d-flex justify-content-between mb-3">
      <div className="d-flex avatar_info_container">
        <div className="avatar_container">
          <div className="avatar me-3">
            <img src={require("../images/user.jpg")} alt="" />
          </div>
        </div>

        <div className="info">
          <div className="d-flex justify-content-between">
            {/* 姓名、評分、時間 */}
            <div>
              <div>{member_name}</div>
              <div className="star_rating">
                <ul>
                  {total_star.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>

              <div className="comment_time mb-3">
                {moment(created_at).format("YYYY-MM-DD kk:mm:ss")}
              </div>
            </div>

            {/* 刪除按鈕 */}
            <div className={`comments_del_btn ${loginMemberId != member_id ? "d-none" :""}`}>
              <button
                className="btn btn-outline-info"
                onClick={() => {
                  Swal.fire({
                    title: "確定要刪除評論?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "確定",
                    cancelButtonText: "取消",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      sendData();
                      Swal.fire({
                        icon: "success",
                        title: "評論已刪除!",
                      });
                    }
                  });
                }}
              >
                刪除
              </button>
            </div>
          </div>

          <div>{contents}</div>
        </div>
      </div>
    </div>
  );
};

export default Product_comment;
