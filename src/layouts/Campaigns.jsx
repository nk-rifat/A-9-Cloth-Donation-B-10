import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/layout-component/Navbar";
import ShowCampaigns from "../Pages/ShowCampaigns";
import Footer from "../Components/layout-component/Footer";

const Campaigns = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="w-11/12 mx-auto my-4">
                <Navbar></Navbar>
                <h1 className="text-center font-bold text-4xl text-green-700 mt-8">Our Donation Campaigns</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    {
                        data.map(campaign => <ShowCampaigns key={campaign.id} campaign={campaign}></ShowCampaigns>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Campaigns;