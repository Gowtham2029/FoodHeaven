import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../util/cartSlice";
import Store from "../util/Store";


const cart = () => {

    const [passingId, setPassingId] = useState(0);
    
    const cartItems = useSelector(Store => Store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
         dispatch(clearCart());
    }

    const handleRemoveItem = (item) => {
      // console.log(item.card.info.id);
      dispatch(removeItem(item.card.info.id));
    }
   
  return (
    
    <div>
      <div className="box-1">
      <h1 style={{borderBottom:"0.3rem solid grey"}}>cart items-{cartItems.length}</h1> 
      <button onClick={() => handleClearCart()} style={{ color:"yellow", backgroundColor:"green", borderRadius:"3px", padding:"0.5rem"}}>clear cart</button>
      </div>
    
      <h2>{cartItems.map(items => {
        return (
          
        <div className="cartItems" key={items.card.info.id}>
        <div className="box-2"><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.card.info.imageId}`}></img>
        </div>
        <div className="box-3">
          
        <h4>{items.card.info.name}</h4>
        {console.log(items.card.info)}
        <h4>price: {(items.card.info.defaultPrice && (Number.parseInt(items.card?.info?.defaultPrice))/10) || (items.card.info.price && (Number.parseInt(items.card?.info?.price))/10)}/-</h4>

        
        <p style={{fontWeight:"2px"}}>{items.card.info.description}</p>
        <div className="btns">
          <button 
          onClick={() => {
          handleRemoveItem(items)}} 
      
          style={{padding:"0.3rem"}} 
          >Remove item</button>
        <br /><button style={{backgroundColor:"green", color:"yellow", padding:"0.3rem"}}>Buy Now</button></div>
        </div>
        
        </div>
        
        )
      }
      )}</h2>

      <h3>{}</h3>
    </div>
  );
};

export default cart;
