import React, { useEffect, useState } from "react";

function PaginationWork({ data, dataLimit, getPaginatedData }) {
  const pageLimit = Math.round(data.length / dataLimit);
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (currentPage < pageLimit) setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const responseData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return getPaginatedData(data.slice(startIndex, endIndex));
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => responseData(), [currentPage]);
  console.log(pageLimit, currentPage, "pageLimit");
  return (
    <div className="pagination-block">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <span data-tip="First page">&laquo;</span>{" "}
              <button
                onClick={goToPreviousPage}
                className={`prev button-as-link ${
                  currentPage === 1 ? "disabled" : ""
                }`}
              >
                Previous
              </button>
            </a>
          </li>
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`page-item ${currentPage === item ? "active" : null}`}
            >
              <a className="page-link" href="#">
                <span>{item}</span>
              </a>
            </button>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">
              <button
                onClick={goToNextPage}
                className={`next button-as-link ${
                  currentPage === pages ? "disabled" : ""
                }`}
              >
                Next
              </button>{" "}
              <span data-tip="Last page">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationWork;
