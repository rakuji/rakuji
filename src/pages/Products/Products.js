import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, withRouter,useHistory } from "react-router-dom";
import gsap from "gsap";
import $ from "jquery";
import { Modal, Button } from "react-bootstrap";
import { useCart } from "../Cart/utils/useCart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// 商品範例
// import datas from './data/products.json'

const Products = (props) => {
  const { auth } = props;

  const history = useHistory()

  // 從資料庫取得資料
  const [datas, setDatas] = useState([]);

  // 篩選類別後的資料
  const [sortData, setSortData] = useState([]);

  // 搜尋後的資料
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    const results = await response.json();
    setDatas(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //--------------------篩選類別----------------------------------------------------------
  // 選單列狀態
  const [categoryIndex, setCatetoryIndex] = useState(0);
  const [categoryValue, setCategoryValue] = useState("全部商品");

  const category = [
    "全部商品",
    "主食",
    "前菜",
    "湯品",
    "飲品",
    "甜點",
    "副產品",
  ];

  // const f_result = datas.filter((v) => {
  //   if (categoryIndex === 0) return true

  //   return v.category === category[categoryIndex]
  // })

  // useEffect(() => {
  //   setSortData(f_result)
  // }, [categoryIndex])

  // console.log(f_result)

  //-------------------------------------------------------------------------------------

  //--------------------搜尋----------------------------------------------------------
  const [searchInput, setSearchInput] = useState("");

  // const s_result = sortData.filter((v)=>v.name.includes(searchInput))
  // console.log(s_result)

  // console.log(datas)
  // console.log(searchInput)

  // console.log("白飯".includes('飯'))

  // const result = datas.filter((v)=> (v.id == 2))
  // console.log(typeof result[0].name)

  //-------------------------------------------------------------------------------------

  //--------------------價格排序-------------------------------------------------------
  const [priceBtnState, setPriceBtnState] = useState(0);

  const DP = datas
    .filter((v, i) => {
      if (categoryIndex === 0) return true;

      return v.category === category[categoryIndex];
    })
    .filter((v) => v.name.includes(searchInput));

  let priceSortButton;
  if (priceBtnState == 0) {
    priceSortButton = <i className="fa-solid fa-filter-circle-dollar"></i>;
    DP.sort((a, b) => {
      //編號由小到大(預設)
      return a.id - b.id;
    });
  } else if (priceBtnState == 1) {
    priceSortButton = <i className="fa-solid fa-arrow-down"></i>;
    DP.sort((a, b) => {
      //價格由小到大
      return a.price - b.price;
    });
  } else if (priceBtnState == 2) {
    priceSortButton = <i className="fa-solid fa-arrow-up"></i>;
    DP.sort((a, b) => {
      //價格由大到小
      return b.price - a.price;
    });
  }

  let students = [
    {
      fname: "Rohan",
      lname: "Dalal",
      age: 19,
    },

    {
      fname: "Zain",
      lname: "Ahmed",
      age: 21,
    },

    {
      fname: "Anadi",
      lname: "Malhotra",
      age: 16,
    },
  ];

  students.sort((a, b) => {
    //價格由小到大
    return a.age - b.age;
  });
  // console.log(students)

  // console.log(students.sort((a,b)=>{
  //   //價格由大到小
  //   return b.age - a.age;
  // }))

  //-------------------------------------------------------------------------------------

  //價格排序效果
  // let deg = 0;
  // const price_search = () => {
  //   deg += 180;
  //   document.getElementById("price_search").style.transition = "0.3s";
  //   document.getElementById(
  //     "price_search"
  //   ).style.transform = `rotate(${deg}deg)`;
  // };

  // useEffect(() => {
  //   $(`#category_buttons button[id=${categoryIndex}]`).attr("id", "active")
  // })

  // useEffect(() => {

  //   $("#category_buttons button").click(function () {
  //     $("#category_buttons button").removeAttr("id")
  //     $(this).attr("id", "active")
  //   })
  // }, [])

  // useEffect(() => {
  //   gsap.timeline({ onComplete: () => gsap.set(".product_card", { clearProps: true }) }).from(".product_card", {
  //     duration: 1,
  //     opacity: 0,
  //     delay: 0,
  //     stagger: 0.1,
  //   });
  // }, [categoryIndex, datas]);

  const { addItem } = useCart();

  // console.log(DP)

  return (
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>餐點列表</div>
    <div className="container-sm container-lg">
      <div className="product_category_aside_mobile" id="category_buttons">
        {category.map((v, i) => {
          return (
            <button
              key={i}
              id={categoryValue == category[i] ? "active" : ""}
              className="product_category me-2"
              onClick={() => {
                setCatetoryIndex(i);
                setCategoryValue(v);
              }}
            >
              {v}
            </button>
          );
        })}
      </div>

      <div className="row mb-3">
        <div className="col-sm-2"></div>
        <div className="col-12 col-md-10 srarch_bar d-flex justify-content-between">
          {/* 價格排序 */}
          <button
            className="price_search d-flex justify-content-center align-items-center"
            // onClick={price_search}
            onClick={() => {
              if (priceBtnState == 2) {
                setPriceBtnState(0);
              } else {
                setPriceBtnState(priceBtnState + 1);
              }
            }}
          >
            <p className="mb-0 text-nowrap">價錢</p>
            <div className="p_icon_container">{priceSortButton}</div>
          </button>

          {/* 產品搜尋 */}
          <form
            className="d-flex product_search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control"
              type="search"
              placeholder="搜尋餐點"
              aria-label="Search"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="row">
        {/* 商品類別 */}
        <div className=" col-md-2 product_category_aside">
          <div className="sticky-top" id="category_buttons">
            {category.map((v, i) => {
              return (
                <button
                  key={i}
                  id={categoryValue == category[i] ? "active" : ""}
                  className="product_category"
                  onClick={() => {
                    setCatetoryIndex(i);
                    setCategoryValue(v);
                  }}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </div>

        {/* 商品卡片 */}
        <div className="col-md-10 products">
          {DP.map((v, i) => {
            return (
              <div
                key={i}
                className="product_container col-6 col-md-4 col-lg-3"
              >
                <Link to={`/products/product_detail/${v.id}`}>
                  <div className="product_card">
                    <div className="imageContainer mb-2">
                      {/* <img src={require("./images/maindish/MB-006裝蒜牛五花飯_s.jpg")} alt="" /> */}
                      {/* <img src="/img/products/CH-001綜合寶寶粥.jpg" alt="" /> */}
                      <img src={`/img/products/${v.picture}`} alt="" />
                    </div>
                    <div className="product_card_info">
                      <p className="mb-2">{v.name}</p>
                      <p className="mb-2">NT{v.price}</p>
                      <button
                        id="cart_icon"
                        onClick={(e) => {
                          if (auth) {
                            console.log(v);
                            // 事件阻擋
                            e.preventDefault();
                            // 商品原本無數量屬性(quantity)，要先加上
                            const item = { ...v, quantity: 1 };
                            console.log(item);
                            // 注意: 重覆加入會自動+1產品數量
                            addItem(item);
                            // 呈現跳出對話盒
                            // showModal(v.name) //react-bootstrap modal
                            Swal.fire({
                              icon: "success",
                              title: "商品已加入購物車",
                              timer: 1500,
                              timerProgressBar: true,
                              showCancelButton: false, // There won't be any cancel button
                              showConfirmButton: false, // There won't be any confirm button
                            });
                          } else {
                            // 事件阻擋
                            e.preventDefault();
                            Swal.fire({
                              icon: "warning",
                              title: "請先登入會員",
                              showCancelButton: true,
                              confirmButtonText: "登入",
                              cancelButtonText: "取消",
                            }).then(async (result) => {
                              if (result.isConfirmed) {
                                history.push("/member/login");
                              }
                            });
                          }
                        }}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Products);
