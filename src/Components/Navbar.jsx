import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState([false])

    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className={`btn btn-ghost  lg:hidden`}>
                            {
                                open === true ? <IoClose className="h-5 w-5" /> : <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            }

                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu-sm dropdown-content ${open ? '' : 'hidden'}    mt-3  p-2 rounded-[5px]`}>
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <Link to="./Coffee">Coffee</Link>
                            </li>
                            <li><Link to="./Dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <a href="./" className="btn btn-ghost text-3xl">Coffee-House</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/Coffee">Coffee</Link>
                        </li>
                        <li><Link to="/Dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                   
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;