import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Components/layout-component/Navbar";
import Footer from "../Components/layout-component/Footer";

const DashboardLayout = () => {
    const { user} = useContext(AuthContext);

    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-14">
                <h1 className="text-2xl font-bold text-center">Welcome, {user?.displayName}!</h1>
                <div className="flex flex-col items-center mt-6">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-gray-300"
                    />
                    <p className="text-lg mt-4">Name: {user?.displayName}</p>
                    <p className="text-lg">Email: {user?.email}</p>
                    <Link to="/updateProfile">
                        <button className="btn btn-primary mt-4">Update Profile</button>
                    </Link>
                </div>
            </div>
            <footer className="mt-60">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DashboardLayout;