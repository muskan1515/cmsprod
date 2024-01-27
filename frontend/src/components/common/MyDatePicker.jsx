import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      className="form-control"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      showYearDropdown
      dateFormat="dd/MM/yyyy"
      // placeholderText="MM/DD/YYYY"
      popperPlacement="bottom-end"
      popperModifiers={{
        flip: {
          behavior: ["bottom"], // don't allow it to flip to be above
        },
        preventOverflow: {
          enabled: false, // tell it not to try to stay within the view (even if it means disappearing off-screen)
        },
        hide: {
          enabled: false, // turn off since needs preventOverflow to be enabled
        },
      }}
    />
  );
};

export default MyDatePicker;
