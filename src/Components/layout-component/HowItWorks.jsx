import React from "react";

const HowItWorks = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">How It Works</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Donating is simple! Follow these steps to help those in need during the winter season.
                </p>

                {/* Steps to Donate */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">📦 Step 1: Choose What to Donate</h3>
                        <p className="text-gray-600">Select winter essentials such as coats, blankets, gloves, and scarves.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">📍 Step 2: Find a Collection Point</h3>
                        <p className="text-gray-600">Locate the nearest drop-off location on our website.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">🤝 Step 3: Donate & Make an Impact</h3>
                        <p className="text-gray-600">Drop off your donation and help keep someone warm this winter.</p>
                    </div>
                </div>

                {/* Collection Points */}
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-blue-900 mb-4">Collection Points</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Drop off your donations at any of our verified collection points across the country.
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Dhaka - Gulshan Community Center</li>
                        <li>Chittagong - City Mall Drop-off</li>
                        <li>Rajshahi - Local NGO Office</li>
                        <li>Khulna - University Campus Collection Box</li>
                    </ul>
                </div>

                {/* Supported Divisions */}
                <div className="mt-12">
                    <h3 className="text-3xl font-semibold text-blue-900 mb-4">Supported Divisions</h3>
                    <p className="text-lg text-gray-700">
                        We currently support donations in the following divisions:
                    </p>
                    <div className="flex flex-wrap justify-center mt-4">
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 m-2 rounded-lg">Dhaka</span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 m-2 rounded-lg">Chittagong</span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 m-2 rounded-lg">Rajshahi</span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 m-2 rounded-lg">Khulna</span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 m-2 rounded-lg">Sylhet</span>
                      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
