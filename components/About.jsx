import { Outlet } from "react-router-dom";
import foodItems from "./About_Images/food_items.png";
import CarouselAbout from "./CarouselAbout";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const About = () => {
  return (
    <div style={{ margin: "2.5rem" }}>
      <Outlet />
      <h1
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          textDecoration: "underline green 0.25rem",
          textUnderlinePosition: "under",
        }}
      >
        About Us
      </h1>
      <div
        id="about_page"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          className="description"
          style={{ width: "30%", textWrap: "balance", marginTop: "2.5rem" }}
        >
          <h1>
            Start Your BreakFast...
            <span> End with Your Dinner..!</span>
          </h1>
          <p style={{ marginTop: "0.8rem" }}>
            <b>
              
              <h3 style={{ marginBottom: "0.2rem" }}>
                We are your go-to destination for convenient and delicious
                dining.
              </h3>
            </b>
           
            Our user-friendly app connects you with a variety of local
            restaurants, allowing you to browse enticing menus and place orders
            with just a few taps. Whether you're craving comfort food, exploring
            new cuisines, or looking for healthy options, we've got you covered.
           
          </p>
        </div>
        <div className="image">
          <img
            style={{ height: "22rem", width: "18rem", borderRadius: "1rem", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
            src={foodItems}
            alt="food_items"
          />
        </div>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center" }}>
          <span
            style={{
              textDecoration: "underline green 0.25rem",
              textUnderlinePosition: "under",
            }}
          >
            Our Place
          </span>
        </h1>
        <h2
          style={{
            textAlign: "center",
            marginTop: "2rem",
            textWrap: "balance",
            lineHeight:"2rem"
          }}
        >
          Savor the flavors of our place! Order now for a culinary journey that
          delights your taste buds. Exceptional dishes, swift delivery – your
          gastronomic satisfaction, our priority. Bon appétit!
        </h2>
      </div>
        <CarouselAbout />
    </div>
  );
};

export default About;
