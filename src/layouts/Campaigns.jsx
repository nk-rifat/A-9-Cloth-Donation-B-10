import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/layout-component/Navbar";
import ShowCampaigns from "../Pages/ShowCampaigns";

const Campaigns = () => {
    const campaigns = useLoaderData();
    return (
        <div className="w-11/12 mx-auto my-4">
            <Navbar></Navbar>
            <div>
                {
                    campaigns.map(campaign => <ShowCampaigns key={campaign.id} campaign={campaign}></ShowCampaigns>)
                }
            </div>
        </div>
    );
};

export default Campaigns;