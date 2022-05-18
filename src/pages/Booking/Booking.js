import React, { useEffect,useState } from 'react'
import $ from 'jquery'
import "./style.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Booking = () => {

  // 中午時段用餐時間
  const booking_time = ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00"]

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {

    // $('#mystuff').click(function () {
    //   let opt = $(this).val();
    //   if (opt == "opt1") {
    //     $('#msgbox').html(`

    //     `);
    //   } else if (opt == "opt2") {
    //     $('#msgbox').html(`<h2>My Car</h2>I drive an Audi A200`);
    //   }
    // });

  }, [])

  return (
    // <div style={{ minHeight: " calc(100vh - 86px - 308px)" }}>線上訂位</div>
    <div className='container'>
      <div className='row'>
        <h3>線上訂位</h3>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="">分店</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>請選擇分店</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <label htmlFor="">用餐人數</label>
              <select className="form-select" aria-label="Default select example">
                <option>請選擇用餐人數</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-6">
              <label htmlFor=""></label>
              <select className="form-select" aria-label="Default select example">
                <option>請選擇用餐人數</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select></div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6" id='booking_date'>
              <label htmlFor="">用餐日期</label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              {/* <input className='form-select' type="date" name="" id="booking_date" /> */}
            </div>
            <div className="col-6">
              <label htmlFor="">時段</label>
              <select id='mystuff' className="form-select" aria-label="Default select example">
                <option>請選擇時段</option>
                <option value="opt1">中午</option>
                <option value="opt2">晚上</option>
              </select></div>
          </div>
        </div>
        <hr className='my-3' />
        {/* <div id="msgbox"></div> */}
        <div className='booking-time'>
          {booking_time.map((d) => {
            return <button className='me-3'>{d}</button>;
          })}
        </div>
        <hr />
      </div>
      <div className='booking-instruction'>
        <p>【線上訂位說明】</p>
        <ol>
          <li>網路預約訂位以八人以內為限，訂位隔日起 ~ 一個月內；八人以上訂位或包場需求，僅接受電話預約。</li>
          <li>用餐當日訂位保留時間為10分鐘，請準時入席，逾時將取消訂位。座位將依餐廳當日訂位排定且無法指定座位，亦不接受現場臨時增加人數；若要變更人數，請於用餐前一日21:30前與餐廳聯繫，若需增加人數，視現場訂位狀況決定，敬請見諒。
            <br />
            <br />
            ★午餐時段11:00-14:30(最後點餐時間14:00)、晚餐時段17:30~21:30(最後點餐時間 20:30)，各餐期結束後會進行環境的清潔，還請配合離場。
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
            【為提供最好的用餐經驗與品質，請詳閱上述訂位說明，感謝您的配合並期待您的光臨！】</li>
        </ol>

      </div>
    </div>
  )
}

export default Booking