import React , { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";  
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


//lazy loading -> like it will not load the content directlhy on accesing the page or site it will load only when its clicked or required
// also known as on demand loading

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

  const [userName , setUserName] = useState()

  useEffect(() => {
    const data = {
      name : "Dev Chauhan"
    }
    setUserName(data.name)
  }, [])

  return (
    <UserContext.Provider value = {{loggedInUser : userName , setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      }
      ,
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>
      },
      {
      path: "/grocery",
      element: <Suspense fallback = {<Shimmer/>}> <Grocery/></Suspense>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
