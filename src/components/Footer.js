import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-3 cccc">
            <img src={require("../images/footer_logo.png")} alt="" />
          </div>

          <div className="col-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="p-0">高雄總店</span>
              </li>
              <li className="nav-item mb-2">
                <span className="p-0">高雄市左營區文守路196號</span>
              </li>
              <li className="nav-item mb-2">
                <span className="p-0">營業時間：11:00~21:30</span>
              </li>
              <li className="nav-item mb-2">
                <span className="p-0">電話：(07)963-5566</span>
              </li>
              <li className="nav-item mb-2">
                <span className="p-0">傳真：(07)341-8626</span>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <div style={{visibility: "hidden"}}>#</div>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="p-0">
                  加入會員
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="p-0">
                  人才招募
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="p-0">
                  聯絡我們
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="p-0">
                  隱私權聲明
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <div style={{visibility: "hidden"}}>#</div>
              </li>
              <li className="nav-item mb-2">
                <div style={{visibility: "hidden"}}>#</div>
              </li>
              <li className="nav-item mb-2">
                <div style={{visibility: "hidden"}}>#</div>
              </li>
              <li className="nav-item mb-2">
                <span>追蹤我們</span>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="p-0">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="p-0">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="p-0">
                  <i className="fa-brands fa-line"></i>
                </a>
                <a href="#" className="p-0">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <span>© 2022 Company, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
