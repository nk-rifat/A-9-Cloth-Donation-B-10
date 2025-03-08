import AboutSection from "../Components/layout-component/AboutSection";
import Banner from "../Components/layout-component/Banner";
import Footer from "../Components/layout-component/Footer";
import Navbar from "../Components/layout-component/Navbar";
import WhyThroughWinterHope from "../Components/layout-component/WhyThroughWinterHope";

const HomeLayOuts = () => {
   
    return (
        <div>
            <header>
                <nav className="w-11/12 mx-auto my-4">
                    <Navbar></Navbar>
                </nav>

                <section className="w-11/12 mx-auto">
                    <Banner></Banner>
                </section>
            </header>

            <main>
                <section>
                    <AboutSection></AboutSection>
                </section>
                <section>
                    <WhyThroughWinterHope></WhyThroughWinterHope>
                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOuts;