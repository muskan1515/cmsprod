import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const MyDatePicker = ({ selectedDate, setSelectedDate,disable }) => {
  const [currentDate, setCurrentDate] = useState(
    selectedDate 
  );
  console.log("selectedDate",selectedDate);

  const formatDate = (date) => {
    const formattedDate = date.toLocaleDateString("en-US");
    setCurrentDate(formattedDate);
    setSelectedDate(formattedDate);
   
  };
  return (
    <DatePicker
    readOnly={disable}
      className="form-control"
      selected={currentDate ? new Date(currentDate) : null}
      
      onChange={(date) => formatDate(date)}
      showYearDropdown
      dateFormat="MM/dd/yyyy"
      popperPlacement="bottom-end"
      popperModifiers={{
        flip: {
          behavior: ["bottom"],
        },
        preventOverflow: {
          enabled: false,
        },
        hide: {
          enabled: false,
        },
      }}
    />
  );
};

export default MyDatePicker;
