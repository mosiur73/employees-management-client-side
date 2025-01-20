

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
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import EmployDetails from "../Pages/DashBoard/ManageUser/EmployDetails";
import Payroll from "../Pages/DashBoard/Payroll/Payroll";
import ErrorPage from "../ErrorPage/ErrorPage";
import Progress from "../Pages/DashBoard/Progress/Progress";
import AllEmployList from "../Pages/DashBoard/AllEmployList/AllEmployList";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import Message from "../Pages/DashBoard/Message/Message";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
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
        },
        {
          path:"manageUser",
          element:<ManageUser></ManageUser>
        },
        {
          path:"details/:id",
          element:<EmployDetails></EmployDetails>,
          loader: ({params}) => fetch(`https://employee-management-server-side.vercel.app/users/${params.id}`)
        },
        {
          path:"payroll",
          element:<Payroll></Payroll>
        },
        {
          path:"progress",
          element:<Progress></Progress>
        },
        {
          path:"allEmployee",
          element:<AllEmployList></AllEmployList>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:"contact",
          element:<Message></Message>
        },
       

      ]
    }

  ]);

