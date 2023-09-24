import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between p-5 shadow-lg">
                <div><Logo></Logo></div>

                <div>  <ul className=" flex gap-10 w-5xl   mx-auto">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='favorites'>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to='Login'>Login</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;