import React, { useEffect, useState } from "react";

const Pagination = ({ setStart, setEnd, properties }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    setStart(0);
    setEnd(10);
  }, [properties]);

  const propertiesPerPage = 10;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(properties.length / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }

  const updateDisplayedProperties = (page) => {
    const indexOfLastProperty = page * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    setStart(indexOfFirstProperty);
    setEnd(indexOfLastProperty);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    updateDisplayedProperties(pageNumber);
  };

  return (
    <div>
      <ul className="page_navigation">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            tabIndex="-1"
            aria-disabled={currentPage === 1 ? true : false}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span className="flaticon-left-arrow"></span>
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => handlePageChange(number)}
            >
              {number}
              {currentPage === number && (
                <span className="sr-only">(current)</span>
              )}
            </a>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span className="flaticon-right-arrow"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
