import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
    const navigate = useNavigate();

    const {updateUserProfile} = useContext(AuthContext);

    const handleUpdateInfo = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUserProfile({displayName: name, photoURL: photo})
        .then(() => {
            navigate('/dashboard');
        })

    }
    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl p-8">
                    <h2 className="text-2xl text-center mt-6 font-bold">Update Your Information</h2>
                    <form onSubmit={handleUpdateInfo} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type='text' placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral w-full">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ProfileUpdate;