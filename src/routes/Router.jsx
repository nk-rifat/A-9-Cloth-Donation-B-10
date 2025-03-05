import { createBrowserRouter } from "react-router-dom";
import HomeLayOuts from "../layouts/HomeLayOuts";
import Error from "../Components/layout-component/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOuts></HomeLayOuts>,
        errorElement: <Error></Error>
    }
])

export default Router;