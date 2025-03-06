import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();

    const { setUser,user, userSignOut, signInWithGoogle } = useContext(AuthContext);

    const links = <>
        <li className="text-lg font-medium"><NavLink to='/'>Home</NavLink></li>
        <li className="text-lg font-medium"><NavLink to='/campaigns'>Campaigns</NavLink></li>
        <li className="text-lg font-medium"><NavLink to='/help'>Dashboard</NavLink></li>
        <li className="text-lg font-medium"><NavLink to='/dashboard'>How To Help</NavLink></li>
    </>;

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate('/');
        })
        .catch(error => {
            console.log(error.message)
        })
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <img className="h-12 w-12 rounded-xl" src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">WinterHope</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
                            <button onClick={userSignOut} className="btn">Log-out</button>
                        </div> 
                        :
                        <div className="flex gap-3">
                            <Link onClick={handleGoogleSignIn} to='/'  className="btn">Login With Google</Link>
                            <Link to='/auth/login' className="btn">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;