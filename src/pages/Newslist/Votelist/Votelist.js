import React from "react";
import "../Votelist/Votelist.css";
import Button from "react-bootstrap/Button";

import Breadcrumb from "../Breadcrumb";
import MyBackTop from "../../../components/MyBackTop/MyBackTop";

const Votelist = () => {
  return (
    <main>
      <img
        src={require("../image/88.png")}
        width="100%"
        height="80%"
        className="d-block  mx-auto"
        alt="..."
      />
            <div className="newsbackground">

      <div className="tt">
        <Breadcrumb />
      </div>
      
      <div className="container">
        <div className="col">
          <div className="card-body">
            <div className="card-title fs-2">選出你的天菜　投票抽大獎</div>
            <div className="card-text fs-6">2022/12/56 - 2022/12/56</div>

            <div className="card-text  fs-5">
              《料理之王》火熱開打，選手大展身手，做出一道道美味佳餚，滿足視覺、嗅覺、味覺，征服你的感官體驗！看完節目還念念不忘？想成為和選手一樣的料理達人？現在就上網票選節目中你最愛的料理食譜，讓你最愛的料理被大家看見、獲得百萬曝光機會，成為家喻戶曉的全民料理！力挺你心儀的菜色，還有機會抽中全家禮券，快來為你喜歡的美食投票吧!
            </div>
            <br></br>

            <li className="list-group list-group-flush">
              <li className="list-group-item fs-5 p-0 ">
                【活動辦法】 每投票一次即可獲得一次抽獎資格!
                每人每天最多可投兩票，投票越多次中獎機會越高！
              </li>
              <li className="list-group-item fs-5 p-0">
                【活動獎項】 壹獎：Drinkmate氣泡機[市價$2,980元]，共3名。
                貳獎：全家禮物卡500元，共10名。 參獎：全家禮物卡300元，共10名。
                普獎：全家禮物卡100元，共100名。
              </li>
              <li className="list-group-item fs-5 p-0">
                【注意事項】
                活動時間：西元（下同）2022年06月01日15:00起至2022年06月30日12:00止。
                活動結果公佈：2022年07月18日前於活動頁公佈得獎者。
              </li>
            </li>
          </div>
        </div>
      </div>
      {/* 假資料寫死  */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/*  選手5號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-004文青花魚飯.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  文青花魚飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:82次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手6號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-006裝蒜牛五花飯.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  裝蒜牛五花飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:97次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手7號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-007熔岩唐揚雞飯.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  熔岩唐揚雞飯
                </h5>
                <div className="card-title-center d-flex justify-content-evenly">
                <h5 className="fs-6"> 
                  喜歡:371次 
                </h5>
               
                </div>
                {/* 喜歡改成紅色  + icon靠右 */}
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit" active>
                  Like
                </Button>
                
              </div>
            </div>
          </div>
          {/*  選手8號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-008寶島燒豚飯.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  寶島燒豚飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:62次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手9號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-009月見海鮮丼.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  月見海鮮丼
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:131次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手10號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-010炊飯.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  炊飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:63次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手11號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-011蛋包飯.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  蛋包飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:120次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手12號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-012漢堡排.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  漢堡排
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:42次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  */}
          {/* 選手1號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-001黃金豬排丼飯.jpeg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  黃金豬排丼飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:231次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>

          {/*  選手2號 */}

          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-002唐揚雞歐姆蛋咖喱飯.jpeg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  唐揚雞歐姆蛋咖喱飯
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:69次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手3號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-003天婦羅丼.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  天婦羅丼
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:95次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>

          {/*  選手4號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-005親子丼.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  親子丼
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:116次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>
          {/*  選手13號 */}
          <div className="col_v">
            <div className="card">
              <img
                src={require("../Votelist/image/MB-013明太子義大利麵.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title-center d-flex justify-content-evenly">
                  明太子義大利麵
                </h5>
                <h5 className="card-title-center d-flex justify-content-evenly fs-6">
                  喜歡:74次 
                </h5>
                <Button
                  className="bu"
                  variant=" primary , d-block , mx-auto "
                  type="submit"
                >
                  Like
                </Button>
              </div>
            </div>
          </div>

          {/*  end */}
        </div>
      </div>


      <MyBackTop />
      </div>
    </main>
  );
};

export default Votelist;
