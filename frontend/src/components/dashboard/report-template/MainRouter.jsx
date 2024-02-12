import React, { useState } from 'react';

import Page1 from "./AllPages/Page1";
const LinksComponent = () => {
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
        return <Page1/>;
      case 2:
        return <div>This is Page 2 content.</div>;
      case 3:
        return <div>This is Page 3 content.</div>;
      case 4:
        return <div>This is Page 4 content.</div>;
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
