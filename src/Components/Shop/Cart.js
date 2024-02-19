import React from 'react'
import { useState,useEffect } from 'react'
import "./Cart.css";
const Cart = ({cart,setCart ,handleChange}) => {
  const[price,setPrice]=useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((val) => {
      ans += val.amount * parseFloat(val.price);
    });
    setPrice(ans);
  }

  const handleRemove=(id)=>
  {
const arr=cart.filter((val)=>val.id!==id);
setCart(arr);
  }
  useEffect(()=>
  {
    handlePrice();
  })
  
  return (
    
   <article className='body'>
  {
    cart.map((val) => (
      <div className="cart_box" key={val.id}>
        <div className="cart_img">
        <img src={val.linkImg[val.selectedColor]} alt={val.name} />
<p> {val.name}</p>
        </div>
        <div className='quantitychange'>
          <button onClick={()=>handleChange(val,+1)}>+</button>
          <button>{val.amount}</button>
          <button onClick={()=>handleChange(val,-1)}>-</button>
        </div>

        <div className='remove'>
          <span>{val.price}</span>
          <button onClick={()=>handleRemove(val.id)}>Remove</button>
        </div>
      </div>
    ))
  }
  <div className='total'>
    <span>Total Price of your cart</span>
    <span> Rs-{price}</span>
  </div>
</article>

      
    
  )
}

export default Cart
