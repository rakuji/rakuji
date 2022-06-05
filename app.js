
           
            // 每個月的名稱

            const month_names = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', ' 十月', '十一月', '十二月']


            // 設定閏月的規則 https://xiwan.io/archive/most-efficient-leap-year-algorithm.html
            
            isLeapYear = (year) => {
                return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
            }
            
            // 抓閏月
            
            getFebDays = (year) => {
                return isLeapYear(year) ? 29 : 28
            }
            
            // 抓calendar css
            let calendar = document.querySelector('.calendar')
            
            // 產生年月
            
            generateCalendar = (month, year) => {
            
                let calendar_days = calendar.querySelector('.calendar-days')
                let calendar_header_year = calendar.querySelector('#year')
            
                let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            
                calendar_days.innerHTML = ''
            
            
                // 抓現在的日期
            
                let currDate = new Date()
                if (!month) month = currDate.getMonth()
                if (!year) year = currDate.getFullYear()
            
                let curr_month = `${month_names[month]}`
                month_picker.innerHTML = curr_month
                calendar_header_year.innerHTML = year
            
            
                let first_day = new Date(year, month, 1)
            
                for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
                    let day = document.createElement('div')
                    if (i >= first_day.getDay()) {
                        day.classList.add('calendar-day-hover')
                        day.innerHTML = i - first_day.getDay() + 1
                        day.innerHTML += `<span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>`
                        if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                            day.classList.add('curr-date')
                        }
                    }
                    calendar_days.appendChild(day)
                }
            }
            
            
            
            
            // 秀出每個月份
            
            let month_list = calendar.querySelector('.month-list')
            
            month_names.forEach((e, index) => {
            
                let month = document.createElement('div')
                month.innerHTML = `<div data-month="${index}">${e}</div>`
                month.querySelector('div').onclick = () => {
                    month_list.classList.remove('show')
                    curr_month.value = index
                    generateCalendar(index, curr_year.value)
                }
                month_list.appendChild(month)
            })
            
            
            // 按下月份的按鈕時候會跳出各個月份
            let month_picker = calendar.querySelector('#month-picker')
            
            month_picker.onclick = () => {
                month_list.classList.add('show')
            }
            
            
            
            let currDate = new Date()
            
            let curr_month = { value: currDate.getMonth() }
            let curr_year = { value: currDate.getFullYear() }
            
            generateCalendar(curr_month.value, curr_year.value)
            
            document.querySelector('#prev-year').onclick = () => {
                --curr_year.value
                generateCalendar(curr_month.value, curr_year.value)
            }
            
            document.querySelector('#next-year').onclick = () => {
                ++curr_year.value
                generateCalendar(curr_month.value, curr_year.value)
            }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // 產生年月
            
            
            // 抓現在的日期
            
            
            // 秀出每個月份
            
            
            
            // 按下月份的時候會跳出各個月份
                     
                  