import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, getTime } from "date-fns";

const MyDatePickerTime = ({ selectedDate, setSelectedDate,disable ,isTime}) => {
  const [currentDate, setCurrentDate] = useState(
    selectedDate 
  );

  const formatDate = (date) => {
    const isoFormat = date.toISOString(); // Store in "2024-02-06T18:30:00.000Z" format
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
    setSelectedDate(isoFormat);
  };

  return (
    <DatePicker
    readOnly={disable}
      className="form-control"
      selected={currentDate ? new Date(currentDate) : null}
      onChange={(date) => formatDate(date)}
      showYearDropdown
      dateFormat="MMMM d, yyyy h:mm aa"
      popperPlacement="bottom-end"
      minTime={ getTime()}
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

export default MyDatePickerTime;
