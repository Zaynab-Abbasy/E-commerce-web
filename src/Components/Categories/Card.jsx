import React from 'react';
function Card({ items }) {
  console.log('Item prop:', items);

  // Check if items is an array
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="container " style={{backgroundColor:'white'}}>
      <div className="row justify-content-center" style={{backgroundColor:'white'}}>
        {items.map((val) => (
          <div key={val.id} className="col-md-4 col-sm-6 card my-3 border-0">
            <div className="card-img-top text-center">
              <img src={val.image} alt="" className="w-75" />
            </div>
            <div className="card-body" style={{backgroundColor:'white'}}>
              <div className="card-title fw-bold fs-4">
                {val.name} <br/> {val.price}
              </div>
              <div className="card-text">{val.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
