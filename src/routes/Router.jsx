import { createBrowserRouter } from "react-router-dom";
import HomeLayOuts from "../layouts/HomeLayOuts";
import Error from "../Components/layout-component/Error";
import Campaigns from "../layouts/Campaigns";
import DonationDetails from "../Pages/DonationDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Components/layout-component/Login";
import Register from "../Components/layout-component/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ProfileUpdate from "../Components/layout-component/ProfileUpdate";
import HowToHelp from "../Components/layout-component/HowToHelp";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOuts></HomeLayOuts>,
        errorElement: <Error></Error>
    },
    {
        path: 'campaigns',
        element: <Campaigns></Campaigns>,
        loader: () => fetch('/campaigns.json'),
    },
    {
        path: '/campaigns/:id',
        element: <PrivateRoute>
            <DonationDetails></DonationDetails>
        </PrivateRoute>,
        loader: () => fetch('/campaigns.json')
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>
    },
    {
        path: '/updateProfile',
        element: <ProfileUpdate></ProfileUpdate>
    },
    {
        path: '/help',
        element: <HowToHelp></HowToHelp>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;