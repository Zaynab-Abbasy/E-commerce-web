import React from "react";
import { Link } from "react-router-dom";

function Card({ items, handleClick }) {
  // Check if items is an array
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "white" }}
      >
        {items.map((val) => (
          <div key={val.id} className="col-md-4 col-sm-6 card my-3 border-0">
            <Link style={{textDecoration:"none", color:"black"}} to={`/product-details/${val.id}`}>
              <div className="card-img-top text-center">
                <img src={val.linkImg[val.selectedColor]} alt="" className="w-75" />

                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <div className="card-title fw-bold fs-4 text-center">
                    {val.name} <br /> {val.price}
                  </div>
                  <div className="card-text text-center">{val.description}</div>
                 
                </div>
              </div>
            </Link>
            <div className="text-center">
                    <button onClick={() => handleClick(val)} className="btn btn-primary mt-3">Add to Cart</button>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
