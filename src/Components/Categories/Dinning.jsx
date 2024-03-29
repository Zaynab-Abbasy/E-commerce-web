import React, { useState, useEffect } from "react";
import Data from "../Data";
import Card from "./Card";
import Buttons from "./Buttons";


const Dinning = ({handleClick}) => {
  const [items, setItems] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const menuItems = [...new Set(Data.map((val) => val.category))];

  // useEffect to set initial items state
  useEffect(() => {
    // No need to sort items initially
    setItems(Data);
  }, []);

  // Sort Products by Price
  const sortProductsByPrice = (sortBy) => {
    const sortedItems = [...items];
    if (sortBy === "LowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "HighToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    setItems(sortedItems);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to filter items based on category and pagination
  const filterItems = (cat) => {
    const newItems =
      cat === "All" ? Data : Data.filter((newval) => newval.category === cat);
    setItems(newItems);
    setCurrentPage(1); // Reset current page to 1 when applying filters
  };

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <div className="row" style={{ backgroundColor: "white" }}>
        <h1
          className="text-center col-12 fw-bold mt-3 mb-5"
          style={{ backgroundColor: "white", fontFamily: "Lora, Serif" }}
        >
          Dinning
        </h1>
        <div className="col-md-6">
          <Buttons
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
            sortProductsByPrice={sortProductsByPrice}
          />
        </div>
      </div>
      <Card items={currentItems} handleClick={handleClick} />
      <div className="row" style={{ backgroundColor: "white" }}>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              style={{ marginRight: "8px" }}
            >
              <button
                onClick={() => paginate(index + 1)}
                className="page-link"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid #dee2e6",
                }}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dinning;