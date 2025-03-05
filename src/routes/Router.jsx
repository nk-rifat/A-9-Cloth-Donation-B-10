import { createBrowserRouter } from "react-router-dom";
import HomeLayOuts from "../layouts/HomeLayOuts";
import Error from "../Components/layout-component/Error";
import Campaigns from "../layouts/Campaigns";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOuts></HomeLayOuts>,
        errorElement: <Error></Error>
    },
    {
        path: 'campaigns',
        element: <Campaigns></Campaigns>,
        loader: () => fetch('campaigns.json')
    }
])

export default Router;