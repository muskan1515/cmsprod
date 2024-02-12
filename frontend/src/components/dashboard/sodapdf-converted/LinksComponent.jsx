import React from 'react';
const LinksComponent = () => {
  const handleButtonClick = (page) => {
    // Handle button click, you can navigate or perform other actions
    console.log(`Navigating to Page ${page}`);
  };
  return (
    <div>
        <button onClick={() => handleButtonClick(1)}>Page 1</button><br />
        <button onClick={() => handleButtonClick(2)}>Page 2</button><br />
        <button onClick={() => handleButtonClick(3)}>Page 3</button><br />
        <button onClick={() => handleButtonClick(4)}>Page 4</button><br />
    </div>
  );
};

export default LinksComponent;
