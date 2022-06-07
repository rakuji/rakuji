import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";
import { useCart } from "../Cart/utils/useCart";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
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
import product_comments from "./data/product_comments.json";

const Product_detail = (props) => {
  // 從資料庫取得資料
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    const results = await response.json();
    setDatas(results);
    // console.log(results)
  };
  useEffect(() => {
    fetchData();
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
  console.log(count);

  const { addItem } = useCart();

  //留言內容
  const [comments, setComments] = useState("");

  

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
          >
            送出
          </button>
        </div>

        <div className="comments_area">
          {product_comments.map((v, i) => (
            <Product_comment
              key={i}
              member_name={v.member_name}
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
