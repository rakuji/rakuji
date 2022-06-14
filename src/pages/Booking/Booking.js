import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import moment from "moment";
import BookingTimeButton from "./components/BookingTimeButton";

const Booking = ({ auth }) => {
  const history = useHistory();

  //假會員ID
  // localStorage.setItem("memberId", 5);

  //一進到頁面取得分店資訊
  useEffect(() => {
    fetchStoreData();
    fetchMealTimeData();
  }, []);

  // 分店
  const [storeInput, setStoreInput] = useState("");
  // console.log(storeInput);

  // 大人
  const [peopleAdultInput, setPeopleAdultInput] = useState("1");
  // console.log(peopleAdultInput)

  // 小孩
  const [peopleKidInput, setPeopleKidInput] = useState("0");
  // console.log(peopleKidInput)

  // react-datepicker
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate)
  const startDateformat = moment(startDate).format("YYYY/MM/DD");
  //  console.log(startDateformat)

  // 時段
  const [mealTimeInput, setMealTimeInput] = useState("中午");
  // console.log(mealTimeInput);

  // 訂位時段
  const [bookingTimeInput, setBookingTimeInput] = useState("");
  // console.log(bookingTimeInput);

  //時段狀態
  const [defaultValue, setDefaultValue] = useState("");

  //將訂位資訊打包成一個物件
  let booking_time_info = {
    storeInput,
    peopleAdultInput,
    peopleKidInput,
    startDateformat,
    mealTimeInput,
    bookingTimeInput,
  };
  localStorage.setItem("booking_time_info", JSON.stringify(booking_time_info));

  // 從資料庫取得分店資訊
  const [storeData, setStoreData] = useState([]);

  const fetchStoreData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/store`
    );
    const results = await response.json();
    setStoreData(results);
  };

  // 從資料庫取得時段
  const [bookingTime, setBookingTime] = useState([]);

  const fetchMealTimeData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/mealtime`
    );
    const results = await response.json();
    setBookingTime(results);
  };

  // ------------------------------------------------------------------------------------------------------
  // 用餐人數

  const [totalPeoplesAdult, setTotalPeoplesAdult] = useState([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const [totalPeoplesKid, setTotalPeoplesKid] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);

  const selectHandlerAdult = (e) => {
    let peoples = parseInt(e.target.value);
    let t_peoples = [];
    for (let i = 0; i <= 8 - peoples; i++) {
      t_peoples.push(i);
    }
    setTotalPeoplesKid(t_peoples);
    setPeopleAdultInput(e.target.value);
    setBookingTimeInput("");
  };

  const selectHandlerKid = (e) => {
    let peoples = parseInt(e.target.value);
    let t_peoples = [];
    for (let i = 1; i <= 8 - peoples; i++) {
      t_peoples.push(i);
    }
    setTotalPeoplesAdult(t_peoples);
    setPeopleKidInput(e.target.value);
    setBookingTimeInput("");
  };

  // ------------------------------------------------------------------------------------------------------
  const date = new Date();
  // console.log(new Date(date.setDate(date.getDate()+1)))

  const nowtime = moment(date).format("HH:mm");
  // console.log(nowtime > "22:27")

  const nowDate = moment(date).format("YYYY/MM/DD");
  // console.log(nowDate);
  // console.log(startDateformat)

  // console.log(startDateformat > nowDate);

  // -------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------

  return (
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>線上訂位</div>
    <div className="container booking">
      <div className="row">
        <h3>線上訂位</h3>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="">分店</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setStoreInput(e.target.value);
              setBookingTimeInput("");
              if (
                nowtime > "14:00" &&
                nowtime < "20:00" &&
                nowDate === startDateformat
              ) {
                setMealTimeInput("晚上");
              } else if (nowtime >= "20:00" && nowDate === startDateformat) {
                setStartDate(new Date(date.setDate(date.getDate() + 1)));
                setMealTimeInput("中午");
              }
            }}
          >
            <option value="">請選擇分店</option>
            {storeData.map((v, i) => {
              return (
                <option key={i} value={v.name}>
                  {v.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <label htmlFor="">用餐人數</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={selectHandlerAdult}
              >
                {totalPeoplesAdult.map((v, i) => {
                  return <option key={i} value={v}>{`${v}位大人`}</option>;
                })}
              </select>
            </div>
            <div className="col-6">
              <label htmlFor=""></label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={selectHandlerKid}
              >
                {totalPeoplesKid.map((v, i) => {
                  return <option key={i} value={v}>{`${v}位小孩`}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6" id="booking_date">
              <label htmlFor="">用餐日期</label>
              <DatePicker
                className="form-select"
                selected={startDate}
                dateFormat="yyyy/MM/dd"
                minDate={new Date()}
                onChange={(date) => {
                  setStartDate(date);
                  setBookingTimeInput("");

                  setMealTimeInput("中午");
                }}
              />
              {/* <input className='form-select' type="date" name="" id="booking_date" max="2022-05-18"/> */}
            </div>
            <div className="col-6">
              <label htmlFor="">時段</label>
              <select
                id="mystuff"
                className="form-select"
                aria-label="Default select example"
                value={mealTimeInput}
                onChange={(e) => {
                  setMealTimeInput(e.target.value);
                  setBookingTimeInput("");
                }}
              >
                <option value="中午">中午</option>
                <option value="晚上">晚上</option>
              </select>
            </div>
          </div>
        </div>

        <span className="mt-2" id="booking_introduction">
          可接受 1-8 位訂位（含大人與小孩） * 超過 8 人的訂位，請使用電話預約
          07-963-5566
        </span>

        <hr className="my-3" />
        {/* <div id="msgbox"></div> */}
        <div className="booking-time">
          {bookingTime
            .filter((v) => v.booking_time === mealTimeInput)
            .map((v, i) => {
              if (storeInput !== "") {
                return (
                  <BookingTimeButton
                    key={i}
                    time={v.time}
                    storeInput={storeInput}
                    startDateformat={startDateformat}
                    bookingTimeInput={bookingTimeInput}
                    mealTimeInput={mealTimeInput}
                    setBookingTimeInput={setBookingTimeInput}
                    peopleAdultInput={peopleAdultInput}
                    peopleKidInput={peopleKidInput}
                    nowtime={nowtime}
                    nowDate={nowDate}
                  />
                );
              }
            })}
        </div>
        <hr className="my-3" />
      </div>
      <div className="booking-instruction">
        <p>【線上訂位說明】</p>
        <ol>
          <li>
            網路預約訂位以八人以內為限，訂位隔日起 ~
            一個月內；八人以上訂位或包場需求，僅接受電話預約。
          </li>
          <li>
            用餐當日訂位保留時間為10分鐘，請準時入席，逾時將取消訂位。座位將依餐廳當日訂位排定且無法指定座位，亦不接受現場臨時增加人數；若要變更人數，請於用餐前一日21:30前與餐廳聯繫，若需增加人數，視現場訂位狀況決定，敬請見諒。
            <br />
            <br />
            ★午餐時段11:00-14:30(最後點餐時間14:00)、晚餐時段17:30~21:30(最後點餐時間
            20:30)，各餐期結束後會進行環境的清潔，還請配合離場。
            <br />
            ★若需取消或更改訂位，請提前告知。
            <br />
            <br />
            ★如逾時取消訂位欲候補座位，再視現場訂位狀況而定。
            <br />
            <br />
            ★網路訂位是否成功，可至「訂位紀錄」進行查詢。
            <br />
            <br />
            ★網路訂位成功者，如未到場且未於線上或電話通知取消訂位，視同「訂位未到且未提前通知取消」，「訂位未到且未提前通知取消」次數達到三次，系統將取消您的網路訂位資格，造成不便敬請見諒。
            【為提供最好的用餐經驗與品質，請詳閱上述訂位說明，感謝您的配合並期待您的光臨！】
          </li>
        </ol>
      </div>
      <div className="d-flex justify-content-center">
        {/* <Link to="/booking/booking_information"> */}
        <button
          className="next_page my-4"
          onClick={() => {
            if (auth) {
              if (storeInput === "") {
                Swal.fire({
                  icon: "warning",
                  title: "請選擇分店",
                });
              } else if (bookingTimeInput === "") {
                Swal.fire({
                  icon: "warning",
                  title: "請選擇訂位時段",
                });
              } else {
                history.push("/booking/booking_information");
              }
            } else {
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
          下一步
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Booking;
