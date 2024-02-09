import React from 'react';
import Data from '../Data';

const Buttons = ({ menuItems,filterItems,setItems }) => {
  return (
    <div className='dflex justify-content-center mb-2'>
      {menuItems.map(val => (
        <button className='button text-white p-1 px-2 mx-5 btn fw-bold' key={val}
        style={{ backgroundColor: 'rgb(128,0,0)', color: 'white' }} 
        onClick={()=> filterItems(val)}>
          {val}

        </button>
      ))}
      <button className='btn text-white p-1 px-2 mx-5 btn fw-bold'
      style={{ backgroundColor: 'rgb(128,0,0)', color: 'white' }} 
      onClick={()=> setItems(Data)}>
        All
      </button>
    </div>
  );
};

export default Buttons;

