import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
// import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense, useState, useContext } from "react";
import userContext from "./util/userContext";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./util/store";
import Cart from "/components/Cart";


const Instamart = lazy(() => import("./components/Instamart"))

const About = lazy(() => import("./components/About"))



const AppLayout = () =>{

  const [user, setUser] = useState({
    name: "Gowtham Kishore",
    email: "Gowtham@gmail.com",
  })
    return (
    <Provider store={store}>
     <userContext.Provider value={{user}} setUser={setUser}>
      <Header/>
      <Outlet />
      <Footer/>
      </userContext.Provider>
    </Provider>
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/instamart",
        element:<Suspense fallback={<Shimmer />}><Instamart /></Suspense>
      },
      {
      path: "/about",
      element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      children: [
        {
           path: "profile",
           element: <Profile />
        }
      ]
      },
      {
      path: "/contact",
      element: <Contact/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
  ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


