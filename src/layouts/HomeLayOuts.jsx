import Footer from "../Components/layout-component/Footer";
import Navbar from "../Components/layout-component/Navbar";

const HomeLayOuts = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto my-4">
                <Navbar></Navbar>
            </nav>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOuts;