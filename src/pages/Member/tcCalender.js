import { useState } from 'react'
import _ from 'lodash'

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
      <h1>日曆</h1>
      <h2 id="yearAndMonth">{nowY + '/' + nowM}</h2>
      <table border="1">
        <thead id="title">
          <tr>
            {weekDayList.map(function (v, i) {
              return <th key={i}>{v}</th>
            })}
          </tr>
        </thead>
        <tbody id="data">
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
    </>
  )
}

export default App
