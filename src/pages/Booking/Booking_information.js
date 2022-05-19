import React, { useState } from "react";
import { Link } from "react-router-dom";

const Booking_information = () => {


  const [word, setWord] = useState("123434")

  function calc_word_length() {


  }


  console.log(word.length)



  return (
    <div className="container mb-5">
      <div className="row">
        <h3>確認訂位與填寫聯絡資訊</h3>
      </div>


      <div id="booking_section" className="row">

        {/* 確認訂位 */}
        <section className="col-4 booking_confirm">

          <div className="booking_confirm_card sticky-top">
            <img src={require("./images/er2.jpg")} alt="" />
            <div className="d-flex align-items-center my-3">
              <i className="fa-solid fa-location-dot mx-2"></i>
              <h3 className="">高雄左營店</h3>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-user mx-2"></i>
              <p className="">3位大人，3位小孩</p>
            </div>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-calendar-days mx-2"></i>
              <p className="">2022年6月17日</p>
            </div>

            <div className="d-flex align-items-center">
              <i className="fa-solid fa-clock mx-2"></i>
              <p className="">12:00</p>
            </div>
          </div>

        </section>

        {/* 聯絡資訊 */}
        <div className="col-8 booking_information">

          <label htmlFor="">訂位人姓名</label>
          <div>
            <div className="row mb-4">
              <div className="col-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-2 d-flex align-items-center">
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
              </div>


            </div>









          </div>

          <label htmlFor="">訂位人手機號碼</label>
          <div className="mb-4">
            <input type="tel" className="form-control" required />
          </div>

          <label htmlFor="">訂位人 Email</label>
          <div className="mb-4">
            <input type="email" className="form-control" />
          </div>

          <label htmlFor="">備註</label>
          <div>
            <textarea name="" id="" cols="30" rows="3" onChange={calc_word_length} className="form-control" ></textarea>
            <div className="word_length d-flex justify-content-end">
              <p>(<span id="font_length"></span>/400)</p>

            </div>

          </div>

          <div class="form-check mb-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              同會員資料
            </label>
          </div>


          <div className="d-flex flex-column">
            <Link to="/booking/booking_information/booking_finish">
              <button className="next_page my-3">確認訂位</button>
            </Link>
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
