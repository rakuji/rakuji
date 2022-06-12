import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Booking_finish = () => {
  const bookingId = localStorage.getItem("bookingId");
  console.log(bookingId);

  const [bookingData, setBookingData] = useState({});

  const {
    member_id,
    booking_date,
    store,
    people_adult,
    people_kid,
    meal_time,
    booking_time,
    name,
    phone,
    email,
    statue,
  } = bookingData;

  const fetchBookingData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`);
    const results = await response.json();
    const booking = await results.find((v) => v.id == bookingId);
    // console.log(booking);
    setBookingData(booking);
  };

  console.log(bookingData);

  useEffect(() => {
    fetchBookingData();
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide booking_finish_banner"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("./images/carousel/images.jpg")}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./images/carousel/images_1.jpg")}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./images/carousel/images_2.jpg")}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="booking_finish container mt-5">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-check me-2 booking_check"></i>
            <h1 className="mb-0">訂位成功</h1>
          </div>

          <div className="d-flex justify-content-center">
            {/* 訂位資訊置中 */}
            <div className="booking_store_information row">
              <hr className="my-3" />
              <div className="col-6 booking_information">
                <div>
                  <h3>訂位資訊</h3>
                  <p>訂位編號:{bookingId}</p>

                  <p>訂位分店:{store}</p>
                  <p>用餐人數:{people_adult}位大人，{people_kid}位小孩</p>
                  <p>用餐日期:{booking_date}</p>
                  <p>用餐日期:{booking_time}</p>
                  <p>訂位人姓名:{name}</p>
                  <p>訂位人電話:{phone}</p>
                  <p>訂位人Email:{email}</p>
                  <p>備註:{statue}</p>

                  {/* <p>訂位分店:{bookingData.store}</p>
                  <p>
                    用餐人數:{bookingData.people_adult}位大人，
                    {bookingData?.people_kid}位小孩
                  </p>
                  <p>用餐日期:{bookingData.booking_date}</p>
                  <p>用餐日期:{bookingData.booking_time}</p>
                  <p>訂位人姓名:{bookingData.name}</p>
                  <p>訂位人電話:{bookingData.phone}</p>
                  <p>訂位人Email:{bookingData.email}</p>
                  <p>備註:{bookingData.statue}</p> */}

                  {/* <p>訂位分店:{bookingData?.store}</p>
                  <p>
                    用餐人數:{bookingData?.people_adult}位大人，{bookingData?.people_kid}位小孩
                  </p>
                  <p>用餐日期:{bookingData?.booking_date}</p>
                  <p>用餐日期:{bookingData?.booking_time}</p>
                  <p>訂位人姓名:{bookingData?.name}</p>
                  <p>訂位人電話:{bookingData?.phone}</p>
                  <p>訂位人Email:{bookingData?.email}</p>
                  <p>備註:{bookingData?.statue}</p> */}
                </div>
              </div>
              <div className="col-6 store_information">
                <div>
                  <h3>店家資訊</h3>
                  <div className="d-flex align-items-center my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className="col-11">
                      <p className="mb-0">高雄左營店</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="col-11">
                      <p className="mb-0">高雄市左營區文守路196號</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="col-11">
                      <p className="mb-0">07-963-5566</p>
                    </div>
                  </div>

                  <div className="d-flex my-3">
                    <div className="me-3 col-1">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="mb-0">
                      <ul>
                        <li>
                          午間 - 11:00 ~ 14:30 <br /> (最後點餐時間 14:00)
                        </li>
                        <li>
                          晚間 - 17:30 ~ 21:30 <br /> (最後點餐時間 20:30)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/products">
              <button className="products_page my-4 mx-3">瀏覽餐點</button>
            </Link>

            <Link to="/">
              <button className="home_page my-4 mx-3">回到首頁</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking_finish;
