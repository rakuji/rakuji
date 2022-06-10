import { useState } from 'react'
import _ from 'lodash'
import "./css/my-login.css"
import "./css/reset.css"
// import "./css/client.css"


const myYear = 2022
const myMonth = 2

function App() {
  // 呈現yearAndMonth
  const now = new Date()

  // 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
  const nowY = myYear ? myYear : now.getFullYear()

  // nowM =1-12
  const nowM = myMonth ? myMonth : now.getMonth() + 1 //注意回傳為 0~11

  // 呈現標題
  const weekDayList = ['日', '一', '二', '三', '四', '五', '六']

  // 本月有幾天
  // (上個月的最後一天是幾號)
  const days = new Date(nowY, nowM, 0).getDate()

  // 這個月的第一天是星期幾(0-6) (月份為0-11)
  const firstDay = new Date(nowY, nowM - 1, 1).getDay()

  // 本月所有日期的陣列資料
  const daysDataArray = []

  // 補前面的空白資料
  for (let i = 0; i < firstDay; i++) {
    daysDataArray.push('')
  }

  // 加入本月所有的日期資料
  for (let i = 0; i < days; i++) {
    daysDataArray.push(i + 1)
  }

  // 準備要呈現在網頁上
  const daysDisplayArray = _.chunk(daysDataArray, 7)

  return (
    <>
      <div className="col-12 col-md-4">
        <div className="form-group">
          <div className='rela'>
          
            <div className="card">
              <div className="m-3 d-flex justify-content-center">
                <figure className="avatar mx-auto rounded-circle overflow-hidden">
                  <img className="cover-fit" src="https://picsum.photos/200" alt="" />
                </figure>
              </div>
              <div className="card-body">
                <div className="justify-content-center text-sm-center">
                  <p className="card-text">Coupons: 2張</p>
                </div>
              </div>

              <ul className="list-group list-group-flush">

                <li className="list-group-item m-3">
                  <div className="mb-2">
                    <span>日期</span>
                  </div>
                  <div className="">
                    <h2 id="yearAndMonth" className="text-center fs-3">{nowY + '/' + nowM}</h2>
                    <div className="table-responsive-md">
                      <table className="table table-wrapper">
                        <thead id="title">
                          <tr>
                            {weekDayList.map(function (v, i) {
                              return <th key={i}>{v}</th>
                            })}
                          </tr>
                        </thead>
                        <tbody id="data" className="table-bordered">
                          {daysDisplayArray.map((v, i) => {
                            return (
                              <tr key={i}>
                                {v.map((item, idx) => (
                                  <td key={idx}>{item}</td>
                                ))}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    <br />
                  </div>
                </li>

                <li className="list-group-item m-3">
                  <span className="text-control">您的餐點喜好</span>
                  <div className="ml-4 pt-2">
                    <img src={require('../../images/account/A.png')} alt="bg" />
                    黃金豬排丼飯<br />
                    <img src={require('../../images/account/B.png')} alt="" />
                    可樂餅<br />
                    <img src={require('../../images/account/C.png')} alt="" />
                    烤鮭魚蘿蔔味增湯<br />
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
