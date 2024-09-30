import { useState } from "react";
import Instamartpic from "./About_Images/Instamartpic.png";

const Section = (props) => {

  return (
    <>
    <div
      style={{
        display:"flex",
        justifyContent:"space-between",
        color: "black",
        borderRadius:"0.5rem",
        padding: "0rem 0.3rem 0.3rem",
        margin: "0.2rem",
        paddingTop:"0.5rem",
        width:"50vw",
        backgroundColor: " rgb(241, 245, 242)"
      }}
    >
      <h1>{props.title}</h1>

      {props.isVisible ? (
        <button style={{backgroundColor:"green", color:"yellow", padding:"0.2rem", margin:"0.5rem", borderRadius:"0.2rem"}} onClick={props.setIsVisible}>Hide</button>
      ) : (
        <button style={{backgroundColor:"green", color:"yellow", padding:"0.2rem", margin:"0.5rem", borderRadius:"0.2rem"}} onClick={props.setIsVisible}>Show</button>
      )}

    </div>
      <h4 style={{fontWeight:"100"}}> {props.isVisible && <p style={{lineHeight:"1.5rem"}}>{props.description}</p>}</h4>
      
    <br />
    </>

  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  
  return (
    <div className="Instamart_Section" style={{height:"100vh", width:"100vw"}}>
      <div className="instamart">
        <img src={Instamartpic} alt="" />
        
        <div className="sliding">
          <h1 style={{ textDecoration: "underline green 0.25rem",
      textUnderlinePosition: "under",}}>Instamart</h1>
          <div className="sides">
              <div className="side">
                   <h1>Rating</h1>
                   <h3> 4.0 ⭐⭐⭐⭐</h3>
              </div>
              <div className="side">
                   <h1>License Type</h1>
                   <h3><input type="radio" style={{marginRight: "2rem"}} checked/>Standard License</h3>
                   <h3><input type="radio" style={{marginRight: "1.3rem"}}/>Copyright License</h3>
                   <h3><input type="radio" style={{marginRight: "2.3rem"}}/>Public Domain </h3>
              </div>
              <div className="side">
                   <h1>Features</h1>
                   <h3>
                    <ul>
                      <li>Landing page</li>
                      <li>Responsive Design</li>
                      <li>Products management</li>
                      <li>Paypal</li>
                    </ul>
                   </h3>
              </div>
          </div>
        </div>
      </div>
    <section className="sections">
    <Section
        
        title={"About Instamart"}
        description={
          "Instamart is a revolutionary feature within our food ordering app that brings convenience to your fingertips. With Instamart, users can browse through a curated selection of essential grocery items and have them delivered right to their doorstep alongside their food orders. This seamless integration not only saves time but ensures that users have everything they need for a complete dining experience without the hassle of separate trips to the grocery store. From fresh produce to pantry staples, Instamart elevates the food ordering experience by providing a one-stop solution for all culinary needs. Enjoy the ease of ordering both meals and groceries effortlessly through our app, making every dining occasion a delightful and stress-free affair."
        }
        isVisible = {visibleSection === "about"}
        setIsVisible = {() =>{(visibleSection != "about")? setVisibleSection("about"): setVisibleSection("")} }
       
      />
      
      
      <Section
        title={"Team Instamart"}
        description={
          "Team Instamart, the heartbeat of our food ordering app, is a dedicated group of professionals committed to enhancing your culinary journey. With a passion for convenience and a keen understanding of your needs, Team Instamart meticulously curates a diverse range of grocery offerings, ensuring that every item meets our high standards of quality. From seasoned food experts to logistics wizards, our team collaborates seamlessly to bring you a hassle-free experience. Their collective effort is the driving force behind the success of Instamart, making it an indispensable feature that transforms your food ordering into a comprehensive and enjoyable endeavor. Meet the faces behind the scenes – Team Instamart, your culinary partners in convenience."
        }

        isVisible = {visibleSection === "team"}

        setIsVisible = {() => {(visibleSection!="team")?setVisibleSection("team"):setVisibleSection("")}}
      />
            
      <Section
        title={"Career"}
        description={
          "Embark on a fulfilling career with Instamart, the backbone of our innovative food ordering app. Join a dynamic team where creativity and innovation thrive, shaping the future of culinary convenience. As a part of Career Instamart, you'll have the opportunity to contribute to the seamless integration of food and grocery services, making a meaningful impact on the way people experience dining. Whether you're a tech enthusiast, marketing maven, or logistics expert, Instamart offers diverse roles that challenge and inspire. Grow professionally in a supportive environment that values collaboration, continuous learning, and a shared passion for revolutionizing the way we approach food and grocery services. Elevate your career with us at Career Instamart, where every day brings new opportunities to make a difference in the world of culinary convenience."
        }

        isVisible = {visibleSection === "career"}
        setIsVisible = {() => {(visibleSection!="career")? setVisibleSection("career"): setVisibleSection("")}}

      />
      </section>
    </div>
  );
};

export default Instamart;
