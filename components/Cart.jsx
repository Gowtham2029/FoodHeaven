import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../util/store";
import { clearCart, removeItem } from "../util/cartSlice";
import { useId } from "react";


const cart = () => {

    const id = useId();
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
         dispatch(clearCart());
    }

    const handleRemoveItem = (item) => {
      dispatch(removeItem(item))
    }
    
  return (
    <div>
      <div className="box-1">
      <h1 style={{borderBottom:"0.3rem solid grey"}}>cart items-{cartItems.length}</h1> 
      <button onClick={() => handleClearCart()} style={{ color:"yellow", backgroundColor:"green", borderRadius:"3px", padding:"0.5rem"}}>clear cart</button>
      </div>
    
      <h2>{cartItems.map(items => {
       
        return (
          
        <div className="cartItems" key={id}>
        <div className="box-2"><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.card.info.imageId}`}></img>
        </div>
        <div className="box-3">
          
        <h4>{items.card.info.name}</h4>
        <h4>price: {(Number.parseInt(items.card.info.price))/10}/-</h4>
        <h1>{console.log((items.card.info.defaultPrice))}</h1>
        <p style={{fontWeight:"2px"}}>{items.card.info.description}</p>
        <div className="btns"><button onClick={() => handleRemoveItem(items)} style={{padding:"0.3rem"}} >Remove item</button>
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
