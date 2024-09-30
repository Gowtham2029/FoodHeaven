import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../util/userContext";
import { useSelector } from "react-redux";
import store from "../util/store";

const styleObj = {
  color: "green",
  padding: "20px",
  fontSize: "40px",
};

const Title = () => (
  <div className="title">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNbSR7-TlRbAqs99v1KolKB51NxAL_0u_EzZNIro&s"
      alt="Logo"
      id="img"
    />
    <h1 style={styleObj}> FooD HeaveN </h1>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header" style={{backgroundColor:" rgb(225, 229, 226)"}}>
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link className="Linktag" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Linktag" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Linktag" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="Linktag" to="/instamart">
              Instamart
            </Link>
          </li>
          <li>
            <Link className="Linktag" to="/cart">
              Cart-
              <b
                style={{
                  backgroundColor: "green",
                  color: "yellow",
                  display: "inline-block",
                  padding: "0 0.5rem",
                  borderRadius: "1rem",
                }}
              >
                {cartItems.length}
              </b>
            </Link>
          </li>

          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} style={{padding:"0.3rem"}}>{user.name} </button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)} style={{padding:"0.3rem"}}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
