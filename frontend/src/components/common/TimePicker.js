import React, { useState } from 'react';

const TimePicker = ({selectedTime,setSelectedTime}) => {

  const handleTimeChange = (event) => {
    const inputTime = event.target.value;
    const formattedTime = formatTime(inputTime);
    setSelectedTime(formattedTime);
  };

  // Function to format the time as needed
  const formatTime = (inputTime) => {
    // Perform any additional formatting if needed
    return inputTime;
  };

  return (
    <div>
      <input
        type="time"
        id="timePicker"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
  );
};

export default TimePicker;
