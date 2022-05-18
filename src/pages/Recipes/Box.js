import React from "react";
import { Link } from "react-router-dom";
const Box = () => {
  return (
    <>
      <div className="container p-3 mb-2  text-dar  bg-info">
        <div className="container row p-3 mb-2 bg-info text-dark">
          <div className="p-3 mb-2 bg-body text-dar ">
            <h3
              style={{ padding: "0px 20px", margin: "0px -2px" }}
              className="fs-1 "
            >
              日式唐揚炸雞
            </h3>
            <h3
              style={{ padding: "0px 20px", margin: "-5px 3px", color: "#ccc" }}
              className="fs-2  "
            >
              759.1大卡
            </h3>
            <div
              style={{ padding: "20px" }}
              className="d-flex flex-row text-center "
            >
              <div className=" " style={{ margin: "-10px 0px" }}>
                <ul className="nav flex ">
                  <li className=" ">
                    <a href="#" className="p-0">
                      <i
                        style={{ padding: "5px" }}
                        className="fa-brands fa-facebook"
                      ></i>
                    </a>
                    <a href="#" className="p-0">
                      <i
                        style={{ padding: "5px" }}
                        className="fa-brands fa-instagram recipesIg"
                      ></i>
                    </a>
                    <a href="#" className="p-0">
                      <i
                        style={{ padding: "5px" }}
                        className="fa-brands fa-line recipesLine"
                      ></i>
                    </a>
                    <a href="#" className="p-0">
                      <i
                        style={{ padding: "5px" }}
                        className="fa-brands fa-youtube recipesYoutube"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ----------------------------------------------------------------------- */}
            <div className="d-flex bg-info">
              <div className="col-7 avatar">
                <img
                  className="container"
                  src={require("./image/00001.jpg")}
                  alt=""
                />
              </div>

              <div className="col-5 d-flex text-center  align-items-end">
                <div style={{ margin: "0px -2px" }} className="col-4 bg-body">
                  <div className="p-3 bg-light rounded-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div className="p-3 bg-body rounded-bottom border-2 border-light border-end border-bottom border-start">
                    <h7>0</h7>
                    <br />
                    <h7>分鐘</h7>
                  </div>
                </div>
                <div style={{ margin: "0px 0px" }} className="col-4 bg-body">
                  <div className="p-3 bg-light rounded-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div className="p-3 bg-body rounded-bottom border-2 border-light border-end border-bottom border-start">
                    <h7>0</h7>
                    <br />
                    <h7>分鐘</h7>
                  </div>
                </div>
                <div style={{ margin: "0px 0px" }} className="col-4 bg-body  ">
                  <div className="p-3 bg-light rounded-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div className="p-3 bg-body rounded-bottom border-2 border-light border-end border-bottom border-start">
                    <h7>0</h7>
                    <br />
                    <h7>分鐘</h7>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 mb-2 bg-body text-dar">
            <div className="d-flex flex-row"></div>

            <div className="d-flex flex-row"></div>
          </div>
          <div className="p-3 mb-2 bg-body text-dar"></div>
          <div className="p-3 mb-2 bg-body text-dar"></div>
          <div className="p-3 mb-2 bg-body text-dar"></div>
          <div className="p-3 mb-2 bg-body text-dar"></div>
        </div>
      </div>
    </>
  );
};

export default Box;
