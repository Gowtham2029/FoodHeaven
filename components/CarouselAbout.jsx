import Image1 from "./About_Images/Image1.jpg";
import Image2 from "./About_Images/Image2.jpg";
import Image3 from "./About_Images/Image3.jpg";
import Image4 from "./About_Images/Image4.jpg";
import { useState } from "react";
const Carousel = [
  {
    id : 1,
    img: `${Image1}`,
    heading: "Vibrancy in Ambiance",
    desc: "The vibrancy doesn't end with the decor; it extends to the menu. At Chiefee, culinary creativity takes center stage, with a diverse array of dishes that burst with flavors and innovative combinations. Each plate is a canvas, painted with the vibrant palette of fresh ingredients and bold culinary techniques.Whether you're savoring a signature cocktail at the bar or relishing a flavorful dish at your table, [Restaurant Name] offers a dynamic experience that engages not just your taste buds but all your senses. It's a place where the joy of dining meets the vivacity of a lively atmosphere, making every visit a journey into a world of delicious dynamism.",
  },
  {
    id : 2,
    img: `${Image2}`,
    heading: "Culinary Nirvana Achieved with Every Bite",
    desc: "Indulging in a burger at chefiee transcends the ordinary; it is an expedition into the extraordinary. As you sink your teeth into the meticulously crafted layers of goodness, a symphony of flavors unfolds, creating a culinary masterpiece that lingers on the palate and in the memory.The perfectly grilled patty, nestled between soft, toasted buns, is a testament to the chef's dedication to quality. Each bite is a harmonious blend of textures. The satisfying crunch of fresh vegetables, the juiciness of the savory meat, and the subtle interplay of condiments, all working together in gastronomic unity.with a diverse array of dishes that burst with flavors.",
  },
  {
    id : 3,
    img: `${Image3}`,
    heading: "A Symphony on a Plate",
    desc:    
    "A meticulously arranged plate in a restaurant is not just a gastronomic creation; it is a masterpiece of culinary artistry. Each dish is a canvas, painted with vibrant hues, textures, and flavors that come together in perfect harmony. The plate is a stage where ingredients take center spotlight, orchestrated by the chef's skillful hands. From the first glance to the last bite, the presentation captivates the senses. The vibrant colors evoke anticipation, while the arrangement of elements tells a story of balance and sophistication. each morsel is a portal to shared pleasure,of a decadent dessert.As you sink your teeth into the meticulously crafted layers of goodness" 
  },
  {
    id : 4,
    img: `${Image4}`,
    heading: "A Culinary Delight",               
    desc: "In the vibrant tapestry of social interactions, the act of savoring a meal transcends mere sustenance to become a celebration of culture, camaraderie, and exquisite flavors. Within the confines of a restaurant, people weave a symphony of joy as they indulge in culinary creations, transforming dining into a shared experience of delightThe clinking of cutlery, the murmur of conversations, and the symphony of laughter create an ambiance where food becomes a conduit for connection. Whether its the first bite of a tantalizing appetizer or the lingering taste of a decadent dessert, each morsel is a portal to shared pleasure."
    
 
  },
];

export default CarouselAbout = () => {

const obj1 = {backgroundColor: "grey"}
const obj2 = {backgroundColor: "grey"}

const [index, setIndex] = useState(3);
const [objs1, setObjs1] = useState(obj1.backgroundColor);
const [objs2, setObjs2] = useState(obj2.backgroundColor);

function handlePrev(index) {
    const length = index -1;
    return (length < 0) ? setIndex(3) : setIndex(length);
}

function handleNext(index) {
  const length = index + 1;
  return (length >= 4) ? setIndex(0) : setIndex(length);
}

return (
  <div style={{margin:"5rem"}}>
     <div style={{display:"flex", flexDirection:"row-reverse", marginRight:"12rem"}}>
      <button onClick={() => handleNext(index)} style={{borderRadius:"50%",padding:"0.7rem",margin:"0.5rem", color:"yellow", backgroundColor:"green"}}><h1>&rarr;</h1></button>
      <button onClick={() => handlePrev(index)} style={{borderRadius:"50%", padding:"0.7rem", margin:"0.5rem", color:"yellow", backgroundColor:"green"}}><h1>&larr;</h1></button>
     </div>
     <br />
     
     <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <img src={Carousel[index].img} style={{height:"20rem", width:"22rem", borderRadius:"1rem", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} alt="images" />
      <h3 style={{margin:"2rem", width:"50%", lineHeight:"1.5rem"}}><h2>{Carousel[index].heading}:</h2><br />{Carousel[index].desc}</h3>

     </div>
     <div style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
       


        <button className="spanning" style={{ height:"0.5rem",width:"0.5rem"}}>{(index === 0 )? (<h1 style={{backgroundColor:"black", height:"0.3rem"}}></h1>) : (<h1 style={{backgroundColor:"grey"}}></h1>)} </button>
       <button className="spanning" style={{ height:"0.5rem",width:"0.5rem"}}>{(index === 1 )? (<h1 style={{backgroundColor:"black", height:"0.3rem"}}></h1>) : (<h1 style={{backgroundColor:"grey"}}></h1>)}</button>
       <button className="spanning" style={{ height:"0.5rem",width:"0.5rem"}}>{(index === 2 )? (<h1 style={{backgroundColor:"black", height:"0.3rem"}}></h1>) : (<h1 style={{backgroundColor:"grey"}}></h1>)}</button>
       <button className="spanning" style={{height:"0.5rem",width:"0.5rem"}}>{(index === 3 )? (<h1 style={{backgroundColor:"black", height:"0.3rem"}}></h1>) : (<h1 style={{backgroundColor:"grey"}}></h1>)}</button> 
     </div>
     
  </div>

)

}
// {(index === 1 )? (<h1 style={{backgroundColor:"black"}}>1</h1>) : (<h1 style={{backgroundColor:"grey"}}></h1>)}






