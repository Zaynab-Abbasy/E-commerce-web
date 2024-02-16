
import React from "react";

function Card({ items, handleColorChange }) {
  return (
    <div className="row justify-content-center" style={{ backgroundColor: "white" }}>
      {items.map((item) => (
        <div key={item.id} className="col-md-4 col-sm-6 card my-3 border-0">
          <div className="card-img-top text-center">
            <img src={item.linkImg[item.selectedColor]} alt={item.name} className="w-75" />
            <div className="card-body">
              <div className="card-title fw-bold fs-4 text-center">
                {item.name} <br /> {item.price}
              </div>
              <div className="card-text text-center">{item.description}</div>
            </div>
          </div>
          <div className="col-md-12 text-center mt-3">
            {item.colors.map((color) => (
              <button
                key={color}
                className={`btn ${item.selectedColor === color ? "btn-primary" : "btn-outline-primary"
                  } mx-1`}
                style={{
                  backgroundColor: color,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                }}
                onClick={() => handleColorChange(item.id, color)}
              ></button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
