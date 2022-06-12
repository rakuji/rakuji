import React, { useEffect, useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import CartCheckAreaInfo from "./components/CartCheckAreaInfo";
import { Link, useHistory } from "react-router-dom";

const Cart_info = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  //--------------------------------------------------------------------------------

  // 姓名欄位錯誤訊息狀態
  const [nameIsInvalid, setNameIsInvalid] = useState("");

  // 一鍵填寫時更改input外框狀態
  useEffect(() => {
    if (name != "" && name.length > 2) {
      setNameIsInvalid("");
      document.getElementById("nameMsg").innerText = "";
    }
  }, [name]);

  function onBlurcheckName() {
    if (name.length == 0) {
      setNameIsInvalid("is-invalid");
      document.getElementById("nameMsg").innerText = "姓名為必填";
    }
  }

  function onChangecheckName(e) {
    const newTotal = e.target.value;
    setName(newTotal);
    // console.log(newTotal.length)
    if (newTotal.length == "") {
      setNameIsInvalid("is-invalid");
      document.getElementById("nameMsg").innerText = "姓名為必填";
    } else if (newTotal.length < 2) {
      setNameIsInvalid("is-invalid");
      document.getElementById("nameMsg").innerText = "請填寫正確的姓名";
    } else {
      setNameIsInvalid("");
      document.getElementById("nameMsg").innerText = "";
    }
  }
  //--------------------------------------------------------------------------------

  // 手機欄位錯誤訊息狀態
  const [phoneIsInvalid, setPhoneIsInvalid] = useState("");
  const mobile_re = /^(09)[0-9]{8}$/; // new RegExp()

  // 一鍵填寫時更改input外框狀態
  useEffect(() => {
    if (phone != "" && mobile_re.test(phone)) {
      setPhoneIsInvalid("");
      document.getElementById("phoneMsg").innerText = "";
    }
  }, [phone]);

  function onBlurcheckPhone() {
    if (phone === "") {
      setPhoneIsInvalid("is-invalid");
      document.getElementById("phoneMsg").innerText = "手機為必填";
    }
  }

  function onChangecheckPhone(e) {
    const newTotal = e.target.value;
    setPhone(newTotal);
    if (newTotal === "") {
      setPhoneIsInvalid("is-invalid");
      document.getElementById("phoneMsg").innerText = "手機為必填";
    } else if (!mobile_re.test(newTotal)) {
      setPhoneIsInvalid("is-invalid");
      document.getElementById("phoneMsg").innerText = "請輸入正確的手機號碼";
    } else {
      setPhoneIsInvalid("");
      document.getElementById("phoneMsg").innerText = "";
    }
  }

  //--------------------------------------------------------------------------------

  // 信箱欄位錯誤訊息狀態
  const [emailIsInvalid, setEmailIsInvalid] = useState("");
  const email_re =
    /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; // new RegExp()

  // 一鍵填寫時更改input外框狀態
  useEffect(() => {
    if (email != "" && email_re.test(email)) {
      setEmailIsInvalid("");
      document.getElementById("emailMsg").innerText = "";
    }
  }, [email]);

  function onBlurcheckEmail() {
    if (email === "") {
      setEmailIsInvalid("is-invalid");
      document.getElementById("emailMsg").innerText = "信箱為必填";
    }
  }

  function onChangecheckEmail(e) {
    const newTotal = e.target.value;
    setEmail(newTotal);
    if (newTotal === "") {
      setEmailIsInvalid("is-invalid");
      document.getElementById("emailMsg").innerText = "信箱為必填";
    } else if (!email_re.test(newTotal)) {
      setEmailIsInvalid("is-invalid");
      document.getElementById("emailMsg").innerText = "請輸入正確的信箱";
    } else {
      setEmailIsInvalid("");
      document.getElementById("emailMsg").innerText = "";
    }
  }

  //--------------------------------------------------------------------------------
  // 地址欄位錯誤訊息狀態
  const [addressIsInvalid, setAddressIsInvalid] = useState("");

  // 一鍵填寫時更改input外框狀態
  useEffect(() => {
    if (address != "") {
      setAddressIsInvalid("");
      document.getElementById("addressMsg").innerText = "";
    }
  }, [address]);

  function onBlurcheckAddress() {
    if (address === "") {
      setAddressIsInvalid("is-invalid");
      document.getElementById("addressMsg").innerText = "地址為必填";
    }
  }

  function onChangecheckAddress(e) {
    const newTotal = e.target.value;
    setAddress(newTotal);
    if (newTotal === "") {
      setAddressIsInvalid("is-invalid");
      document.getElementById("addressMsg").innerText = "地址為必填";
    } else {
      setAddressIsInvalid("");
      document.getElementById("addressMsg").innerText = "";
    }
  }

  //--------------------------------------------------------------------------------

  const [nameInputEffect, setNameInputEffect] = useState("");
  const [phoneInputEffect, setPhoneInputEffect] = useState("");
  const [emailInputEffect, setEmailInputEffect] = useState("");
  const [addressInputEffect, setAddressInputEffect] = useState("");

  // 送出表單前檢查
  function checkform() {
    let isPass = true; // 有沒有通過檢查

    //檢查姓名
    if (name === "") {
      setNameIsInvalid("is-invalid");
      document.getElementById("nameMsg").innerText = "姓名為必填";
      isPass = false;
      setNameInputEffect("shake");
      setTimeout(() => {
        setNameInputEffect("");
      }, 800);
    } else if (name.length < 2) {
      isPass = false;
      setNameInputEffect("shake");
      setTimeout(() => {
        setNameInputEffect("");
      }, 800);
    }

    //檢查手機
    const mobile_re = /^(09)[0-9]{8}$/; // new RegExp()
    if (phone === "") {
      setPhoneIsInvalid("is-invalid");
      document.getElementById("phoneMsg").innerText = "手機為必填";
      isPass = false;
      setPhoneInputEffect("shake");
      setTimeout(() => {
        setPhoneInputEffect("");
      }, 800);
    } else if (!mobile_re.test(phone)) {
      isPass = false;
      setPhoneInputEffect("shake");
      setTimeout(() => {
        setPhoneInputEffect("");
      }, 800);
    }

    //檢查信箱
    const email_re =
      /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; // new RegExp()
    if (email === "") {
      setEmailIsInvalid("is-invalid");
      document.getElementById("emailMsg").innerText = "信箱為必填";
      isPass = false;
      setEmailInputEffect("shake");
      setTimeout(() => {
        setEmailInputEffect("");
      }, 800);
    } else if (!email_re.test(email)) {
      isPass = false;
      setEmailInputEffect("shake");
      setTimeout(() => {
        setEmailInputEffect("");
      }, 800);
    }

    //檢查地址
    if (address === "") {
      setAddressIsInvalid("is-invalid");
      document.getElementById("addressMsg").innerText = "地址為必填";
      isPass = false;
      setAddressInputEffect("shake");
      setTimeout(() => {
        setAddressInputEffect("");
      }, 800);
    }


    if (isPass === true) {
      //將聯絡資訊打包成一個物件
      let cart_info = { name, phone, email, address };
      localStorage.setItem("cart_info", JSON.stringify(cart_info));
      // window.location.href = `/cart/cart_info/cart_order` //跳轉頁面
      history.push("/cart/cart_info/cart_order");
    }
  }

  //--------------------------------------------------------------------------------

  function gogogo() {
    setName("王陽明");
    setPhone("0912345678");
    setEmail("test123@gmail.com");
    setAddress("高雄市前金區中正二路87號");

    // if (name != "") {
    //     setName("")
    // } else {
    //     setName("王陽明")
    // }

    // if (phone != "") {
    //     setPhone("")
    // } else {

    //     setPhone("0912345678")
    // }

    // if (email != "") {
    //     setEmail("")
    // } else {

    //     setEmail("test123@gmail.com")
    // }

    // if (address != "") {
    //     setAddress("")
    // } else {
    //     setAddress("高雄市前金區中正二路87號")
    // }
  }

  //--------------------------------------------------------------------------------

  return (
    <div className="container mb-5">
      <Stepper activeStep={0}>
        <Step label="填寫聯絡資訊" />
        <Step label="填寫付款資訊" />
        <Step label="完成訂單" />
      </Stepper>

      <div className="row cart_info">
        {/* info */}
        <div className="col-8">
          <h3>聯絡資訊</h3>
          <hr />

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              姓名 <span className="required_mark">*</span>
            </label>

            {/* is-invalid */}
            <input
              id="name"
              type="text"
              className={`form-control ${nameIsInvalid} ${nameInputEffect}`}
              onBlur={onBlurcheckName}
              onChange={onChangecheckName}
              value={name}
            />
            <div className="ErrorMessage" id="nameMsg"></div>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              手機 <span className="required_mark">*</span>
            </label>
            <input
              id="phone shake"
              type="text"
              className={`form-control ${phoneIsInvalid} ${phoneInputEffect}`}
              onBlur={onBlurcheckPhone}
              onChange={onChangecheckPhone}
              value={phone}
              maxLength="10"
            />
            <div className="ErrorMessage" id="phoneMsg"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              信箱 <span className="required_mark">*</span>
            </label>
            <input
              id="email shake"
              type="email"
              className={`form-control ${emailIsInvalid} ${emailInputEffect}`}
              onBlur={onBlurcheckEmail}
              onChange={onChangecheckEmail}
              value={email}
            />
            <div className="ErrorMessage" id="emailMsg"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              外送地址 <span className="required_mark">*</span>
            </label>
            <input
              id="address shake"
              type="text"
              className={`form-control ${addressIsInvalid} ${addressInputEffect}`}
              onBlur={onBlurcheckAddress}
              onChange={onChangecheckAddress}
              value={address}
            />
            <div className="ErrorMessage" id="addressMsg"></div>
          </div>
          <div className="mb-3 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={gogogo}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              一鍵填寫
            </label>
          </div>
        </div>

        {/* check_area */}
        <div className="col-4">
          <div className="checkarea mt-5">
            <CartCheckAreaInfo />
            {/* <Link to={"/cart/cart_info/cart_order"}> */}
            <button
              type="submit"
              className="next_page my-2"
              onClick={checkform}
            >
              下一步
            </button>
            {/* </Link> */}

            <Link to={"/cart"}>
              <button className="last_page my-2">上一步</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_info;
