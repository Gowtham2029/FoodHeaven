import { useState, useEffect } from 'react';

const useRestaurantMenu = (id) => {
  
    const [res, setRes] = useState("");

    async function getRestaurantsinfo(){
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.501976&lng=80.639227&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
      const json = await data.json();
      // console.log(json.data?.cards[2]?.card?.card?.info);
      setRes(json.data?.cards[2]?.card?.card?.info)
      // console.log(res)
      
    }
    
    useEffect(() =>{
        getRestaurantsinfo();
      }, []);

  return res;
}

export default useRestaurantMenu