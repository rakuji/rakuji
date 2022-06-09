import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";
import { useCart } from "../Cart/utils/useCart";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import $ from "jquery";
import withReactContent from "sweetalert2-react-content";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
  FacebookMessengerIcon,
} from "react-share";
import Product_comment from "./components/Product_comment";

//JSON資料
// import products from './data/products.json'
// import product_comments from "./data/product_comments.json";

const Product_detail = (props) => {
  // 從資料庫取得資料
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    const results = await response.json();
    setDatas(results);
    // console.log(results)
  };

  //一進到頁面取得產品資料及評論
  useEffect(() => {
    fetchData();
    fetchCommentsData();
  }, []);

  // 取得:id資料
  const [product, setProduct] = useState({
    id: 0,
    picture: "https://i.imgur.com/1GrakTl.jpg",
    name: "",
    price: 0,
    categroy: "",
    introduction: "",
  });

  //取得url productId
  const params = useParams();

  useEffect(() => {
    // 取得json檔
    const item = datas.find((v) => String(v.id) === params.productId);

    if (item) {
      setProduct(item);
    }
  }, [datas]);

  // console.log(params.productId);

  //商品數量
  const [count, setCount] = useState(1);
  // console.log(count);

  const { addItem } = useCart();

  // 從資料庫取得評論資料
  const [commentsDatas, setCommentsDatas] = useState([]);

  const fetchCommentsData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/productcommentsearch`
    );
    const results = await response.json();

    const comments = await results.filter(
      (v, i) => v.product_id == params.productId
    );

    setCommentsDatas(comments);
  };

  //score
  const [rating, setRating] = useState(0);
  const solid_star = "★";
  const hollow_star = "☆";
  const total_star = [];

  for (let i = 1; i <= rating; i++) {
    total_star.push(solid_star);
  }

  for (let i = 1; i <= 5 - rating; i++) {
    total_star.push(hollow_star);
  }
  // console.log(total_star)

  //檢查click狀態
  const [clickState, setClickState] = useState(false);

  //評分後內容
  const [ratingMsg, setRatingMsg] = useState("");

  //留言內容
  const [comments, setComments] = useState("");

  //假會員ID
  const [memberId, setMemberId] = useState(5);

  //商品編號
  const product_id = Number(params.productId);

  //送資料到資料庫
  const sendData = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/products/productcomment`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id,
        rating,
        comments,
        memberId,
      }),
    });
    fetchCommentsData();
  };

  console.log(commentsDatas)
  // console.log(add)

  return (
    <div className="container-xxl product_detail pb-5">
      <div className="row mb-5">
        {/* 商品圖片 */}
        <div className="col-6 product_img d-flex justify-content-center align-items-center">
          <div className="product_img_container">
            <img
              className="img-fluid"
              src={`/img/products/${product.picture}`}
              alt=""
            />
          </div>
        </div>

        {/* 商品資訊 */}
        <div className="col-6 product_info">
          <h1 className="mb-5">{product.name}</h1>
          <p className="mb-5">{product.introduction}</p>
          <h1 className="mb-5">NT{product.price}</h1>

          <div className="input-group mb-5 product_counts">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                if (count >= 2) {
                  setCount(count - 1);
                }
              }}
            >
              <i className="fa-solid fa-minus"></i>
            </button>

            <input
              type="text"
              className="form-control text-center"
              min="1"
              onChange={(e) => setCount(Number(e.target.value ? "" : 1))}
              // onChange={(e) => setCount(e.target.value)}
              value={count}
            />

            <button
              className="btn btn-primary rounded-end"
              type="button"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>

            <button
              className="btn btn-outline-primary d-none d-md-block ms-1 rounded fw-bold border-2 add_cart ms-3"
              type="button"
              onClick={() => {
                console.log(product);
                // 商品原本無數量屬性(quantity)，要先加上
                const item = { ...product, quantity: count };
                console.log(item);
                // 注意: 重覆加入會自動+1產品數量
                addItem(item);
                // 呈現跳出對話盒
                // showModal(product.name)
                Swal.fire({
                  icon: "success",
                  title: "商品已加入購物車",
                  timer: 1500,
                  timerProgressBar: true,
                  showCancelButton: false, // There won't be any cancel button
                  showConfirmButton: false, // There won't be any confirm button
                });
              }}
            >
              加入購物車
            </button>
          </div>

          <div className="product_share">
            <span>分享：</span>
            <FacebookShareButton
              url={"https://github.com/rakuji/rakuji"}
              quote={"CampersTribe - World is yours to explore"}
              className="me-1"
            >
              <FacebookIcon size={30} round />
            </FacebookShareButton>

            <FacebookMessengerShareButton
              url={"https://github.com/rakuji/rakuji"}
              appId={"382498665271383"}
              className="me-1"
            >
              <FacebookMessengerIcon size={30} round />
            </FacebookMessengerShareButton>

            <LineShareButton
              url={"https://github.com/rakuji/rakuji"}
              className="me-1"
            >
              <LineIcon size={30} round />
            </LineShareButton>

            <EmailShareButton
              url={"https://github.com/rakuji/rakuji"}
              className="me-1"
            >
              <EmailIcon size={30} round />
            </EmailShareButton>

            <TwitterShareButton
              url={"https://github.com/rakuji/rakuji"}
              className="me-1"
            >
              <TwitterIcon size={30} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>

      <div className="row">
        <hr />
        <h3 className="mb-4">評論區</h3>

        <div className="comments_create mb-5">
          <p className="mb-2">留言內容：</p>

          <div className="comments_create_rating mb-3 d-flex align-items-center">
            <ul className="me-3">
              {/* <li id="star1">☆</li>
              <li id="star1">☆</li>
              <li id="star1">☆</li>
              <li id="star1">☆</li>
              <li id="star1">☆</li> */}

              {total_star.map((v, i) => (
                <li
                  id="star"
                  key={i}
                  onClick={() => {
                    setRating(i + 1);
                    // console.log(i+1);
                    setClickState(true);
                    switch (i) {
                      case 0:
                        setRatingMsg("如果再加四顆星那就更棒了😓");
                        break;
                      case 1:
                        setRatingMsg("如果再加三顆星那就更棒了😌");
                        break;
                      case 2:
                        setRatingMsg("如果再加二顆星那就更棒了😅");
                        break;
                      case 3:
                        setRatingMsg("如果再加一顆星那就更棒了😀");
                        break;
                      case 4:
                        setRatingMsg("感謝親對商品的支持🤑");
                        break;
                    }
                  }}
                  onMouseEnter={() => {
                    if (clickState == false) {
                      setRating(i + 1);
                      // console.log(i + 1);
                    }
                  }}
                  onMouseLeave={() => {
                    if (clickState == false) {
                      setRating(0);
                      // console.log(i + 1);
                      setRatingMsg("");
                    }
                  }}
                >
                  {v}
                </li>
              ))}
            </ul>
            <span id="score">{ratingMsg}</span>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="告訴別人你有多喜歡此商品"
              id="exampleFormControlTextarea1"
              rows="3"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>

          <div className="good_comment d-flex mb-4">
            <button
              className="good"
              onClick={() => {
                setComments(comments + "超讚的出貨速度");
              }}
            >
              超讚的出貨速度
            </button>
            <button
              className="good"
              onClick={() => {
                setComments(comments + "超讚的商品品質");
              }}
            >
              超讚的商品品質
            </button>
            <button
              className="good"
              onClick={() => {
                setComments(comments + "超讚的CP值");
              }}
            >
              超讚的CP值
            </button>
            <button
              className="good"
              onClick={() => {
                setComments(comments + "超讚的服務");
              }}
            >
              超讚的服務
            </button>
          </div>

          <button
            type="button"
            className="send_comments_btn btn btn-outline-info fw-bold"
            onClick={() => {

              if (rating == 0) {
                Swal.fire({
                  icon: "warning",
                  title: "請評價此商品",
                });
              } else if (comments == 0) {
                Swal.fire({
                  icon: "warning",
                  title: "請填寫評論",
                });
              } else {



                Swal.fire({
                  title: '確定要送出評論?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: '確定',
                  // confirmButtonText: '測試按鈕',
                  cancelButtonText: '取消',
                }).then((result) => {
                  if (result.isConfirmed) {
                    sendData()
                    setRating(0)
                    setRatingMsg("")
                    setComments("")

                    Swal.fire({
                      icon: 'success',
                      title: '評論已送出!',
                    })
                  }
                })

                // sendData()
                // setRating(0)
                // setRatingMsg("")
                // setComments("")
              }
            }

            }
          >
            送出
          </button>
        </div>

        <div className="comments_area">
          {commentsDatas.map((v, i) => (
            <Product_comment
              key={i}
              member_name={v.name}
              contents={v.contents}
              rating={v.rating}
              created_at={v.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_detail;
