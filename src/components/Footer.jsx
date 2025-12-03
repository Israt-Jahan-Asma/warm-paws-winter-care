import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className=" text-secondary py-12 mt-1 md:12">
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start md:items-center">

                {/* --- Logo Section --- */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                    <img
                        src="https://i.postimg.cc/xTv0mywj/Gemini-Generated-Image-e44qtie44qtie44q-1.png"
                        alt="Logo"
                        className="w-20 h-20 object-contain"
                    />
                    <p className="text-sm text-accent max-w-xs">
                        Your trusted partner in pet care. Providing comfort, care, and compassion for your furry friends. 🐾
                    </p>
                </div>

                {/* --- Quick Links Section --- */}
                <nav className="text-accent text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold text-accent mb-3">Quick Links</h6>

                    <NavLink to="/" className="link link-hover block mb-1">Home</NavLink>
                    <NavLink to="/about-us" className="link link-hover block mb-1">About Us</NavLink>
                    <NavLink to="/contact-us" className="link link-hover block mb-1">Contact Us</NavLink>
                    <NavLink to="/login" className="link link-hover block mb-1">Login</NavLink>
                    <NavLink to="/register" className="link link-hover block mb-1">Register</NavLink>
                </nav>

                {/* --- Services Section --- */}
                <nav className="text-accent text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold text-accent mb-3">Services</h6>

                    <a className="link link-hover block mb-1">Pet Sitting</a>
                    <a className="link link-hover block mb-1">Pet Grooming</a>
                    <a className="link link-hover block mb-1">Training</a>
                    <a className="link link-hover block mb-1">Medical Care</a>
                </nav>

                {/* --- Social Media Section --- */}
                <nav className="text-accent flex flex-col items-center justify-between md:items-start">
                    <h6 className="footer-title text-lg font-semibold text-accent mb-3">Follow Us</h6>
                    <div className="flex gap-5">

                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current text-accent "
                            >
                                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C13 5.378 13.192 5 14.115 5H17V0h-3.808C9.596 0 8 1.583 8 4.615V8z"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current text-accent "
                            >
                                <path d="M19 0H5C2 0 0 2 0 5v14c0 3 2 5 5 5h14c3 0 5-2 5-5V5c0-3-2-5-5-5zM7 20H4V9h3v11zM5.5 7C4 7 3 5.9 3 4.5S4 2 5.5 2 8 3.1 8 4.5 7 7 5.5 7zm14.5 13h-3v-6c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1 1v6.1h-3s.1-10 0-11h3v1.6c.6-.9 1.6-2.1 3.9-2.1 2.8 0 4 1.8 4 5v6.4z" />
                            </svg>
                        </a>

                    </div>
                </nav>
            </div>

            {/* --- Bottom Line --- */}
            <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-accent ">
                © {new Date().getFullYear()} PetCare Co. | All Rights Reserved by PetCare.
            </div>
        </footer>
    );
};

export default Footer;
