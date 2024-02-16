import React, { useState, useEffect } from "react";
import Data from "../Data";
import Card from "./Card";
import Buttons from "./Buttons";

const Dining = () => {
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

  // Function to handle color change
  const handleColorChange = (itemId, color) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              selectedColor: color,
            }
          : item
      )
    );
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <h1 className="text-center" style={{ fontFamily: "Lora ,serif"  }}><strong>Dining </strong></h1>
      <Buttons
        menuItems={menuItems}
        filterItems={filterItems}
        sortProductsByPrice={sortProductsByPrice}
      />
      <Card items={currentItems} handleColorChange={handleColorChange}  style={{ backgroundColor: "white" }}/>
      <div className="row" style={{ backgroundColor: "white" }}>
        <ul className="pagination justify-content-center" style={{ backgroundColor: "white" }}>
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, index) => (
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

export default Dining;
