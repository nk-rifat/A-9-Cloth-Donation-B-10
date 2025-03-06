import { Link } from "react-router-dom";

const ShowCampaigns = ({ campaign }) => {
    const { id, title, image, description, division } = campaign;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={title} className="w-full h-64 object-cover p-4 rounded-3xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className="font-semibold text-gray-500">Division: {division}</p> 
                <div className="card-actions justify-end">
                    <Link to={`/campaigns/${id}`} className="btn btn-primary hover:bg-blue-500">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowCampaigns;