import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const isValidDate = (date) => date !== null && date !== undefined && !isNaN(date);

const NewDatePicker = ({ Date, setDate }) => {
    const currentDate = new Date();
  return (
    <DatePicker
      className="form-control"
      id="propertyTitle"
      selected={
        isValidDate(Date)
          ? new Date(Date)
          : null
      }
      onChange={(date) => setDate(date)}
    />
  );
};

export default NewDatePicker;
