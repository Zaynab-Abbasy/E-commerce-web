import React from 'react';
import Data from '../Data';

const Buttons = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className='dflex justify-content-center mb-2'>
      <div className='dropdown' style={{ marginLeft: '50px' }}>
        <button
          className='btn text-white p-1 px-2 btn fw-bold dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          style={{ backgroundColor: 'white', color: 'black', border: '1px solid #dee2e6' }}
        >
          <span style={{ color: 'black' }}>Filter</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-caret-down-fill'
            viewBox='0 0 16 16'
            style={{ color: 'black' }}
          >
            <path d='M8 10.5l5-6H3l5 6z' />
          </svg>
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <li>
            <button className='dropdown-item' onClick={() => filterItems('All')}>
              All
            </button>
          </li>
          {menuItems.map((val, index) => (
            <li key={index}>
              <button className='dropdown-item' onClick={() => filterItems(val)}>
                {val}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Buttons;
