(function(){
    /*
    * 用於記錄日期，顯示的時候，根據dateObj中的日期的年月顯示
    */
    var dateObj = (function(){
    var _date = new Date();    // 預設為當前系統時間
    return {
    getDate : function(){
    return _date;
    },
    setDate : function(date) {
    _date = date;
    }
    };
    })();
    // 設定calendar div中的html部分
    renderHtml();
    // 表格中顯示日期
    showCalendarData();
    // 繫結事件
    bindEvent();
    /**
    * 渲染html結構
    */
    function renderHtml() {
    var calendar = document.getElementById("calendar");
    var titleBox = document.createElement("div");  // 標題盒子 設定上一月 下一月 標題
    var bodyBox = document.createElement("div");  // 表格區 顯示資料
    // 設定標題盒子中的html
    titleBox.className = 'calendar-title-box';
    titleBox.innerHTML = "<span class='prev-month' id='prevMonth'></span>"  
    "<span class='calendar-title' id='calendarTitle'></span>"  
    "<span id='nextMonth' class='next-month'></span>";
    calendar.appendChild(titleBox);    // 新增到calendar div中
    // 設定表格區的html結構
    bodyBox.className = 'calendar-body-box';
    var _headHtml = "<tr>"   
    "<th>日</th>"  
    "<th>一</th>"  
    "<th>二</th>"  
    "<th>三</th>"  
    "<th>四</th>"  
    "<th>五</th>"  
    "<th>六</th>"  
    "</tr>";
    var _bodyHtml = "";
    // 一個月最多31天，所以一個月最多佔6行表格
    for(var i = 0; i < 6; i  ) {  
    _bodyHtml  = "<tr>"  
    "<td></td>"  
    "<td></td>"  
    "<td></td>"  
    "<td></td>"  
    "<td></td>"  
    "<td></td>"  
    "<td></td>"  
    "</tr>";
    }
    bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>"  
    _headHtml   _bodyHtml  
    "</table>";
    // 新增到calendar div中
    calendar.appendChild(bodyBox);
    }
    /**
    * 表格中顯示資料，並設定類名
    */
    function showCalendarData() {
    var _year = dateObj.getDate().getFullYear();
    var _month = dateObj.getDate().getMonth()   1;
    var _dateStr = getDateStr(dateObj.getDate());
    // 設定頂部標題欄中的 年、月資訊
    var calendarTitle = document.getElementById("calendarTitle");
    var titleStr = _dateStr.substr(0, 4)   "年"   _dateStr.substr(4,2)   "月";
    calendarTitle.innerText = titleStr;
    // 設定表格中的日期資料
    var _table = document.getElementById("calendarTable");
    var _tds = _table.getElementsByTagName("td");
    var _firstDay = new Date(_year, _month - 1, 1);  // 當前月第一天
    for(var i = 0; i < _tds.length; i  ) {
    var _thisDay = new Date(_year, _month - 1, i   1 - _firstDay.getDay());
    var _thisDayStr = getDateStr(_thisDay);
    _tds[i].innerText = _thisDay.getDate();
    //_tds[i].data = _thisDayStr;
    _tds[i].setAttribute('data', _thisDayStr);
    if(_thisDayStr == getDateStr(new Date())) {    // 當前天
    _tds[i].className = 'currentDay';
    }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
    _tds[i].className = 'currentMonth';  // 當前月
    }else {    // 其他月
    _tds[i].className = 'otherMonth';
    }
    }
    }
    /**
    * 繫結上個月下個月事件
    */
    function bindEvent() {
    var prevMonth = document.getElementById("prevMonth");
    var nextMonth = document.getElementById("nextMonth");
    addEvent(prevMonth, 'click', toPrevMonth);
    addEvent(nextMonth, 'click', toNextMonth);
    }
    /**
    * 繫結事件
    */
    function addEvent(dom, eType, func) {
    if(dom.addEventListener) {  // DOM 2.0
    dom.addEventListener(eType, function(e){
    func(e);
    });
    } else if(dom.attachEvent){  // IE5 
    dom.attachEvent('on'   eType, function(e){
    func(e);
    });
    } else {  // DOM 0
    dom['on'   eType] = function(e) {
    func(e);
    }
    }
    }
    /**
    * 點選上個月圖示觸發
    */
    function toPrevMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    showCalendarData();
    }
    /**
    * 點選下個月圖示觸發
    */
    function toNextMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth()   1, 1));
    showCalendarData();
    }
    /**
    * 日期轉化為字串， 4位年 2位月 2位日
    */
    function getDateStr(date) {
    var _year = date.getFullYear();
    var _month = date.getMonth()   1;    // 月從0開始計數
    var _d = date.getDate();
    _month = (_month > 9) ? (""   _month) : ("0"   _month);
    _d = (_d > 9) ? (""   _d) : ("0"   _d);
    return _year   _month   _d;
    }
    })();