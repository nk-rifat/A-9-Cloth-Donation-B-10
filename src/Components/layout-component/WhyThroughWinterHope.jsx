import { FaHandsHelping, FaTshirt, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const WhyThroughWinterHope = () => {
    const reasons = [
        {
            id: 1,
            icon: <FaHandsHelping className="text-4xl text-blue-800" />,
            title: "Direct Impact",
            description:
                "Your donations reach the most vulnerable communities directly, ensuring warmth for those in need.",
        },
        {
            id: 2,
            icon: <FaTshirt className="text-4xl text-blue-800" />,
            title: "Quality Assurance",
            description:
                "We ensure that all donated clothes are in good condition and properly distributed.",
        },
        {
            id: 3,
            icon: <FaUsers className="text-4xl text-blue-800" />,
            title: "Community Driven",
            description:
                "We work with local communities and volunteers to maximize the impact of your donations.",
        },
        {
            id: 4,
            icon: <FaShieldAlt className="text-4xl text-blue-800" />,
            title: "Transparency & Trust",
            description:
                "We maintain full transparency in our donation process, so you know exactly where your contributions go.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Donate Through WinterHope?</h2>
                <p className="text-lg text-gray-700 mb-8">
                    WinterHope ensures that your donations create real impact. Here’s why you should choose us.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {reasons.map((reason) => (
                        <div key={reason.id} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                            <div>{reason.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-800">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to='/campaigns' className="btn btn-primary mt-8">Donate Now</Link>
            </div>
        </section>
    );
};

export default WhyThroughWinterHope;