import React from 'react';
import { NavLink } from 'react-router';
import toast from 'react-hot-toast';
import userIcon from '/icons8-user-50.png';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import { ClipLoader } from 'react-spinners';
import  Sticky from 'react-stickynode';

const Navbar = () => {
    const { user, logOut, loading } = use(AuthContext);
    const { displayName, photoURL } = user || {};

    const handleLogout = () => {
        logOut()
            .then(() => toast.success('Logged out successfully'))
            .catch((error) => toast.error(error.message || 'Logout failed'));
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className="hover:text-secondary">Home</NavLink></li>
            <li><NavLink to="/all-service" className="hover:text-secondary">All Service</NavLink></li>
            {/* <li>
                <button
                    onClick={() => {
                        const section = document.getElementById('services-section');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }}
                    className="hover:text-secondary transition-all"
                >
                    Services
                </button>
            </li> */}
            <li><NavLink to="/profile" className="hover:text-secondary">My Profile</NavLink></li>
            <li><NavLink to="/about-us" className="hover:text-secondary"> About Us</NavLink></li>
            <li><NavLink to="/contact-us" className="hover:text-secondary">Contact Us</NavLink></li>
        </>
    );
    const UserDisplay = () => {
        if (loading) {
           
            return (
                <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-secondary bg-base-300">
                    <ClipLoader size={20} color="#D86C45" />
                </div>
            );
        } else if (user) {
           
            return (
                <img
                    className="w-10 h-10 object-cover border-2 border-secondary rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
                   
                    src={photoURL || userIcon}
                    alt={displayName || 'User Avatar'}
                />
            );
        } else {
            
            return (
                <img
                    className="w-10 h-10 object-cover border-2 border-secondary rounded-full cursor-pointer hover:scale-105 transition-transform duration-200"
                    src={userIcon}
                    alt="Default User"
                />
            );
        }
    };
    return (
        <Sticky enabled={true} top={0} innerZ={50}> 
            <div className=' bg-white shadow'>

        
        <div className="navbar  md:w-10/12 mx-auto py-3 px-5 md:px-0  ">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-52 p-2 z-[50]"
                    >
                        {navLinks}
                    </ul>
                </div>

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                        src="https://i.postimg.cc/xTv0mywj/Gemini-Generated-Image-e44qtie44qtie44q-1.png"
                        alt="Logo"
                        className="w-16 sm:w-20 object-contain"
                    />
                    <span className="text-xl font-bold hidden sm:block text-secondary">
                        WarmPaws
                    </span>
                </NavLink>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-base">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-3">
                
                    <div className="relative group">
                       
                        <UserDisplay />

                        {displayName && (
                            <span className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 bg-secondary text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {displayName} 
                            </span>
                        )}
                    </div>

                   
                    {user ? 
                    
                        (<button onClick={handleLogout} className="btn btn-sm md:btn-md bg-secondary text-white hover:bg-secondary/80 rounded-lg" > Logout </button>) 
                    : 
                    (<NavLink to="/login" className="btn btn-sm md:btn-md bg-secondary text-white hover:bg-secondary/80 rounded-lg" > Login </NavLink>)}
                </div>
            
        </div>
            </div>
        </Sticky>
    );
};

export default Navbar;
