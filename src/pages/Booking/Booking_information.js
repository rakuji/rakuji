import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Booking_information = () => {
  useEffect(() => {
    fetchStoreData();
    fetchMemberData();
  }, []);

  const history = useHistory();

  //會員ID
  const mid = sessionStorage.getItem("mid");
  // console.log(mid);

  const {
    storeInput,
    peopleAdultInput,
    peopleKidInput,
    startDateformat,
    mealTimeInput,
    bookingTimeInput,
  } = JSON.parse(localStorage.getItem("booking_time_info"));

  // 從資料庫取得分店資訊
  const [storeData, setStoreData] = useState([]);

  const fetchStoreData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/store`
    );
    const results = await response.json();
    const store = results.find((v) => v.name == storeInput);
    setStoreData(store);
  };

  // 從資料庫取得會員資訊
  const [memberData, setMemberData] = useState([]);

  const fetchMemberData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/member`
    );
    const results = await response.json();
    const member = results.find((v) => v.MID == mid);
    setMemberData(member);
  };
  // console.log(memberData);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  //留言內容長度
  const [statusLength, setStatusLength] = useState(0);
  const maxLength = 200;

  useEffect(() => {
    setStatusLength(status.length);
  }, [status]);

  // let booking_info = { name, phone, email, status };
  // localStorage.setItem("booking_info", JSON.stringify(booking_info));

  const [bookingid, setBookingId] = useState();
  localStorage.setItem("bookingId", bookingid); //將訂位編號存到localstorage

  //送資料到資料庫
  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mid,
        startDateformat,
        storeInput,
        peopleAdultInput,
        peopleKidInput,
        mealTimeInput,
        bookingTimeInput,
        name,
        phone,
        email,
        status,
      }),
    });

    const results = await response.json();

    // .then(res => console.log(res))
    // .then(res => res.json())

    localStorage.setItem("bookingId", results);

    // .then(data => console.log(data))
    // .then(data => localStorage.setItem("bookingId", data))
  };

  //-------------------------------------------------------------------
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

  //-------------------------------------------------------------------

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
  //-------------------------------------------------------------------
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
  //-------------------------------------------------------------------
  const [nameInputEffect, setNameInputEffect] = useState("");
  const [phoneInputEffect, setPhoneInputEffect] = useState("");
  const [emailInputEffect, setEmailInputEffect] = useState("");

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

    if (isPass === true) {
      Swal.fire({
        title: "確定要送出訂位?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確定",
        // confirmButtonText: '測試按鈕',
        cancelButtonText: "取消",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await fetchData();
          localStorage.removeItem("booking_time_info"); //清除訂位時段資訊
          history.push("/booking/booking_information/booking_finish");

          Swal.fire({
            icon: "success",
            title: "訂位已送出!",
          });
        }
      });
    }
  }

  //-------------------------------------------------------------------
  const [sameMemberInfoData, setSameMemberInfoData] = useState(false);
  function sameMemberInfo() {
    if (sameMemberInfoData == false) {
      setSameMemberInfoData(true);
      setName(memberData.Mname);
      setPhone(memberData.Mphone);
      setEmail(memberData.Memail);
    } else {
      setSameMemberInfoData(false);
      setName("");
      setPhone("");
      setEmail("");
    }
  }
  //-------------------------------------------------------------------

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <h3>確認訂位與填寫聯絡資訊</h3>
      </div>

      <div id="booking_section" className="row">
        {/* 確認訂位 */}
        <section className="col-4 booking_confirm">
          <div className="booking_confirm_card sticky-top">
            <img src={`/img/store/${storeData.picture}`} alt="" />
            <div className="d-flex align-items-center my-3">
              <i className="fa-solid fa-house-chimney mx-2"></i>
              <h3 className="">{storeInput}</h3>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-user mx-2"></i>
              <p className="">
                {peopleAdultInput}位大人，{peopleKidInput}位小孩
              </p>
            </div>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-calendar-days mx-2"></i>
              <p className="">{startDateformat}</p>
            </div>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-clock mx-2"></i>
              <p className="">{bookingTimeInput}</p>
            </div>
          </div>
        </section>

        {/* 聯絡資訊 */}
        <div className="col-8 booking_information">
          <div>
            <label htmlFor="">
              訂位人姓名 <span className="required_mark">*</span>
            </label>
            <div className="row mb-4">
              <div className="col-12">
                <input
                  type="text"
                  className={`form-control ${nameIsInvalid} ${nameInputEffect}`}
                  value={name}
                  onBlur={onBlurcheckName}
                  onChange={onChangecheckName}
                />
              </div>
              <div className="ErrorMessage" id="nameMsg"></div>
              {/* <div className="col-2 d-flex align-items-center">
                <input name="sex" id="man" type="radio" className="me-2" />
                <label htmlFor="man">先生</label>
              </div>
              <div className="col-2  d-flex align-items-center">
                <input name="sex" id="female" type="radio" className="me-2" />
                <label htmlFor="female">小姐</label>
              </div>
              <div className="col-2  d-flex align-items-center">
                <input name="sex" id="other" type="radio" className="me-2" />
                <label htmlFor="other">其他</label>
              </div> */}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="">
              訂位人手機號碼 <span className="required_mark">*</span>
            </label>
            <input
              type="tel"
              className={`form-control ${phoneIsInvalid} ${phoneInputEffect}`}
              value={phone}
              onBlur={onBlurcheckPhone}
              onChange={onChangecheckPhone}
              maxLength="10"
            />
            <div className="ErrorMessage" id="phoneMsg"></div>
          </div>

          <div className="mb-4">
            <label htmlFor="">
              訂位人 Email <span className="required_mark">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${emailIsInvalid} ${emailInputEffect}`}
              value={email}
              onBlur={onBlurcheckEmail}
              onChange={onChangecheckEmail}
            />
            <div className="ErrorMessage" id="emailMsg"></div>
          </div>

          <div>
            <label htmlFor="status">備註</label>
            <textarea
              name="status"
              id="status"
              cols="30"
              rows="5"
              maxLength={maxLength}
              className="form-control"
              placeholder="有任何需求請在此處填寫(限200字)"
              onChange={(e) => setStatus(e.target.value)}
            ></textarea>

            <div className="word_length d-flex justify-content-end">
              <p>
                (<span id="font_length"></span>
                {statusLength}/{maxLength})
              </p>
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={sameMemberInfo}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              同會員資料
            </label>
          </div>

          <div className="d-flex flex-column">
            {/* <Link to="/booking/booking_information/booking_finish"> */}
            <button className="next_page my-3" onClick={checkform}>
              確認訂位
            </button>
            {/* </Link> */}
            <Link to="/booking">
              <button className="last_page">回上一步</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking_information;
