import React, { useState } from 'react';

import Page1 from "./AllPages/Page1";
import Page2 from "./AllPages/Page2";
import Page3 from "./AllPages/Page3";
import Page4 from "./AllPages/Page4";
const LinksComponent = ({allInfo}) => {
  console.log(allInfo)
  const [currentPage, setCurrentPage] = useState(1);

  const handleButtonClick = (page) => {
    // Handle button click, you can navigate or perform other actions
    console.log(`Navigating to Page ${page}`);
    setCurrentPage(page);
  };

  // Render content based on the selected page
  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return <Page1 allInfo={allInfo}/>;
      case 2:
        return <Page2 allInfo={allInfo}/>;
      case 3:
        return <Page3 allInfo={allInfo}/>;
      case 4:
        return <Page4 allInfo={allInfo}/>;
      default:
        return null;
    }
  };

  return (
    <div style={{ color: "black" }}>
      <button onClick={() => handleButtonClick(1)}>Page 1</button><br />
      <button onClick={() => handleButtonClick(2)}>Page 2</button><br />
      <button onClick={() => handleButtonClick(3)}>Page 3</button><br />
      <button onClick={() => handleButtonClick(4)}>Page 4</button><br />

      {/* Render content based on the selected page */}
      {renderContent()}
    </div>
  );
};

export default LinksComponent;


