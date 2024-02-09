import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const MyDatePicker = ({ selectedDate, setSelectedDate,disable }) => {
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
