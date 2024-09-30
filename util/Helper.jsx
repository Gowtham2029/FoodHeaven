import React from 'react';

export default function filterfun(searchInput, allRestaurants){
    const filterData = allRestaurants.filter((item) => item?.info?.name?.toLowerCase().includes(searchInput?.toLowerCase())) 
    return filterData; 
   } 