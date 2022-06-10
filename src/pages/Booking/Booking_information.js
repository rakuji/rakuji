import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Booking_information = () => {
  useEffect(() => {
    fetchStoreData()
    fetchMemberData()
  }, [])

  //假會員ID
  const loginMemberId =localStorage.getItem("memberId")
  console.log(typeof loginMemberId);

  const { storeInput, peopleAdultInput, peopleKidInput, startDateformat, mealTimeInput, bookingTimeInput } = JSON.parse(localStorage.getItem("booking_time_info"))

  // 從資料庫取得分店資訊
  const [storeData, setStoreData] = useState([])

  const fetchStoreData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking/store`)
    const results = await response.json()
    const store = results.find((v) => v.name == storeInput)
    setStoreData(store)
  }

  // 從資料庫取得會員資訊
  const [memberData, setMemberData] = useState([])

  const fetchMemberData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking/member`)
    const results = await response.json()
    const member = results.find((v) => v.id == loginMemberId)
    setMemberData(member)
  }
  // console.log(memberData);

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  let booking_info = { name, phone, email, status }
  localStorage.setItem("booking_info", JSON.stringify(booking_info))

  //送資料到資料庫
  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginMemberId,
        startDateformat,
        storeInput,
        peopleAdultInput,
        peopleKidInput,
        mealTimeInput,
        bookingTimeInput,
        name,
        phone,
        email,
        status
      }),
    })

    // const results = await response.json()

    // .then(res => console.log(res))
    // .then(res => res.json())

    // localStorage.setItem("bookingId", results)

    // .then(data => console.log(data))
    // .then(data => localStorage.setItem("bookingId", data))
  }





  return (
    <div className="container mb-5">
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
              <p className="">{peopleAdultInput}位大人，{peopleKidInput}位小孩</p>
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

          <label htmlFor="">訂位人姓名</label>
          <div>
            <div className="row mb-4">
              <div className="col-12">
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
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

          <label htmlFor="">訂位人手機號碼</label>
          <div className="mb-4">
            <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <label htmlFor="">訂位人 Email</label>
          <div className="mb-4">
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <label htmlFor="status">備註</label>
          <div>
            <textarea name="status" id="status" cols="30" rows="3" className="form-control" onChange={(e) => setStatus(e.target.value)}></textarea>

            <div className="word_length d-flex justify-content-end">
              <p>(<span id="font_length"></span>/400)</p>
            </div>

          </div>

          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => {
              setName(memberData.name)
              setPhone(memberData.phone)
              setEmail(memberData.email)
            }} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              同會員資料
            </label>
          </div>


          <div className="d-flex flex-column">
            {/* <Link to="/booking/booking_information/booking_finish"> */}
            <button className="next_page my-3" onClick={() => {
              fetchData()
            }}>確認訂位</button>
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
