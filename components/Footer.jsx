import userContext from "../util/userContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div className="footer">
     
      <div className="legal">
        <div>
          <h2>
            <b>Legal</b>
          </h2>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
            <h2><b>We Deliver To: </b></h2>
            <ul>
                <li>Visakhapatnam</li>
                <li>Hyderabad</li>
                <li>Pune</li>
                <li>Mumbai</li>
                <li>Banglore</li>

            </ul>
        </div>
        <div>
            <h2><b>Social Media</b></h2>
            <ul>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </div>
       
      </div>
      <h2 style={{backgroundColor:"black",color:"white", textAlign:"center"}}>
      <div className="legal" style={{color:"white",paddingBottom:"3rem",display:"flex",alignItems:"last baseline",justifyContent:"center",fontSize:"1.5rem"}}> Developed By {user.name} | <span>&copy;</span> All Rights Reserved 😁 2023</div>

      </h2>
      
    </div>
  );
};
export default Footer;
