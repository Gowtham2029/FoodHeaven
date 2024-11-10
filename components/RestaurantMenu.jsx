import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShimmerMenu from './ShimmerMenu';
import useRestaurantMenu from '../util/useRestaurantMenu';
import { useDispatch } from 'react-redux';
import { addItem } from '../util/cartSlice';


const RestaurantMenu = () => {

  const Params = useParams();
  const {id} = Params;
  // console.log(Params);

  const restaurant = useRestaurantMenu(id);
  const [menu, setMenu] = useState(null);
  const dispatch = useDispatch();

  
  useEffect(() =>{
    getRestaurantsinfo();
  }, []);

  async function getRestaurantsinfo(){

    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.501976&lng=80.639227&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json();
    
    // console.log(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    setMenu(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)

  }

  const addFoodItem = (item) => {
            dispatch(addItem(item));
  };
  

  return (!restaurant)? <ShimmerMenu /> :(
   <div className='menu'>
    <div>
      <h1>Restaurant id: {id}</h1>
      <br />
      <img className="RestaurantLogo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`} alt="KFC LOGO" />
      <br /><br />
      <h2> {restaurant.name}</h2>
      <h2> {restaurant.city}</h2>
      <h2> {restaurant.locality}</h2>
      <h3> {restaurant.areaName}</h3>
      <h3> {restaurant.avgRating + "⭐"}</h3>
      <h3> {restaurant.costForTwoMessage}</h3>

      
    </div>
    <div>
        <h1 style={{backgroundColor:"green",color:"yellow",textAlign:"center",borderRadius:"1rem"}}>Menu</h1>
       
        <ul>{(!menu)?<ShimmerMenu/>: menu?.map((item) => {
            return (<li style={{display:"flex"}} key={item.card.info.id}>
              <img className="menu-imgs" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}></img>
              
              <h2 className='menu-names'>{item.card.info.name}- <button style={{padding:"2px 5px"}} onClick={() => addFoodItem(item)}>Add</button></h2></li>
               
            )
             
        })}</ul>
        
        
    </div>
    </div>
   
  )
}

export default RestaurantMenu;