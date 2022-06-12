import React, { useState, useEffect } from "react";
import moment from "moment";
import Swal from "sweetalert2";

const BookingTimeButton = ({
  time,
  storeInput,
  startDateformat,
  mealTimeInput,
  bookingTimeInput,
  setBookingTimeInput,
  peopleAdultInput,
  peopleKidInput,
  nowtime,
  nowDate,
}) => {
  
  // 從資料庫取得訂位資訊
  const [bookingData, setBookingData] = useState([]);

  const fetchBookingData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`);
    const results = await response.json();

    setBookingData(results);
  };

  // console.log(bookingData)

  useEffect(() => {
    fetchBookingData();
  }, []);
  // -------------------------------------------------------------------------

  const bookingTime = (time) => {
    const bookingDataFilter = bookingData
      .filter((v) => v.booking_date == startDateformat)
      .filter((v) => v.store == storeInput)
      .filter((v) => v.meal_time == mealTimeInput)
      .filter((v) => v.booking_time == time);

    //訂位時段總筆數
    // console.log(bookingDataFilter);

    let totalPeopleAddInput = 0;
    totalPeopleAddInput += parseInt(peopleAdultInput);
    totalPeopleAddInput += parseInt(peopleKidInput);

    bookingDataFilter.map((v) => {
      totalPeopleAddInput += v.people_adult;
      totalPeopleAddInput += v.people_kid;
    });

    //訂位時段總人數(含input)
    // console.log(totalPeopleAddInput);

    if (totalPeopleAddInput > 30) {
      return true;
    }

    // console.log(time)
  };
  // -------------------------------------------------------------------------
 
  const remainPeople = (time) => {
    const bookingDataFilter = bookingData
      .filter((v) => v.booking_date == startDateformat)
      .filter((v) => v.store == storeInput)
      .filter((v) => v.meal_time == mealTimeInput)
      .filter((v) => v.booking_time == time);

    //訂位時段總筆數
    // console.log(bookingDataFilter);

    //訂位時段總人數(不含input)
    let totalPeople = 0;
    bookingDataFilter.map((v) => {
      totalPeople += v.people_adult;
      totalPeople += v.people_kid;
    });

    // console.log(totalPeople);
    return 30-totalPeople
  };

  // -------------------------------------------------------------------------

  const totalPeopleAddInput = (time) => {
    const bookingDataFilter = bookingData
      .filter((v) => v.booking_date == startDateformat)
      .filter((v) => v.store == storeInput)
      .filter((v) => v.meal_time == mealTimeInput)
      .filter((v) => v.booking_time == time);

    //訂位時段總筆數
    // console.log(bookingDataFilter);

    //訂位時段總人數(不含input)
    let totalPeopleAddInput = 0;
    totalPeopleAddInput += parseInt(peopleAdultInput);
    totalPeopleAddInput += parseInt(peopleKidInput);

    bookingDataFilter.map((v) => {
      totalPeopleAddInput += v.people_adult;
      totalPeopleAddInput += v.people_kid;
    });


    // console.log(totalPeople);
    return 30-totalPeopleAddInput
  };

  
  // -------------------------------------------------------------------------
  console.log(bookingTimeInput)


  return (
    <div className="button_container">
      <input
        type="button"
        value={time}
        className={` mb-0
        ${bookingTimeInput == time ? "button_focus" : ""}
        ${nowtime >= time && startDateformat == nowDate ? "button_close" : ""}
        ${bookingTime(time) ? "button_close" : ""}
        `}
        onClick={() => {
          if (
            ((nowtime < time && startDateformat == nowDate) ||
            (startDateformat != nowDate)) && (totalPeopleAddInput(time) >= 0)
          ) {
            setBookingTimeInput(time);
          }else{
            Swal.fire({
              icon: "warning",
              title: "該時段無法訂位，請選擇其他時段",
            });
          }
        }}
      />
      <div className="mb-0">剩餘人數:{remainPeople(time)}</div>
    </div>
  );
};

export default BookingTimeButton;
