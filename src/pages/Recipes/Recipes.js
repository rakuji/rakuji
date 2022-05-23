import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";
import "../../components/background.css";

const Recipes = () => {
  return (
    <>
      <div className="nav-item container phoneDiv ">
        <div className="row  ">
          <div className="col RecipesLogoDiv ">
            <img
              className="RecipesLogoauto"
              src={require("./image/logo.png")}
              alt="Recipes"
            ></img>
          </div>
          <div className="RecipesClassButtonAllOn">
            <div className="btn-group">
              <div>
                <button className=" RecipesClassButton " id="">
                  全部商品
                </button>
              </div>
              <div>
                <button className=" RecipesClassButton " id="">
                  主食
                </button>
              </div>
              <div>
                <button className=" RecipesClassButton " id="">
                  前菜
                </button>
              </div>
              <div>
                <button className=" RecipesClassButton " id="">
                  湯品
                </button>
              </div>
            </div>
            <div className="btn-group">
              <div>
                <button className=" RecipesClassButton " id="">
                  飲品
                </button>
              </div>
              <div>
                <button className=" RecipesClassButton " id="">
                  甜點
                </button>
              </div>
            </div>
          </div>
          <div className="col  ">
            <ul
              class="nav nav-tabs RecipesSearchButtonNameAll"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item " role="presentation">
                <button
                  class="nav-link active RecipesSearchButtonNameRwd "
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  食譜名稱搜尋
                </button>
              </li>
              <li class="nav-item " role="presentation">
                <button
                  class="nav-link RecipesSearchButtonNameRwd "
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  卡路里搜尋
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div className="container  nav RecipesSearchDiv ">
                  <h6 className="RecipesSearchText">食譜名稱</h6>
                  <input
                    className="RecipesSearchInput form-control"
                    placeholder="搜尋餐點名稱"
                  ></input>
                  <h6 className="RecipesSearchText"></h6>
                  <button className=" RecipesSearchButton buttonoff" id="">
                    搜尋
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div className="container  nav RecipesSearchDiv ">
                  <h6 className="RecipesSearchText">卡路里範圍</h6>
                  <input
                    className="RecipesSearchInput form-control"
                    placeholder="請輸入最小卡路里範圍"
                  ></input>
                  <h6 className="RecipesSearchText">~</h6>
                  <input
                    className="RecipesSearchInput form-control"
                    placeholder="請輸入最大卡路里範圍"
                  ></input>
                  <h6 className="RecipesSearchText">大卡</h6>
                  <button className=" RecipesSearchButton" id="">
                    搜尋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Link to="/recipes/box" >
          日式唐揚炸雞
        </Link> */}
      </div>

      <div className="container nav ">
        <div className="row RecipesClassButtonAll ">
          <div className="col">
            <div>
              <button className=" RecipesClassButton " id="">
                全部食譜
              </button>
            </div>
            <div>
              <button className=" RecipesClassButton " id="">
                主食
              </button>
            </div>
            <div>
              <button className=" RecipesClassButton " id="">
                前菜
              </button>
            </div>
            <div>
              <button className=" RecipesClassButton " id="">
                湯品
              </button>
            </div>
            <div>
              <button className=" RecipesClassButton " id="">
                飲品
              </button>
            </div>
            <div>
              <button className=" RecipesClassButton " id="">
                甜點
              </button>
            </div>
          </div>
        </div>

        <div className=" col row">
          <div className="RecipesSearchBoxCardAll col">
            <div className="RecipesSearchBoxCard ">
              <img
                src={require("./image/00001.jpg")}
                className="card-img-top"
                alt="日式唐揚炸雞"
              />
              <div className="card-body">
                <p className="card-text h6">
                  <img className="Boximg" />
                  日式唐揚炸雞
                </p>
                <p className="card-text h6">瀏覽次數:65,535次</p>
                <Link to="/recipes/box">
                  <button className=" RecipesLookButton" id="">
                    查看
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="RecipesSearchBoxCardAll col">
            <div className="RecipesSearchBoxCard ">
              <img
                src={require("./image/00001.jpg")}
                className="card-img-top"
                alt="日式唐揚炸雞"
              />
              <div className="card-body">
                <p className="card-text h6">
                  <img className="Boximg" />
                  日式唐揚炸雞
                </p>
                <p className="card-text h6">瀏覽次數:65,535次</p>
                <Link to="/recipes/box">
                  <button className=" RecipesLookButton" id="">
                    查看
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="RecipesSearchBoxCardAll col">
            <div className="RecipesSearchBoxCard ">
              <img
                src={require("./image/00001.jpg")}
                className="card-img-top"
                alt="日式唐揚炸雞"
              />
              <div className="card-body">
                <p className="card-text h6">
                  <img className="Boximg" />
                  日式唐揚炸雞
                </p>
                <p className="card-text h6">瀏覽次數:65,535次</p>
                <Link to="/recipes/box">
                  <button className=" RecipesLookButton" id="">
                    查看
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="RecipesSearchBoxCardAll col">
            <div className="RecipesSearchBoxCard ">
              <img
                src={require("./image/00001.jpg")}
                className="card-img-top"
                alt="日式唐揚炸雞"
              />
              <div className="card-body">
                <p className="card-text h6">
                  <img className="Boximg" />
                  日式唐揚炸雞
                </p>
                <p className="card-text h6">瀏覽次數:65,535次</p>
                <Link to="/recipes/box">
                  <button className=" RecipesLookButton" id="">
                    查看
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>
      <nav aria-label="Page navigation example " className="RecipesPage">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Recipes;
