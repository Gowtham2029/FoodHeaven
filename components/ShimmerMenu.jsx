import React from 'react'

export const ShimmerMenu = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
    <div className="shimmer_menu1"></div>
    <div>
       {Array(10).fill("").map((item, idx) =><div key={idx} className='shimmer_menu'></div>)}
    </div>
    </div>
  )
}

export default ShimmerMenu;