import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Recipes.css";
import "../../Newslist/Breadcrumb.css";
// import "../../../components/background.css";
import $ from "jquery";
import MyBackTop from "../../About/myComponents/MyBackTop";
import Breadcrumb from "../Breadcrumb/BreadcrumbCopy";
import Carouselg from "../../../components/Carousel/Carousel_g";




function Recipes(props) {
  // 從資料庫取得資料
  const [datas, setDatas] = useState([]);
  // 篩選類別後的資料
  const [sortData, setSortData] = useState([]);

  // 搜尋後的資料
  const [searchData, setSearchData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes`);
    const results = await response.json();
    setDatas(results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //--------------------搜尋
  const [searchInput, setSearchInput] = useState("");
  //----------------------------------------------------------
  const [recipesIndex, setRecipesIndex] = useState(0);
  const recipesArray = ["全部", "主食", "前菜", "湯品", "飲品", "甜點"];
  //----------------------------------------------------------
  const [KcalMin, setKcalMin] = useState(0);
  let [KcalMax, setKcalMax] = useState(0);
  //----------------------------------------------------------
  const max = 1000;
  const max2 = 1000;
  let max3 = 0;
  const max4 = KcalMax + max;
  if (max4 === 0) max3 = 1000;
  // 預設進列表時 KcalMax+1000 所以會顯示所有列表，可是卡路里搜尋的KcalMax清空為0後KcalMax變成-1000，因為我在變數那-max
  // 目的是清空Max的input時顯示所有列表
  // 所以後來將KcalMax+ max宣告為一個常數max4，設為熱量的最大條件，這樣當max4=0的時候
  // max3就會變成1000，當max4不為0的時候則max3變回0
  const DP = datas
    .filter((v, i) => {
      if (recipesIndex === 0) return true;
      return v.RecipesClass === recipesArray[recipesIndex];
    })
    .filter((v) => v.Recipes_Name.includes(searchInput))
    .filter((v) => v.RecipesBox_Kcal >= KcalMin)
    .filter((v) => v.RecipesBox_Kcal <= max4 + max3);

  useEffect(() => {
    $(`#recipesArray_buttons button[id=${recipesIndex}]`).attr("id", "active");
  });

  useEffect(() => {
    $("#recipesArray_buttons button").click(function () {
      $("#recipesArray_buttons button").removeAttr("id");
      $(this).attr("id", "active");
    });
  }, []);
  // -----------------------------------
    // 用於目前呈現的資料(經過依每頁拆解陣列過)
    const [studentsDisplay, setStudentsDisplay] = useState([])

    const [pageNow, setPageNow] = useState(1)
    const [perPage, setPerPage] = useState(8)
    const [pageTotal, setPageTotal] = useState(0)

  return (
    <>
         <Carouselg />
      <div className="tt">
        <Breadcrumb />
      </div>

      <div className="nav-item container phoneDiv newsbackground">
        <div className="row  ">
          <div className="col RecipesLogoDiv ">
            <img
              className="RecipesLogoauto"
              src={require("../image/logo.png")}
              alt="Recipes"
            ></img>
          </div>

          <div className="RecipesClassButtonAllOn container ">
            <div className="col-12   container">
              <div className=" container">
                <div className="row col container">
                  <div
                    className="row   container RecipesClassButton"
                    id="recipesArray_buttons"
                  >
                    {recipesArray.map((v, i) => {
                      return (
                        <button
                          key={i}
                          id={i}
                          className="col container testtest"
                          onClick={() => setRecipesIndex(i)}
                        >
                          {v}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col  ">
            <ul
              className="nav nav-tabs RecipesSearchButtonNameAll"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item " role="presentation">
                <button
                  className="nav-link active RecipesSearchButtonNameRwd "
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
              <li className="nav-item " role="presentation">
                {/* <Link to="/recipes/search/"> */}
                <button
                  className="nav-link RecipesSearchButtonNameRwd "
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
                {/* </Link> */}
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <form className="container  nav RecipesSearchDiv RecipesOff">
                  <div className="row">
                    <div className="col-3">
                      <h6 className="RecipesSearchText">食譜名稱</h6>
                    </div>
                    <div className="col-6">
                      <input
                        className=" RecipesSearchInput form-control"
                        placeholder="搜尋餐點名稱"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-2"></div>
                  </div>
                </form>
                <form className="container  nav RecipesSearchDiv RecipesOn">
                  <div className="">
                    <div className="col">
                      <input
                        className=" RecipesSearchInput form-control"
                        placeholder="搜尋餐點名稱"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-1"></div>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <form
                  className="container  nav RecipesSearchDiv text-center RecipesOff"
                  input-type="Number"
                >
                  <div className="row ">
                    <div className="col-4">
                      <input
                        className="RecipesSearchInput form-control"
                        placeholder="請輸入最小卡路里範圍"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => {
                          setKcalMin(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-1">
                      <h6 className="RecipesSearchText ">~</h6>
                    </div>
                    <div className="col-4">
                      <input
                        className="RecipesSearchInput form-control"
                        placeholder="請輸入最大卡路里範圍"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => {
                          setKcalMax(e.target.value - max2);
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <h6 className="RecipesSearchText">大卡</h6>
                    </div>
                    <div className="col-1"></div>
                  </div>
                </form>

                <form className="container  nav RecipesSearchDiv text-center RecipesOn">
                  <div className="">
                    <div className="col">
                      <input
                        className="RecipesSearchInput form-control"
                        placeholder="請輸入最小卡路里範圍"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => {
                          setKcalMin(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col">
                      <input
                        className="RecipesSearchInput form-control"
                        placeholder="請輸入最大卡路里範圍"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => {
                          setKcalMax(e.target.value - max2);
                        }}
                      />
                    </div>
                    <div className="col-1"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <Link to="/recipes/box" >
          日式唐揚炸雞
        </Link> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-2 RecipesClassButton RecipesClassButtonAll">
            <div className="" id="recipesArray_buttons">
              {recipesArray.map((v, i) => {
                return (
                  <button
                    key={i}
                    id={i}
                    className="col container"
                    onClick={() => setRecipesIndex(i)}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="col-10 RecipesBoxCardAll">
            {DP.map((v, i) => {
              console.log(v.Recipes_ID)
              return (
                <div key={i} className="RecipesSearchBoxCardAll ">
                  <div className="RecipesSearchBoxCard ">
                    <Link to={`/recipes/id=${v.Recipes_ID}`}>
                      <img
                        src={require(`../image/${v.Recipes_Picture}`)}
                        className="card-img-top RecipesListImg"
                        alt={v.Recipes_Name}
                      />
                    </Link>
                    <div className="card-body">
                      <div className=" testBOX ">
                        <p className="card-text h6 ">
                          <img className="Boximg" />
                          {v.Recipes_Name}
                        </p>
                        <div className="">
                          <p className="text-sm-start h6">
                            瀏覽次數:{v.Recipes_Clicks}次
                          </p>
                        </div>
                      </div>
                      <Link to={`/recipes/id=${v.Recipes_ID}`}>
                        <button className=" RecipesLookButton" id="">
                          查看
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example " className="RecipesPage">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <MyBackTop />
    </>
  );
}

export default Recipes;
