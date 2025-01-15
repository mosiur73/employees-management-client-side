

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import WorkSheet from "../Pages/Home/Home/WorkSheet/WorkSheet";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/contact",
          element:<PrivateRoute><Contact></Contact></PrivateRoute>
        }
      ]
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"worksheet",
          element:<WorkSheet></WorkSheet>
        }
      ]
    }

  ]);

