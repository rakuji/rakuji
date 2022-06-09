import React from "react";
import "../Votelist/Votelist.css";

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

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col_v">
            <div className="card">
              <img
                src={require("../image/main1.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">唐揚雞歐姆蛋咖喱飯</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
          <div className="col_v">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <br />
                <button className="card-text fs-6 d-block  mx-auto" alt="...">
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <MyBackTop/>

    </main>
  );
};

export default Votelist;
