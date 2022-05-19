import React from 'react'
import { Link } from 'react-router-dom'

const Booking_finish = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide booking_finish_banner" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("./images/carousel/images.jpg")} class="d-block w-100" alt="..." />

          </div>
          <div class="carousel-item">
            <img src={require("./images/carousel/images_1.jpg")} class="d-block w-100" alt="..." />

          </div>
          <div class="carousel-item">
            <img src={require("./images/carousel/images_2.jpg")} class="d-block w-100" alt="..." />

          </div>
        </div>

      </div>

      <div className='booking_finish container mt-5'>

        <div className="row">

          <div className='d-flex justify-content-center align-items-center'>
            <i className="fa-solid fa-check me-2 booking_check"></i>
            <h1 className='mb-0'>訂位成功</h1>
          </div>

          <div className='d-flex justify-content-center'>

            {/* 訂位資訊置中 */}
            <div className='booking_store_information row'>
              <hr className='my-3' />
              <div className="col-6 booking_information">
                <div>
                  <h3>訂位資訊</h3>
                  <p>訂位編號:101</p>
                  <p>訂位分店:高雄左營店</p>
                  <p>用餐人數:3位大人，3位小孩</p>
                  <p>用餐日期:2022年6月17日</p>
                  <p>用餐日期:12:00</p>
                  <p>訂位人姓名:王曉明</p>
                  <p>訂位人電話:0912345678</p>
                  <p>訂位人Email:abc123@gmail.com</p>
                </div>
              </div>
              <div className="col-6 store_information">
                <div>
                  <h3>店家資訊</h3>
                  <div className="d-flex align-items-center my-3">
                    <div className='me-3 col-1'>
                      <i class="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className='col-11'>
                      <p className='mb-0'>高雄左營店</p>
                    </div>
                  </div>


                  <div className="d-flex align-items-center my-3">
                    <div className='me-3 col-1'>
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className='col-11'>
                      <p className='mb-0'>高雄市左營區文守路196號</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-3">
                    <div className='me-3 col-1'>
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className='col-11'>
                      <p className='mb-0'>07-963-5566</p>
                    </div>
                  </div>

                  <div className="d-flex my-3">
                    <div className='me-3 col-1'>
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className='mb-0'>
                      <ul>
                        <li>午間 - 11:00 ~ 14:30 <br /> (最後點餐時間 14:00)</li>
                        <li>晚間 - 17:30 ~ 21:30 <br /> (最後點餐時間 20:30)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/products">
              <button className="next_page my-4 mx-3">瀏覽餐點</button>
            </Link>

            <Link to="/">
              <button className="next_page my-4 mx-3">回到首頁</button>
            </Link>
          </div>


        </div>
      </div>

    </>
  )
}

export default Booking_finish