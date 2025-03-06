import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/layout-component/Navbar";
import Footer from "../Components/layout-component/Footer";
const DonationDetails = () => {

    const campaigns = useLoaderData();
    const { id } = useParams();
    const clickId = parseInt(id);

    const matchId = campaigns.find(data => data.id === clickId);

    const { title, image, description, division, status, contact_info } = matchId;

    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 mx-auto mt-8 flex flex-col lg:flex-row gap-9 md:gap-6 sm:gap-4">
                <div className="card lg:w-1/2 bg-base-100 shadow-md rounded-lg">
                    <figure>
                        <img
                            src={image}
                            className="w-full h-96 object-cover p-4 rounded-3xl"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <p className="font-semibold text-gray-500 flex items-center">Division: {division}</p>
                        <p className="text-sm text-gray-500 flex items-center">Status: <span className="text-green-600 font-semibold">  {status} </span></p>
                        <p className="text-sm text-gray-500">Contact: <a href="mailto:rangpur@winterhope.org" className="text-blue-500 underline">{contact_info}</a></p>
                    </div>
                </div>

                {/* Donation Form */}
                <div className="  bg-white p-6 rounded-lg shadow-md lg:w-1/2 flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Donate Items</h2>
                    <form className="space-y-4 flex flex-col flex-grow">
                        <div>
                            <label className="block text-sm font-medium">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Item Type</label>
                            <select
                                name="itemType"
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select an item</option>
                                <option value="blanket">Blanket</option>
                                <option value="jacket">Jacket</option>
                                <option value="sweater">Sweater</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Additional Notes</label>
                            <textarea
                                name="notes"
                                className="textarea textarea-bordered w-full"
                                placeholder="Optional"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-auto">
                            Submit Donation
                        </button>
                    </form>
                </div>
            </div>
            <footer className="mt-16">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DonationDetails;