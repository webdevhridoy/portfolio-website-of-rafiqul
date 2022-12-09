import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import DashaboardLayout from "../component/pages/Dashboard/Layout/DashaboardLayout";
import Dashboard from "../component/pages/Dashboard/Layout/Dashboard";
import AddCategory from "../component/pages/Dashboard/Portfolio/AddCategory";
import AddPortfolio from "../component/pages/Dashboard/Portfolio/AddPortfolio";
import MyPortfolio from "../component/pages/Dashboard/Portfolio/MyPortfolio";
import Home from "../component/pages/Home/Home";
import DisplayLayout from "../layout/DisplayLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <DisplayLayout></DisplayLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <DashaboardLayout></DashaboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/add-category',
                        element: <AddCategory></AddCategory>
                    },
                    {
                        path: '/dashboard/add-portfolio',
                        element: <AddPortfolio></AddPortfolio>
                    },
                    {
                        path: '/dashboard/my-portfolio',
                        element: <MyPortfolio></MyPortfolio>
                    }
                ]
            }
        ]
    }
]);