import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            </div>
            <br />
            <div className="min-h-[calc(100vh-232px)] max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;