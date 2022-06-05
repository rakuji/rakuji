import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CartItemArea from "./components/CartItemArea";
import $ from "jquery";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LuckyWheel, LuckyGrid } from "@lucky-canvas/react";

import { useCart } from "./utils/useCart";

const Cart = (props) => {
  const [coupon, setCoupon] = useState(0);
  const [couponPrice, setCouponPrice] = useState(0);
  const [couponMsg, setCouponMsg] = useState("");

  const couponhandler = () => {
    switch (coupon) {
      case "VIP666":
        setCouponMsg("成功套用優惠碼，已折抵100元!");
        setCouponPrice(100);
        // handleShow()
        Swal.fire({
          icon: "success",
          title: "成功套用優惠碼，已折抵100元!",
        });
        break;
      case "HAPPY888":
        setCouponMsg("成功套用優惠碼，已折抵50元!");
        setCouponPrice(50);
        Swal.fire({
          icon: "success",
          title: "成功套用優惠碼，已折抵50元!",
        });
        break;
      case "RAKUJIISGOOD":
        setCouponMsg("成功套用優惠碼，已折抵30元!");
        setCouponPrice(30);
        Swal.fire({
          icon: "success",
          title: "成功套用優惠碼，已折抵30元!",
        });
        break;
      case "SEEYOUAGAIN":
        setCouponMsg("成功套用優惠碼，已折抵10元!");
        setCouponPrice(10);
        Swal.fire({
          icon: "success",
          title: "成功套用優惠碼，已折抵10元!",
        });
        break;
      default:
        setCouponMsg("請輸入正確的優惠碼!");
        setCouponPrice(0);
        Swal.fire({
          icon: "warning",
          title: "請輸入正確的優惠碼!",
        });
    }
  };

  localStorage.setItem("couponPrice", couponPrice);

  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart();

  console.log(cart);

  // --------------------------------------------------------------------------

  const [blocks] = useState([{ padding: "10px", background: "#489AD5" }]);
  const [prizes] = useState([
    {
      background: "#C6E7F4",
      fonts: [
        {
          text: "折抵100元",
          top: "40px",
          fontWeight: "600",
          fontStyle: "Arial, Helvetica, sans-serif",
        },
      ],
    },
    {
      background: "#58C2DD",
      fonts: [
        {
          text: "再接再厲",
          top: "40px",
          fontWeight: "600",
          fontStyle: "Arial, Helvetica, sans-serif",
        },
      ],
    },
    {
      background: "#C6E7F4",
      fonts: [
        {
          text: "折抵50元",
          top: "40px",
          fontWeight: "600",
          fontStyle: "Arial, Helvetica, sans-serif",
        },
      ],
    },
    {
      background: "#58C2DD",
      fonts: [
        {
          text: "下次再來",
          top: "40px",
          fontWeight: "600",
          fontStyle: "Arial, Helvetica, sans-serif",
        },
      ],
    },
    {
      background: "#C6E7F4",
      fonts: [
        {
          text: "折抵30元",
          top: "40px",
          fontWeight: "600",
          fontStyle: "Arial, Helvetica, sans-serif",
        },
      ],
    },
    {
      background: "#58C2DD",
      fonts: [
        {
          text: "銘謝惠顧",
          top: "40px",
          fontWeight: "600",
          fontStyle: "Arial, Helvetica, sans-serif",
        },
      ],
    },
  ]);
  const [buttons] = useState([
    { radius: "40%", background: "#489AD5" },
    { radius: "35%", background: "#C6E7F4" },
    {
      radius: "30%",
      background: "#BE5438",
      pointer: true,
      fonts: [
        { text: "抽獎", top: "-10px", fontColor: "#fff", fontWeight: "600" },
      ],
    },
  ]);

  const myLucky = useRef();

  // --------------------------------------------------------------------------

  // 對話盒使用
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const messageModal = (
    <Modal show={show} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>套用優惠碼訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{couponMsg}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          確定
        </Button>
      </Modal.Footer>
    </Modal>
  );

  // --------------------------------------------------------------------------
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            輪盤小遊戲
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="d-flex justify-content-center LuckyWheelFont">
            點選抽獎就有機會獲得優惠碼!
          </p>
          <div className="d-flex justify-content-center">
            {/* 輪盤抽獎 */}
            <LuckyWheel
              ref={myLucky}
              width="400px"
              height="400px"
              blocks={blocks}
              prizes={prizes}
              buttons={buttons}
              onStart={() => {
                myLucky.current.play();
                setTimeout(() => {
                  const index = (Math.random() * 6) >> 0;
                  myLucky.current.stop(index);
                }, 2500);
              }}
              onEnd={(prize) => {
                // alert("恭喜你抽到 " + prize.fonts[0].text + " 獎");
                Swal.fire({
                  icon: "warning",
                  title: prize.fonts[0].text,
                });

                switch (prize.fonts[0].text) {
                  case "折抵100元":
                    // handleShow()
                    Swal.fire({
                      icon: "success",
                      title: "恭喜你獲得折抵100元優惠碼!",
                    });
                    break;
                  case "再接再厲":
                    Swal.fire({
                      icon: "success",
                      title: "再接再厲",
                      text:"別難過，給你安慰獎"
                    });
                    break;
                  case "折抵50元":
                    Swal.fire({
                      icon: "success",
                      title: "恭喜你獲得折抵50元優惠碼!",
                    });
                    break;
                  case "下來再來":
                    Swal.fire({
                      icon: "success",
                      title: "下來再來",
                      text:"別難過，給你安慰獎"
                    });
                    break;

                  case "折抵30元":
                    Swal.fire({
                      icon: "success",
                      title: "恭喜你獲得折抵30元優惠碼!",
                    });
                    break;
                    
                  case "銘謝惠顧":
                    Swal.fire({
                      icon: "success",
                      title: "銘謝惠顧",
                      text:"別難過，給你安慰獎"
                    });
                    break;
                }
              }}
            />
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  // --------------------------------------------------------------------------

  return (
    <div
      className="container"
      style={{ minHeight: " calc(100vh - 86px - 308px)" }}
    >
      <h3>購物車</h3>
      <CartItemArea />

      <div className="row justify-content-end">
        <div className="col-3 cart_checkarea me-5">
          <form className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="請輸入優惠碼"
              aria-label="Recipient's username"
              aria-describedby="button-coupon"
              required=""
              onChange={(e) => {
                setCoupon(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-right fz-0"
              id="button-coupon"
              onClick={couponhandler}
            >
              套用優惠碼
            </button>
          </form>

          <div className="quantity my-3">
            <p>數量</p>
            <p>共{cart.totalItems}件</p>
          </div>

          <div className="price my-3">
            <p>小計</p>
            <p>${cart.cartTotal}</p>
          </div>

          <div className="price my-3">
            <p>優惠折扣</p>
            <p>$-{couponPrice}</p>
          </div>

          <hr />

          <div className="price my-3">
            <p>總計</p>
            <b className="cart_total_price">
              $
              {cart.cartTotal - couponPrice <= 0
                ? 0
                : cart.cartTotal - couponPrice}
            </b>
          </div>

          <Link to="/cart/cart_info">
            <button className="go_check my-4">前往結帳</button>
          </Link>
        </div>
      </div>

      {messageModal}

      <div className="coupon_game" onClick={() => setModalShow(true)}>
        <i class="fa-solid fa-gift"></i>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Cart;
