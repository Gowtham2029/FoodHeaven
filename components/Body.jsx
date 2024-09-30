import { async } from "regenerator-runtime";
import { RestaurantList } from "../Contents.js";
import RestaurantCard from "./RestaurantCard.jsx";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer.jsx";
import {Link} from "react-router-dom";
import useOnline from "../util/useOnline.jsx"
import filterfun from "../util/Helper.jsx";
import Multislider from "./Multislider.jsx";

export default function Body() {

  
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // console.log("render");

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants(){
    let content =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
    let json = await content.json();
    //  console.log(json);
     setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //  console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
  }

  
  const online = useOnline();
  
  if(!online){
       return <h1>You are offline..!</h1>
  }



return (allRestaurants.length == 0)?<Shimmer/>:(
    // <h2>This is Body</h2>
    <>
     <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={()=>{
            const data = filterfun(searchInput, allRestaurants);

            setFilteredRestaurants(data);
            //  document.querySelector('.multislider').style.opacity = '0';
          }}
        >
          Search
        </button>
      </div>
      <div className="multislider">
        <Multislider />
      </div>

      <hr  style={{margin:"4rem 1rem"}}/>
       
      <h1 style={{margin:"4rem 2.5rem 1rem"}}>Restaurants with online food delivery</h1>
      <div className="Restaurant-list">
        {(filteredRestaurants.length === 0) ?<h1 style={{margin:"2rem", color:"green"}}>Sorry, No Restaurants were found</h1>:filteredRestaurants?.map((restaurant) => {
          return(
           <Link className="Linktag" to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} > <RestaurantCard {...restaurant.info} /></Link>
          );
        })}
      </div>
    </>
  ) 
};


