const AboutSection = () => {
    return (
        <section className=" py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">About WinterHope</h2>
                <p className="text-lg text-gray-700 mb-8">
                    At <span className="font-semibold text-blue-800">WinterHope</span>, we believe that no one should suffer from the cold. Our mission is to provide warm clothing to individuals and families in need during harsh winter months.
                    By connecting generous donors with those in need, we strive to make every winter a little warmer for everyone.
                </p>

                <h3 className="text-2xl font-semibold text-blue-800 mb-4">How You Can Contribute</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-blue-700 mb-2">🧥 Donate Clothes</h4>
                        <p className="text-gray-600">Contribute coats, scarves, gloves, and other winter clothing at our collection points.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-blue-700 mb-2">💰 Monetary Donations</h4>
                        <p className="text-gray-600">Support our cause financially to help us purchase new winter essentials for underprivileged communities.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-blue-700 mb-2">🙌 Volunteer</h4>
                        <p className="text-gray-600">Join our team to help collect, sort, and distribute donations to those who need them most.</p>
                    </div>
                </div>

                <p className="text-lg text-gray-700 mt-8">
                    Every small effort counts! Together, we can make a difference and bring <span className="font-semibold text-blue-800">hope</span> this winter.
                </p>
            </div>
        </section>


    );
};

export default AboutSection;