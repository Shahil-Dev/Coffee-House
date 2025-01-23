import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Coffee from "../Pages/Coffee";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../Components/CoffeeCard";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('../categories.json'),
            children:[
              {
                path:"/card/:boom",
                element:<CoffeeCard></CoffeeCard>,
                loader:()=> fetch('../coffees.json'),
              }
            ]

        },
        {
            path:"/Coffee",
            element:<Coffee></Coffee>
        },
        {
            path:"/Dashboard",
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default router