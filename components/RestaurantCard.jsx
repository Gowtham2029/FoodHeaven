const RestaurantCard = (props) =>{
     
    return (
        <div className="cards" style={{position:"relative"}}>
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.cloudinaryImageId} alt="logo" />
         <div className="center-text">  <h2><b>{props.name}</b></h2>
            <h4 style={{margin:"1rem"}}>{props.cuisines.join(" , ")}</h4>
         
            <h4><span style={{backgroundColor:"green", color:"white", display:"inline-block", marginTop:"0rem", padding:"2px", borderRadius:"5px"}}>Rating-{props.avgRating + " ⭐"}</span></h4>
        </div>
        </div> 
        
        </div>
    )
}

export default RestaurantCard;