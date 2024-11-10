import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SliderShimmer from "./SliderShimmer";
import { Link } from "react-router-dom";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Multislider = () => {

    const [slider, setSlider] = useState();

    useEffect(() => {
        imgSlider();
    }, [])

    async function imgSlider() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        // console.log(json.data);
        setSlider(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    return (
        <div>
      <h1 style={{margin:"0 0 2rem 0"}}>What's in your mind ?</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
       {(!slider)? <SliderShimmer /> : slider?.map((slice) => {
         let image = slice.info.cloudinaryImageId;
         return (
            <div key={slice.info.id}>
             <Link className="slider" to={"/restaurant/"+slice.info.id}  >
              <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`} alt="slider" />
             </Link> 
            </div>
         )
         })}

      </Carousel>
        </div>
    )

    
}

export default Multislider;