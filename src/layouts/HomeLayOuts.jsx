import { useEffect } from "react";
import AboutSection from "../Components/layout-component/AboutSection";
import Banner from "../Components/layout-component/Banner";
import Footer from "../Components/layout-component/Footer";
import Navbar from "../Components/layout-component/Navbar";
import WhyThroughWinterHope from "../Components/layout-component/WhyThroughWinterHope";
import Aos from "aos";
import 'aos/dist/aos.css'

const HomeLayOuts = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[]);

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
                <section data-aos = 'fade-right'>
                    <AboutSection></AboutSection>
                </section>
                <section data-aos = 'fade-left'>
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