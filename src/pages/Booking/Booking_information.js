import React, { useState } from "react";

const Booking_information = () => {


    const [word,setWord] = useState("123434")
    
    function calc_word_length(){

        
    }


    console.log(word.length)



  return (
    <div className="container">
      <div className="row">
        <h3>確認訂位與填寫聯絡資訊</h3>
      </div>


      <div id="booking_section" className="row">
        
        {/* 確認訂位 */}
        <section className="col-4">
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
        </section>

        {/* 聯絡資訊 */}
        <div className="col-8 booking_information">

            <label htmlFor="">訂位人姓名</label>
            <div className="d-flex">
            <input type="text" />
            <input name="sex" id="man" type="radio" />
            <label htmlFor="man">先生</label>
            <input name="sex" id="female" type="radio" />
            <label htmlFor="female">小姐</label>
            <input name="sex" id="other" type="radio" />
            <label htmlFor="other">其他</label>
            </div>

            <label htmlFor="">訂位人手機號碼</label>
            <div>
            <input type="phone" />
            </div>

            <label htmlFor="">訂位人 Email</label>
            <div>
            <input type="email" />
            </div>
            
            <label htmlFor="">備註</label>
            <div>
            <textarea name="" id="" cols="30" rows="10" onChange={calc_word_length}></textarea>
            <p>/400</p>
            <span id="font_length"></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Booking_information;
