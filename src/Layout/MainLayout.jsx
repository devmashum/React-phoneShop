import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Home from "../Pages/Home/Home";


const MainLayout = () => {
    return (
        <div className="  mx-auto" >
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;