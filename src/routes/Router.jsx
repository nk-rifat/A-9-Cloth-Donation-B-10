import { createBrowserRouter } from "react-router-dom";
import HomeLayOuts from "../layouts/HomeLayOuts";
import Error from "../Components/layout-component/Error";
import Campaigns from "../layouts/Campaigns";
import DonationDetails from "../Pages/DonationDetails";

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
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/campaigns.json')
    }
])

export default Router;